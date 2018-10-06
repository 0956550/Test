using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LennyLogin.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public static List<User> Users = new List<User>() {
            new User("lennie", "a"),
            new User("mini", "a")
        };


        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)] 
            });
        }


        [HttpGet("test")]
        public int getal()
        {
            return new Random().Next(100);
        }

        [HttpGet("login")]
        public User Login(string username,  string password) {
            return Users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }

        [HttpPost("create")]
        public User Create([FromBody] User user) {
            Users.Add(user);
            return user;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }

    public class User {
        public string Username;
        public string Password;

        public User(string username, string password) {
            Username = username;
            Password = password;
        }
    }
}

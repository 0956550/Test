import React, { Component } from 'react';

class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            getal: -1,
            isLoading: true
        };

        fetch('api/SampleData/test')
            .then(response => response.json())
            .then(response => this.setState({
                getal: response,
                isLoading: false
            }));
    }

    login() {
        fetch(`api/SampleData/login?username=${document.querySelector('.Gerbuikersnaam').value}&password=${document.querySelector('.Wachtwoord').value}`)
        .then(response => {
            if (response.status === 200) {
                response.json().then(user => alert('welkom ' + user.username));
            } else if (response.status === 204) {
                alert('geldige credentials aub');
            }
        });
    }

    create() {
        fetch(`api/SampleData/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                Username: document.querySelector('.Gerbuikersnaam').value,
                Password: document.querySelector('.Wachtwoord').value
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            alert('user created');
        });
    }



    render()
    {
        let getalText = 'aan het laden';

        if (!this.state.isLoading) {
            getalText = this.state.getal.toString();
        }
        
        return(
            <div>
                <h1>Login</h1>
                <input type='text' id="username" className="Gerbuikersnaam"></input><br/>
                <input type='text' className="Wachtwoord"></input>
                <button className="Login" onClick={this.login}>Login</button>
                <button className="Login" onClick={this.create}>Create</button>
                <h1>{getalText}</h1>
            </div>
        );
    }
}

export default Login;
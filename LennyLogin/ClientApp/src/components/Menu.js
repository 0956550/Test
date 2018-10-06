import React from 'react'
import Home from './img/HomeIcon.png';
import Winkelwagen from './img/WinkelwagenIcon.png';
import Login from './img/LoginIcon.png';
import './Menu.css'
import {Link} from 'react-router-dom';

class Menu extends React.Component
{
    render()
    {
        return(
            <div>
                <Link to={'/'} exact>
                    <button className="Home"><img src={Home} alt = "Home" width="50px" height="50px"/><p>Home</p></button>
                </Link>
                <Link to={'/Winkelwagen'}>
                <button className="Winkelwagen"><img src={Winkelwagen} alt = "Winkelwagen" width="75px" height="75px"/><p>Winkelwagen</p></button>
                </Link>
                <Link to={'/Login'}>
                <button className="Login"><img src={Login} alt = "Login" width="75px" height="75px"/><p>Login</p></button>
                </Link>
            </div>
        );
    }
}

export default Menu;
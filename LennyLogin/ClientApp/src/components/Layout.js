import React, { Component } from 'react';
import Header from './img/Banner.png';
import Menu from './Menu';
import './Layout.css';
import {Route} from 'react-router'
import Home from './Home';
import Winkelwagen from './Winkelwagen';
import Login from './Login';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <img src={Header} className="Layout-logo" alt="logo" />
        </header>

        <content className="Layout-content">
          <Route exact path="/" component={Home} />
          <Route path="/Winkelwagen" component={Winkelwagen} />
          <Route path="/Login" component={Login} />
        </content>

        <aside className="Layout-sidebar">
          <Menu />
        </aside>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Searchbar from './Searchbar';

class Home extends Component
{
    render()
    {
        return(
            <div>
                <Searchbar></Searchbar>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
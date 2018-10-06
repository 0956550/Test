import React from 'react'
import "./Searchbar.css"

class Searchbar extends React.Component
{
    render()
    {
        return(
            <div>
                <input type='text' className="Searchbar"></input>
                <button className="SearchButton">Zoek</button>
            </div>
        );
    }
}

export default Searchbar;
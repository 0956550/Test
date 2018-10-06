import React from 'react';
import './Categorie.css'
import FreeWeight from './img/FreeWeightIcon.png';

class Categorie extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="Container">
                    <img src={FreeWeight} alt="Free Weight" className="Image"/>
                    <div className="Overlay">Free Weight</div>
                </div>
            </div>
        );
    }
}

export default Categorie;
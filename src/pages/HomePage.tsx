import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

    return (
        <div className='homepage'>
            <h2 >Hem</h2>
            <p>🎂 Välkommen till Crumbs by Emelie!</p>
            <p>🍰 Ta gärna en titt i galleriet för att se exemepel på tidigare beställningar</p>
            <p>🧁 Beställningar eller kontakt vid andra ärenden görs på 
            <Link to="/kontakt"> Kontakt</Link>
            -sidan
            </p> 
        </div>
    );
};

export default HomePage;

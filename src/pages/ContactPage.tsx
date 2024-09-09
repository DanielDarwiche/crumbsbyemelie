import React from 'react';
import profilbild from '../photos/profil.jpg'; 

const ContactPage: React.FC = () => {
    return (
        <div className='contactpage'>
            <img src={profilbild} alt="Profilbild" id='profilbild'/>
            <div id='profildata'>
            <h2>Kontakt</h2>
            <p>Kontakt sker via Instagram.</p>
            <p><a href="https://www.instagram.com/crumbsbyemelie/">Länk till Instagram</a></p>
            </div>
            </div>
    );
};

export default ContactPage;


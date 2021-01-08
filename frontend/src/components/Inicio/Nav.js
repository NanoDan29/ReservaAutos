import React from 'react';



const Header = () => {
    return (
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/login">login</Link></li>
        </ul>
    );
}

export default Header;
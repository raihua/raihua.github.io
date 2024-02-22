import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Peter Trinhs's Portfolio</h1>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </nav>
        </header>
    )
}

export default Header;
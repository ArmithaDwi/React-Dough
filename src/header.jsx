import React from 'react';
import logo from './assets/dough2.png';



const Header = ({ onNavigateHome }) => (
    
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="Logo" />
            <h2>Dough</h2>
        </div>
        <nav className='nav'>
            <a href='#' onClick={onNavigateHome}>Home</a>
            <a href='/products'>Products</a>
            <a href='/cart'>Cart</a>
            <a href='/login'>Login</a>
        </nav>
    </header>
);

export default Header;
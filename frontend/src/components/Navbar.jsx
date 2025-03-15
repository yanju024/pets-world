import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

/**
 * 
 */
const Navbar = () => {
    return <div className='navbar'>
        <ul>
            <li > <Link to={'/'}> Home </Link></li>
            <li > <Link to={'/about'}> About </Link> </li>
            <li > <Link to={'/pets'}>  Pets </Link> </li>
            <li > <Link to={'/contact'}> Contact Us </Link> </li>
        </ul>
        <SearchBar />
        
    </div>;
}



export default Navbar;
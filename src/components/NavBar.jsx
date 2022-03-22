import React from 'react'
import {NavLink} from 'react-router-dom'
// import logo from " "


const NavBar = () => {
    
    return (
        
        <nav className = 'navbar'>
            {/* <a href="https://www.studioghibli.com.au/" target = '_blank'><img src= {logo} alt="Image Loading" className = 'nav-image'></img></a> */}
            <ul className = 'nav-links'>
            <li className = 'nav-item'>
            <NavLink to = '/' exact activeClassName="active" className = 'link'>HomePage</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/films' className = 'link' activeClassName="active">AllFilms</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/people' activeClassName="active" className = 'link'>People</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/locations' className = 'link' activeClassName="active">Locations</NavLink>
            </li>
            </ul>


        </nav>
     
    )
}

export default NavBar
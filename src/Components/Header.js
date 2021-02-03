import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
    return (
    <header>       
        <nav className="nav-wrapper">
            <NavLink to="/" className="button">
                Home
            </NavLink>
            <NavLink exact to="/players" className="button">
                Free Agents
            </NavLink>
            <NavLink to="/users" className="button">
                Users
            </NavLink>
        </nav>
    </header>
    )
}




export default Header;
import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
    return (
    <header className="navbar">       
        <nav className="nav-wrapper">
            <NavLink to="/" className="button">
                Home
            </NavLink>
            <NavLink exact to="/players" className="button">
                Free Agents
            </NavLink>
            <NavLink to="/teams" className="button">
                Pro GM Teams
            </NavLink>
            <NavLink to="/official_rules" className="button">
                Official Rules
            </NavLink>
        </nav>
    </header>
    )
}

export default Header;
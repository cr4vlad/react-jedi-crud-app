import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    let location = useLocation();
    
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <div className="container">
                <Link className="navbar-brand" to="/">JEDI</Link>

                <div className="navbar-nav mr-auto">
                    <Link className={`nav-item nav-link ${(location.pathname === "/") ? "active" : ""}`} to="/">People <span className="sr-only">(current)</span></Link>
                    <Link className={`nav-item nav-link ${(location.pathname === "/planets") ? "active" : ""}`} to="/planets">Planets</Link>
                    <Link className={`nav-item nav-link ${(location.pathname === "/starships") ? "active" : ""}`} to="/starships">Starships</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            <i className="bi bi-camera-reels ms-5"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>   
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/likelist">
              Like
            </NavLink>
            <NavLink className="nav-item nav-link" to="/discardlist">
              Discard
            </NavLink>
          </div>
        </div>
      </nav>
     );
}
 
export default NavBar;
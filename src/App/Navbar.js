import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {

  render() {
    return (

      <div className="navbar">
        <Link to="/" className="button btn-1">
          Home
        </Link>
        <Link to="/search" className="button btn-2">
          Search
        </Link>
        <Link to="/panel" className="button btn-3">
          Panel
        </Link>
      </div>

    )
  }
}

export default Navbar;

import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Russo One', sans-serif"
  },
  imgB: {
    marginRight: "10px"
  },
  margintop: {
    marginTop: '20%'
  },
  buttonS: {
    marginLeft: '20px',
    marginTop: '0px',
    fontWeight: 'bold',
    width: '10px'
  },
  searchS: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  formS: {
    // marginLeft: '80px',
    marginTop: '10%'
  }
}

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {


  
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top scrolling-navbar font-weight-bolder">
      <div className="container">
        <Link className="navbar-brand" to="/" style={styles.navB}><img src="https://raw.githubusercontent.com/diegolehyt/weather-react-app/master/images/logo.png" width="40px" height="40px" tabindex="-1" style={styles.imgB} alt="logo"/>Weather</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav mr-auto smooth-scroll">
            <li className="nav-item">
        
              
              
            </li>
        
          </ul>

          {/* <!-- Social Icon  --> */}
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              
            </li>
    
          </ul>

        </div>

      </div>
    </nav>

  );
}

export default Navbar;

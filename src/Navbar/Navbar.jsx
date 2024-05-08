import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Home from '../Home/Home';

export default function Navbar () {
    return <>
       <div id="Navbar">
       <div id="Navbarone">
        <p>EDITQUASAR</p>
        </div>
        <div id='Navbartwo'>
        <Link to="/" style={{ textDecoration: 'none', color:" rgb(39, 13, 13)" }}><p>Home</p></Link>
        <Link to="/Services" style={{ textDecoration: 'none', color:" rgb(39, 13, 13)" }}><p>Services</p></Link>
        <Link to="/Careers" style={{ textDecoration: 'none', color:" rgb(39, 13, 13)" }}><p>Careers</p></Link>
        <Link to="/Contact" style={{ textDecoration: 'none', color:" rgb(39, 13, 13)" }}><p>Contact</p></Link>
        </div>
       </div>
    </>
}
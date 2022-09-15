import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.jpg";

function Sidebar() {
    return (
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* <!-- Sidebar - Brand --> */}
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="/"
            >
                <div className="sidebar-brand-icon">
                    <img className="w-100 margin-50px" src={logo} alt="Green Meat" />
                </div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span className="color-blue">Dashboard - GreenMeet</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading color-blue">Actions</div>

            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/movies" exact="true">
                    <i className="fas fa-fw fa-folder color-blue"></i>
                    <span className="color-blue">Usuarios</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/movies" exact="true">
                    <i className="fas fa-fw fa-folder color-blue"></i>
                    <span  className="color-blue">Productos</span>
                </Link>
            </li>
            

           
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default Sidebar;

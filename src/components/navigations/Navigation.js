import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-dark navigations fixed-top bg-secondary navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler text-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end bg-secondary rounded"
                    tabIndex="-1"
                    id="navbarNav"
                    aria-labelledby="navbarNavLabel"
                    style={{width: '20em'}}
                >
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title text-light" id="navbarNavLabel">
                            Personal Assistant
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/about" activeClassName="active">
                                   About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;

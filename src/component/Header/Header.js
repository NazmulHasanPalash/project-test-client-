import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <div className="w-100 mx-auto">

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid ">
                        <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="/home"><h3>Dynamic <span className="span-style text-primary">Form<i class="fas fa-shield-alt"></i></span></h3></a>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 link-style d-flex align-item-center">
                                <li className="nav-item">
                                    <HashLink className="nav-link active" aria-current="page" to="/home#home">Home</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link active" to="/home#serviceId">Service</HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink className="nav-link active" to="/dataForm">Data entry</HashLink>
                                </li>




                            </ul>

                        </div>
                    </div>
                </nav>

            </div>



        </div >

    );
};

export default Header;
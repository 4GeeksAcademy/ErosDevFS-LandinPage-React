import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning text-white">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-end">
                    <a className="navbar-brand mx-auto" href="#">Start Bootstrap</a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
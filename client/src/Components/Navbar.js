import React, {Component} from 'react'
import Logo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-white">
                    <div className="navbar-brand">
                        <img src={Logo} style={{ width: '90px', height: '100px'}} alt="p"/>
                        Portofolio
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-5 mt-0 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Beranda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tentang">Tentang Irfan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/project">Karya</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hubungi">Hubungi Saya</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

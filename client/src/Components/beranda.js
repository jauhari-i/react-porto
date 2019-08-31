import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './beranda.css'

class beranda extends Component {
    render() {
        return (
            <div id="beranda">
                <h1>Hi! Aku Irfan</h1>
                <p>Aku Bukan Siapa-Siapa Hanya Sesorang Yang Belajar</p>
                <div className="my_info">
                    {/* <button onclick="scrollToBottom()"className="btn">Contact <i class="fas fa-arrow-right"></i></button> */}
                    <Link className="btn btn-info btn-flat" to="/tentang">Kepoin Aku <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>
        );
    }
}

export default beranda
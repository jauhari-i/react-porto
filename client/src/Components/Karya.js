import React, {Component} from 'react'
import './Main.css'

export default class Karya extends Component {
    render() {
        return (<div>
            <div class="my_skills text-center">
                <div class="title">
                    <h2>Karya</h2>
                </div>

                <div class="row col-9 justify-content-center" style={{marginLeft: '12%' }}>

                    <div class="skill col-3">
                        <div class="skill_body">
                            <div class="row">
                                <div class="image col-2">
                                    <img
                                        style={{padding: '9px'}}
                                        src="https://i.ibb.co/gSrNb7z/web-developer-icon-on-white-background-flat-vector-19806255.jpg"/></div>
                                    <div class="title col-9" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                        <h4>Web Development</h4>
                                    </div>
                                    <div class="desc col-12">
                                        Pengetahuan Tentang MERN Full stack, PHP dan Mysql,Serta Laravel dalam pembuatan Web
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="skill col-3">
                            <div class="skill_body">
                                <div class="row">
                                    <div class="image col-2">
                                        <img
                                            style={{padding: '9px'}}
                                            src="https://icon-library.net/images/booking-icon/booking-icon-14.jpg"/></div>
                                        <div class="title col-9" style={{marginTop: 'auto',marginBottom: 'auto'}}>
                                            <h4>Booking Lab</h4>
                                        </div>
                                        <div class="desc col-12">
                                            Project Kelas X Menggunakan Bahasa PHP
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="skill col-3">
                                <div class="skill_body">
                                    <div class="row">
                                        <div class="image col-2">
                                            <img
                                                src="https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-12-512.png"/></div>
                                            <div class="title col-9" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <h4>Tuoko(Online Shop)</h4>
                                            </div>
                                            <div class="desc col-12">
                                                E- Commerce yang dibuat menggunakan framework Laravel
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
    }
}
import React, {Component} from 'react'
import Aku from './aku.jpg'
import './Main.css'

export default class tentang extends Component {
    render() {
        return (
        <div>
            <div className="header align-items-center justify-content-center">
                <div className="row">
                    <div className="menu col-6">
                        <div className="text col-12">
                            <div className="top_text">
                                <span>Biografiku
                                </span>
                            </div>
                            <div className="center_text">
                                <span>M. IRFAN JAUHARI</span>
                            </div>
                            <div className="bottom_text">
                                <span>Web Dev (Full Stack Dev)</span>
                            </div>
                            <div classNameName="text-center mt-5">
                            <div className="title mt-5">
                                <h2>Tentang Irfan</h2>
                            </div>
                                <p>Muhammad Irfan Jauhari, Atau Irfan ini kerap dipanggil dengan nama FuuFu <br/>
                                 Karena Nama WhatsAppnya. Irfan juga bingung kenapa dipanggil FuuFu #tapiboong <br/>
                                 Anak Kelahiran Blitar, 3 juni 2003 ini memiliki berbagai macam bakat yang tertimbun <br/>
                                 bakat lain, karena tuntutan tugas atau keingginan banyak bakat yang disia-siakan <br/>
                                 oleh anak ini. Tetapi sekarang anak ini <br/> fokus mengembangkan bakatnya dibidang Teknologi</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="photo_frame col-5">
                        <div className="photo">
                            <img src={Aku} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
        )
    }
}
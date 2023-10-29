import React from "react";
import {Image} from "react-bootstrap";
import headImg from "../images/leasing-head-img.jpeg";
import LeasingCalc from "../components/LeasingCalc";
import Header from "../components/Header";

export default function MainPage() {
    return (
        <React.Fragment>
            <Header/>
            <div>
                <Image id={'logo_img'} width={'95%'} src={headImg}></Image>
            </div>
            <div className="container cont-num">
                <div className="row">
                    <div className="col-md-3 col-6 text-center custom-box" style={{borderRight: '1px solid #868686'}}>
                        <h2 className="timer count-title count-number" data-to="20" data-speed="2000">20</h2>
                        <span className={"count-text"}>ani de activitate</span>
                    </div>
                    <div className="col-md-3 col-6 text-center custom-box" style={{borderRight: '1px solid #868686'}}>
                        <h2 className="timer count-title count-number" data-to="5422" data-speed="2000">5,422</h2>
                        <span className={"count-text"}>proiecte finanțate</span>
                    </div>
                    <div className="col-md-3 col-6 text-center custom-box" style={{borderRight: '1px solid #868686'}}>
                        <h2 className="timer count-title count-number" data-to="18" data-speed="2000">18</h2>
                        <span className={"count-text"}>angajați profesioniști</span>
                    </div>
                    <div className="col-md-3 col-6 text-center custom-box">
                        <h2 className="timer count-title count-number" data-to="1" data-speed="2000">1</h2>
                        <span className={"count-text"}>acționar veritabil</span>
                    </div>
                </div>
            </div>
            <div className="static_blocks static_arrow_block text-center mobil" style={{opacity: '1'}}>
                <h2 className="col-sm-12 col-md-12 col-lg-12 main_title">Beneficii</h2>
                <div className="container cont-beneficii">
                    <div className="row beneficii align-items-center">
                        <div className="col-6 col-md-3">
                            <div className="bordura">
                                <div className="btext">
                                    Aprobare rapidă<br/>timp de 1 oră
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bordura">
                                <div className="btext">
                                    Set minim<br/>de documente
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bordura">
                                <div className="btext">
                                    Condiții<br/>avantajoase
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="bordura">
                                <div className="btext">
                                    Acces nelimitat<br/>inclusiv peste hotare
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"welcome-text-box"}>
                <p>Bine ați venit la The Leasing Agency - Soluția ta de Leasing de Încredere!<br/><br/>

                    Suntem aici pentru a-ți transforma visele în realitate. Cu peste 20 ani de experiență în industrie,
                    ne-am dedicat să oferim cele mai avantajoase oferte de leasing atât pentru persoane fizice, cât și
                    pentru
                    companii.<br/><br/>

                    De ce să alegi The Leasing Agency pentru serviciile de leasing ?<br/><br/>

                    <li>Aprobare rapidă în doar câteva ore !</li>
                    <li>Set minim de documente necesare.</li>
                    <li>Condiții flexibile și avantajoase.</li>
                    <li>Acces nelimitat, inclusiv peste hotare.</li>
                    <li>Echipa noastră de profesioniști este aici pentru a te ghida în procesul de leasing și pentru a
                        te ajuta
                        să
                        obții finanțarea de care ai nevoie pentru a-ți îndeplini obiectivele.
                    </li>
                    <br/>
                    Află mai multe despre serviciile noastre de leasing și calculează oferta ta personalizată chiar
                    acum!<br/><br/>
                    <LeasingCalc/>
                    <br/>Nu ezita să ne contactezi pentru orice întrebări sau asistență. Suntem aici pentru tine!
                </p>
            </div>
            <footer>&copy; 2023 The Leasing Company</footer>
        </React.Fragment>
    )
}
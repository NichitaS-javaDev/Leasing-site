import React from 'react'
import {Button, Image, Nav} from "react-bootstrap";
import logo from "../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();
    const activeKey = location.pathname;

    return (
        <React.Fragment>
            <div>
                <Nav fill variant="tabs" defaultActiveKey={activeKey} className="custom-nav">
                    <Nav.Item>
                        <Nav.Link href="/">Despre Leasing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/cars">Autoturisme</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/apartments">Imobil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Tehnică Agricolă</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className={'headerImg d-flex align-items-center justify-content-between'}>
                <Image id={'logo_img'} height={'90vh'} width={'300vh'} src={logo}></Image>
                <div className="d-flex align-items-end" style={{marginRight: "5%"}}>
                    <Button variant="light" size="lg" className={"login_btn"}>
                        <FontAwesomeIcon icon={faRightToBracket} style={{marginRight: '10px'}}/>
                        Sign In
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
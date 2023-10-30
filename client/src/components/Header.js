import React, {useEffect, useState} from 'react'
import {Button, Image, Nav} from "react-bootstrap";
import logo from "../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {getIsAuthorized, signOut} from "../api/api";
import {RoutesEnum} from "./RoutesEnum";

export default function Header() {
    const location = useLocation();
    const activeKey = location.pathname;
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const fetchIsAuthorized = async () => {
            try {
                const response = await getIsAuthorized();
                setIsAuthorized(response.data.isAuthorized);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchIsAuthorized()
    }, []);

    const handleSignInClick = () => {
        navigate(RoutesEnum.login);
    }

    const handleSignOutClick = async () => {
        try {
            await signOut();
            window.location.reload();
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <React.Fragment>
            <div>
                <Nav fill variant="tabs" defaultActiveKey={activeKey} className="custom-nav">
                    <Nav.Item>
                        <Nav.Link href={`${RoutesEnum.index}`}>Despre Leasing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`${RoutesEnum.cars}`}>Autoturisme</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`${RoutesEnum.apartments}`}>Imobil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`${RoutesEnum.farmEquipment}`}>Tehnică Agricolă</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className={'headerImg d-flex align-items-center justify-content-between'}>
                <Image id={'logo_img'} height={'90vh'} width={'300vh'} src={logo}></Image>
                <div className="d-flex align-items-end" style={{marginRight: "5%"}}>
                    {!isAuthorized ?
                        <Button variant="light" size="lg" className={"login_btn"} onClick={handleSignInClick}>
                            <FontAwesomeIcon icon={faRightToBracket} style={{marginRight: '10px'}}/>
                            Sign In
                        </Button> :
                        <Button variant="light" size="lg" className={"login_btn"} onClick={handleSignOutClick}>
                            <FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: '10px'}}/>
                            Sign Out
                        </Button>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
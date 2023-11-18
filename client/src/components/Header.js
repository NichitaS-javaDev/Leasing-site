import React, {useEffect, useState} from 'react'
import {Button, Image} from "react-bootstrap";
import logo from "../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import {RoutesEnum} from "./RoutesEnum";
import {getIsAuthorized, signOut} from "../api/user";
import NavigationBar from "./NavigationBar";

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
            <NavigationBar/>
            {activeKey === '/' ? <div></div> : <div className={'mt-2'}></div>}
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
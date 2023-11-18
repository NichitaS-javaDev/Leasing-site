import {useNavigate} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNodes, faRightFromBracket, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import React from "react";
import {signOut} from "../api/user";
import {RoutesEnum} from "../components/RoutesEnum";
import ClientPersonalDataBox from "../components/ClientPersonalDataBox";

export default function ClientDashboard() {
    // const location = useLocation();
    const navigate = useNavigate();

    const handleSignOutClick = async () => {
        try {
            await signOut();
            navigate(RoutesEnum.index)
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <>
            <NavigationBar/>
            <div className={'d-flex justify-content-around mt-3'}>
                <span>
                    <Button className={'bg-transparent border-0'} variant="light" size="lg">
                       <FontAwesomeIcon icon={faUserTie} className={'client-btn'}/>
                    </Button>
                </span>
                <span>
                    <Button className={'bg-transparent border-0'} variant="light" size="lg">
                        <FontAwesomeIcon icon={faCircleNodes} className={'client-btn'}/>
                    </Button>
                </span>
                <span>
                    <Button className={'bg-transparent border-0'} variant="light" size="lg"
                            onClick={handleSignOutClick}>
                            <FontAwesomeIcon icon={faRightFromBracket} className={'client-btn'}/>
                        </Button>
                </span>
            </div>
            <div className={'d-flex justify-content-center'}>
                <div className={'mt-3 client-data-box'}>
                    <ClientPersonalDataBox/>
                </div>
            </div>
        </>
    );
}
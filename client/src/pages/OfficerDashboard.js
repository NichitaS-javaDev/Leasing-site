import {useNavigate} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileContract, faRightFromBracket, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import React, {useState} from "react";
import {signOut} from "../api/user";
import {RoutesEnum} from "../components/enum/RoutesEnum";
import ClientsDataUpdateRequestsBox from "../components/officer/ClientsDataUpdateRequestsBox";
import SliderContractsDashBox from "../components/officer/SliderContractsDashBox";

export default function OfficerDashboard() {
    const navigate = useNavigate();
    const Buttons = {
        updateRequests: 'updateRequests',
        contractsToApprove: 'contractsToApprove'
    }
    const [renderedCmp, setRenderedCmp] = useState(Buttons.contractsToApprove);

    const handleUpdateRequestsBtnClick = () => {
        setRenderedCmp(Buttons.updateRequests)
    }
    const handleContractsToApproveBtnClick = () => {
        setRenderedCmp(Buttons.contractsToApprove)
    }

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
                    <Button className={'bg-transparent border-0'} variant="light" size="lg"
                            onClick={handleUpdateRequestsBtnClick}>
                       <FontAwesomeIcon icon={faUserGroup} className={'client-btn'}/>
                    </Button>
                </span>
                <span>
                    <Button className={'bg-transparent border-0'} variant="light" size="lg"
                            onClick={handleContractsToApproveBtnClick}>
                        <FontAwesomeIcon icon={faFileContract} className={'client-btn'}/>
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
                {renderedCmp === Buttons.updateRequests ?
                    <div className={'mt-3'}>
                        <ClientsDataUpdateRequestsBox/>
                    </div> :
                    <div className={"mt-1 client-contracts-box"}>
                        <SliderContractsDashBox/>
                    </div>
                }
            </div>
        </>
    );
}
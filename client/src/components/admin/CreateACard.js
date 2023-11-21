import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import CreateCarAModal from "./CreateCarAModal";
import {useLocation} from "react-router-dom";
import {RoutesEnum} from "../enum/RoutesEnum";
import CreateApartmentAModal from "./CreateApartmentAModal";
import CreateFarmEquipmentAModal from "./CreateFarmEquipmentAModal";

export default function CreateACard() {
    const [modalShow, setModalShow] = useState(false);
    const location = useLocation();

    function getModal() {
        const modalProps = {
            show: modalShow,
            onHide: () => setModalShow(false)
        }

        switch (location.pathname) {
            case RoutesEnum.cars:
                return <CreateCarAModal {...modalProps}/>
            case RoutesEnum.apartments:
                return <CreateApartmentAModal {...modalProps}/>
            case RoutesEnum.farmEquipment:
                return <CreateFarmEquipmentAModal {...modalProps}/>
            default:
        }
    }

    return (
        <>
            <Card className={'add-card d-flex justify-content-center align-items-center'}
                  onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faPlus} style={{fontSize: '3em'}}/>
            </Card>
            {getModal()}
        </>
    )

}
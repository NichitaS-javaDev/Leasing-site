import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {RoutesEnum} from "./RoutesEnum";
import {useLocation} from "react-router-dom";
import {deleteCar} from "../api/cars";
import {deleteApartment} from "../api/apartments";
import {deleteFarmEquipment} from "../api/farmEquipment";

export default function ConfirmDelete(props) {
    const location = useLocation();

    const handleDelete = async () => {
        try {
            switch (location.pathname) {
                case RoutesEnum.cars:
                    await deleteCar(props.id);
                    break;
                case RoutesEnum.apartments:
                    await deleteApartment(props.id)
                    break;
                case RoutesEnum.farmEquipment:
                    await deleteFarmEquipment(props.id)
                    break;
                default:
            }
            window.location.reload()
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <Modal show={props.show} onHide={props.onHide} size='lg' aria-labelledby="contained-modal-title-center" className={'d-flex justify-content-center'} centered>
            <Modal.Body >
                <div className={'d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={faTrashCan} style={{fontSize:'2em'}}/>
                </div>
                <div className={'mt-2'}>
                    Are you sure you want to delete this item ?
                </div>
            </Modal.Body>
            <Modal.Footer className={'border-top-0'}>
                <Button variant={'light'} onClick={props.onHide}>No, cancel</Button>
                <Button variant={'danger'} onClick={handleDelete}>Yes. delete</Button>
            </Modal.Footer>
        </Modal>
    )
}
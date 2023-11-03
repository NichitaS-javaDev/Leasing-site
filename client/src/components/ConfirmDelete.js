import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {RoutesEnum} from "./RoutesEnum";
import {deleteApartment, deleteCar, deleteFarmEquipment} from "../api/api";
import {useLocation} from "react-router-dom";

export default function ConfirmDelete({show, onHide, id}) {
    const location = useLocation();

    const handleDelete = async () => {
        try {
            switch (location.pathname) {
                case RoutesEnum.cars:
                    await deleteCar(id);
                    break;
                case RoutesEnum.apartments:
                    await deleteApartment(id)
                    break;
                case RoutesEnum.farmEquipment:
                    await deleteFarmEquipment(id)
                    break;
                default:
            }
            window.location.reload()

        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <Modal show={show} onHide={onHide} size='lg' aria-labelledby="contained-modal-title-center" className={'d-flex justify-content-center'} centered>
            <Modal.Body >
                <div className={'d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={faTrashCan} style={{fontSize:'2em'}}/>
                </div>
                <div className={'mt-2'}>
                    Are you sure you want to delete this item ?
                </div>
            </Modal.Body>
            <Modal.Footer className={'border-top-0'}>
                <Button variant={'light'} onClick={onHide}>No, cancel</Button>
                <Button variant={'danger'} onClick={handleDelete}>Yes. delete</Button>
            </Modal.Footer>
        </Modal>
    )
}
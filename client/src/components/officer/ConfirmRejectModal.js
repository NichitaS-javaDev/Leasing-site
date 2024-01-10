import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {rejectNewClientData} from "../../api/client";
import {useNavigate} from "react-router-dom";

export default function ConfirmRejectModal(props) {
    const navigate = useNavigate();

    const handleReject = async () => {
        await rejectNewClientData(props.id);
        navigate(0);
    }

    return (
        <Modal show={props.show} onHide={props.onHide} size='lg' aria-labelledby="contained-modal-title-center"
               className={'d-flex justify-content-center'} centered>
            <Modal.Body>
                <div className={'d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize: '2em'}}/>
                </div>
                <div className={'mt-3'}>
                    Are you sure you want to approve this update request ?
                </div>
            </Modal.Body>
            <Modal.Footer className={'border-top-0'}>
                <Button variant={'light'} onClick={props.onHide}>No, cancel</Button>
                <Button variant={'danger'} onClick={handleReject}>Yes, reject</Button>
            </Modal.Footer>
        </Modal>
    )
}
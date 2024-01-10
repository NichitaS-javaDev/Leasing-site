import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {approveNewClientData} from "../../api/client";
import {useNavigate} from "react-router-dom";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";

export default function ConfirmApproveModal(props) {
    const navigate = useNavigate();

    const handleApprove = async () => {
        await approveNewClientData(props.id);
        navigate(0);
    }

    return (
        <Modal show={props.show} onHide={props.onHide} size='lg' aria-labelledby="contained-modal-title-center"
               className={'d-flex justify-content-center'} centered>
            <Modal.Body>
                <div className={'d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: '2em'}}/>
                </div>
                <div className={'mt-3'}>
                    Are you sure you want to approve this update request ?
                </div>
            </Modal.Body>
            <Modal.Footer className={'border-top-0'}>
                <Button variant={'light'} onClick={props.onHide}>No, cancel</Button>
                <Button variant={'success'} onClick={handleApprove}>Yes, approve</Button>
            </Modal.Footer>
        </Modal>
    )
}
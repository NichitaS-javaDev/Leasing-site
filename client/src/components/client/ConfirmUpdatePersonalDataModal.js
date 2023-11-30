import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenNib} from "@fortawesome/free-solid-svg-icons";
import {sendNewDataForApprove} from "../../api/client";

export default function ConfirmUpdatePersonalDataModal({show, onHide, handleRerender, clientDetails}) {
    const handleUpdate = async () => {
        try {
            await sendNewDataForApprove(clientDetails);
            onHide();
            handleRerender();
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <Modal show={show} onHide={onHide} size='lg' aria-labelledby="contained-modal-title-center"
               className={'d-flex justify-content-center'} centered>
            <Modal.Body>
                <div className={'d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={faPenNib} style={{fontSize: '2em'}}/>
                </div>
                <div className={'mt-2'}>
                    Are you sure you want to update personal data ?
                </div>
            </Modal.Body>
            <Modal.Footer className={'border-top-0'}>
                <Button variant={'light'} onClick={onHide}>No, cancel</Button>
                <Button variant={'success'} onClick={handleUpdate}>Yes. update</Button>
            </Modal.Footer>
        </Modal>
    )
}
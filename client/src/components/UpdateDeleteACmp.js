import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "./ConfirmDelete";

export default function UpdateDeleteACmp({id}) {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={'light'} className={'admin_btn'}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Button>
            <Button variant={'light'} className={'admin_btn'} onClick={handleShow}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
            <ConfirmDelete show={showModal} onHide={handleClose} id={id}/>
        </div>
    )
}

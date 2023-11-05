import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "./ConfirmDelete";
import UpdateCarAModal from "./UpdateCarAModal";

export default function UpdateDeleteACmp({id}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDelShow = () => setShowDeleteModal(true);
    const handleDelClose = () => setShowDeleteModal(false);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleUpdateShow = () => setShowUpdateModal(true);
    const handleUpdateClose = () => setShowUpdateModal(false);

    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={'light'} className={'admin_btn'} onClick={handleUpdateShow}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Button>
            <Button variant={'light'} className={'admin_btn'} onClick={handleDelShow}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
            <ConfirmDelete show={showDeleteModal} onHide={handleDelClose} id={id}/>
            <UpdateCarAModal show={showUpdateModal} onHide={handleUpdateClose} id={id}/>
        </div>
    )
}

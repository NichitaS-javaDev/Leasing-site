import React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteCar} from "../api/api";

export default function UpdateDeleteACmp({id}) {
    const handleDelete = async () => {
        try {
            await deleteCar(id);
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={'light'} className={'admin_btn'} >
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Button>
            <Button variant={'light'} className={'admin_btn'} onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
        </div>
    )
}

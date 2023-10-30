import React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteApartment, deleteCar} from "../api/api";
import {useLocation} from "react-router-dom";
import {RoutesEnum} from "./RoutesEnum";

export default function UpdateDeleteACmp({id}) {
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
                    await console.log('del farm')
                    break;
                default:
            }
            window.location.reload()

        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={'light'} className={'admin_btn'}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </Button>
            <Button variant={'light'} className={'admin_btn'} onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
        </div>
    )
}

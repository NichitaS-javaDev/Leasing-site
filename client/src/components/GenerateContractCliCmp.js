import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {generateContract} from "../api/contract";
import {useCurrentClient} from "../hooks/useCurrentClient";

export default function GenerateContractCliCmp(car) {
    const {img, ...carWithoutImg} = car;
    const {clientDetails} = useCurrentClient();
    const clientFullName = clientDetails.surname.concat(' ').concat(clientDetails.name);
    const handleGenerateContractBtn = async () => {
        const response = await generateContract({
            ...carWithoutImg,
            clientName: clientFullName,
            clientEmail: clientDetails.email
        });
        window.open(response.data, '_self');
    }

    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={"light"} className={'admin_btn'} onClick={handleGenerateContractBtn}>
                <FontAwesomeIcon icon={faFileSignature}/>
            </Button>
        </div>
    )
}
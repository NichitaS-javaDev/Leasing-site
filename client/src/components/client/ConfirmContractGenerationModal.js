import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {generateContract} from "../../api/contract";

export default function ConfirmContractGenerationModal({car, clientDetails, show, onHide}) {
    const [rate, setRate] = useState(36);
    const [downPayment, setDownPayment] = useState(car.price * 0.2);
    const {img, ...carWithoutImg} = car;
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
        <Modal show={show} size='lg' aria-labelledby="contained-modal-title-center" centered style={{fontSize: 17}}>
            <Form>
                <Modal.Body>
                    {}
                    <span>Are you sure you want to enter into a leasing agreement for a period of  <input
                        type={"number"}
                        min={0}
                        max={60}
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    /> months and <input
                        type={"number"}
                        min={car.price * 0.2}
                        max={100000}
                        value={downPayment.toFixed(2)}
                        onChange={(e) => setDownPayment((e.target.value).toFixed(2))}
                    /> as down payment?</span>
                </Modal.Body>
                <Modal.Footer className={'border-0'}>
                    <Button variant={'light'} onClick={onHide}>Cancel</Button>
                    <Button variant={'success'} onClick={handleGenerateContractBtn}>Generate</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
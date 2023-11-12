import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {updateRates} from "../api/api";

export default function LeasingCalcAConfigModal(props) {
    const [interestRates, setInterestRates] = useState({
        carRate: props.rates?.carRate,
        apartmentRate: props.rates?.apartmentRate,
        farmRate: props.rates?.farmRate
    });

    const handleRateChange = (e) => {
        const {id, value} = e.target;
        setInterestRates((prevRates) => ({
            ...prevRates,
            [id]: value
        }))
    }

    const handleRatesUpdate = async () => {
        const transformedInterestRates = Object.entries(interestRates)
            .map(([id, rate]) => ({id, rate}));
        try {
            await updateRates(transformedInterestRates)
        } catch (error) {}
    }

    const handleModalClose = () => {
        props.onHide();
        setInterestRates(props.rates)
    }

    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered
               className={"d-flex justify-content-center"}>
            <Form onSubmit={handleRatesUpdate}>
                <Modal.Body>
                    <Form.Group controlId="carRate">
                        <Form.Label className={'ms-1'}>Rata de leasing auto</Form.Label>
                        <Form.Control
                            type={"number"}
                            min={"0"}
                            step={"0.05"}
                            placeholder={props.rates?.carRate}
                            name="cars-rate"
                            value={interestRates.carRate}
                            onChange={handleRateChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="apartmentRate">
                        <Form.Label className={'ms-1 mt-2'}>Rata de leasing imobiliar</Form.Label>
                        <Form.Control
                            type={"number"}
                            min={"0"}
                            step={"0.05"}
                            placeholder={props.rates?.apartmentRate}
                            name="apartments-rate"
                            value={interestRates.apartmentRate}
                            onChange={handleRateChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="farmRate">
                        <Form.Label className={'ms-1 mt-2'}>Rata de leasing agricol</Form.Label>
                        <Form.Control
                            type={"number"}
                            min={"0"}
                            step={"0.05"}
                            placeholder={props.rates?.farmRate}
                            name="farm-rate"
                            value={interestRates.farmRate}
                            onChange={handleRateChange}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{borderTop: "none", paddingTop: 0}}>
                    <Button variant='outline-danger' onClick={handleModalClose}>
                        Cancel
                    </Button>
                    <Button type={"submit"} variant="outline-success">
                        Update rates
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
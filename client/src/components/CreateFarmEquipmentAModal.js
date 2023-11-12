import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {createFarmEquipment} from "../api/farmEquipment";

export default function CreateFarmEquipmentAModal(props) {
    useEffect(() => {
        if (!props.show) {
            setFarmEquipmentDetails({
                model: '',
                weight: '',
                engine: '',
                fuelTank: '',
                power: '',
                payloadCapacity: '',
                price: 0,
                img: ''
            });
        }
    }, [props.show]);

    const [farmEquipmentDetails, setFarmEquipmentDetails] = useState({
        model: '',
        weight: '',
        engine: '',
        fuelTank: '',
        power: '',
        payloadCapacity: '',
        price: 0,
        img: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFarmEquipmentDetails({...farmEquipmentDetails, [name]: value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setFarmEquipmentDetails({...farmEquipmentDetails, img: base64String});
        };

        reader.readAsDataURL(file);
    };

    const handleCreateApartment = async () => {
        try {
            await createFarmEquipment(farmEquipmentDetails);
        } catch (error) {
        }
        props.onHide();
    };

    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered>
            <Form onSubmit={handleCreateApartment}>
                <Modal.Body>
                    <Form.Group controlId="model">
                        <Form.Label className={'ms-1'}>Model</Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder="Introduceti modelul"
                            name="model"
                            value={farmEquipmentDetails.model}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="engine">
                        <Form.Label className={'ms-1'}>Motor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti specificatia motorului"
                            name="engine"
                            value={farmEquipmentDetails.engine}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="power">
                        <Form.Label className={'ms-1'}>Putere</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Introduceti puterea motorului (c.p)"
                            name="power"
                            value={farmEquipmentDetails.power}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="fuelTank">
                        <Form.Label className={'ms-1'}>Rezervor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti volumul rezervorului"
                            name="fuelTank"
                            value={farmEquipmentDetails.fuelTank}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="weight">
                        <Form.Label className={'ms-1'}>Masa proprie</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti masa proprie"
                            name="weight"
                            value={farmEquipmentDetails.weight}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="payloadCapacity">
                        <Form.Label className={'ms-1'}>Capacitatea de incarcare</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti capacitatea de incarcare"
                            name="payloadCapacity"
                            value={farmEquipmentDetails.payloadCapacity}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label className={'ms-1'}>Pret</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Introduceti pretul"
                            name="price"
                            value={farmEquipmentDetails.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label className={'ms-1'}>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{borderTop: "none", paddingTop: 0}}>
                    <Button variant='outline-danger' onClick={props.onHide}>
                        Cancel
                    </Button>
                    <Button type={"submit"} variant="outline-success">
                        Save item
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
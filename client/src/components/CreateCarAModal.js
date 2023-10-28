import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export default function CreateCarAModal(props) {
    const [carDetails, setCarDetails] = useState({
        model: '',
        description: '',
        transmission: '',
        fuel: '',
        price: '',
        year: '',
        color: '',
        img: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({ ...carDetails, [name]: value });
    };

    const handleCreateCar = () => {
        console.log('Creating car with details:', carDetails);
        props.onHide();
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="model">
                        <Form.Label className={'ms-1'}>Model</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car model"
                            name="model"
                            value={carDetails.model}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label className={'ms-1'}>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder="Enter car description"
                            name="description"
                            value={carDetails.description}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="transmission">
                        <Form.Label className={'ms-1'}>Transmission</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter transmission type"
                            name="transmission"
                            value={carDetails.transmission}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="fuel">
                        <Form.Label className={'ms-1'}>Fuel</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter fuel type"
                            name="fuel"
                            value={carDetails.fuel}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label className={'ms-1'}>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter car price"
                            name="price"
                            value={carDetails.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="year">
                        <Form.Label className={'ms-1'}>Year</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car year"
                            name="year"
                            value={carDetails.year}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="color">
                        <Form.Label className={'ms-1'}>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car color"
                            name="color"
                            value={carDetails.color}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label className={'ms-1'}>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car image URL"
                            name="img"
                            value={carDetails.img}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="outline-success" onClick={handleCreateCar}>
                    Save item
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {createCar} from "../api/api";

export default function CreateCarAModal(props) {
    useEffect(() => {
        if (!props.show) {
            setCarDetails({
                model: '',
                description: '',
                transmission: '',
                fuel: '',
                price: 0,
                year: 0,
                color: '',
                img: ''
            });
        }
    }, [props.show]);

    const [carDetails, setCarDetails] = useState({
        model: '',
        description: '',
        transmission: '',
        fuel: '',
        price: 0,
        year: 0,
        color: '',
        img: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCarDetails({...carDetails, [name]: value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setCarDetails({...carDetails, img: base64String});
        };

        reader.readAsDataURL(file);
    };

    const handleCreateCar = async () => {
        try {
            await createCar(carDetails);
        } catch (error) {
        }
        props.onHide();
        window.location.reload();
    };

    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered>
            <Form onSubmit={handleCreateCar}>
                <Modal.Body>
                    <Form.Group controlId="model">
                        <Form.Label className={'ms-1'}>Model</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car model"
                            name="model"
                            value={carDetails.model}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label className={'ms-1'}>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder="Enter car description"
                            name="description"
                            value={carDetails.description}
                            onChange={handleInputChange}
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="year">
                        <Form.Label className={'ms-1'}>Year</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter car year"
                            name="year"
                            value={carDetails.year}
                            onChange={handleInputChange}
                            required
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
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label className={'ms-1'}>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
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
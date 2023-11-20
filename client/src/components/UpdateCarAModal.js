import {Button, Form, Modal} from "react-bootstrap";
import {useEffect} from "react";
import {useCarDetails} from "../hooks/useCarDetails";
import {getCarById, updateCar} from "../api/car";

export default function UpdateCarAModal(props) {
    const {carDetails, setCarDetails, handleInputChange, handleImageChange} = useCarDetails();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await getCarById(props.id);
                setCarDetails(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        }

        fetchCar()
    }, [props.id, setCarDetails])

    const handleUpdate = async () => {
        try {
            await updateCar({...carDetails})
        } catch (error) {

        }
        props.onHide();
    }

    return (
        <Modal show={props.show} onHide={props.onHide} size='lg' aria-labelledby="contained-modal-title-center"
               centered>
            <Form onSubmit={handleUpdate}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Model</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={carDetails.model}
                            name="model"
                            value={carDetails.model}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            placeholder={carDetails.description}
                            name="description"
                            value={carDetails.description}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Transmission</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={carDetails.transmission}
                            name="transmission"
                            value={carDetails.transmission}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Fuel</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={carDetails.fuel}
                            name="fuel"
                            value={carDetails.fuel}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={carDetails.price}
                            name="price"
                            value={carDetails.price}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Year</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={carDetails.year}
                            name="year"
                            value={carDetails.year}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={carDetails.color}
                            name="color"
                            value={carDetails.color}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
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
                        Update item
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
import {Button, Form, Modal} from "react-bootstrap";

export default function LeasingCalcAConfigModal(props){
    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered className={"d-flex justify-content-center"}>
            <Modal.Body>
                <Form.Group controlId="cars-rate">
                    <Form.Label className={'ms-1'}>Rata de leasing auto</Form.Label>
                    <Form.Control
                        type={"number"}
                        min={"0"}
                        step={"0.25"}
                        // placeholder="Introduceti descrierea"
                        name="cars-rate"
                        // style={{width:"75%"}}
                        // value={apartmentDetails.description}
                        // onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="apartments-rate">
                    <Form.Label className={'ms-1 mt-2'}>Rata de leasing imobiliar</Form.Label>
                    <Form.Control
                        type={"number"}
                        min={"0"}
                        step={"0.25"}
                        // placeholder="Introduceti descrierea"
                        name="apartments-rate"
                        // style={{width:"75%"}}
                        // value={apartmentDetails.description}
                        // onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="farm-rate">
                    <Form.Label className={'ms-1 mt-2'}>Rata de leasing agricol</Form.Label>
                    <Form.Control
                        type={"number"}
                        min={"0"}
                        step={"0.25"}
                        // placeholder="Introduceti descrierea"
                        name="farm-rate"
                        // style={{width:"100%"}}
                        // value={apartmentDetails.description}
                        // onChange={handleInputChange}
                        required
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer style={{borderTop: "none", paddingTop: 0}}>
                <Button variant='outline-danger' onClick={props.onHide}>
                    Cancel
                </Button>
                <Button type={"submit"} variant="outline-success">
                    Update rates
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
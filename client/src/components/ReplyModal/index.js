import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Input from "../Input";

function ReplyModal(props) {

    console.log (props)
    return (
        <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <h2>Replying to {props.username}</h2>
            </Modal.Header>

            <Modal.Body>
                {props.children}
                <Input />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.handleFormReply} variant="primary">Submit</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>

    )
}

export default ReplyModal;
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ErrorModal = (props) => {
    return (
        <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Market React</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Sign up/log in to post or reply.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.handleClose} variant="secondary">Sign in</Button>
                <Button variant="primary">Sign up</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>

    )
}

export default ErrorModal 
import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Image from 'react-bootstrap/Image'

type Props = {
  imageURL: string,
  
}

function ArtModal(props: Props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

        <div className="card shadow-sm">
            <Image src={props.imageURL} className="art" alt="description of image" onClick={handleShow}/>
            <Modal size='lg' className= 'modal' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body><Image src={props.imageURL} className="modal-content" alt="description of image"/></Modal.Body>
            
            </Modal>
            
        </div>        
      </>
    );
  }

export default ArtModal;

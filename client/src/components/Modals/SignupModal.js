import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignupModal = (props) => {
  const {
    open,
    message,
    fx
  } = props;

  const [modal, setModal] = useState(false);
  
  useEffect(() => {
    toggle();
  }, [open]); 

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Uh Oh...</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button className="btn-rose" onClick={fx}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignupModal;
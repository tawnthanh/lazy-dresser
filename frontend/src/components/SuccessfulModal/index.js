import React from 'react';
import { Modal } from '../../context/Modal';
import "./SuccessfulModal.css";

function SuccessfulModal({newItem}) {

  return (
    <>
      {newItem && (
        <Modal>
          <div className="success">Added Successfully!</div>
        </Modal>
      )}
    </>
  );
}

export default SuccessfulModal;

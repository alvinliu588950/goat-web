import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DeleteIcon from '@mui/icons-material/Delete';

function EditAgent(props) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShow}
      >
        <DeleteIcon />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.deleteAgent(props.id);
            }}
            className="w-full max-w-sm"
            id="editmodal"
          >
            <div className="md:flex md:items-center mb-6">
              <div
                class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                role="alert"
              >
                <p class="font-bold">Are you sure you want to delete this agent?</p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
            onClick={handleClose}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAgent;

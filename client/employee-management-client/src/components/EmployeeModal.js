import React from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

function EmployeeModal({ show, handleClose, employee }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="details" id="employee-tabs" className="mb-3">
          <Tab eventKey="details" title="Details">
            <div>
              <p><strong>Name:</strong> {employee?.employeeName}</p>
              <p><strong>Address:</strong> {employee?.address}</p>
              <p><strong>Age:</strong> {employee?.age}</p>
              <p><strong>Department:</strong> {employee?.department}</p>
              <p><strong>Status:</strong> {employee?.status}</p>
            </div>
          </Tab>
          <Tab eventKey="location" title="Location">
            <div>
              {/* Implement map display here */}
            </div>
          </Tab>
          <Tab eventKey="audit" title="Audit Trail">
            <div>
              {/* Display audit trail data here */}
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmployeeModal;

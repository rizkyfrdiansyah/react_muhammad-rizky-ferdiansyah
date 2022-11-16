import React, { useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

function Profile() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>PopUp</ModalHeader>
        <ModalBody>
          <form>
            <Row>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Alamat</label>
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="name">Business</label>
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
              </Col>
            </Row>
          </form>
          <button className="btn mt-3" style={{ backgroundColor: "#0b3629", color: "white" }} onClick={() => setModal(true)}>
            Submit
          </button>
        </ModalBody>
      </Modal>
      <button className="btn mt-3" style={{ backgroundColor: "#0b3629", color: "white" }} onClick={() => setModal(true)}>
        Open Popup
      </button>
    </div>
  );
}

export default Profile;

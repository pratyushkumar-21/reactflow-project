import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { nodeTypesMap } from "../workflow/utils";

export default function CreateTextNode(props) {
  const { setNodes } = props;
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setMessage("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleCreateMessage = (event) => {
    event.preventDefault();
    const location = Math.random() * 300;

    //adding new node
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { text: message },
        type: nodeTypesMap.textNode,
        position: { x: location, y: location },
      },
    ]);

    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} size="lg">
        <i className="bi bi-chat-text"></i>
        <div> Message</div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleCreateMessage}>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Enter Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter message"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Form.Group>

            <div className="form-actions">
              <Button variant="outline-primary" type="submit">
                Create
              </Button>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

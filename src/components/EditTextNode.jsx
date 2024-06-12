import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditTextNode(props) {
  const { setNodes, selectedNode, setSelectedNode } = props;
  const { data } = selectedNode;

  const [text, setText] = useState("");

  useEffect(() => {
    setText(data.text);
  }, [selectedNode]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // setting text value of selected node on change
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, text: value } }
          : node
      )
    );
  };

  const handleBack = () => {
    //setting selected node as inactive
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, isActive: false } }
          : node
      )
    );

    //clearing selected node
    setSelectedNode(null);
  };

  return (
    <div>
      <Row>
        <Col md={2}>
          <Button variant="outline-dark" onClick={handleBack} size="sm">
            <i className="bi bi-arrow-left"></i>
          </Button>
        </Col>

        <Col md={10} style={{ textAlign: "center" }}>
          Message
        </Col>
      </Row>

      <hr />
      <Form.Control
        as="textarea"
        placeholder="Enter message"
        required
        onChange={handleChange}
        value={text}
        className="mb-3"
      />
    </div>
  );
}

import { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";

export default function TopPanel(props) {
  const { nodes, edges } = props;
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);

  const handleSaveButton = () => {
    const targetEdgeNodeIds = new Set(edges.map((edge) => edge.target));
    const isError = nodes.length - targetEdgeNodeIds.size > 1;

    if (isError) setError(true);
    else setError(false);

    setShowToast(true);
  };

  return (
    <div className="nav-bar-wrapper">
      <div className="save-btn">
        <Button variant="outline-primary" onClick={handleSaveButton}>
          Save Changes
        </Button>

        <ToastContainer
          className="p-3"
          position="top-center"
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={2000}
            autohide
          >
            <Toast.Body className={error ? "toast-error" : undefined}>
              {error ? `Can not save flow!` : `Flow saved successfully!`}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}

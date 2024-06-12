import { Card } from "react-bootstrap";
import { Handle, Position } from "reactflow";
import { useEdges } from "reactflow";

export default function TextNode(props) {
  const {
    data: { text, isActive },
    id: nodeID,
  } = props;

  const edges = useEdges();

  const isSourceConnectable = () =>
    !edges.some((edge) => edge.source === nodeID);

  return (
    <Card border={isActive ? "primary" : undefined} style={{ width: "18rem" }}>
      <Card.Header className="text-node-card-header">
        <div>
          <i className="bi bi-chat-text"></i> Send Message
        </div>
        <i className="bi bi-whatsapp circle-icon"></i>
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isSourceConnectable()}
      />
      <Handle type="target" position={Position.Left} />
    </Card>
  );
}

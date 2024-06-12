import { useCallback, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import SettingPanel from "./SettingPanel";
import TopPanel from "./TopPanel";

import { nodeTypes, initialEdges, initialNodes } from "./utils";
import "reactflow/dist/style.css";

export default function Workflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback((edge) => {
    setEdges((prevEdges) =>
      addEdge({ ...edge, animated: true, id: prevEdges.length + 1 }, prevEdges)
    );
  });

  const onNodeClicked = useCallback((_, node) => {
    //setting active node after click and other node as inactive
    setNodes((preNodes) =>
      preNodes.map((n) => {
        if (n.id === node.id) n.data.isActive = true;
        else n.data.isActive = false;

        return n;
      })
    );

    setSelectedNode(node);
  });

  return (
    <main>
      <TopPanel nodes={nodes} edges={edges} />

      <Row style={{ width: "100%", height: "90vh" }}>
        <Col xs={12} md={9}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClicked}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </Col>

        <Col md={3} xs={12} className="setting-panel-wrapper">
          <SettingPanel
            setNodes={setNodes}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        </Col>
      </Row>
    </main>
  );
}

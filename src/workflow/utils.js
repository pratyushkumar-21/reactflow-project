import TextNode from "../components/TextNode";

export const nodeTypesMap = {
  textNode: "textNode",
};

const { textNode } = nodeTypesMap;

//node types
export const nodeTypes = {
  [textNode]: TextNode,
};

//initial nodes
export const initialNodes = [
  {
    id: "1",
    position: { x: 10, y: 100 },
    data: { text: "text message 1", isActive: false },
    type: textNode,
  },
  {
    id: "2",
    position: { x: 400, y: 100 },
    data: { text: "text message 2", isActive: false },
    type: textNode,
  },
  {
    id: "3",
    position: { x: 400, y: 250 },
    data: { text: "text message 3", isActive: false },
    type: textNode,
  },
];

//initial edges
export const initialEdges = [
  { id: "1-2", source: "1", target: "2", animated: true },
];

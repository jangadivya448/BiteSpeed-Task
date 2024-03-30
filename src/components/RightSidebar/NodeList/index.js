import { useMemo } from "react";
import NODES, { NODE_NAMES } from "../../../reactflow/nodes";

import { NodeContainer, NodeListContainer } from "./styles";
import NODE_ICONS from "../../../assets/nodes";

function NodeList() {
  // get list of nodes
  const list = useMemo(() => {
    return Object.values(NODES);
  }, []);
  // on drag start of node from rightside bar
  const onDragStart = (event, nodeType) => {
    // store nodeType in dataTransfer to get it back on drop
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <NodeListContainer>
      {list.map((node) => (
        <NodeContainer
          onDragStart={(event) => onDragStart(event, node.type)}
          draggable
          key={`node-${node.type}`}
        >
          <img
            className="node-icon"
            src={NODE_ICONS[node.type].icon}
            alt="icon"
          />
          <p className="node-name">{NODE_NAMES[node.type]}</p>
        </NodeContainer>
      ))}
    </NodeListContainer>
  );
}

export default NodeList;

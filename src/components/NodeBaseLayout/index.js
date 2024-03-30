import { Handle, Position, useEdges } from "reactflow";
import useActiveNodeStore from "../../store";
import NODE_ICONS from "../../assets/nodes";
import { NODE_LABELS } from "../../reactflow/nodes";
import { NodeBaseLayoutContainer, NodeHeaderContainer } from "./styles";
import { useMemo } from "react";

// wrapper for all node which provide header of node
function NodebaseLayout({ id, type, children, isConnectable }) {
  const { activeNodeId } = useActiveNodeStore();
  // node header using type
  const label = NODE_LABELS[type];
  // icons using type
  const icons = NODE_ICONS[type];
  // get all edges
  const edges = useEdges();
  // check node already connect or not
  const isNotConnected = useMemo(() => {
    return !edges.find((edge) => edge.source === id);
  }, [edges]);
  return (
    <NodeBaseLayoutContainer isSelected={activeNodeId === id}>
      {/* target handle */}
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      {/* source handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={id}
        isConnectable={isNotConnected}
      />
      <NodeHeaderContainer>
        <img alt="left icon" className="node-left-icon" src={icons.left} />
        <p className="node-left-label">{label}</p>
        <div className="right-icon-wrp">
          <img alt="right icon" className="node-right-icon" src={icons.right} />
        </div>
      </NodeHeaderContainer>
      <div className="node-content">{children}</div>
    </NodeBaseLayoutContainer>
  );
}

export default NodebaseLayout;

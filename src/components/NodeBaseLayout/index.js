import { Handle, Position, useEdges } from "reactflow";
import NODE_ICONS from "../../assets/icons";
import { NODE_LABELS } from "../../reactflow/nodes";
import { NodeBaseLayoutContainer, NodeHeaderContainer } from "./styles";
import { useMemo } from "react";

function NodebaseLayout({ id, type, children, isConnectable }) {
  const label = NODE_LABELS[type];
  const icons = NODE_ICONS[type];
  const edges = useEdges();
  const isNotConnected = useMemo(() => {
    return !edges.find((edge) => edge.source === id);
  }, [edges]);
  return (
    <NodeBaseLayoutContainer>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
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

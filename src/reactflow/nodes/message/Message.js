import { memo, useMemo } from "react";
import { useNodes } from "reactflow";
import NodebaseLayout from "../../../components/NodeBaseLayout";

// message type Node
function Message(props) {
  const { id, type, isConnectable } = props;
  const nodes = useNodes();
  // get node data from all nodes
  const node = useMemo(() => {
    return nodes?.find((nd) => nd.id === id);
  }, [nodes]);
  return (
    <NodebaseLayout type={type} id={id} isConnectable={isConnectable}>
      <p>{node?.data?.message || ""}</p>
    </NodebaseLayout>
  );
}

export default memo(Message);

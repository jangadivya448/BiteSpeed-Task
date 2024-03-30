import { useNodes } from "reactflow";
import NodebaseLayout from "../../../components/NodeBaseLayout";
import { memo, useMemo } from "react";

function Message(props) {
  const { id, type, isConnectable } = props;
  const nodes = useNodes();
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

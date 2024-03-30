import NodebaseLayout from "../../../components/NodeBaseLayout";
import { memo } from "react";

function Message(props) {
  const { id, data, type, isConnectable } = props;
  return (
    <NodebaseLayout type={type} id={id} isConnectable={isConnectable}>
      <p>{data?.message}</p>
    </NodebaseLayout>
  );
}

export default memo(Message);

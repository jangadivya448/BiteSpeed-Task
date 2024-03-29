import { Handle, Position } from "reactflow";
import NodebaseLayout from "../../../components/NodeBaseLayout";
import { memo } from "react";

function Message(props) {
  const { id, data, type, isConnectable } = props;
  console.log("data-->", data);
  return (
    <NodebaseLayout
      type={type}
      id={id}
      isConnectable={isConnectable}
    ></NodebaseLayout>
  );
}

export default memo(Message);

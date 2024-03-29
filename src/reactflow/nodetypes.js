import { NODE_TYPES } from "./nodes";
import Message from "./nodes/message";

const NodeTypes = {
  [NODE_TYPES.MESSAGE]: Message,
};

export default NodeTypes;

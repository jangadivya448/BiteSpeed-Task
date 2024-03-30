import { NODE_TYPES } from "./nodes";
import { Message, MessageSettings } from "./nodes/message";

const NODE_TYPES_MAP = {
  [NODE_TYPES.MESSAGE]: Message,
};

export const NODE_SETTINGS = {
  [NODE_TYPES.MESSAGE]: MessageSettings,
};

export default NODE_TYPES_MAP;

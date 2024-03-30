import { NODE_TYPES } from "../../reactflow/nodes";
import message from "./message.png";
import message_blue from "./message-blue.png";
import whatsapp from "./whatsapp.png";

// get images based on node type
const NODE_ICONS = {
  [NODE_TYPES.MESSAGE]: {
    left: message,
    icon: message_blue,
    right: whatsapp,
  },
};

export default NODE_ICONS;

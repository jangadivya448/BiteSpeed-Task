import { NODE_TYPES } from "../../reactflow/nodes";
import message from "./message.png";
import whatsapp from "./whatsapp.png";

const NODE_ICONS = {
  [NODE_TYPES.MESSAGE]: {
    left: message,
    right: whatsapp,
  },
};

export default NODE_ICONS;

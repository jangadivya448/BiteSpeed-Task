import { v4 as uuidv4 } from "uuid";
import NODES from "../reactflow/nodes";
import { NODE_WIDTH } from "./constant";

// get unique id
export const generateUUID = () => {
  return uuidv4();
};

// get new node
export const getNewNode = (type, position) => {
  return {
    id: generateUUID(),
    type,
    position: {
      x: position.x - NODE_WIDTH / 2,
      y: position.y - 40,
    },
    data: { ...NODES[type].data },
  };
};

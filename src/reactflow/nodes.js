// all types of node
export const NODE_TYPES = {
  MESSAGE: "message",
};

// node headers of node type
export const NODE_LABELS = {
  [NODE_TYPES.MESSAGE]: "Send Message",
};

// node name of type
export const NODE_NAMES = {
  [NODE_TYPES.MESSAGE]: "Message",
};

// default data of node types
const NODES = {
  [NODE_TYPES.MESSAGE]: {
    type: NODE_TYPES.MESSAGE,
    data: {
      message: "",
    },
  },
};

export default NODES;

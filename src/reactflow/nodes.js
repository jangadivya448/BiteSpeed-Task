export const NODE_TYPES = {
  MESSAGE: "message",
};

export const NODE_LABELS = {
  [NODE_TYPES.MESSAGE]: "Send Message",
};

export const NODE_NAMES = {
  [NODE_TYPES.MESSAGE]: "Message",
};

const NODES = {
  [NODE_TYPES.MESSAGE]: {
    type: NODE_TYPES.MESSAGE,
    data: {
      message: "",
    },
  },
};

export default NODES;

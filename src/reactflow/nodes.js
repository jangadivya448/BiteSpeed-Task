export const NODE_TYPES = {
  MESSAGE: "message",
};

export const NODE_LABELS = {
  [NODE_TYPES.MESSAGE]: "Send Message",
};

const NODES = [
  {
    type: NODE_TYPES.MESSAGE,
    data: {
      message: "",
    },
  },
];

export default NODES;

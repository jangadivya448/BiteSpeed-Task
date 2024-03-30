import { create } from "zustand";

const useActiveNodeStore = create((set) => ({
  activeNodeId: null,
  setActiveNodeId: (nodeId) => set(() => ({ activeNodeId: nodeId })),
}));

export default useActiveNodeStore;

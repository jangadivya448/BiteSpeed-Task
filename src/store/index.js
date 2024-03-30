import { create } from "zustand";

// create zustand store with activeNodeId and setActiveNodeId method
const useActiveNodeStore = create((set) => ({
  activeNodeId: null,
  setActiveNodeId: (nodeId) => set(() => ({ activeNodeId: nodeId })),
}));

export default useActiveNodeStore;

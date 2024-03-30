import { memo } from "react";
import useActiveNodeStore from "../../store";
import NodeList from "./NodeList";
import { RightSidebarContainer } from "./styles";
import NodeSettings from "./NodeSettings";

function RightSidebar() {
  // get activenodeid from store
  const { activeNodeId } = useActiveNodeStore();
  return (
    <RightSidebarContainer>
      {/* render nodelist and node settings based on activenodeid */}
      {activeNodeId ? <NodeSettings /> : <NodeList />}
    </RightSidebarContainer>
  );
}

export default memo(RightSidebar);

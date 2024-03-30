import { memo } from "react";
import useActiveNodeStore from "../../store";
import NodeList from "./NodeList";
import { RightSidebarContainer } from "./styles";
import NodeSettings from "./NodeSettings";

function RightSidebar() {
  const { activeNodeId } = useActiveNodeStore();
  return (
    <RightSidebarContainer>
      {activeNodeId ? <NodeSettings /> : <NodeList />}
    </RightSidebarContainer>
  );
}

export default memo(RightSidebar);

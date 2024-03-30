import { memo, useMemo } from "react";
import { useNodes, useReactFlow } from "reactflow";
import useActiveNodeStore from "../../../store";

import { SettingsContainer } from "./styles";
import { NODE_NAMES } from "../../../reactflow/nodes";
import { NODE_SETTINGS } from "../../../reactflow/nodetypes";

import arrow from "../../../assets/icons/arrow.png";

function NodeSettings() {
  const { activeNodeId, setActiveNodeId } = useActiveNodeStore();
  const nodes = useNodes();
  const node = useMemo(() => {
    return nodes?.find((nd) => nd.id === activeNodeId);
  }, [nodes]);
  const SettingsComp = NODE_SETTINGS[node?.type];
  const goBack = () => {
    setActiveNodeId(null);
  };
  return (
    <SettingsContainer>
      <div className="seettings-header">
        <img onClick={goBack} className="back-icon" src={arrow} alt="go back" />
        <p className="node-name">{NODE_NAMES[node?.type]}</p>
      </div>
      <div className="seettings-body">
        {SettingsComp && <SettingsComp node={node} />}
      </div>
    </SettingsContainer>
  );
}

export default memo(NodeSettings);

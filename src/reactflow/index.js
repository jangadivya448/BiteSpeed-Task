import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  MarkerType,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import useActiveNodeStore from "../store";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import NODE_TYPES_MAP from "./nodetypes";
import { getNewNode } from "../utils";

import { MainComponent, ReactFlowContainer, ReactFlowWrapper } from "./styles";



export default function Reactflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { setActiveNodeId } = useActiveNodeStore();
  const onConnect = useCallback((params) => {
    const { source, target } = params || {};
    if (source !== target) {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
              color: "#808080",
            },
            style: {
              strokeWidth: 2,
              stroke: "#808080",
            },
          },
          eds,
        ),
      );
    }
  }, []);
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = getNewNode(type, position);
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  const onNodeClick = useCallback((_, node) => {
    setActiveNodeId(node?.id);
  }, []);
  const onPaneClick = useCallback(() => {
    // setActiveNodeId(null);
  }, []);
  return (
    <MainComponent>
      <Header />
      <ReactFlowWrapper>
        <ReactFlowContainer>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={NODE_TYPES_MAP}
            onInit={setReactFlowInstance}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
          >
            <Background gap={25} />
          </ReactFlow>
        </ReactFlowContainer>
        <RightSidebar />
      </ReactFlowWrapper>
    </MainComponent>
  );
}

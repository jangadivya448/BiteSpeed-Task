import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  MarkerType,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import Header from "../components/Header";
import NodeTypes from "./nodetypes";
import RightSidebar from "../components/RightSidebar";

import { MainComponent, ReactFlowContainer, ReactFlowWrapper } from "./styles";

import "reactflow/dist/style.css";
import { getNewNode } from "../utils";

export default function Reactflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
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
  return (
    <MainComponent>
      <Header />
      <ReactFlowWrapper>
        <ReactFlowContainer>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={NodeTypes}
            onInit={setReactFlowInstance}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Background />
          </ReactFlow>
        </ReactFlowContainer>
        <RightSidebar />
      </ReactFlowWrapper>
    </MainComponent>
  );
}

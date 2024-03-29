import React from "react";
import ReactFlow, { Background, useEdgesState, useNodesState } from "reactflow";
import { MainComponent, ReactFlowContainer, ReactFlowWrapper } from "./styles";

import "reactflow/dist/style.css";
import ConnectionLine from "./edges/ConnectionLine";
import Header from "../components/Header";
import NodeTypes from "./nodetypes";
import RightSidebar from "../components/RightSidebar";

export default function Reactflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      type: "message",
      data: {
        label: "message_label",
        leftIcon: "",
        rightIcon: "",
        payload: {
          message: "",
        },
      },
      position: { x: 10, y: 50 },
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  return (
    <MainComponent>
      <Header />
      <ReactFlowWrapper>
        <ReactFlowContainer>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={NodeTypes}
            // connectionLineComponent={ConnectionLine}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={(params) => {
              console.log("onconnect-->", params);
            }}
          >
            <Background />
          </ReactFlow>
        </ReactFlowContainer>
        <RightSidebar />
      </ReactFlowWrapper>
    </MainComponent>
  );
}

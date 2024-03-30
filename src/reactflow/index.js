import React, { useCallback, useState } from "react";
// importing reactflow and it's necessaries
import ReactFlow, {
  Background,
  MarkerType,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
// zustand store which store and set activeNodeId (id which node is selected or clicked)
import useActiveNodeStore from "../store";
// header part
import Header from "../components/Header";
// rightside nodes & settings panel
import RightSidebar from "../components/RightSidebar";
// custom nodes map
import NODE_TYPES_MAP from "./nodetypes";
// helper method to get newNode
import { getNewNode } from "../utils";

import { MainComponent, ReactFlowContainer, ReactFlowWrapper } from "./styles";

// Reactflow component
export default function Reactflow() {
  // useNodesState hook for initial nodes, node changes and to set nodes
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  // useEdgesState hook for initial edges, edge changes and to set edges
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // store reactflow instance
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // zustand action method to set activeActiveNodeId
  const { setActiveNodeId } = useActiveNodeStore();
  // onConnect: triggers when handle is connected to any other node
  const onConnect = useCallback((params) => {
    // source and taeget node id of new edge or connection
    const { source, target } = params || {};
    // same node should node connect to itself
    if (source !== target) {
      // add new edge to canvas
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            // edge end arrow styling
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
              color: "#808080",
            },
            // edge style
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
  // onDragOver: triggers when drag ends
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  // onDrop: triggers when something drops (node from rightside)
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      // get type from dataTransfer
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) {
        return;
      }
      // get flow drop position using event position
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      // create new node
      const newNode = getNewNode(type, position);
      // add new node to canvas
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  // onNodeClick: triggers when click on node
  const onNodeClick = useCallback((_, node) => {
    // set activeNodeId to open node settings on rightsidebar
    setActiveNodeId(node?.id);
  }, []);
  // onPaneClick: triggers when click on canvas empty pane
  const onPaneClick = useCallback(() => {
    // uncomment below line to clear activeNodeId on click of canvas empty space, means close settings of selected node on click of empty pane
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
            {/* dotted backgground to identify canvas */}
            <Background gap={25} />
          </ReactFlow>
        </ReactFlowContainer>
        <RightSidebar />
      </ReactFlowWrapper>
    </MainComponent>
  );
}

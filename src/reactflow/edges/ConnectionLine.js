import React, { memo } from "react";
import { getBezierPath } from "reactflow";

const ConnectionLine = memo(function ConnectionLine({
  id,
  fromX,
  fromY,
  toX,
  toY,
  fromPosition,
  toPosition,
}) {
  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition,
  });

  return (
    <>
      <marker
        id="headArrow"
        refX="0"
        refY="0"
        markerWidth="12.5"
        markerHeight="12.5"
        viewBox="-10 -10 20 20"
        orient="auto-start-reverse"
      >
        <polyline
          stroke="var(--palette-primary-main)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill="var(--palette-primary-main)"
          points="-5,-4 0,0 -5,4 -5,-4"
        />
      </marker>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd="url(#headArrow)"
      />
    </>
  );
});

export default ConnectionLine;

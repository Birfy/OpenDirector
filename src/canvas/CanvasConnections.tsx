import {
  BaseEdge,
  getBezierPath,
  Position,
  ViewportPortal,
  type EdgeProps,
  type Edge,
  type ConnectionLineComponentProps,
} from "@xyflow/react";
import { referencePreviewPath, type PortSide } from "./connectionPorts";
import { edgePath } from "./edgeGeometry";
import type { Point, Rect } from "./model";
import type { SnapGuide } from "./snapping";

export type ReferenceEdge = Edge<{
  emphasized: boolean;
  state?: "current" | "pending" | "provenance";
  description?: string;
  sourceBounds?: Rect;
  targetBounds?: Rect;
  bidirectional?: boolean;
}>;
export function CanvasReferenceEdge(props: EdgeProps<ReferenceEdge>) {
  const path =
    props.data?.sourceBounds && props.data.targetBounds
      ? edgePath(
          props.data.sourceBounds,
          props.data.targetBounds,
          props.data.bidirectional,
        )
      : getBezierPath(props)[0];
  const emphasized = Boolean(props.data?.emphasized || props.selected);
  return (
    <g
      data-reference-state={props.data?.state ?? "pending"}
      className={`cw-reference-edge is-${props.data?.state ?? "pending"} ${emphasized ? "is-emphasized" : ""}`}
    >
      <title>{props.data?.description ?? "参考连线"}</title>
      <defs>
        <marker
          id={`arrow-${props.id}`}
          viewBox="0 0 8 8"
          refX="8"
          refY="4"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
        </marker>
      </defs>
      <BaseEdge
        id={props.id}
        path={path}
        interactionWidth={24}
        markerEnd={`url(#arrow-${props.id})`}
      />
      {emphasized && (
        <g className="cw-edge-motion" aria-hidden="true">
          <path className="cw-edge-glow" d={path} pathLength={100} />
          <path className="cw-edge-trail" d={path} pathLength={100} />
          <path className="cw-edge-head" d={path} pathLength={100} />
        </g>
      )}
    </g>
  );
}

export function CanvasConnectionLine(props: ConnectionLineComponentProps) {
  const [path] = getBezierPath({
    sourceX: props.fromX,
    sourceY: props.fromY,
    sourcePosition: props.fromPosition,
    targetX: props.toX,
    targetY: props.toY,
    targetPosition: props.toPosition,
  });
  return (
    <path
      className={`cw-connection-preview ${props.connectionStatus === "invalid" ? "is-invalid" : ""}`}
      d={path}
    />
  );
}

export function CanvasInteractionOverlay({
  guides,
  pending,
}: {
  guides: readonly SnapGuide[];
  pending?: {
    from: Point;
    to: Point;
    direction: "source" | "target";
    side?: PortSide;
  };
}) {
  const path =
    pending &&
    (pending.side
      ? referencePreviewPath(pending.from, pending.side, pending.to)
      : getBezierPath({
          sourceX: pending.from.x,
          sourceY: pending.from.y,
          sourcePosition:
            pending.direction === "source" ? Position.Right : Position.Left,
          targetX: pending.to.x,
          targetY: pending.to.y,
          targetPosition:
            pending.direction === "source" ? Position.Left : Position.Right,
        })[0]);
  return (
    <ViewportPortal>
      <svg className="cw-interaction-overlay" aria-hidden="true">
        {guides.map((guide) => (
          <line
            key={guide.axis}
            data-testid={`canvas-snap-guide-${guide.axis}`}
            className="cw-snap-guide"
            x1={guide.axis === "x" ? guide.coordinate : guide.start}
            y1={guide.axis === "y" ? guide.coordinate : guide.start}
            x2={guide.axis === "x" ? guide.coordinate : guide.end}
            y2={guide.axis === "y" ? guide.coordinate : guide.end}
          />
        ))}
        {pending && (
          <g data-testid="pending-connection">
            <path className="cw-connection-preview" d={path} />
            <circle
              className="cw-connection-endpoint"
              cx={pending.to.x}
              cy={pending.to.y}
              r={4}
            />
          </g>
        )}
      </svg>
    </ViewportPortal>
  );
}

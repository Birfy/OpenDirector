import {
  BaseEdge,
  getBezierPath,
  Position,
  ViewportPortal,
  type EdgeProps,
  type Edge,
  type ConnectionLineComponentProps,
} from "@xyflow/react";
import type { Point } from "./model";
import type { SnapGuide } from "./snapping";

export type ReferenceEdge = Edge<{ emphasized: boolean; running: boolean }>;
export function CanvasReferenceEdge(props: EdgeProps<ReferenceEdge>) {
  const [path] = getBezierPath(props);
  return (
    <g
      className={`cw-reference-edge ${props.data?.emphasized ? "is-emphasized" : ""} ${props.data?.running ? "is-running" : ""}`}
    >
      <BaseEdge id={props.id} path={path} interactionWidth={24} />
      <path className="cw-edge-flow" d={path} pathLength={1000} />
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
  pending?: { from: Point; to: Point; direction: "source" | "target" };
}) {
  const path =
    pending &&
    getBezierPath({
      sourceX: pending.from.x,
      sourceY: pending.from.y,
      sourcePosition:
        pending.direction === "source" ? Position.Right : Position.Left,
      targetX: pending.to.x,
      targetY: pending.to.y,
      targetPosition:
        pending.direction === "source" ? Position.Left : Position.Right,
    })[0];
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

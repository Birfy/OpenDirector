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
/** The first and last points of an SVG path: the edge's source and target ends. */
function pathEnds(path: string) {
  const numbers = path.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)?.map(Number);
  if (!numbers || numbers.length < 4) return null;
  const end = numbers.length;
  return [numbers[0], numbers[1], numbers[end - 2], numbers[end - 1]];
}

function EdgeMotion({ path }: { path: string }) {
  return (
    <g className="cw-edge-motion" aria-hidden="true">
      {/* Concentric segments form the same moving spindle on every path. */}
      <path className="cw-edge-comet-glow" d={path} pathLength={100} />
      <path className="cw-edge-comet-1" d={path} pathLength={100} />
      <path className="cw-edge-comet-2" d={path} pathLength={100} />
      <path className="cw-edge-comet-3" d={path} pathLength={100} />
      <path className="cw-edge-comet-4" d={path} pathLength={100} />
      <path className="cw-edge-comet-5" d={path} pathLength={100} />
      <path className="cw-edge-comet-6" d={path} pathLength={100} />
    </g>
  );
}

export function CanvasConnectionPreview({
  path,
  invalid = false,
}: {
  path: string;
  invalid?: boolean;
}) {
  return (
    <g className={`cw-connection ${invalid ? "is-invalid" : ""}`}>
      <path
        className={`cw-connection-preview ${invalid ? "is-invalid" : ""}`}
        d={path}
      />
      {!invalid && <EdgeMotion path={path} />}
    </g>
  );
}

export function CanvasReferenceEdge(props: EdgeProps<ReferenceEdge>) {
  const path =
    props.data?.sourceBounds && props.data.targetBounds
      ? edgePath(
          props.data.sourceBounds,
          props.data.targetBounds,
          props.data.bidirectional,
        )
      : getBezierPath(props)[0];
  const emphasized = props.data?.emphasized ?? Boolean(props.selected);
  // Brightening from source to target shows the direction without an arrow.
  const ends = pathEnds(path);
  const fade = `edge-fade-${props.id}`;
  return (
    <g
      data-reference-state={props.data?.state ?? "pending"}
      className={`cw-reference-edge is-${props.data?.state ?? "pending"} ${emphasized ? "is-emphasized" : ""}`}
    >
      <title>{props.data?.description ?? "参考连线"}</title>
      {ends && (
        <defs>
          <linearGradient
            id={fade}
            gradientUnits="userSpaceOnUse"
            x1={ends[0]}
            y1={ends[1]}
            x2={ends[2]}
            y2={ends[3]}
          >
            <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="1" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
      )}
      <BaseEdge
        id={props.id}
        path={path}
        interactionWidth={24}
        style={ends ? { stroke: `url(#${fade})` } : undefined}
      />
      {emphasized && <EdgeMotion path={path} />}
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
    <CanvasConnectionPreview
      path={path}
      invalid={props.connectionStatus === "invalid"}
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
            <CanvasConnectionPreview path={path!} />
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

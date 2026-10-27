import { CANVAS_LIMIT } from './types';

export interface Point { x: number; y: number }
export interface NodeOrigin extends Point { id: string }
export interface NodeBounds extends NodeOrigin { width: number; height: number }
export interface NodeMove extends NodeOrigin { expectedX: number; expectedY: number }

export function selectionRect(start: Point, end: Point) {
  return { x: Math.min(start.x, end.x), y: Math.min(start.y, end.y), width: Math.abs(end.x - start.x), height: Math.abs(end.y - start.y) };
}

export function intersectingNodes(start: Point, end: Point, bounds: NodeBounds[]) {
  const rect = selectionRect(start, end);
  return bounds.filter(node => node.x < rect.x + rect.width && node.x + node.width > rect.x
    && node.y < rect.y + rect.height && node.y + node.height > rect.y).map(node => node.id);
}

export function moveSelection(origins: NodeOrigin[], dx: number, dy: number): NodeMove[] {
  // Clamp the group's delta, preserving every relative position at the boundary.
  const x = Math.max(...origins.map(node => -CANVAS_LIMIT - node.x), Math.min(dx, ...origins.map(node => CANVAS_LIMIT - node.x)));
  const y = Math.max(...origins.map(node => -CANVAS_LIMIT - node.y), Math.min(dy, ...origins.map(node => CANVAS_LIMIT - node.y)));
  return origins.map(node => ({ id: node.id, expectedX: node.x, expectedY: node.y, x: node.x + x, y: node.y + y }));
}

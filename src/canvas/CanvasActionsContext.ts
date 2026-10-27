import { createContext, type MouseEvent } from "react";
import type { CanvasNode, CanvasNodeData } from "./model";
import type { NodeGenerationActivity } from "./generationActivity";

export interface CanvasActions {
  update: (id: string, data: Partial<CanvasNodeData>) => void;
  rename: (id: string) => void;
  upload: (id: string) => void;
  preview: (id: string) => void;
  newConnected: (id: string, direction: "source" | "target") => void;
  contextMenu: (id: string, event: MouseEvent) => void;
  beginEdit?: (id: string) => void;
  endEdit?: (id: string) => void;
  beginResize?: (id: string) => void;
  endResize?: (id: string) => void;
  isTextEditing: (id: string) => boolean;
  finishTextEdit: () => void;
  edit: (id: string) => void;
  isLocked: (id: string) => boolean;
  getNode: (id: string) => CanvasNode | undefined;
  generationActivity: (id: string) => NodeGenerationActivity | undefined;
  isArriving: (id: string) => boolean;
  cycleStack: (id: string, delta: number) => void;
  metadata: (
    id: string,
    media: { width?: number; height?: number; durationSeconds?: number },
  ) => void;
}

export const CanvasActionsContext = createContext<CanvasActions | null>(null);

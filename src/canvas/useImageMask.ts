import { useEffect, useMemo, useRef, useState } from "react";
import { loadLayerImage } from "./layerRenderer";
import {
  paintImageInk,
  type ImageInkStroke,
  type ImagePoint,
  type ImageSize,
} from "./imageActionGeometry";
import { tNow } from "../i18n/messages.ts";

export interface SelectionQuery {
  prompt?: string;
  boxes?: { x: number; y: number; width: number; height: number }[];
}
export interface SelectionInstance {
  id: string;
  maskDataUrl: string;
  label?: string;
}
export interface SelectionPreview extends ImageSize {
  instances: SelectionInstance[];
}
export type PreviewSelection = (
  query: SelectionQuery,
  signal: AbortSignal,
) => Promise<SelectionPreview>;
type MaskOperation =
  | { kind: "stroke"; stroke: ImageInkStroke }
  | { kind: "instance"; image: HTMLImageElement; remove: boolean }
  | { kind: "replace"; instances: { id: string; image: HTMLImageElement }[] };

/** Selection history belongs to this source, separate from colored annotations.
 * Image operations retain shared decoded instances; brush history retains vectors.
 */
export function useImageMask({
  size,
  initialMask,
  ready,
  preview,
  autoSelect,
}: {
  size: ImageSize | null;
  initialMask: HTMLImageElement | null;
  ready: boolean;
  preview?: PreviewSelection;
  autoSelect: boolean;
}) {
  const [history, setHistory] = useState<{
    operations: MaskOperation[];
    cursor: number;
  }>({ operations: [], cursor: 0 });
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const controller = useRef<AbortController | null>(null);
  const initialized = useRef(false);
  const provider = useRef(preview);
  provider.current = preview;
  const cancel = () => {
    controller.current?.abort();
    controller.current = null;
    setPending(false);
  };
  useEffect(() => () => controller.current?.abort(), []);
  const commit = (operation: MaskOperation) => {
    initialized.current = true;
    cancel();
    setHistory((state) => ({
      operations: [...state.operations.slice(0, state.cursor), operation],
      cursor: state.cursor + 1,
    }));
  };
  const mask = useMemo(() => {
    if (!size || !ready) return null;
    const target = document.createElement("canvas");
    target.width = size.width;
    target.height = size.height;
    const ctx = target.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    if (initialMask) ctx.drawImage(initialMask, 0, 0);
    for (const operation of history.operations.slice(0, history.cursor)) {
      ctx.save();
      if (operation.kind === "stroke")
        paintImageInk(ctx, [operation.stroke], size, true);
      else if (operation.kind === "replace") {
        ctx.clearRect(0, 0, size.width, size.height);
        for (const { image } of operation.instances) ctx.drawImage(image, 0, 0);
      } else {
        ctx.globalCompositeOperation = operation.remove
          ? "destination-out"
          : "source-over";
        ctx.drawImage(operation.image, 0, 0);
      }
      ctx.restore();
    }
    return target;
  }, [size?.width, size?.height, ready, initialMask, history]);
  const hasMask = useMemo(() => {
    if (!mask) return false;
    const data = mask
      .getContext("2d")!
      .getImageData(0, 0, mask.width, mask.height).data;
    for (let index = 3; index < data.length; index += 4)
      if (data[index]! > 0) return true;
    return false;
  }, [mask]);
  const recognize = async (query: SelectionQuery = {}) => {
    if (!provider.current || !size || !ready) return;
    cancel();
    const run = new AbortController();
    controller.current = run;
    setPending(true);
    setMessage("");
    try {
      const result = await provider.current(query, run.signal);
      if (result.width !== size.width || result.height !== size.height)
        throw new Error(tNow("errors.mask.size"));
      const decoded = await Promise.all(
        result.instances.map(async (item) => {
          const image = await loadLayerImage(item.maskDataUrl);
          if (
            image.naturalWidth !== size.width ||
            image.naturalHeight !== size.height
          )
            throw new Error(tNow("errors.mask.sizeShort"));
          return { id: item.id, image };
        }),
      );
      if (run.signal.aborted || controller.current !== run) return;
      if (decoded.length) {
        commit({ kind: "replace", instances: decoded });
        setMessage(tNow("errors.mask.recognized", { count: decoded.length }));
      } else setMessage(tNow("errors.mask.none"));
    } catch (failure) {
      if (!run.signal.aborted && controller.current === run)
        setMessage(
          failure instanceof Error
            ? failure.message
            : tNow("errors.mask.failed"),
        );
    } finally {
      if (controller.current === run) {
        controller.current = null;
        setPending(false);
      }
    }
  };
  useEffect(() => {
    if (!ready || initialized.current || !size) return;
    if (!initialMask && autoSelect && !preview) return;
    initialized.current = true;
    if (!initialMask && autoSelect) void recognize();
  }, [ready, initialMask, autoSelect, !!preview]);
  const instances = useMemo(() => {
    const latest = history.operations
      .slice(0, history.cursor)
      .reverse()
      .find((operation) => operation.kind === "replace");
    return latest?.kind === "replace" ? latest.instances : [];
  }, [history]);
  const toggleAt = (point: ImagePoint) => {
    if (!mask || !instances.length) {
      setMessage(tNow("errors.mask.selectFirst"));
      return;
    }
    const x = Math.min(mask.width - 1, Math.max(0, Math.floor(point.x)));
    const y = Math.min(mask.height - 1, Math.max(0, Math.floor(point.y)));
    const probe = document.createElement("canvas");
    probe.width = probe.height = 1;
    const ctx = probe.getContext("2d", { willReadFrequently: true })!;
    // The masks, rather than their bounding boxes, own hit testing.
    const hit = [...instances].reverse().find(({ image }) => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.drawImage(image, x, y, 1, 1, 0, 0, 1, 1);
      return ctx.getImageData(0, 0, 1, 1).data[3]! > 127;
    });
    if (!hit) {
      setMessage(tNow("errors.mask.noObject"));
      return;
    }
    const remove =
      mask.getContext("2d")!.getImageData(x, y, 1, 1).data[3]! > 127;
    commit({ kind: "instance", image: hit.image, remove });
    setMessage(remove ? tNow("errors.mask.removed") : tNow("errors.mask.added"));
  };
  return {
    mask,
    hasMask,
    pending,
    message,
    recognize,
    cancel,
    toggleAt,
    edited: Boolean(initialMask) || history.operations.length > 0,
    canUndo: history.cursor > 0,
    canRedo: history.cursor < history.operations.length,
    undo: () => {
      cancel();
      setHistory((state) => ({
        ...state,
        cursor: Math.max(0, state.cursor - 1),
      }));
    },
    redo: () => {
      cancel();
      setHistory((state) => ({
        ...state,
        cursor: Math.min(state.operations.length, state.cursor + 1),
      }));
    },
    record: (stroke: ImageInkStroke) => commit({ kind: "stroke", stroke }),
  };
}

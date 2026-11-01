import a from "oa";
import r from "bk";
import o from "bT";
import l from "B59";
import { g as g_1 } from "./module-Ko.js";
import c from "wF";
import s from "Ev";
import u from "Kt";
import { S as S_1 } from "./module-jz.js";
export function t(e) {
  const {
    droppableId,
    accept,
    disabled = false,
    readOnly = false,
    droppable = true,
    droppableData,
    multiple,
    onChange,
  } = e;
  const g = c.h(u._);
  const data = o.useMemo(
    () =>
      r._(a._({}, droppableData), {
        accept,
        disabled: disabled || readOnly,
      }),
    [droppableData, accept, disabled, readOnly],
  );
  const { setNodeRef, isOver } = l.zM({
    id: droppableId,
    data,
    disabled: !droppable || disabled || readOnly,
  });
  const { active } = l.fF();
  const w = o.useMemo(() => {
    if (!active || !isOver) {
      return true;
    }
    var current = active.data.current;
    return (
      !!(current == null ? undefined : current.mimeType) &&
      S_1(current.mimeType, accept)
    );
  }, [active, isOver, accept]);
  const [N, setN] = o.useState(false);
  const [j, setJ] = o.useState(true);
  const ARef = o.useRef(0);
  const E = o.useCallback(
    (e) => {
      if (!accept || (s.nr && !e.items.length)) {
        return true;
      }
      for (var t of e.items) {
        if (t.kind === "file" && (!t.type || S_1(t.type, accept))) {
          return true;
        }
      }
      return false;
    },
    [accept],
  );
  const R = o.useCallback(() => {
    setN(false);
    setJ(true);
    ARef.current = 0;
  }, []);
  const handleDragEnter = o.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!(disabled || readOnly)) {
        ARef.current += 1;
        if (ARef.current === 1) {
          setN(true);
          setJ(E(e.dataTransfer));
        }
      }
    },
    [disabled, readOnly, E],
  );
  const handleDragLeave = o.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      ARef.current -= 1;
      if (ARef.current <= 0) {
        var t = e.relatedTarget;
        var { currentTarget } = e;
        if (!(t && currentTarget.contains(t))) {
          R();
        }
      }
    },
    [R],
  );
  const handleDragOver = o.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!(disabled || readOnly)) {
        if (!s.nr && j) {
          e.dataTransfer.dropEffect = "copy";
        }
      }
    },
    [disabled, readOnly, j],
  );
  const handleDrop = o.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      R();
      if (!disabled && !readOnly) {
        var t = Array.from(e.dataTransfer.files);
        if (t.length !== 0) {
          var a = accept ? g_1(g, t, accept).acceptedFiles : t;
          if (a.length !== 0) {
            if (onChange != null) {
              onChange(multiple ? a : a.slice(0, 1));
            }
          }
        }
      }
    },
    [accept, g, disabled, readOnly, multiple, onChange, R],
  );
  const isLocalDragAccepted = N && j;
  const isRemoteDragAccepted = isOver && w;
  return {
    setNodeRef,
    isDragAccepted: isLocalDragAccepted || isRemoteDragAccepted,
    isLocalDragAccepted,
    isRemoteDragAccepted,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
}

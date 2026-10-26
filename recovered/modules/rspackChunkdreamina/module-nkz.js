import r from "A3";
import l from "SfX";
import n from "zS";
import i from "gY";
import s from "bT";
export function X(e) {
  const {
    el,
    zeroAt,
    controlledProgress,
    onDragMove,
    onDragStart,
    onDragEnd,
    throttle,
  } = e;
  const [p, setP] = s.useState(0);
  const [h, g, y] = l.A(false);
  s.useEffect(() => {
    if (!(h || i.A(controlledProgress))) {
      setP(controlledProgress);
    }
  }, [controlledProgress, h]);
  const f = n.A((e) => {
    var r = el == null ? undefined : el.getBoundingClientRect();
    if (!r) {
      return 0;
    }
    var l = 0;
    switch (zeroAt) {
      case "left":
        l = (e.x - r.x) / r.width;
        break;
      case "right":
        l = 1 - (e.x - r.x) / r.width;
        break;
      case "top":
        l = (e.y - r.y) / r.height;
        break;
      case "bottom":
        l = 1 - (e.y - r.y) / r.height;
        break;
      default:
        console.error("invalid parameter 'zeroAt': ".concat(zeroAt));
    }
    return Math.max(0, Math.min(l, 1));
  });
  const progress = s.useMemo(() => {
    if (h || i.A(controlledProgress)) {
      return p;
    }
    return controlledProgress;
  }, [controlledProgress, h, p]);
  const { run } = r.default(
    (e) => {
      if (onDragMove != null) {
        onDragMove(e);
      }
      setP(e);
    },
    throttle != null ? throttle : 100,
  );
  const x = n.A((e) => {
    if (y()) {
      run(f(e));
    }
  });
  var k = n.A((e) => {
    if (y()) {
      g(false);
      var t = f(e);
      setP(t);
      if (onDragEnd != null) {
        onDragEnd(t);
      }
      document.removeEventListener("mouseup", k);
      document.removeEventListener("mousemove", x);
    }
  });
  const S = n.A((e) => {
    document.addEventListener("mouseup", k);
    document.addEventListener("mousemove", x);
    e.stopPropagation();
    g(true);
    var t = f(e);
    setP(t);
    if (onDragStart != null) {
      onDragStart(t);
    }
  });
  const C = n.A((e) => {
    e.stopPropagation();
  });
  s.useEffect(() => {
    if (el != null) {
      el.addEventListener("mousedown", S);
    }
    if (el != null) {
      el.addEventListener("pointerdown", C);
    }
    return () => {
      document.removeEventListener("mouseup", k);
      document.removeEventListener("mousemove", x);
      if (el != null) {
        el.removeEventListener("mousedown", S);
      }
      if (el != null) {
        el.removeEventListener("pointerdown", C);
      }
    };
  }, [el, S, x, k, C]);
  return {
    progress,
    isDragging: h,
  };
}

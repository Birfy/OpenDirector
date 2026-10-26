import D from "bT";
import C from "PC";
import {
  $$,
  Es,
  KG,
  Ks,
  Ll,
  Re,
  Sw,
  TW,
  WQ,
  YG,
  YN,
  ZC,
  _q,
  ag,
  e_ as e__1,
  kx,
  l6,
  lk,
  sb,
  wz,
  xZ,
  zk,
} from "./module-nE.js";
let r;
let l;
let i;
let a;
let o;
let u;
let s;
let c;
let d;
let f;
let h;
let g;
let v;
export var vL;
let m;
let b;
let y;
let w;
let x;
let E;
let M = {
  display: "none",
};
function k(e) {
  let { id, value } = e;
  return D.createElement(
    "div",
    {
      id,
      style: M,
    },
    value,
  );
}
function R(e) {
  let { id, announcement, ariaLiveType = "assertive" } = e;
  return D.createElement(
    "div",
    {
      id,
      style: {
        position: "fixed",
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(100%)",
        whiteSpace: "nowrap",
      },
      role: "status",
      "aria-live": ariaLiveType,
      "aria-atomic": true,
    },
    announcement,
  );
}
let TContext = D.createContext(null);
export function E5(e) {
  let t = D.useContext(TContext);
  D.useEffect(() => {
    if (!t) {
      throw Error(
        "useDndMonitor must be used within a children of <DndContext>",
      );
    }
    return t(e);
  }, [e, t]);
}
let L = {
  draggable:
    "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ",
};
let N = {
  onDragStart(e) {
    let { active } = e;
    return "Picked up draggable item " + active.id + ".";
  },
  onDragOver(e) {
    let { active, over } = e;
    if (over) {
      return (
        "Draggable item " +
        active.id +
        " was moved over droppable area " +
        over.id +
        "."
      );
    }
    return (
      "Draggable item " + active.id + " is no longer over a droppable area."
    );
  },
  onDragEnd(e) {
    let { active, over } = e;
    if (over) {
      return (
        "Draggable item " +
        active.id +
        " was dropped over droppable area " +
        over.id
      );
    }
    return "Draggable item " + active.id + " was dropped.";
  },
  onDragCancel(e) {
    let { active } = e;
    return (
      "Dragging was cancelled. Draggable item " + active.id + " was dropped."
    );
  },
};
function ZComponent(e) {
  let {
    announcements = N,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = L,
  } = e;
  let { announce, announcement } = (() => {
    let [announcement_1, setE] = D.useState("");
    return {
      announce: D.useCallback((e) => {
        if (e != null) {
          setE(e);
        }
      }, []),
      announcement: announcement_1,
    };
  })();
  let id = YG("DndLiveRegion");
  let [u, setU] = D.useState(false);
  D.useEffect(() => {
    setU(true);
  }, []);
  E5(
    D.useMemo(
      () => ({
        onDragStart(e) {
          let { active } = e;
          announce(
            announcements.onDragStart({
              active,
            }),
          );
        },
        onDragMove(e) {
          let { active, over } = e;
          if (announcements.onDragMove) {
            announce(
              announcements.onDragMove({
                active,
                over,
              }),
            );
          }
        },
        onDragOver(e) {
          let { active, over } = e;
          announce(
            announcements.onDragOver({
              active,
              over,
            }),
          );
        },
        onDragEnd(e) {
          let { active, over } = e;
          announce(
            announcements.onDragEnd({
              active,
              over,
            }),
          );
        },
        onDragCancel(e) {
          let { active, over } = e;
          announce(
            announcements.onDragCancel({
              active,
              over,
            }),
          );
        },
      }),
      [announce, announcements],
    ),
  );
  if (!u) {
    return null;
  }
  let c = D.createElement(
    D.Fragment,
    null,
    D.createElement(k, {
      id: hiddenTextDescribedById,
      value: screenReaderInstructions.draggable,
    }),
    D.createElement(R, {
      id,
      announcement,
    }),
  );
  if (container) {
    return C.createPortal(c, container);
  }
  return c;
}
function A() {}
export function MS(sensor, t) {
  return D.useMemo(
    () => ({
      sensor,
      options: t != null ? t : {},
    }),
    [sensor, t],
  );
}
l = h || (h = {});
l.DragStart = "dragStart";
l.DragMove = "dragMove";
l.DragEnd = "dragEnd";
l.DragCancel = "dragCancel";
l.DragOver = "dragOver";
l.RegisterDroppable = "registerDroppable";
l.SetDroppableDisabled = "setDroppableDisabled";
l.UnregisterDroppable = "unregisterDroppable";
let Y = Object.freeze({
  x: 0,
  y: 0,
});
function W(e, t) {
  return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function B(e, t) {
  let {
    data: { value },
  } = e;
  let {
    data: { value: value_1 },
  } = t;
  return value - value_1;
}
function K(e, t) {
  let {
    data: { value },
  } = e;
  let {
    data: { value: value_1 },
  } = t;
  return value_1 - value;
}
function F(e, t = e.left, n = e.top) {
  return {
    x: t + 0.5 * e.width,
    y: n + 0.5 * e.height,
  };
}
export let fp = (e) => {
  let { collisionRect, droppableRects, droppableContainers } = e;
  let l = F(collisionRect, collisionRect.left, collisionRect.top);
  let i = [];
  for (let e of droppableContainers) {
    let { id } = e;
    let r = droppableRects.get(id);
    if (r) {
      let n = W(F(r), l);
      i.push({
        id,
        data: {
          droppableContainer: e,
          value: n,
        },
      });
    }
  }
  return i.sort(B);
};
export let Qo = (e) => {
  let { collisionRect, droppableRects, droppableContainers } = e;
  let l = [];
  for (let e of droppableContainers) {
    let { id } = e;
    let i = droppableRects.get(id);
    if (i) {
      let n = ((e, t) => {
        let n = Math.max(t.top, e.top);
        let r = Math.max(t.left, e.left);
        let l = Math.min(t.left + t.width, e.left + e.width);
        let i = Math.min(t.top + t.height, e.top + e.height);
        if (r < l && n < i) {
          let a = t.width * t.height;
          let o = e.width * e.height;
          let u = (l - r) * (i - n);
          return Number((u / (a + o - u)).toFixed(4));
        }
        return 0;
      })(i, collisionRect);
      if (n > 0) {
        l.push({
          id,
          data: {
            droppableContainer: e,
            value: n,
          },
        });
      }
    }
  }
  return l.sort(K);
};
export let TT = (e) => {
  let { droppableContainers, droppableRects, pointerCoordinates } = e;
  if (!pointerCoordinates) {
    return [];
  }
  let l = [];
  for (let e of droppableContainers) {
    let { id } = e;
    let i = droppableRects.get(id);
    if (
      i &&
      ((e, t) => {
        let { top, left, bottom, right } = t;
        return top <= e.y && e.y <= bottom && left <= e.x && e.x <= right;
      })(pointerCoordinates, i)
    ) {
      let n = Number(
        (
          ((e) => {
            let { left, top, height, width } = e;
            return [
              {
                x: left,
                y: top,
              },
              {
                x: left + width,
                y: top,
              },
              {
                x: left,
                y: top + height,
              },
              {
                x: left + width,
                y: top + height,
              },
            ];
          })(i).reduce((acc, item) => acc + W(pointerCoordinates, item), 0) / 4
        ).toFixed(4),
      );
      l.push({
        id,
        data: {
          droppableContainer: e,
          value: n,
        },
      });
    }
  }
  return l.sort(B);
};
function X(e, t) {
  if (e && t) {
    return {
      x: e.left - t.left,
      y: e.top - t.top,
    };
  }
  return Y;
}
let _ = function (e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  ) {
    n[r - 1] = arguments[r];
  }
  return n.reduce(
    (acc, item) => ({
      ...acc,
      top: acc.top + +item.y,
      bottom: acc.bottom + +item.y,
      left: acc.left + +item.x,
      right: acc.right + +item.x,
    }),
    {
      ...e,
    },
  );
};
function G(e) {
  if (e.startsWith("matrix3d(")) {
    let t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5],
    };
  }
  if (e.startsWith("matrix(")) {
    let t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3],
    };
  }
  return null;
}
let q = {
  ignoreTransform: false,
};
export function Sj(e, t = q) {
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    let { transform, transformOrigin } = zk(e).getComputedStyle(e);
    if (transform) {
      n = ((e, t, n) => {
        let r = G(t);
        if (!r) {
          return e;
        }
        let { scaleX, scaleY, x, y } = r;
        let u = e.left - x - (1 - scaleX) * parseFloat(n);
        let s =
          e.top - y - (1 - scaleY) * parseFloat(n.slice(n.indexOf(" ") + 1));
        let width_1 = scaleX ? e.width / scaleX : e.width;
        let d = scaleY ? e.height / scaleY : e.height;
        return {
          width: width_1,
          height: d,
          top: s,
          right: u + width_1,
          bottom: s + d,
          left: u,
        };
      })(n, transform, transformOrigin);
    }
  }
  let { top, left, width, height, bottom, right } = n;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right,
  };
}
function measure(e) {
  return Sj(e, {
    ignoreTransform: true,
  });
}
function Q(e, t) {
  let n = [];
  if (e) {
    return (function r(l) {
      let i;
      let a;
      let o;
      if ((t != null && n.length >= t) || !l) {
        return n;
      }
      if (
        wz(l) &&
        l.scrollingElement != null &&
        !n.includes(l.scrollingElement)
      ) {
        n.push(l.scrollingElement);
        return n;
      }
      if (!sb(l) || xZ(l) || n.includes(l)) {
        return n;
      }
      let u = zk(e).getComputedStyle(l);
      if (
        l !== e &&
        ((i = u) === undefined && (i = zk(l).getComputedStyle(l)),
        (o = /(auto|scroll|overlay)/),
        ["overflow", "overflowX", "overflowY"].some((e) => {
          let t = i[e];
          return typeof t === "string" && o.test(t);
        }))
      ) {
        n.push(l);
      }
      if ((a = u) === undefined) {
        a = zk(l).getComputedStyle(l);
      }
      if (a.position === "fixed") {
        return n;
      }
      return r(l.parentNode);
    })(e);
  }
  return n;
}
function V(e) {
  let [t] = Q(e, 1);
  if (t != null) {
    return t;
  }
  return null;
}
function Z(e) {
  if (Sw && e) {
    if (l6(e)) {
      return e;
    }
    if (Ll(e)) {
      if (wz(e) || e === TW(e).scrollingElement) {
        return window;
      }
      if (sb(e)) {
        return e;
      }
      return null;
    }
    return null;
  }
  return null;
}
function $(e) {
  if (l6(e)) {
    return e.scrollX;
  }
  return e.scrollLeft;
}
function ee(e) {
  if (l6(e)) {
    return e.scrollY;
  }
  return e.scrollTop;
}
function et(e) {
  return {
    x: $(e),
    y: ee(e),
  };
}
function en(e) {
  return !!Sw && !!e && e === document.scrollingElement;
}
function er(e) {
  let minScroll = {
    x: 0,
    y: 0,
  };
  let n = en(e)
    ? {
        height: window.innerHeight,
        width: window.innerWidth,
      }
    : {
        height: e.clientHeight,
        width: e.clientWidth,
      };
  let maxScroll = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height,
  };
  let isTop = e.scrollTop <= minScroll.y;
  let isLeft = e.scrollLeft <= minScroll.x;
  return {
    isTop,
    isLeft,
    isBottom: e.scrollTop >= maxScroll.y,
    isRight: e.scrollLeft >= maxScroll.x,
    maxScroll,
    minScroll,
  };
}
i = g || (g = {});
i[(i.Forward = 1)] = "Forward";
i[(i.Backward = -1)] = "Backward";
let el = {
  x: 0.2,
  y: 0.2,
};
function ei(e) {
  return e.reduce((acc, item) => WQ(acc, et(item)), Y);
}
function ea(e, t = Sj) {
  if (!e) {
    return;
  }
  let { top, left, bottom, right } = t(e);
  if (
    V(e) &&
    (bottom <= 0 ||
      right <= 0 ||
      top >= window.innerHeight ||
      left >= window.innerWidth)
  ) {
    e.scrollIntoView({
      block: "center",
      inline: "center",
    });
  }
}
let eo = [
  [
    "x",
    ["left", "right"],
    function (e) {
      return e.reduce((acc, item) => acc + $(item), 0);
    },
  ],
  [
    "y",
    ["top", "bottom"],
    function (e) {
      return e.reduce((acc, item) => acc + ee(item), 0);
    },
  ],
];
class eu {
  constructor(e, t) {
    this.rect = undefined;
    this.width = undefined;
    this.height = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.right = undefined;
    this.left = undefined;
    let n = Q(t);
    let r = ei(n);
    for (let [t, l, i] of ((this.rect = {
      ...e,
    }),
    (this.width = e.width),
    (this.height = e.height),
    eo)) {
      for (let e of l) {
        Object.defineProperty(this, e, {
          get: () => {
            let l = i(n);
            let a = r[t] - l;
            return this.rect[e] + a;
          },
          enumerable: true,
        });
      }
    }
    Object.defineProperty(this, "rect", {
      enumerable: false,
    });
  }
}
class es {
  constructor(e) {
    this.target = undefined;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach((e) => {
        var t;
        if ((t = this.target) == null) {
          return undefined;
        }
        return t.removeEventListener(...e);
      });
    };
    this.target = e;
  }
  add(e, t, n) {
    let r;
    if ((r = this.target) != null) {
      r.addEventListener(e, t, n);
    }
    this.listeners.push([e, t, n]);
  }
}
function ec(e, t) {
  let n = Math.abs(e.x);
  let r = Math.abs(e.y);
  if (typeof t === "number") {
    return Math.sqrt(n ** 2 + r ** 2) > t;
  }
  if ("x" in t && "y" in t) {
    return n > t.x && r > t.y;
  }
  if ("x" in t) {
    return n > t.x;
  }
  return "y" in t && r > t.y;
}
function ed(e) {
  e.preventDefault();
}
function ef(e) {
  e.stopPropagation();
}
a = v || (v = {});
a.Click = "click";
a.DragStart = "dragstart";
a.Keydown = "keydown";
a.ContextMenu = "contextmenu";
a.Resize = "resize";
a.SelectionChange = "selectionchange";
a.VisibilityChange = "visibilitychange";
o = vL || (vL = {});
o.Space = "Space";
o.Down = "ArrowDown";
o.Right = "ArrowRight";
o.Left = "ArrowLeft";
o.Up = "ArrowUp";
o.Esc = "Escape";
o.Enter = "Enter";
let eh = {
  start: [vL.Space, vL.Enter],
  cancel: [vL.Esc],
  end: [vL.Space, vL.Enter],
};
let eg = (e, t) => {
  let { currentCoordinates } = t;
  switch (e.code) {
    case vL.Right:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x + 25,
      };
    case vL.Left:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x - 25,
      };
    case vL.Down:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y + 25,
      };
    case vL.Up:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y - 25,
      };
  }
};
export class uN {
  constructor(e) {
    this.props = undefined;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = undefined;
    this.listeners = undefined;
    this.windowListeners = undefined;
    this.props = e;
    let {
      event: { target },
    } = e;
    this.props = e;
    this.listeners = new es(TW(target));
    this.windowListeners = new es(zk(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(v.Resize, this.handleCancel);
    this.windowListeners.add(v.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(v.Keydown, this.handleKeyDown));
  }
  handleStart() {
    let { activeNode, onStart } = this.props;
    let current = activeNode.node.current;
    if (current) {
      ea(current);
    }
    onStart(Y);
  }
  handleKeyDown(e) {
    if (kx(e)) {
      let { active, context, options } = this.props;
      let {
        keyboardCodes = eh,
        coordinateGetter = eg,
        scrollBehavior = "smooth",
      } = options;
      let { code } = e;
      if (keyboardCodes.end.includes(code)) {
        return void this.handleEnd(e);
      }
      if (keyboardCodes.cancel.includes(code)) {
        return void this.handleCancel(e);
      }
      let { collisionRect } = context.current;
      let currentCoordinates = collisionRect
        ? {
            x: collisionRect.left,
            y: collisionRect.top,
          }
        : Y;
      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }
      let c = coordinateGetter(e, {
        active,
        context: context.current,
        currentCoordinates,
      });
      if (c) {
        let t = Re(c, currentCoordinates);
        let r = {
          x: 0,
          y: 0,
        };
        let { scrollableAncestors } = context.current;
        for (let n of scrollableAncestors) {
          let l = e.code;
          let { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } =
            er(n);
          let h = ((e) => {
            if (e === document.scrollingElement) {
              let { innerWidth, innerHeight } = window;
              return {
                top: 0,
                left: 0,
                right: innerWidth,
                bottom: innerHeight,
                width: innerWidth,
                height: innerHeight,
              };
            }
            let { top, left, right, bottom } = e.getBoundingClientRect();
            return {
              top,
              left,
              right,
              bottom,
              width: e.clientWidth,
              height: e.clientHeight,
            };
          })(n);
          let g = {
            x: Math.min(
              l === vL.Right ? h.right - h.width / 2 : h.right,
              Math.max(l === vL.Right ? h.left : h.left + h.width / 2, c.x),
            ),
            y: Math.min(
              l === vL.Down ? h.bottom - h.height / 2 : h.bottom,
              Math.max(l === vL.Down ? h.top : h.top + h.height / 2, c.y),
            ),
          };
          let v = (l === vL.Right && !isRight) || (l === vL.Left && !isLeft);
          let m = (l === vL.Down && !isBottom) || (l === vL.Up && !isTop);
          if (v && g.x !== c.x) {
            let e = n.scrollLeft + t.x;
            let i =
              (l === vL.Right && e <= maxScroll.x) ||
              (l === vL.Left && e >= minScroll.x);
            if (i && !t.y) {
              return void n.scrollTo({
                left: e,
                behavior: scrollBehavior,
              });
            }
            if (i) {
              r.x = n.scrollLeft - e;
            } else {
              r.x =
                l === vL.Right
                  ? n.scrollLeft - maxScroll.x
                  : n.scrollLeft - minScroll.x;
            }
            if (r.x) {
              n.scrollBy({
                left: -r.x,
                behavior: scrollBehavior,
              });
            }
            break;
          }
          if (m && g.y !== c.y) {
            let e = n.scrollTop + t.y;
            let i =
              (l === vL.Down && e <= maxScroll.y) ||
              (l === vL.Up && e >= minScroll.y);
            if (i && !t.x) {
              return void n.scrollTo({
                top: e,
                behavior: scrollBehavior,
              });
            }
            if (i) {
              r.y = n.scrollTop - e;
            } else {
              r.y =
                l === vL.Down
                  ? n.scrollTop - maxScroll.y
                  : n.scrollTop - minScroll.y;
            }
            if (r.y) {
              n.scrollBy({
                top: -r.y,
                behavior: scrollBehavior,
              });
            }
            break;
          }
        }
        this.handleMove(e, WQ(Re(c, this.referenceCoordinates), r));
      }
    }
  }
  handleMove(e, t) {
    let { onMove } = this.props;
    e.preventDefault();
    onMove(t);
  }
  handleEnd(e) {
    let { onEnd } = this.props;
    e.preventDefault();
    this.detach();
    onEnd();
  }
  handleCancel(e) {
    let { onCancel } = this.props;
    e.preventDefault();
    this.detach();
    onCancel();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
}
function ep(activationConstraint) {
  return !!(activationConstraint && "distance" in activationConstraint);
}
function em(activationConstraint) {
  return !!(activationConstraint && "delay" in activationConstraint);
}
uN.activators = [
  {
    eventName: "onKeyDown",
    handler: (e, t, n) => {
      let { keyboardCodes = eh, onActivation } = t;
      let { active } = n;
      let { code } = e.nativeEvent;
      if (keyboardCodes.start.includes(code)) {
        let t = active.activatorNode.current;
        return (
          (!t || e.target === t) &&
          (e.preventDefault(),
          onActivation == null ||
            onActivation({
              event: e.nativeEvent,
            }),
          true)
        );
      }
      return false;
    },
  },
];
class eb {
  constructor(e, t, n) {
    var r;
    if (n === undefined) {
      n = ((e) => {
        let { EventTarget } = zk(e);
        if (e instanceof EventTarget) {
          return e;
        }
        return TW(e);
      })(e.event.target);
    }
    this.props = undefined;
    this.events = undefined;
    this.autoScrollEnabled = true;
    this.document = undefined;
    this.activated = false;
    this.initialCoordinates = undefined;
    this.timeoutId = null;
    this.listeners = undefined;
    this.documentListeners = undefined;
    this.windowListeners = undefined;
    this.props = e;
    this.events = t;
    let { event } = e;
    let { target } = event;
    this.props = e;
    this.events = t;
    this.document = TW(target);
    this.documentListeners = new es(this.document);
    this.listeners = new es(n);
    this.windowListeners = new es(zk(target));
    this.initialCoordinates = (r = e__1(event)) != null ? r : Y;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    let {
      events,
      props: {
        options: { activationConstraint, bypassActivationConstraint },
      },
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false,
    });
    this.listeners.add(events.end.name, this.handleEnd);
    this.windowListeners.add(v.Resize, this.handleCancel);
    this.windowListeners.add(v.DragStart, ed);
    this.windowListeners.add(v.VisibilityChange, this.handleCancel);
    this.windowListeners.add(v.ContextMenu, ed);
    this.documentListeners.add(v.Keydown, this.handleKeydown);
    if (activationConstraint) {
      if (
        bypassActivationConstraint != null &&
        bypassActivationConstraint({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      ) {
        return this.handleStart();
      }
      if (em(activationConstraint)) {
        this.timeoutId = setTimeout(
          this.handleStart,
          activationConstraint.delay,
        );
        return;
      }
      if (ep(activationConstraint)) {
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  handleStart() {
    let { initialCoordinates } = this;
    let { onStart } = this.props;
    if (initialCoordinates) {
      this.activated = true;
      this.documentListeners.add(v.Click, ef, {
        capture: true,
      });
      this.removeTextSelection();
      this.documentListeners.add(v.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }
  handleMove(e) {
    let t;
    let { activated, initialCoordinates, props } = this;
    let {
      onMove,
      options: { activationConstraint },
    } = props;
    if (!initialCoordinates) {
      return;
    }
    let o = (t = e__1(e)) != null ? t : Y;
    let u = Re(initialCoordinates, o);
    if (!activated && activationConstraint) {
      if (ep(activationConstraint)) {
        if (
          activationConstraint.tolerance != null &&
          ec(u, activationConstraint.tolerance)
        ) {
          return this.handleCancel();
        }
        if (ec(u, activationConstraint.distance)) {
          return this.handleStart();
        }
      }
      if (em(activationConstraint) && ec(u, activationConstraint.tolerance)) {
        return this.handleCancel();
      }
      return undefined;
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    onMove(o);
  }
  handleEnd() {
    let { onEnd } = this.props;
    this.detach();
    onEnd();
  }
  handleCancel() {
    let { onCancel } = this.props;
    this.detach();
    onCancel();
  }
  handleKeydown(e) {
    if (e.code === vL.Esc) {
      this.handleCancel();
    }
  }
  removeTextSelection() {
    let e;
    if ((e = this.document.getSelection()) != null) {
      e.removeAllRanges();
    }
  }
}
let ey = {
  move: {
    name: "pointermove",
  },
  end: {
    name: "pointerup",
  },
};
class ew extends eb {
  constructor(e) {
    let { event } = e;
    super(e, ey, TW(event.target));
  }
}
ew.activators = [
  {
    eventName: "onPointerDown",
    handler: (e, t) => {
      let { nativeEvent } = e;
      let { onActivation } = t;
      return (
        !!nativeEvent.isPrimary &&
        nativeEvent.button === 0 &&
        (onActivation == null ||
          onActivation({
            event: nativeEvent,
          }),
        true)
      );
    },
  },
];
let ex = {
  move: {
    name: "mousemove",
  },
  end: {
    name: "mouseup",
  },
};
u = m || (m = {});
u[(u.RightClick = 2)] = "RightClick";
export class cA extends eb {
  constructor(e) {
    super(e, ex, TW(e.event.target));
  }
}
cA.activators = [
  {
    eventName: "onMouseDown",
    handler: (e, t) => {
      let { nativeEvent } = e;
      let { onActivation } = t;
      return (
        nativeEvent.button !== m.RightClick &&
        (onActivation == null ||
          onActivation({
            event: nativeEvent,
          }),
        true)
      );
    },
  },
];
s = b || (b = {});
s[(s.Pointer = 0)] = "Pointer";
s[(s.DraggableRect = 1)] = "DraggableRect";
c = y || (y = {});
c[(c.TreeOrder = 0)] = "TreeOrder";
c[(c.ReversedTreeOrder = 1)] = "ReversedTreeOrder";
let eD = {
  x: {
    [g.Backward]: false,
    [g.Forward]: false,
  },
  y: {
    [g.Backward]: false,
    [g.Forward]: false,
  },
};
d = w || (w = {});
d[(d.Always = 0)] = "Always";
d[(d.BeforeDragging = 1)] = "BeforeDragging";
d[(d.WhileDragging = 2)] = "WhileDragging";
(x || (x = {})).Optimized = "optimized";
let eC = new Map();
function eS(e, t) {
  return KG(
    (n) => {
      if (e) {
        return n || (typeof t === "function" ? t(e) : e);
      }
      return null;
    },
    [t, e],
  );
}
function useEM(e) {
  let { callback, disabled } = e;
  let r = _q(callback);
  let l = D.useMemo(() => {
    if (
      disabled ||
      typeof window === "undefined" ||
      window.ResizeObserver === undefined
    ) {
      return;
    }
    let { ResizeObserver } = window;
    return new ResizeObserver(r);
  }, [disabled]);
  D.useEffect(
    () => () => {
      if (l == null) {
        return undefined;
      }
      return l.disconnect();
    },
    [l],
  );
  return l;
}
function ek(e) {
  return new eu(Sj(e), e);
}
function useER(e, t = ek, n) {
  let [rState, lDispatch] = D.useReducer(function (r) {
    if (!e) {
      return null;
    }
    if (e.isConnected === false) {
      let l;
      if ((l = r != null ? r : n) != null) {
        return l;
      }
      return null;
    }
    let i = t(e);
    if (JSON.stringify(r) === JSON.stringify(i)) {
      return r;
    }
    return i;
  }, null);
  let i = ((e) => {
    let { callback, disabled } = e;
    let r = _q(callback);
    let l = D.useMemo(() => {
      if (
        disabled ||
        typeof window === "undefined" ||
        window.MutationObserver === undefined
      ) {
        return;
      }
      let { MutationObserver } = window;
      return new MutationObserver(r);
    }, [r, disabled]);
    D.useEffect(
      () => () => {
        if (l == null) {
          return undefined;
        }
        return l.disconnect();
      },
      [l],
    );
    return l;
  })({
    callback(t) {
      if (e) {
        for (let n of t) {
          let { type, target } = n;
          if (
            type === "childList" &&
            target instanceof HTMLElement &&
            target.contains(e)
          ) {
            lDispatch();
            break;
          }
        }
      }
    },
  });
  let a = useEM({
    callback: lDispatch,
  });
  Es(() => {
    lDispatch();
    if (e) {
      if (a != null) {
        a.observe(e);
      }
      if (i != null) {
        i.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    } else {
      if (a != null) {
        a.disconnect();
      }
      if (i != null) {
        i.disconnect();
      }
    }
  }, [e]);
  return rState;
}
let eT = [];
function useEO(e, t = []) {
  let nRef = D.useRef(null);
  D.useEffect(() => {
    nRef.current = null;
  }, t);
  D.useEffect(() => {
    let t = e !== Y;
    if (t && !nRef.current) {
      nRef.current = e;
    }
    if (!t && nRef.current) {
      nRef.current = null;
    }
  }, [e]);
  if (nRef.current) {
    return Re(e, nRef.current);
  }
  return Y;
}
function useEL(e) {
  return D.useMemo(() => {
    let t;
    let n;
    if (e) {
      t = e.innerWidth;
      return {
        top: 0,
        left: 0,
        right: t,
        bottom: (n = e.innerHeight),
        width: t,
        height: n,
      };
    }
    return null;
  }, [e]);
}
let eN = [];
function ez(e) {
  if (!e) {
    return null;
  }
  if (e.children.length > 1) {
    return e;
  }
  let t = e.children[0];
  if (sb(t)) {
    return t;
  }
  return e;
}
let eA = [
  {
    sensor: ew,
    options: {},
  },
  {
    sensor: uN,
    options: {},
  },
];
let eP = {
  current: {},
};
let eY = {
  draggable: {
    measure,
  },
  droppable: {
    measure,
    strategy: w.WhileDragging,
    frequency: x.Optimized,
  },
  dragOverlay: {
    measure: Sj,
  },
};
class eW extends Map {
  get(e) {
    let t;
    if (e != null && (t = super.get(e)) != null) {
      return t;
    }
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((e) => {
      let { disabled } = e;
      return !disabled;
    });
  }
  getNodeFor(e) {
    let t;
    let n;
    if ((t = (n = this.get(e)) == null ? undefined : n.node.current) != null) {
      return t;
    }
  }
}
let eB = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: new Map(),
  droppableRects: new Map(),
  droppableContainers: new eW(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null,
    },
    rect: null,
    setRef: A,
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: eY,
  measureDroppableContainers: A,
  windowRect: null,
  measuringScheduled: false,
};
let eK = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: "",
  },
  dispatch: A,
  draggableNodes: new Map(),
  over: null,
  measureDroppableContainers: A,
};
let EFContext = D.createContext(eK);
let EjContext = D.createContext(eB);
function eI() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0,
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0,
      },
    },
    droppable: {
      containers: new eW(),
    },
  };
}
function eU(e, t) {
  switch (t.type) {
    case h.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case h.DragMove:
      if (!e.draggable.active) {
        return e;
      }
      return {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y,
          },
        },
      };
    case h.DragEnd:
    case h.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0,
          },
          translate: {
            x: 0,
            y: 0,
          },
        },
      };
    case h.RegisterDroppable: {
      let { element } = t;
      let { id } = element;
      let l = new eW(e.droppable.containers);
      l.set(id, element);
      return {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l,
        },
      };
    }
    case h.SetDroppableDisabled: {
      let { id, key, disabled } = t;
      let i = e.droppable.containers.get(id);
      if (!i || key !== i.key) {
        return e;
      }
      let a = new eW(e.droppable.containers);
      a.set(id, {
        ...i,
        disabled,
      });
      return {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a,
        },
      };
    }
    case h.UnregisterDroppable: {
      let { id, key } = t;
      let l = e.droppable.containers.get(id);
      if (!l || key !== l.key) {
        return e;
      }
      let i = new eW(e.droppable.containers);
      i.delete(id);
      return {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i,
        },
      };
    }
    default:
      return e;
  }
}
function EXComponent(e) {
  let { disabled } = e;
  let { active, activatorEvent, draggableNodes } = D.useContext(EFContext);
  let i = ZC(activatorEvent);
  let a = ZC(active == null ? undefined : active.id);
  D.useEffect(() => {
    if (!disabled && !activatorEvent && i && a != null) {
      if (!kx(i) || document.activeElement === i.target) {
        return;
      }
      let e = draggableNodes.get(a);
      if (!e) {
        return;
      }
      let { activatorNode, node } = e;
      if (activatorNode.current || node.current) {
        requestAnimationFrame(() => {
          for (let e of [activatorNode.current, node.current]) {
            if (!e) {
              continue;
            }
            let t = ag(e);
            if (t) {
              t.focus();
              break;
            }
          }
        });
      }
    }
  }, [activatorEvent, disabled, draggableNodes, a, i]);
  return null;
}
function e_(modifiers, t) {
  let { transform, ...rest } = t;
  if (modifiers != null && modifiers.length) {
    return modifiers.reduce(
      (acc, modifier) =>
        modifier({
          transform: acc,
          ...rest,
        }),
      transform,
    );
  }
  return transform;
}
let EGContext = D.createContext({
  ...Y,
  scaleX: 1,
  scaleY: 1,
});
f = E || (E = {});
f[(f.Uninitialized = 0)] = "Uninitialized";
f[(f.Initializing = 1)] = "Initializing";
f[(f.Initialized = 2)] = "Initialized";
export let Mp = D.memo(function (e) {
  let t;
  let n;
  let r;
  let l;
  let i;
  let a;
  let o;
  let u;
  let s;
  let c;
  let enabled;
  let f;
  let v;
  let p;
  let m;
  let x;
  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = eA,
    collisionDetection = Qo,
    measuring,
    modifiers,
    ...rest
  } = e;
  let [BState, KDispatch] = D.useReducer(eU, undefined, eI);
  let [F, j] = (() => {
    let [e] = D.useState(() => new Set());
    let t = D.useCallback(
      (t) => {
        e.add(t);
        return () => e.delete(t);
      },
      [e],
    );
    return [
      D.useCallback(
        (t) => {
          let { type, event } = t;
          e.forEach((e) => {
            var t;
            if ((t = e[type]) == null) {
              return undefined;
            }
            return t.call(e, event);
          });
        },
        [e],
      ),
      t,
    ];
  })();
  let [U, setU] = D.useState(E.Uninitialized);
  let dragging = U === E.Initialized;
  let {
    draggable: { active, nodes, translate },
    droppable: { containers },
  } = BState;
  let eo = active ? nodes.get(active) : null;
  let esRef = D.useRef({
    initial: null,
    translated: null,
  });
  let ec = D.useMemo(() => {
    var e;
    if (active != null) {
      return {
        id: active,
        data: (e = eo == null ? undefined : eo.data) != null ? e : eP,
        rect: esRef,
      };
    }
    return null;
  }, [active, eo]);
  let edRef = D.useRef(null);
  let [ef, setEf] = D.useState(null);
  let [eg, setEg] = D.useState(null);
  let ep = YN(rest, Object.values(rest));
  let em = YG("DndDescribedBy", id);
  let droppableContainers = D.useMemo(
    () => containers.getEnabled(),
    [containers],
  );
  let ey = D.useMemo(
    () => ({
      draggable: {
        ...eY.draggable,
        ...(measuring == null ? undefined : measuring.draggable),
      },
      droppable: {
        ...eY.droppable,
        ...(measuring == null ? undefined : measuring.droppable),
      },
      dragOverlay: {
        ...eY.dragOverlay,
        ...(measuring == null ? undefined : measuring.dragOverlay),
      },
    }),
    [
      measuring == null ? undefined : measuring.draggable,
      measuring == null ? undefined : measuring.droppable,
      measuring == null ? undefined : measuring.dragOverlay,
    ],
  );
  let { droppableRects, measureDroppableContainers, measuringScheduled } = ((
    e,
    t,
  ) => {
    let { dragging, dependencies, config } = t;
    let [i, setI] = D.useState(null);
    let { frequency, measure, strategy } = config;
    let cRef = D.useRef(e);
    let d = (() => {
      switch (strategy) {
        case w.Always:
          return false;
        case w.BeforeDragging:
          return dragging;
        default:
          return !dragging;
      }
    })();
    let f = YN(d);
    let measureDroppableContainers_1 = D.useCallback(
      function (e = []) {
        if (!f.current) {
          setI((t) => {
            if (t === null) {
              return e;
            }
            return t.concat(e.filter((e) => !t.includes(e)));
          });
        }
      },
      [f],
    );
    let gRef = D.useRef(null);
    let droppableRects_1 = KG(
      (t) => {
        if (d && !dragging) {
          return eC;
        }
        if (!t || t === eC || cRef.current !== e || i != null) {
          let t = new Map();
          for (let n of e) {
            if (!n) {
              continue;
            }
            if (i && i.length > 0 && !i.includes(n.id) && n.rect.current) {
              t.set(n.id, n.rect.current);
              continue;
            }
            let e = n.node.current;
            let r = e ? new eu(measure(e), e) : null;
            n.rect.current = r;
            if (r) {
              t.set(n.id, r);
            }
          }
          return t;
        }
        return t;
      },
      [e, i, dragging, d, measure],
    );
    D.useEffect(() => {
      cRef.current = e;
    }, [e]);
    D.useEffect(() => {
      if (!d) {
        measureDroppableContainers_1();
      }
    }, [dragging, d]);
    D.useEffect(() => {
      if (i && i.length > 0) {
        setI(null);
      }
    }, [JSON.stringify(i)]);
    D.useEffect(() => {
      if (!(d || typeof frequency !== "number" || gRef.current !== null)) {
        gRef.current = setTimeout(() => {
          measureDroppableContainers_1();
          gRef.current = null;
        }, frequency);
      }
    }, [frequency, d, measureDroppableContainers_1, ...dependencies]);
    return {
      droppableRects: droppableRects_1,
      measureDroppableContainers: measureDroppableContainers_1,
      measuringScheduled: i != null,
    };
  })(droppableContainers, {
    dragging,
    dependencies: [translate.x, translate.y],
    config: ey.droppable,
  });
  v = (f = active !== null ? nodes.get(active) : undefined)
    ? f.node.current
    : null;
  let ek = KG(
    (e) => {
      var t;
      if (active === null) {
        return null;
      }
      if ((t = v != null ? v : e) != null) {
        return t;
      }
      return null;
    },
    [v, active],
  );
  let eW = D.useMemo(() => {
    if (eg) {
      return e__1(eg);
    }
    return null;
  }, [eg]);
  s = (ef == null ? undefined : ef.autoScrollEnabled) === false;
  c =
    typeof autoScroll === "object"
      ? autoScroll.enabled === false
      : autoScroll === false;
  enabled = dragging && !s && !c;
  let eB =
    typeof autoScroll === "object"
      ? {
          ...autoScroll,
          enabled,
        }
      : {
          enabled,
        };
  let initialRect = eS(ek, ey.draggable.measure);
  ((e) => {
    let { activeNode, measure, initialRect, config = true } = e;
    let iRef = D.useRef(false);
    let { x, y } =
      typeof config === "boolean"
        ? {
            x: config,
            y: config,
          }
        : config;
    Es(() => {
      if ((!x && !y) || !activeNode) {
        iRef.current = false;
        return;
      }
      if (iRef.current || !initialRect) {
        return;
      }
      let e = activeNode == null ? undefined : activeNode.node.current;
      if (!e || e.isConnected === false) {
        return;
      }
      let l = X(measure(e), initialRect);
      if (!x) {
        l.x = 0;
      }
      if (!y) {
        l.y = 0;
      }
      iRef.current = true;
      if (Math.abs(l.x) > 0 || Math.abs(l.y) > 0) {
        let t = V(e);
        if (t) {
          t.scrollBy({
            top: l.y,
            left: l.x,
          });
        }
      }
    }, [activeNode, x, y, initialRect, measure]);
  })({
    activeNode: active ? nodes.get(active) : null,
    config: eB.layoutShiftCompensation,
    initialRect,
    measure: ey.draggable.measure,
  });
  let activeNodeRect = useER(ek, ey.draggable.measure, initialRect);
  let containerNodeRect = useER(ek ? ek.parentElement : null);
  let eJRef = D.useRef({
    activatorEvent: null,
    active: null,
    activeNode: ek,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes: nodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: containers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null,
  });
  let eQ = containers.getNodeFor(
    (t = eJRef.current.over) == null ? undefined : t.id,
  );
  let dragOverlay = ((e) => {
    let { measure } = e;
    let [n, setN] = D.useState(null);
    let l = useEM({
      callback: D.useCallback(
        (e) => {
          for (let { target } of e) {
            if (sb(target)) {
              setN((e) => {
                let r = measure(target);
                if (e) {
                  return {
                    ...e,
                    width: r.width,
                    height: r.height,
                  };
                }
                return r;
              });
              break;
            }
          }
        },
        [measure],
      ),
    });
    let i = D.useCallback(
      (e) => {
        let n = ez(e);
        if (l != null) {
          l.disconnect();
        }
        if (n) {
          if (l != null) {
            l.observe(n);
          }
        }
        setN(n ? measure(n) : null);
      },
      [measure, l],
    );
    let [a, o] = lk(i);
    return D.useMemo(
      () => ({
        nodeRef: a,
        rect: n,
        setRef: o,
      }),
      [n, a, o],
    );
  })({
    measure: ey.dragOverlay.measure,
  });
  let draggingNode = (n = dragOverlay.nodeRef.current) != null ? n : ek;
  let e$ = dragging
    ? (r = dragOverlay.rect) != null
      ? r
      : activeNodeRect
    : null;
  let e0 = !!(dragOverlay.nodeRef.current && dragOverlay.rect);
  p = eS((i = e0 ? null : activeNodeRect));
  let e1 = X(i, p);
  let windowRect = useEL(draggingNode ? zk(draggingNode) : null);
  a = dragging ? (eQ != null ? eQ : ek) : null;
  m = D.useRef(a);
  x = KG(
    (e) => {
      if (a) {
        if (
          e &&
          e !== eT &&
          a &&
          m.current &&
          a.parentNode === m.current.parentNode
        ) {
          return e;
        }
        return Q(a);
      }
      return eT;
    },
    [a],
  );
  D.useEffect(() => {
    m.current = a;
  }, [a]);
  let scrollableAncestors = x;
  let scrollableAncestorRects = ((e, t = Sj) => {
    let [n] = e;
    let r = useEL(n ? zk(n) : null);
    let [lState, iDispatch] = D.useReducer(function () {
      if (e.length) {
        return e.map((e) => {
          if (en(e)) {
            return r;
          }
          return new eu(t(e), e);
        });
      }
      return eN;
    }, eN);
    let a = useEM({
      callback: iDispatch,
    });
    if (e.length > 0 && lState === eN) {
      iDispatch();
    }
    Es(() => {
      if (e.length) {
        e.forEach((e) => {
          if (a == null) {
            return undefined;
          }
          return a.observe(e);
        });
      } else {
        if (a != null) {
          a.disconnect();
        }
        iDispatch();
      }
    }, [e]);
    return lState;
  })(scrollableAncestors);
  let e3 = e_(modifiers, {
    transform: {
      x: translate.x - e1.x,
      y: translate.y - e1.y,
      scaleX: 1,
      scaleY: 1,
    },
    activatorEvent: eg,
    active: ec,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: e$,
    over: eJRef.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect,
  });
  let pointerCoordinates = eW ? WQ(eW, translate) : null;
  let e6 = ((e) => {
    let [t, setT] = D.useState(null);
    let rRef = D.useRef(e);
    let l = D.useCallback((e) => {
      let t = Z(e.target);
      if (t) {
        setT((e) => {
          if (e) {
            e.set(t, et(t));
            return new Map(e);
          }
          return null;
        });
      }
    }, []);
    D.useEffect(() => {
      let rRef_current = rRef.current;
      if (e !== rRef_current) {
        i(rRef_current);
        let a = e
          .map((e) => {
            let t = Z(e);
            if (t) {
              t.addEventListener("scroll", l, {
                passive: true,
              });
              return [t, et(t)];
            }
            return null;
          })
          .filter((e) => e != null);
        setT(a.length ? new Map(a) : null);
        rRef.current = e;
      }
      return () => {
        i(e);
        i(rRef_current);
      };
      function i(e) {
        e.forEach((e) => {
          let t = Z(e);
          if (t != null) {
            t.removeEventListener("scroll", l);
          }
        });
      }
    }, [l, e]);
    return D.useMemo(() => {
      if (e.length) {
        if (t) {
          return Array.from(t.values()).reduce((acc, item) => WQ(acc, item), Y);
        }
        return ei(e);
      }
      return Y;
    }, [e, t]);
  })(scrollableAncestors);
  let e7 = useEO(e6);
  let e8 = useEO(e6, [activeNodeRect]);
  let scrollAdjustedTranslate = WQ(e3, e7);
  let tt = e$ ? _(e$, e3) : null;
  let collisions =
    ec && tt
      ? collisionDetection({
          active: ec,
          collisionRect: tt,
          droppableRects,
          droppableContainers,
          pointerCoordinates,
        })
      : null;
  let tr = ((e) => {
    if (!e || e.length === 0) {
      return null;
    }
    let [t] = e;
    return t.id;
  })(collisions);
  let [tl, setTl] = D.useState(null);
  o = e0 ? e3 : WQ(e3, e8);
  u = (l = tl == null ? undefined : tl.rect) != null ? l : null;
  let ta = {
    ...o,
    scaleX: u && activeNodeRect ? u.width / activeNodeRect.width : 1,
    scaleY: u && activeNodeRect ? u.height / activeNodeRect.height : 1,
  };
  let to = D.useCallback(
    (e, t) => {
      let { sensor, options } = t;
      if (edRef.current == null) {
        return;
      }
      let l = nodes.get(edRef.current);
      if (!l) {
        return;
      }
      let e_nativeEvent = e.nativeEvent;
      let a = new sensor({
        active: edRef.current,
        activeNode: l,
        event: e_nativeEvent,
        options,
        context: eJRef,
        onStart(initialCoordinates) {
          let edRef_current = edRef.current;
          if (edRef_current == null) {
            return;
          }
          let n = nodes.get(edRef_current);
          if (!n) {
            return;
          }
          let { onDragStart } = ep.current;
          let l = {
            active: {
              id: edRef_current,
              data: n.data,
              rect: esRef,
            },
          };
          C.unstable_batchedUpdates(() => {
            if (onDragStart != null) {
              onDragStart(l);
            }
            setU(E.Initializing);
            KDispatch({
              type: h.DragStart,
              initialCoordinates,
              active: edRef_current,
            });
            F({
              type: "onDragStart",
              event: l,
            });
          });
        },
        onMove(coordinates) {
          KDispatch({
            type: h.DragMove,
            coordinates,
          });
        },
        onEnd: o(h.DragEnd),
        onCancel: o(h.DragCancel),
      });
      function o(e) {
        return async () => {
          let { active, collisions, over, scrollAdjustedTranslate } =
            eJRef.current;
          let a = null;
          if (active && scrollAdjustedTranslate) {
            let { cancelDrop } = ep.current;
            a = {
              activatorEvent: e_nativeEvent,
              active,
              collisions,
              delta: scrollAdjustedTranslate,
              over,
            };
            if (
              e === h.DragEnd &&
              typeof cancelDrop === "function" &&
              (await Promise.resolve(cancelDrop(a)))
            ) {
              e = h.DragCancel;
            }
          }
          edRef.current = null;
          C.unstable_batchedUpdates(() => {
            KDispatch({
              type: e,
            });
            setU(E.Uninitialized);
            setTl(null);
            setEf(null);
            setEg(null);
            let t = e === h.DragEnd ? "onDragEnd" : "onDragCancel";
            if (a) {
              let e = ep.current[t];
              if (e != null) {
                e(a);
              }
              F({
                type: t,
                event: a,
              });
            }
          });
        };
      }
      C.unstable_batchedUpdates(() => {
        setEf(a);
        setEg(e.nativeEvent);
      });
    },
    [nodes],
  );
  let tu = D.useCallback(
    (e, t) => (n, r) => {
      let n_nativeEvent = n.nativeEvent;
      let i = nodes.get(r);
      if (
        !(
          edRef.current !== null ||
          !i ||
          n_nativeEvent.dndKit ||
          n_nativeEvent.defaultPrevented
        )
      ) {
        if (
          e(n, t.options, {
            active: i,
          }) === true
        ) {
          n_nativeEvent.dndKit = {
            capturedBy: t.sensor,
          };
          edRef.current = r;
          to(n, t);
        }
      }
    },
    [nodes, to],
  );
  let activators = D.useMemo(
    () =>
      sensors.reduce((acc, t) => {
        let { sensor } = t;
        let r = sensor.activators.map((e) => ({
          eventName: e.eventName,
          handler: tu(e.handler, t),
        }));
        return [...acc, ...r];
      }, []),
    [sensors, tu],
  );
  D.useEffect(
    () => {
      if (!Sw) {
        return;
      }
      let e = sensors.map((e) => {
        let { sensor } = e;
        if (sensor.setup == null) {
          return undefined;
        }
        return sensor.setup();
      });
      return () => {
        for (let t of e) {
          if (t != null) {
            t();
          }
        }
      };
    },
    sensors.map((e) => {
      let { sensor } = e;
      return sensor;
    }),
  );
  Es(() => {
    if (activeNodeRect && U === E.Initializing) {
      setU(E.Initialized);
    }
  }, [activeNodeRect, U]);
  D.useEffect(() => {
    let { onDragMove } = ep.current;
    let { active, activatorEvent, collisions, over } = eJRef.current;
    if (!active || !activatorEvent) {
      return;
    }
    let i = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y,
      },
      over,
    };
    C.unstable_batchedUpdates(() => {
      if (onDragMove != null) {
        onDragMove(i);
      }
      F({
        type: "onDragMove",
        event: i,
      });
    });
  }, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  D.useEffect(() => {
    let {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate,
    } = eJRef.current;
    if (
      !active ||
      edRef.current == null ||
      !activatorEvent ||
      !scrollAdjustedTranslate
    ) {
      return;
    }
    let { onDragOver } = ep.current;
    let a = droppableContainers.get(tr);
    let over =
      a && a.rect.current
        ? {
            id: a.id,
            rect: a.rect.current,
            data: a.data,
            disabled: a.disabled,
          }
        : null;
    let u = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y,
      },
      over,
    };
    C.unstable_batchedUpdates(() => {
      setTl(over);
      if (onDragOver != null) {
        onDragOver(u);
      }
      F({
        type: "onDragOver",
        event: u,
      });
    });
  }, [tr]);
  Es(() => {
    eJRef.current = {
      activatorEvent: eg,
      active: ec,
      activeNode: ek,
      collisionRect: tt,
      collisions,
      droppableRects,
      draggableNodes: nodes,
      draggingNode,
      draggingNodeRect: e$,
      droppableContainers: containers,
      over: tl,
      scrollableAncestors,
      scrollAdjustedTranslate,
    };
    esRef.current = {
      initial: e$,
      translated: tt,
    };
  }, [
    ec,
    ek,
    collisions,
    tt,
    nodes,
    draggingNode,
    e$,
    droppableRects,
    containers,
    tl,
    scrollableAncestors,
    scrollAdjustedTranslate,
  ]);
  ((e) => {
    let {
      acceleration,
      activator = b.Pointer,
      canScroll,
      draggingRect,
      enabled,
      interval = 5,
      order = y.TreeOrder,
      pointerCoordinates,
      scrollableAncestors,
      scrollableAncestorRects,
      delta,
      threshold,
    } = e;
    let h = ((e) => {
      let { delta, disabled } = e;
      let r = ZC(delta);
      return KG(
        (e) => {
          if (disabled || !r || !e) {
            return eD;
          }
          let l = {
            x: Math.sign(delta.x - r.x),
            y: Math.sign(delta.y - r.y),
          };
          return {
            x: {
              [g.Backward]: e.x[g.Backward] || l.x === -1,
              [g.Forward]: e.x[g.Forward] || l.x === 1,
            },
            y: {
              [g.Backward]: e.y[g.Backward] || l.y === -1,
              [g.Forward]: e.y[g.Forward] || l.y === 1,
            },
          };
        },
        [disabled, delta, r],
      );
    })({
      delta,
      disabled: !enabled,
    });
    let [v, p] = $$();
    let mRef = D.useRef({
      x: 0,
      y: 0,
    });
    let wRef = D.useRef({
      x: 0,
      y: 0,
    });
    let x = D.useMemo(() => {
      switch (activator) {
        case b.Pointer:
          if (pointerCoordinates) {
            return {
              top: pointerCoordinates.y,
              bottom: pointerCoordinates.y,
              left: pointerCoordinates.x,
              right: pointerCoordinates.x,
            };
          }
          return null;
        case b.DraggableRect:
          return draggingRect;
      }
    }, [activator, draggingRect, pointerCoordinates]);
    let ERef = D.useRef(null);
    let C = D.useCallback(() => {
      let ERef_current = ERef.current;
      if (!ERef_current) {
        return;
      }
      let t = mRef.current.x * wRef.current.x;
      let n = mRef.current.y * wRef.current.y;
      ERef_current.scrollBy(t, n);
    }, []);
    let M = D.useMemo(() => {
      if (order === y.TreeOrder) {
        return [...scrollableAncestors].reverse();
      }
      return scrollableAncestors;
    }, [order, scrollableAncestors]);
    D.useEffect(() => {
      if (!enabled || !scrollableAncestors.length || !x) {
        return void p();
      }
      for (let e of M) {
        if ((canScroll == null ? undefined : canScroll(e)) === false) {
          continue;
        }
        let n = scrollableAncestorRects[scrollableAncestors.indexOf(e)];
        if (!n) {
          continue;
        }
        let { direction, speed } = ((e, t, n, r = 10, l) => {
          let { top, left, right, bottom } = n;
          if (l === undefined) {
            l = el;
          }
          let { isTop, isBottom, isLeft, isRight } = er(e);
          let direction_1 = {
            x: 0,
            y: 0,
          };
          let speed_1 = {
            x: 0,
            y: 0,
          };
          let p = {
            height: t.height * l.y,
            width: t.width * l.x,
          };
          if (!isTop && top <= t.top + p.height) {
            direction_1.y = g.Backward;
            speed_1.y = r * Math.abs((t.top + p.height - top) / p.height);
          } else if (!isBottom && bottom >= t.bottom - p.height) {
            direction_1.y = g.Forward;
            speed_1.y = r * Math.abs((t.bottom - p.height - bottom) / p.height);
          }
          if (!isRight && right >= t.right - p.width) {
            direction_1.x = g.Forward;
            speed_1.x = r * Math.abs((t.right - p.width - right) / p.width);
          } else if (!isLeft && left <= t.left + p.width) {
            direction_1.x = g.Backward;
            speed_1.x = r * Math.abs((t.left + p.width - left) / p.width);
          }
          return {
            direction: direction_1,
            speed: speed_1,
          };
        })(e, n, x, acceleration, threshold);
        for (let e of ["x", "y"]) {
          if (!h[e][direction[e]]) {
            speed[e] = 0;
            direction[e] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          p();
          ERef.current = e;
          v(C, interval);
          mRef.current = speed;
          wRef.current = direction;
          return;
        }
      }
      mRef.current = {
        x: 0,
        y: 0,
      };
      wRef.current = {
        x: 0,
        y: 0,
      };
      p();
    }, [
      acceleration,
      C,
      canScroll,
      p,
      enabled,
      interval,
      JSON.stringify(x),
      JSON.stringify(h),
      v,
      scrollableAncestors,
      M,
      scrollableAncestorRects,
      JSON.stringify(threshold),
    ]);
  })({
    ...eB,
    delta: translate,
    draggingRect: tt,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
  });
  let tc = D.useMemo(
    () => ({
      active: ec,
      activeNode: ek,
      activeNodeRect,
      activatorEvent: eg,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes: nodes,
      droppableContainers: containers,
      droppableRects,
      over: tl,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration: ey,
      measuringScheduled,
      windowRect,
    }),
    [
      ec,
      ek,
      activeNodeRect,
      eg,
      collisions,
      containerNodeRect,
      dragOverlay,
      nodes,
      containers,
      droppableRects,
      tl,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      ey,
      measuringScheduled,
      windowRect,
    ],
  );
  let td = D.useMemo(
    () => ({
      activatorEvent: eg,
      activators,
      active: ec,
      activeNodeRect,
      ariaDescribedById: {
        draggable: em,
      },
      dispatch: KDispatch,
      draggableNodes: nodes,
      over: tl,
      measureDroppableContainers,
    }),
    [
      eg,
      activators,
      ec,
      activeNodeRect,
      KDispatch,
      em,
      nodes,
      tl,
      measureDroppableContainers,
    ],
  );
  return D.createElement(
    TContext.Provider,
    {
      value: j,
    },
    D.createElement(
      EFContext.Provider,
      {
        value: td,
      },
      D.createElement(
        EjContext.Provider,
        {
          value: tc,
        },
        D.createElement(
          EGContext.Provider,
          {
            value: ta,
          },
          children,
        ),
      ),
      D.createElement(EXComponent, {
        disabled:
          (accessibility == null ? undefined : accessibility.restoreFocus) ===
          false,
      }),
    ),
    D.createElement(ZComponent, {
      ...accessibility,
      hiddenTextDescribedById: em,
    }),
  );
});
let EHContext = D.createContext(null);
let eJ = "button";
export function PM(e) {
  let { id, data, disabled = false, attributes } = e;
  let i = YG("Droppable");
  let {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over,
  } = D.useContext(EFContext);
  let {
    role = eJ,
    roleDescription = "draggable",
    tabIndex = 0,
  } = attributes != null ? attributes : {};
  let isDragging = (active == null ? undefined : active.id) === id;
  let m = D.useContext(isDragging ? EGContext : EHContext);
  let [node, y] = lk();
  let [activatorNode, setActivatorNodeRef] = lk();
  let E = D.useMemo(
    () =>
      activators.reduce((acc, activator) => {
        let { eventName, handler } = activator;
        acc[eventName] = (e) => {
          handler(e, id);
        };
        return acc;
      }, {}),
    [activators, id],
  );
  let C = YN(data);
  Es(() => {
    draggableNodes.set(id, {
      id,
      key: i,
      node,
      activatorNode,
      data: C,
    });
    return () => {
      let e = draggableNodes.get(id);
      if (e && e.key === i) {
        draggableNodes.delete(id);
      }
    };
  }, [draggableNodes, id]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: D.useMemo(
      () => ({
        role,
        tabIndex,
        "aria-disabled": disabled,
        "aria-pressed": (!!isDragging && role === eJ) || undefined,
        "aria-roledescription": roleDescription,
        "aria-describedby": ariaDescribedById.draggable,
      }),
      [
        disabled,
        role,
        tabIndex,
        isDragging,
        roleDescription,
        ariaDescribedById.draggable,
      ],
    ),
    isDragging,
    listeners: disabled ? undefined : E,
    node,
    over,
    setNodeRef: y,
    setActivatorNodeRef,
    transform: m,
  };
}
export function fF() {
  return D.useContext(EjContext);
}
let eZ = {
  timeout: 25,
};
export function zM(e) {
  let { data, disabled = false, id, resizeObserverConfig } = e;
  let i = YG("Droppable");
  let { active, dispatch, over, measureDroppableContainers } =
    D.useContext(EFContext);
  let cRef = D.useRef({
    disabled,
  });
  let dRef = D.useRef(false);
  let fRef = D.useRef(null);
  let gRef = D.useRef(null);
  let {
    disabled: disabled_1,
    updateMeasurementsFor,
    timeout,
  } = {
    ...eZ,
    ...resizeObserverConfig,
  };
  let b = YN(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  let y = useEM({
    callback: D.useCallback(() => {
      if (!dRef.current) {
        dRef.current = true;
        return;
      }
      if (gRef.current != null) {
        clearTimeout(gRef.current);
      }
      gRef.current = setTimeout(() => {
        measureDroppableContainers(
          Array.isArray(b.current) ? b.current : [b.current],
        );
        gRef.current = null;
      }, timeout);
    }, [timeout]),
    disabled: disabled_1 || !active,
  });
  let w = D.useCallback(
    (e, t) => {
      if (y) {
        if (t) {
          y.unobserve(t);
          dRef.current = false;
        }
        if (e) {
          y.observe(e);
        }
      }
    },
    [y],
  );
  let [x, E] = lk(w);
  let C = YN(data);
  D.useEffect(() => {
    if (y && x.current) {
      y.disconnect();
      dRef.current = false;
      y.observe(x.current);
    }
  }, [x, y]);
  Es(() => {
    dispatch({
      type: h.RegisterDroppable,
      element: {
        id,
        key: i,
        disabled,
        node: x,
        rect: fRef,
        data: C,
      },
    });
    return () =>
      dispatch({
        type: h.UnregisterDroppable,
        key: i,
        id,
      });
  }, [id]);
  D.useEffect(() => {
    if (disabled !== cRef.current.disabled) {
      dispatch({
        type: h.SetDroppableDisabled,
        id,
        key: i,
        disabled,
      });
      cRef.current.disabled = disabled;
    }
  }, [id, i, disabled, dispatch]);
  return {
    active,
    rect: fRef,
    isOver: (over == null ? undefined : over.id) === id,
    node: x,
    over,
    setNodeRef: E,
  };
}
function E0Component(e) {
  let { animation, children } = e;
  let [r, setR] = D.useState(null);
  let [i, setI] = D.useState(null);
  let o = ZC(children);
  if (!(children || r || !o)) {
    setR(o);
  }
  Es(() => {
    if (!i) {
      return;
    }
    let e = r == null ? undefined : r.key;
    let n = r == null ? undefined : r.props.id;
    if (e == null || n == null) {
      setR(null);
    } else {
      Promise.resolve(animation(n, i)).then(() => {
        setR(null);
      });
    }
  }, [animation, r, i]);
  return D.createElement(
    D.Fragment,
    null,
    children,
    r
      ? D.cloneElement(r, {
          ref: setI,
        })
      : null,
  );
}
let e1 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
};
function e2(e) {
  let { children } = e;
  return D.createElement(
    EFContext.Provider,
    {
      value: eK,
    },
    D.createElement(
      EGContext.Provider,
      {
        value: e1,
      },
      children,
    ),
  );
}
let e5 = {
  position: "fixed",
  touchAction: "none",
};
let e9 = (e) => {
  if (kx(e)) {
    return "transform 250ms ease";
  }
};
let e3 = D.forwardRef((e, t) => {
  let {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = e9,
  } = e;
  if (!rect) {
    return null;
  }
  let d = adjustScale
    ? transform
    : {
        ...transform,
        scaleX: 1,
        scaleY: 1,
      };
  let f = {
    ...e5,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: Ks.Transform.toString(d),
    transformOrigin:
      adjustScale && activatorEvent
        ? ((e, t) => {
            let n = e__1(e);
            if (!n) {
              return "0 0";
            }
            let r = {
              x: ((n.x - t.left) / t.width) * 100,
              y: ((n.y - t.top) / t.height) * 100,
            };
            return r.x + "% " + r.y + "%";
          })(activatorEvent, rect)
        : undefined,
    transition:
      typeof transition === "function"
        ? transition(activatorEvent)
        : transition,
    ...style,
  };
  return D.createElement(
    as,
    {
      className,
      style: f,
      ref: t,
    },
    children,
  );
});
let e4 = {
  duration: 250,
  easing: "ease",
  keyframes: (e) => {
    let {
      transform: { initial, final },
    } = e;
    return [
      {
        transform: Ks.Transform.toString(initial),
      },
      {
        transform: Ks.Transform.toString(final),
      },
    ];
  },
  sideEffects:
    ((r = {
      styles: {
        active: {
          opacity: "0",
        },
      },
    }),
    (e) => {
      let { active, dragOverlay } = e;
      let l = {};
      let { styles, className } = r;
      if (styles != null && styles.active) {
        for (let [e, n] of Object.entries(styles.active)) {
          if (n !== undefined) {
            l[e] = active.node.style.getPropertyValue(e);
            active.node.style.setProperty(e, n);
          }
        }
      }
      if (styles != null && styles.dragOverlay) {
        for (let [e, t] of Object.entries(styles.dragOverlay)) {
          if (t !== undefined) {
            dragOverlay.node.style.setProperty(e, t);
          }
        }
      }
      if (className != null && className.active) {
        active.node.classList.add(className.active);
      }
      if (className != null && className.dragOverlay) {
        dragOverlay.node.classList.add(className.dragOverlay);
      }
      return function () {
        for (let [e, n] of Object.entries(l)) {
          active.node.style.setProperty(e, n);
        }
        if (className != null && className.active) {
          active.node.classList.remove(className.active);
        }
      };
    }),
};
let e6 = 0;
export let Hd = D.memo((e) => {
  var t;
  let {
    adjustScale = false,
    children,
    dropAnimation,
    style,
    transition,
    modifiers,
    wrapperElement = "div",
    className,
    zIndex = 999,
  } = e;
  let {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect,
  } = fF();
  let C = D.useContext(EGContext);
  t = active == null ? undefined : active.id;
  let M = D.useMemo(() => {
    if (t != null) {
      return ++e6;
    }
  }, [t]);
  let k = e_(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform: C,
    windowRect,
  });
  let rect = eS(activeNodeRect);
  let animation = ((e) => {
    let {
      config,
      draggableNodes,
      droppableContainers,
      measuringConfiguration,
    } = e;
    return _q((e, i) => {
      if (config === null) {
        return;
      }
      let a = draggableNodes.get(e);
      if (!a) {
        return;
      }
      let current = a.node.current;
      if (!current) {
        return;
      }
      let u = ez(i);
      if (!u) {
        return;
      }
      let { transform } = zk(i).getComputedStyle(i);
      let c = G(transform);
      if (!c) {
        return;
      }
      let d =
        typeof config === "function"
          ? config
          : ((e) => {
              let { duration, easing, sideEffects, keyframes } = {
                ...e4,
                ...e,
              };
              return (e) => {
                let { active, dragOverlay, transform, ...rest } = e;
                if (!duration) {
                  return;
                }
                let s = {
                  x: dragOverlay.rect.left - active.rect.left,
                  y: dragOverlay.rect.top - active.rect.top,
                };
                let c = {
                  scaleX:
                    transform.scaleX !== 1
                      ? (active.rect.width * transform.scaleX) /
                        dragOverlay.rect.width
                      : 1,
                  scaleY:
                    transform.scaleY !== 1
                      ? (active.rect.height * transform.scaleY) /
                        dragOverlay.rect.height
                      : 1,
                };
                let final = {
                  x: transform.x - s.x,
                  y: transform.y - s.y,
                  ...c,
                };
                let f = keyframes({
                  ...rest,
                  active,
                  dragOverlay,
                  transform: {
                    initial: transform,
                    final,
                  },
                });
                let [h] = f;
                let g = f[f.length - 1];
                if (JSON.stringify(h) === JSON.stringify(g)) {
                  return;
                }
                let v =
                  sideEffects == null
                    ? undefined
                    : sideEffects({
                        active,
                        dragOverlay,
                        ...rest,
                      });
                let p = dragOverlay.node.animate(f, {
                  duration,
                  easing,
                  fill: "forwards",
                });
                return new Promise((resolve) => {
                  p.onfinish = () => {
                    if (v != null) {
                      v();
                    }
                    resolve();
                  };
                });
              };
            })(config);
      ea(current, measuringConfiguration.draggable.measure);
      return d({
        active: {
          id: e,
          data: a.data,
          node: current,
          rect: measuringConfiguration.draggable.measure(current),
        },
        draggableNodes,
        dragOverlay: {
          node: i,
          rect: measuringConfiguration.dragOverlay.measure(u),
        },
        droppableContainers,
        measuringConfiguration,
        transform: c,
      });
    });
  })({
    config: dropAnimation,
    draggableNodes,
    droppableContainers,
    measuringConfiguration,
  });
  let O = rect ? dragOverlay.setRef : undefined;
  return D.createElement(
    e2,
    null,
    D.createElement(
      E0Component,
      {
        animation,
      },
      active && M
        ? D.createElement(
            e3,
            {
              key: M,
              id: active.id,
              ref: O,
              as: wrapperElement,
              activatorEvent,
              adjustScale,
              className,
              transition,
              rect,
              style: {
                zIndex,
                ...style,
              },
              transform: k,
            },
            children,
          )
        : null,
    ),
  );
});

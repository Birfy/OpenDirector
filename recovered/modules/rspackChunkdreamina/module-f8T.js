import { Gn, jK, qT, sH, yl } from "./module-dw4.js";
import o from "bT";
import a from "PC";
let reactionScheduler;
if (!o.useState) {
  throw Error("mobx-react-lite requires React with Hooks support");
}
if (!Gn) {
  throw Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
}
function s(e) {
  return yl(e);
}
class u {
  constructor(e) {
    var t = this;
    Object.defineProperty(this, "finalize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: e,
    });
    Object.defineProperty(this, "registrations", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Map(),
    });
    Object.defineProperty(this, "sweepTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined,
    });
    Object.defineProperty(this, "sweep", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (e = 10000) {
        clearTimeout(t.sweepTimeout);
        t.sweepTimeout = undefined;
        const n = Date.now();
        t.registrations.forEach((r, i) => {
          if (n - r.registeredAt >= e) {
            t.finalize(r.value);
            t.registrations.delete(i);
          }
        });
        if (t.registrations.size > 0) {
          t.scheduleSweep();
        }
      },
    });
    Object.defineProperty(this, "finalizeAllImmediately", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function () {
        t.sweep(0);
      },
    });
  }
  register(e, t, n) {
    this.registrations.set(n, {
      value: t,
      registeredAt: Date.now(),
    });
    this.scheduleSweep();
  }
  unregister(e) {
    this.registrations.delete(e);
  }
  scheduleSweep() {
    if (this.sweepTimeout === undefined) {
      this.sweepTimeout = setTimeout(this.sweep, 10000);
    }
  }
}
const c = new (
  typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : u
)(function (e) {
  let t;
  if ((t = e.reaction) != null) {
    t.dispose();
  }
  e.reaction = null;
});
export function Pe() {
  return false;
}
const f = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let i;
  const o = n.call(e);
  const a = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = o.next()).done) {
      a.push(r.value);
    }
  } catch (error) {
    i = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return a;
};
function h(e) {
  return "observer".concat(e);
}
const d = function () {};
function v() {
  return new d();
}
function useComponent(e, t = "observed") {
  let n;
  let r;
  const a = f(o.useState(v), 1)[0];
  const u = f(o.useState(), 2)[1];
  const l = () => u([]);
  const dRef = o.useRef(null);
  if (!dRef.current) {
    dRef.current = {
      reaction: null,
      mounted: false,
      changedBeforeMount: false,
    };
  }
  const dRef_current = dRef.current;
  if (!dRef_current.reaction) {
    dRef_current.reaction = new qT(h(t), function () {
      if (dRef_current.mounted) {
        l();
      } else {
        dRef_current.changedBeforeMount = true;
      }
    });
    c.register(a, dRef_current, dRef_current);
  }
  o.useDebugValue(dRef_current.reaction, s);
  o.useEffect(function () {
    c.unregister(dRef_current);
    dRef_current.mounted = true;
    if (dRef_current.reaction) {
      if (dRef_current.changedBeforeMount) {
        dRef_current.changedBeforeMount = false;
        l();
      }
    } else {
      dRef_current.reaction = new qT(h(t), function () {
        l();
      });
      l();
    }
    return function () {
      dRef_current.reaction.dispose();
      dRef_current.reaction = null;
      dRef_current.mounted = false;
      dRef_current.changedBeforeMount = false;
    };
  }, []);
  dRef_current.reaction.track(function () {
    try {
      n = e();
    } catch (error) {
      r = error;
    }
  });
  if (r) {
    throw r;
  }
  return n;
}
const p = typeof Symbol === "function" && Symbol.for;
const b = p
  ? Symbol.for("react.forward_ref")
  : typeof o.forwardRef === "function" &&
    o.forwardRef(function (e) {
      return null;
    }).$$typeof;
const g = p
  ? Symbol.for("react.memo")
  : typeof o.memo === "function" &&
    o.memo(function (e) {
      return null;
    }).$$typeof;
export function PA(e, t) {
  if (g && e.$$typeof === g) {
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  }
  let n;
  let r;
  let i;
  let a = (i = t == null ? undefined : t.forwardRef) != null && i;
  let s = e;
  const u = e.displayName || e.name;
  if (
    b &&
    e.$$typeof === b &&
    ((a = true), typeof (s = e.render) !== "function")
  ) {
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  }
  let c = function (e, t) {
    return useComponent(() => s(e, t), u);
  };
  if (u !== "") {
    c.displayName = u;
  }
  if (e.contextTypes) {
    c.contextTypes = e.contextTypes;
  }
  if (a) {
    c = o.forwardRef(c);
  }
  n = e;
  r = c = o.memo(c);
  Object.keys(n).forEach((e) => {
    if (!m[e]) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
    }
  });
  return c;
}
var m = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true,
  displayName: true,
};
export function nu(e) {
  const e_children = e.children;
  const e_render = e.render;
  const r = e_children || e_render;
  if (typeof r !== "function") {
    return null;
  }
  return useComponent(r);
}
export function iz(e, t) {
  return o.useState(function () {
    return sH(e(), t, {
      autoBind: true,
    });
  })[0];
}
nu.displayName = "Observer";
if (!(reactionScheduler = a.unstable_batchedUpdates)) {
  reactionScheduler = function (e) {
    e();
  };
}
jK({
  reactionScheduler,
});
c.finalizeAllImmediately;

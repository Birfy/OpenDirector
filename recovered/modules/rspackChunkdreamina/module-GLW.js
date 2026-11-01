import { Gn, jK, qT, yl } from "./module-dw4.js";
import s from "bT";
import u from "PC";
import h from "rwf";
let reactionScheduler;
let i;
let o;
if (!s.useState) {
  throw Error("mobx-react-lite requires React with Hooks support");
}
if (!Gn) {
  throw Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
}
function c(e) {
  return yl(e);
}
class l {
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
const f = new (
  typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : l
)(function (e) {
  let t;
  if ((t = e.reaction) != null) {
    t.dispose();
  }
  e.reaction = null;
});
function d(e) {
  e.reaction = new qT("observer".concat(e.name), function () {
    let t;
    e.stateVersion = Symbol();
    if ((t = e.onStoreChange) != null) {
      t.call(e);
    }
  });
}
const v = typeof Symbol === "function" && Symbol.for;
const _ =
  (o =
    (i = Object.getOwnPropertyDescriptor(function () {}, "name")) == null
      ? undefined
      : i.configurable) != null && o;
const p = v
  ? Symbol.for("react.forward_ref")
  : typeof s.forwardRef === "function" &&
    s.forwardRef(function (e) {
      return null;
    }).$$typeof;
const b = v
  ? Symbol.for("react.memo")
  : typeof s.memo === "function" &&
    s.memo(function (e) {
      return null;
    }).$$typeof;
export function PA(e, t) {
  if (b && e.$$typeof === b) {
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  }
  let n;
  let r;
  let i;
  let o = (i = t == null ? undefined : t.forwardRef) != null && i;
  let a = e;
  const u = e.displayName || e.name;
  if (
    p &&
    e.$$typeof === p &&
    ((o = true), typeof (a = e.render) !== "function")
  ) {
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  }
  let l = function (e, t) {
    return ((e, name = "observed") => {
      let n;
      let r;
      const iRef = s.useRef(null);
      if (!iRef.current) {
        var o = {
          reaction: null,
          onStoreChange: null,
          stateVersion: Symbol(),
          name,
          subscribe: function (e) {
            f.unregister(o);
            o.onStoreChange = e;
            if (!o.reaction) {
              d(o);
              o.stateVersion = Symbol();
            }
            return function () {
              let e;
              o.onStoreChange = null;
              if ((e = o.reaction) != null) {
                e.dispose();
              }
              o.reaction = null;
            };
          },
          getSnapshot: function () {
            return o.stateVersion;
          },
        };
        iRef.current = o;
      }
      const iRef_current = iRef.current;
      if (!iRef_current.reaction) {
        d(iRef_current);
        f.register(iRef, iRef_current, iRef_current);
      }
      s.useDebugValue(iRef_current.reaction, c);
      h.useSyncExternalStore(
        iRef_current.subscribe,
        iRef_current.getSnapshot,
        iRef_current.getSnapshot,
      );
      iRef_current.reaction.track(function () {
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
    })(() => a(e, t), u);
  };
  l.displayName = e.displayName;
  if (_) {
    Object.defineProperty(l, "name", {
      value: e.name,
      writable: true,
      configurable: true,
    });
  }
  if (e.contextTypes) {
    l.contextTypes = e.contextTypes;
  }
  if (o) {
    l = s.forwardRef(l);
  }
  n = e;
  r = l = s.memo(l);
  Object.keys(n).forEach((e) => {
    if (!y[e]) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
    }
  });
  return l;
}
var y = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true,
  displayName: true,
};
if (!(reactionScheduler = u.unstable_batchedUpdates)) {
  reactionScheduler = function (e) {
    e();
  };
}
jK({
  reactionScheduler,
});
f.finalizeAllImmediately;

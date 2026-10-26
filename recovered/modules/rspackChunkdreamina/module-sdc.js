import u from "bT";
import s from "rS";
import f from "zP7";
import { X } from "./module-Z6D.js";
import { A } from "./module-Us.js";
import { A as A_1 } from "./module-QqP.js";
import { A as A_2 } from "./module-puV.js";
import { Et, Kg, b0 } from "./module-Pl5.js";
import { A as A_3 } from "./module-iNu.js";
let r;
let o;
let i;
let l;
let a;
let c;
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const b = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
let E = {};
function C(e) {
  let t;
  const n = {
    position: "top",
    duration: l,
    ...e,
  };
  const n_position = n.position;
  const n_transitionClassNames = n.transitionClassNames;
  const n_transitionTimeout = n.transitionTimeout;
  const s = E[n_position] || {};
  const s_instance = s.instance;
  const s_pending = s.pending;
  if (s_instance || s_pending) {
    const m = () => {
      const instance = (E[n_position] || {}).instance;
      const notices = instance.state.notices;
      if (notices.length >= o) {
        t = notices[0].id;
        notices.shift();
        instance.add({
          ...n,
          id: t,
        });
      } else {
        t = instance.add(n);
      }
    };
    if (s_instance) {
      m();
    } else if (s_pending == null ? undefined : s_pending.then) {
      s_pending.then(() => {
        m();
        E[n_position].pending = null;
      });
    }
  } else {
    const v = document.createElement("div");
    (a || document.body).appendChild(v);
    E[n_position] = {};
    E[n_position].pending = new Promise((resolve) => {
      X(
        u.createElement(w, {
          transitionClassNames: n_transitionClassNames,
          transitionTimeout: n_transitionTimeout,
          ref: function (o) {
            E[n_position].instance = o;
            t = o.add(n);
            resolve(null);
          },
        }),
        v,
      );
    });
  }
  return function () {
    let e;
    let n;
    if ((n = (e = E[n_position]) == null ? undefined : e.instance) != null) {
      n.remove(t);
    }
  };
}
var w = ((e) => {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    t.remove = function (n) {
      const r = t.state.notices.find((e) => e.id === n);
      if (r) {
        t.update({
          ...r,
          style: {
            ...r.style,
            opacity: 0,
          },
        });
      }
      setTimeout(() => {
        e.prototype.remove.call(t, n);
      }, 100);
    };
    return t;
  }
  b(t, e);
  t.prototype.render = function () {
    const e = this;
    const props = this.props;
    const t_transitionClassNames = props.transitionClassNames;
    const t_transitionTimeout = props.transitionTimeout;
    const t_prefixCls = props.prefixCls;
    const t_rtl = props.rtl;
    const state = this.state;
    const a_notices = state.notices;
    const a_position = state.position;
    const iconPrefix = t_prefixCls || i;
    const rtl = b0(t_rtl) ? c : t_rtl;
    const b = iconPrefix ? iconPrefix + "-message" : "arco-message";
    const timeout = {
      enter: Et(
        t_transitionTimeout == null ? undefined : t_transitionTimeout.enter,
      )
        ? t_transitionTimeout == null
          ? undefined
          : t_transitionTimeout.enter
        : 100,
      exit: Et(
        t_transitionTimeout == null ? undefined : t_transitionTimeout.exit,
      )
        ? t_transitionTimeout == null
          ? undefined
          : t_transitionTimeout.exit
        : 300,
    };
    const className = A_2(b + "-wrapper", b + "-wrapper-" + a_position);
    return u.createElement(
      "div",
      {
        className,
      },
      u.createElement(
        s.A,
        {
          component: null,
        },
        a_notices.map((t) =>
          u.createElement(
            f.A,
            {
              key: t.id,
              timeout,
              classNames: t_transitionClassNames || "fadeMessage",
              onExit: function (e) {
                e.style.height = e.scrollHeight + "px";
              },
              onExiting: function (e) {
                e.style.height = 0;
              },
              onExited: function (e) {
                e.style.height = 0;
                if (t.onClose) {
                  t.onClose();
                }
              },
            },
            u.createElement(A_1, {
              ...t,
              prefixCls: b,
              iconPrefix,
              onClose: e.remove,
              noticeType: "message",
              rtl,
            }),
          ),
        ),
      ),
    );
  };
  t.config = function (e = {}) {
    if (e.maxCount) {
      o = e.maxCount;
    }
    if (e.prefixCls) {
      i = e.prefixCls;
    }
    if (e.duration) {
      l = e.duration;
    }
    if (e.rtl) {
      c = e.rtl;
    }
    if (e.getContainer && e.getContainer() !== a) {
      a = e.getContainer();
      Object.values(E).forEach((e) => {
        const e_instance = e.instance;
        if (e_instance == null) {
          return undefined;
        }
        return e_instance.clear();
      });
      E = {};
    }
  };
  t.clear = function () {
    Object.values(E).forEach((e) => {
      const e_instance = e.instance;
      if (e_instance != null) {
        e_instance.clear();
      }
    });
  };
  t.addInstance = C;
  return t;
})(A);
["info", "success", "error", "warning", "loading", "normal"].forEach((e) => {
  w[e] = function (t) {
    return C({
      ...(typeof t === "string"
        ? {
            content: t,
          }
        : t),
      type: e,
    });
  };
});
w.useMessage = function (e = {}) {
  let t;
  const e_maxCount = e.maxCount;
  const e_duration = e.duration;
  const duration = e_duration === undefined ? 3000 : e_duration;
  const e_prefixCls = e.prefixCls;
  const ref = u.createRef();
  const a = u.createElement(A_3, {
    ref,
  });
  const c = {};
  const s = {};
  ["info", "success", "warning", "error", "normal"].forEach((e) => {
    s[e] = function (r) {
      const a = Kg(r)
        ? {
            content: r,
          }
        : r;
      return ((e) => {
        if (ref.current) {
          var r;
          var a;
          var s;
          const f = ref.current.getContextConfig();
          a = f.rtl;
          r = f.prefixCls;
        }
        const prefixCls = e_prefixCls || r;
        const d = {
          position: "top",
          duration,
          ...e,
        };
        const d_position = d.position;
        const d_transitionClassNames = d.transitionClassNames;
        if (c[d_position]) {
          const h = c[d_position].state.notices;
          if (h.length >= e_maxCount) {
            s = h[0].id;
            h.shift();
            c[d_position].add({
              ...d,
              id: s,
            });
          } else {
            s = c[d_position].add(d);
          }
        } else {
          t = u.createElement(O, {
            transitionClassNames: d_transitionClassNames,
            ref: function (e) {
              c[d_position] = e;
              if (c[d_position]) {
                s = c[d_position].add(d);
              }
            },
            prefixCls,
            rtl: a,
          });
          ref.current.addInstance(t);
        }
        return function () {
          if (c[d_position]) {
            c[d_position].remove(s);
          }
        };
      })({
        ...a,
        type: e,
      });
    };
  });
  return [s, a];
};
var O = w;
export { O as A };

import a from "oa";
import c from "bk";
import u from "z8";
import d from "rS";
import p from "zP7";
import { X } from "./module-Y5R.js";
import { A } from "./module-AL.js";
import { A as A_1 } from "./module-OSv.js";
import { A as A_2 } from "./module-Ww_2.js";
import { Kg, b0 } from "./module-V9.js";
import y from "bT";
import { A as A_3 } from "./module-Ru_5.js";
let r;
let o;
let duration;
let l;
let s;
let x = {};
function w(e) {
  let t;
  let n = a._(
    {
      position: "top",
      duration,
    },
    e,
  );
  let { position, transitionClassNames } = n;
  let { instance, pending } = x[position] || {};
  if (instance || pending) {
    let e = () => {
      let { instance } = x[position] || {};
      let { notices } = instance.state;
      let update = notices.find(
        (e) =>
          e.id === n.id ||
          (typeof n.content === "string" &&
            e.content === n.content &&
            e.type === n.type),
      );
      let s = c._(a._({}, n), {
        update,
      });
      if (update) {
        instance.add(
          c._(a._({}, s), {
            id: update.id,
          }),
        );
      } else if (notices.length >= r) {
        notices.shift();
        instance.add(s);
      } else {
        t = instance.add(s);
      }
    };
    if (instance) {
      e();
    } else if (pending == null ? undefined : pending.then) {
      pending.then(() => {
        e();
        x[position].pending = null;
      });
    }
  } else {
    let e = document.createElement("div");
    (l || document.body).appendChild(e);
    x[position] = {};
    x[position].pending = new Promise((resolve) => {
      X(
        u.jsx(j, {
          transitionClassNames,
          ref: (e) => {
            if (!x[position]) {
              x[position] = {};
            }
            x[position].instance = e;
            t = e.add(n);
            resolve(null);
          },
        }),
        e,
      );
    });
  }
  return () => {
    let { instance, pending } = x[position] || {};
    if (instance || pending) {
      if (instance) {
        var r;
        var i;
        if (!((i = x[position]) == null || (r = i.instance) == null)) {
          r.remove(t);
        }
      } else {
        if (pending == null ? undefined : pending.then) {
          pending.then(() => {
            var e;
            var n;
            var r;
            if (!((n = x[position]) == null || (e = n.instance) == null)) {
              e.remove(t);
            }
            if ((r = x[position]) == null ? undefined : r.pending) {
              x[position].pending = null;
            }
          });
        }
      }
    }
  };
}
class j extends A {
  render() {
    let { transitionClassNames, prefixCls, rtl } = this.props;
    let { notices, position } = this.state;
    let iconPrefix = prefixCls || o;
    let rtl_1 = b0(rtl) ? s : rtl;
    let h = iconPrefix ? `${iconPrefix}-message` : "lv-message";
    let className = A_2(`${h}-wrapper`, `${h}-wrapper-${position}`);
    return u.jsx("div", {
      className,
      children: u.jsx(d.A, {
        component: null,
        children: notices.map((t) =>
          u.jsx(
            p.A,
            {
              timeout: {
                enter: 100,
                exit: 300,
              },
              classNames: transitionClassNames || "fadeMessage",
              onExit: (e) => {
                e.style.height = `${e.scrollHeight}px`;
              },
              onExiting: (e) => {
                e.style.height = 0;
              },
              onExited: (e) => {
                e.style.height = 0;
                if (t.onClose) {
                  t.onClose();
                }
              },
              children: u.jsx(
                A_1,
                c._(a._({}, t), {
                  prefixCls: h,
                  iconPrefix,
                  onClose: this.remove,
                  noticeType: "message",
                  rtl: rtl_1,
                }),
              ),
            },
            t.id,
          ),
        ),
      }),
    });
  }
  constructor(...e) {
    super(...e);
    this.remove = (e) => {
      let t = this.state.notices.find((t) => t.id === e);
      if (t) {
        this.update(
          c._(a._({}, t), {
            style: c._(a._({}, t.style), {
              opacity: 0,
            }),
          }),
        );
      }
      setTimeout(() => {
        super.remove(e);
      }, 100);
    };
  }
}
j.config = (e = {}) => {
  if (e.maxCount) {
    r = e.maxCount;
  }
  if (e.prefixCls) {
    o = e.prefixCls;
  }
  if (e.duration) {
    duration = e.duration;
  }
  if (e.rtl) {
    s = e.rtl;
  }
  if (e.getContainer && e.getContainer() !== l) {
    l = e.getContainer();
    Object.values(x).forEach(({ instance }) => {
      if (instance == null) {
        return undefined;
      }
      return instance.clear();
    });
    x = {};
  }
};
j.clear = () => {
  Object.values(x).forEach(({ instance }) => {
    if (instance != null) {
      instance.clear();
    }
  });
};
j.addInstance = w;
["info", "success", "error", "warning", "loading", "normal"].forEach((e) => {
  j[e] = (t) =>
    w(
      c._(
        a._(
          {},
          typeof t === "string"
            ? {
                content: t,
              }
            : t,
        ),
        {
          type: e,
        },
      ),
    );
});
j.useMessage = function (e = {}) {
  let t;
  let { maxCount, duration = 3000, prefixCls } = e;
  let ref = y.createRef();
  let l = u.jsx(A_3, {
    ref,
  });
  let s = {};
  let d = {};
  ["info", "success", "warning", "error", "normal"].forEach((e) => {
    d[e] = (l) => {
      let d = Kg(l)
        ? {
            content: l,
          }
        : l;
      return ((e) => {
        let l;
        let d;
        let id;
        if (ref.current) {
          let e = ref.current.getContextConfig();
          d = e.rtl;
          l = e.prefixCls;
        }
        let prefixCls_1 = prefixCls || l;
        let h = a._(
          {
            position: "top",
            duration,
          },
          e,
        );
        let { position, transitionClassNames } = h;
        if (s[position]) {
          let { notices } = s[position].state;
          if (notices.length >= maxCount) {
            id = notices[0].id;
            notices.shift();
            s[position].add(
              c._(a._({}, h), {
                id,
              }),
            );
          } else {
            id = s[position].add(h);
          }
        } else {
          t = u.jsx(O, {
            transitionClassNames,
            ref: (e) => {
              s[position] = e;
              if (s[position]) {
                id = s[position].add(h);
              }
            },
            prefixCls: prefixCls_1,
            rtl: d,
          });
          ref.current.addInstance(t);
        }
        return () => {
          if (s[position]) {
            s[position].remove(id);
          }
        };
      })(
        c._(a._({}, d), {
          type: e,
        }),
      );
    };
  });
  return [d, l];
};
var O = j;
export { O as A };

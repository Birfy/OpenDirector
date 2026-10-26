import s from "oa";
import i from "bk";
import "yS";
import r from "gL";
import n from "bT";
import { rM } from "./module-VYe.js";
const l = Symbol("prevent-canvas-render");
const c = ["info", "success", "warning", "error", "confirm"];
function d(e) {
  if (!e[l]) {
    Object.defineProperty(e, l, {
      value: true,
      enumerable: false,
    });
  }
  return e;
}
var u = (e) => {
  var t = rM(e);
  return (e) => {
    if (n.isValidElement(e)) {
      return n.cloneElement(e, {
        ref: (e) => {
          if (e) {
            var a;
            t(
              (
                (a = e.parentElement) == null
                  ? undefined
                  : a.classList.contains("lv-modal-wrapper")
              )
                ? e.parentElement
                : e,
            );
          }
        },
      });
    }
    return e;
  };
};
export { u as g };
function m(e, t) {
  let a;
  let r;
  let n;
  if (((a = e.modalRender) == null ? undefined : a[l]) === true) {
    return e;
  }
  return i._(s._({}, e), {
    modalRender:
      ((r = e.modalRender), (n = d(u(t))), r ? d((e) => n(r(e))) : d(n)),
  });
}
function h(e, t) {
  if (typeof e.update === "function") {
    const a = e.update.bind(e);
    e.update = (e) => {
      a(m(e, t));
    };
  }
  return e;
}
function g(e) {
  return (t, a) => h(r.A[e](m(t, a)), a);
}
export var a = {
  confirm: g("confirm"),
  info: g("info"),
  success: g("success"),
  warning: g("warning"),
  error: g("error"),
  destroyAll() {
    r.A.destroyAll();
  },
  config(e) {
    r.A.config(e);
  },
  useModal(e) {
    const [t, a] = r.A.useModal();
    const i = s._({}, t);
    c.forEach((a) => {
      var s;
      i[a] =
        (s = ((e, t) => {
          if (e) {
            return (a) => h(e(m(a, t)), t);
          }
        })(t[a], e)) != null
          ? s
          : t[a];
    });
    return [i, a];
  },
};

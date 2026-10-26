import s from "./module-J_7.js";
import c from "./module-Xy_2_6.js";
import u from "./module-WG_2_6.js";
import f from "./module-Y_7.js";
import l from "./module-D_2_6.js";
import h from "./module-X_7.js";
import p from "./module-iB_7.js";
import v from "./module-E6_6.js";
import d from "./module-xv_6.js";
import g from "./module-eXf_6.js";
import y from "./module-A1_7.js";
import m from "./module-p2_6.js";
let n;
let o;
let a;
let i;
let s_setImmediate = s.setImmediate;
let s_clearImmediate = s.clearImmediate;
const s_process = s.process;
const s_Dispatch = s.Dispatch;
const s_Function = s.Function;
const s_MessageChannel = s.MessageChannel;
const s_String = s.String;
let R = 0;
const M = {};
const I = "onreadystatechange";
h(function () {
  n = s.location;
});
const k = (t) => {
  if (l(M, t)) {
    const r = M[t];
    delete M[t];
    r();
  }
};
const T = (t) =>
  function () {
    k(t);
  };
const j = function (t) {
  k(t.data);
};
const F = function (t) {
  s.postMessage(s_String(t), n.protocol + "//" + n.host);
};
if (!(s_setImmediate && s_clearImmediate)) {
  s_setImmediate = function (t) {
    g(arguments.length, 1);
    const r = f(t) ? t : s_Function(t);
    const e = v(arguments, 1);
    M[++R] = function () {
      c(r, undefined, e);
    };
    o(R);
    return R;
  };
  s_clearImmediate = function (t) {
    delete M[t];
  };
  if (m) {
    o = function (t) {
      s_process.nextTick(T(t));
    };
  } else if (s_Dispatch && s_Dispatch.now) {
    o = function (t) {
      s_Dispatch.now(T(t));
    };
  } else if (s_MessageChannel && !y) {
    i = (a = new s_MessageChannel()).port2;
    a.port1.onmessage = j;
    o = u(i.postMessage, i);
  } else if (
    s.addEventListener &&
    f(s.postMessage) &&
    !s.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !h(F)
  ) {
    o = F;
    s.addEventListener("message", j, false);
  } else {
    o =
      I in d("script")
        ? function (t) {
            p.appendChild(d("script"))[I] = function () {
              p.removeChild(this);
              k(t);
            };
          }
        : function (t) {
            setTimeout(T(t), 0);
          };
  }
}
export default {
  set: s_setImmediate,
  clear: s_clearImmediate,
};

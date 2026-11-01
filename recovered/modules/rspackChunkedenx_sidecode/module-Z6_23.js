import s from "./module-J_24.js";
import c from "./module-Xy_2_23.js";
import u from "./module-WG_2_23.js";
import f from "./module-Y_24.js";
import l from "./module-D_2_23.js";
import h from "./module-X_24.js";
import v from "./module-iB_24.js";
import p from "./module-E6_23.js";
import d from "./module-xv_23.js";
import g from "./module-eXf_23.js";
import y from "./module-A1_24.js";
import b from "./module-p2_23.js";
let n;
let o;
let i;
let a;
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
const j = (t) =>
  function () {
    k(t);
  };
const T = function (t) {
  k(t.data);
};
const N = function (t) {
  s.postMessage(s_String(t), n.protocol + "//" + n.host);
};
if (!(s_setImmediate && s_clearImmediate)) {
  s_setImmediate = function (t) {
    g(arguments.length, 1);
    const r = f(t) ? t : s_Function(t);
    const e = p(arguments, 1);
    M[++R] = function () {
      c(r, undefined, e);
    };
    o(R);
    return R;
  };
  s_clearImmediate = function (t) {
    delete M[t];
  };
  if (b) {
    o = function (t) {
      s_process.nextTick(j(t));
    };
  } else if (s_Dispatch && s_Dispatch.now) {
    o = function (t) {
      s_Dispatch.now(j(t));
    };
  } else if (s_MessageChannel && !y) {
    a = (i = new s_MessageChannel()).port2;
    i.port1.onmessage = T;
    o = u(a.postMessage, a);
  } else if (
    s.addEventListener &&
    f(s.postMessage) &&
    !s.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !h(N)
  ) {
    o = N;
    s.addEventListener("message", T, false);
  } else {
    o =
      I in d("script")
        ? function (t) {
            v.appendChild(d("script"))[I] = function () {
              v.removeChild(this);
              k(t);
            };
          }
        : function (t) {
            setTimeout(j(t), 0);
          };
  }
}
export default {
  set: s_setImmediate,
  clear: s_clearImmediate,
};

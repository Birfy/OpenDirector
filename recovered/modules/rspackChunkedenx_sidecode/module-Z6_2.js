import a from "./module-J_3.js";
import u from "./module-Xy_2_2.js";
import c from "./module-WG_2_2.js";
import f from "./module-Y_3.js";
import h from "./module-D_2_2.js";
import l from "./module-X_3.js";
import v from "./module-iB_3.js";
import p from "./module-E6_2.js";
import d from "./module-xv_2.js";
import g from "./module-eXf_2.js";
import y from "./module-A1_3.js";
import b from "./module-p2_2.js";
let n;
let i;
let o;
let s;
let a_setImmediate = a.setImmediate;
let a_clearImmediate = a.clearImmediate;
const a_process = a.process;
const a_Dispatch = a.Dispatch;
const a_Function = a.Function;
const a_MessageChannel = a.MessageChannel;
const a_String = a.String;
let R = 0;
const M = {};
const I = "onreadystatechange";
l(function () {
  n = a.location;
});
const k = (t) => {
  if (h(M, t)) {
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
const N = function (t) {
  a.postMessage(a_String(t), n.protocol + "//" + n.host);
};
if (!(a_setImmediate && a_clearImmediate)) {
  a_setImmediate = function (t) {
    g(arguments.length, 1);
    const r = f(t) ? t : a_Function(t);
    const e = p(arguments, 1);
    M[++R] = function () {
      u(r, undefined, e);
    };
    i(R);
    return R;
  };
  a_clearImmediate = function (t) {
    delete M[t];
  };
  if (b) {
    i = function (t) {
      a_process.nextTick(T(t));
    };
  } else if (a_Dispatch && a_Dispatch.now) {
    i = function (t) {
      a_Dispatch.now(T(t));
    };
  } else if (a_MessageChannel && !y) {
    s = (o = new a_MessageChannel()).port2;
    o.port1.onmessage = j;
    i = c(s.postMessage, s);
  } else if (
    a.addEventListener &&
    f(a.postMessage) &&
    !a.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !l(N)
  ) {
    i = N;
    a.addEventListener("message", j, false);
  } else {
    i =
      I in d("script")
        ? function (t) {
            v.appendChild(d("script"))[I] = function () {
              v.removeChild(this);
              k(t);
            };
          }
        : function (t) {
            setTimeout(T(t), 0);
          };
  }
}
export default {
  set: a_setImmediate,
  clear: a_clearImmediate,
};

import s from "./module-J_19.js";
import u from "./module-Xy_2_18.js";
import c from "./module-WG_2_18.js";
import f from "./module-Y_19.js";
import h from "./module-D_2_18.js";
import l from "./module-X_19.js";
import v from "./module-iB_19.js";
import p from "./module-E6_18.js";
import d from "./module-xv_18.js";
import g from "./module-eXf_18.js";
import y from "./module-A1_19.js";
import b from "./module-p2_18.js";
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
l(function () {
  n = s.location;
});
const k = (r) => {
  if (h(M, r)) {
    const t = M[r];
    delete M[r];
    t();
  }
};
const T = (r) =>
  function () {
    k(r);
  };
const j = function (r) {
  k(r.data);
};
const N = function (r) {
  s.postMessage(s_String(r), n.protocol + "//" + n.host);
};
if (!(s_setImmediate && s_clearImmediate)) {
  s_setImmediate = function (r) {
    g(arguments.length, 1);
    const t = f(r) ? r : s_Function(r);
    const e = p(arguments, 1);
    M[++R] = function () {
      u(t, undefined, e);
    };
    o(R);
    return R;
  };
  s_clearImmediate = function (r) {
    delete M[r];
  };
  if (b) {
    o = function (r) {
      s_process.nextTick(T(r));
    };
  } else if (s_Dispatch && s_Dispatch.now) {
    o = function (r) {
      s_Dispatch.now(T(r));
    };
  } else if (s_MessageChannel && !y) {
    a = (i = new s_MessageChannel()).port2;
    i.port1.onmessage = j;
    o = c(a.postMessage, a);
  } else if (
    s.addEventListener &&
    f(s.postMessage) &&
    !s.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !l(N)
  ) {
    o = N;
    s.addEventListener("message", j, false);
  } else {
    o =
      I in d("script")
        ? function (r) {
            v.appendChild(d("script"))[I] = function () {
              v.removeChild(this);
              k(r);
            };
          }
        : function (r) {
            setTimeout(T(r), 0);
          };
  }
}
export default {
  set: s_setImmediate,
  clear: s_clearImmediate,
};

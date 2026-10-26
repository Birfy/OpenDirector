import s from "./module-J_10.js";
import u from "./module-Xy_2_9.js";
import c from "./module-WG_2_9.js";
import f from "./module-Y_10.js";
import l from "./module-D_2_9.js";
import h from "./module-X_10.js";
import v from "./module-iB_10.js";
import d from "./module-E6_9.js";
import p from "./module-xv_9.js";
import g from "./module-eXf_9.js";
import y from "./module-A1_10.js";
import m from "./module-p2_9.js";
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
let _ = 0;
const R = {};
const M = "onreadystatechange";
h(function () {
  n = s.location;
});
const I = (t) => {
  if (l(R, t)) {
    const e = R[t];
    delete R[t];
    e();
  }
};
const T = (t) =>
  function () {
    I(t);
  };
const k = function (t) {
  I(t.data);
};
const N = function (t) {
  s.postMessage(s_String(t), n.protocol + "//" + n.host);
};
if (!(s_setImmediate && s_clearImmediate)) {
  s_setImmediate = function (t) {
    g(arguments.length, 1);
    const e = f(t) ? t : s_Function(t);
    const r = d(arguments, 1);
    R[++_] = function () {
      u(e, undefined, r);
    };
    o(_);
    return _;
  };
  s_clearImmediate = function (t) {
    delete R[t];
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
    a = (i = new s_MessageChannel()).port2;
    i.port1.onmessage = k;
    o = c(a.postMessage, a);
  } else if (
    s.addEventListener &&
    f(s.postMessage) &&
    !s.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !h(N)
  ) {
    o = N;
    s.addEventListener("message", k, false);
  } else {
    o =
      M in p("script")
        ? function (t) {
            v.appendChild(p("script"))[M] = function () {
              v.removeChild(this);
              I(t);
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

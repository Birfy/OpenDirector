import s from "./module-u.js";
import u from "./module-l.js";
import c from "./module-fM_3.js";
import f from "./module-r.js";
import l from "./module-h.js";
import p from "./module-VV_4.js";
import h from "./module-sb_2.js";
import v from "./module-Vz_2.js";
import d from "./module-nH_3.js";
import g from "./module-lU_2.js";
import y from "./module-xT_4.js";
import m from "./module-fd_4.js";
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
const z = {};
const O = "onreadystatechange";
p(function () {
  n = s.location;
});
const S = (e) => {
  if (l(z, e)) {
    const t = z[e];
    delete z[e];
    t();
  }
};
const _ = (e) =>
  function () {
    S(e);
  };
const T = function (e) {
  S(e.data);
};
const k = function (e) {
  s.postMessage(s_String(e), n.protocol + "//" + n.host);
};
if (!(s_setImmediate && s_clearImmediate)) {
  s_setImmediate = function (e) {
    g(arguments.length, 1);
    const t = f(e) ? e : s_Function(e);
    const r = v(arguments, 1);
    z[++R] = function () {
      u(t, undefined, r);
    };
    o(R);
    return R;
  };
  s_clearImmediate = function (e) {
    delete z[e];
  };
  if (m) {
    o = function (e) {
      s_process.nextTick(_(e));
    };
  } else if (s_Dispatch && s_Dispatch.now) {
    o = function (e) {
      s_Dispatch.now(_(e));
    };
  } else if (s_MessageChannel && !y) {
    a = (i = new s_MessageChannel()).port2;
    i.port1.onmessage = T;
    o = c(a.postMessage, a);
  } else if (
    s.addEventListener &&
    f(s.postMessage) &&
    !s.importScripts &&
    n &&
    n.protocol !== "file:" &&
    !p(k)
  ) {
    o = k;
    s.addEventListener("message", T, false);
  } else {
    o =
      O in d("script")
        ? function (e) {
            h.appendChild(d("script"))[O] = function () {
              h.removeChild(this);
              S(e);
            };
          }
        : function (e) {
            setTimeout(_(e), 0);
          };
  }
}
export default {
  set: s_setImmediate,
  clear: s_clearImmediate,
};

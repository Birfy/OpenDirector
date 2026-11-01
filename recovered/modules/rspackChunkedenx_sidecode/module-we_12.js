import u from "./module-J_12.js";
import c from "./module-WG_2_11.js";
import { f } from "./module-R_11.js";
import __h from "./module-Z6_11.js";
import l from "./module-nA_11.js";
import v from "./module-A1_12.js";
import p from "./module-bT_11.js";
import d from "./module-D8_11.js";
import g from "./module-p2_11.js";
let n;
let o;
let i;
let a;
let s;
let __h_set = __h.set;
const y = u.MutationObserver || u.WebKitMutationObserver;
const u_document = u.document;
const u_process = u.process;
const u_Promise = u.Promise;
const x = f(u, "queueMicrotask");
let w = x && x.value;
if (!w) {
  const S = new l();
  const E = function () {
    let r;
    let t;
    for (g && (r = u_process.domain) && r.exit(); (t = S.get());) {
      try {
        t();
      } catch (error) {
        if (S.head) {
          n();
        }
        throw error;
      }
    }
    if (r) {
      r.enter();
    }
  };
  if (v || g || d || !y || !u_document) {
    if (!p && u_Promise && u_Promise.resolve) {
      a = u_Promise.resolve(undefined);
      a.constructor = u_Promise;
      s = c(a.then, a);
      n = function () {
        s(E);
      };
    } else if (g) {
      n = function () {
        u_process.nextTick(E);
      };
    } else {
      __h_set = c(__h_set, u);
      n = function () {
        __h_set(E);
      };
    }
  } else {
    o = true;
    i = u_document.createTextNode("");
    new y(E).observe(i, {
      characterData: true,
    });
    n = function () {
      i.data = o = !o;
    };
  }
  w = function (r) {
    if (!S.head) {
      n();
    }
    S.add(r);
  };
}
export default w;

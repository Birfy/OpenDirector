import u from "./module-J_6.js";
import c from "./module-WG_2_5.js";
import { f } from "./module-R_5.js";
import __h from "./module-Z6_5.js";
import l from "./module-nA_5.js";
import v from "./module-A1_6.js";
import p from "./module-bT_5.js";
import d from "./module-D8_5.js";
import g from "./module-p2_5.js";
let n;
let i;
let o;
let s;
let a;
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
    let t;
    let r;
    for (g && (t = u_process.domain) && t.exit(); (r = S.get());) {
      try {
        r();
      } catch (error) {
        if (S.head) {
          n();
        }
        throw error;
      }
    }
    if (t) {
      t.enter();
    }
  };
  if (v || g || d || !y || !u_document) {
    if (!p && u_Promise && u_Promise.resolve) {
      s = u_Promise.resolve(undefined);
      s.constructor = u_Promise;
      a = c(s.then, s);
      n = function () {
        a(E);
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
    i = true;
    o = u_document.createTextNode("");
    new y(E).observe(o, {
      characterData: true,
    });
    n = function () {
      o.data = i = !i;
    };
  }
  w = function (t) {
    if (!S.head) {
      n();
    }
    S.add(t);
  };
}
export default w;

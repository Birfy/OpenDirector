import u from "./module-J_8.js";
import c from "./module-WG_2_7.js";
import { f } from "./module-R_7.js";
import __l from "./module-Z6_7.js";
import h from "./module-nA_7.js";
import v from "./module-A1_8.js";
import p from "./module-bT_7.js";
import d from "./module-D8_7.js";
import g from "./module-p2_7.js";
let n;
let o;
let i;
let a;
let s;
let __l_set = __l.set;
const y = u.MutationObserver || u.WebKitMutationObserver;
const u_document = u.document;
const u_process = u.process;
const u_Promise = u.Promise;
const w = f(u, "queueMicrotask");
let x = w && w.value;
if (!x) {
  const E = new h();
  const S = function () {
    let r;
    let t;
    for (g && (r = u_process.domain) && r.exit(); (t = E.get());) {
      try {
        t();
      } catch (error) {
        if (E.head) {
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
        s(S);
      };
    } else if (g) {
      n = function () {
        u_process.nextTick(S);
      };
    } else {
      __l_set = c(__l_set, u);
      n = function () {
        __l_set(S);
      };
    }
  } else {
    o = true;
    i = u_document.createTextNode("");
    new y(S).observe(i, {
      characterData: true,
    });
    n = function () {
      i.data = o = !o;
    };
  }
  x = function (r) {
    if (!E.head) {
      n();
    }
    E.add(r);
  };
}
export default x;

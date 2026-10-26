import u from "./module-J_10.js";
import c from "./module-WG_2_9.js";
import { f } from "./module-R_9.js";
import __l from "./module-Z6_9.js";
import h from "./module-nA_9.js";
import v from "./module-A1_10.js";
import d from "./module-bT_9.js";
import p from "./module-D8_9.js";
import g from "./module-p2_9.js";
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
const A = f(u, "queueMicrotask");
let x = A && A.value;
if (!x) {
  const E = new h();
  const S = function () {
    let t;
    let e;
    for (g && (t = u_process.domain) && t.exit(); (e = E.get());) {
      try {
        e();
      } catch (error) {
        if (E.head) {
          n();
        }
        throw error;
      }
    }
    if (t) {
      t.enter();
    }
  };
  if (v || g || p || !y || !u_document) {
    if (!d && u_Promise && u_Promise.resolve) {
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
  x = function (t) {
    if (!E.head) {
      n();
    }
    E.add(t);
  };
}
export default x;

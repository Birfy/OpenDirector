import c from "./module-J_21.js";
import u from "./module-WG_2_20.js";
import { f } from "./module-R_20.js";
import __l from "./module-Z6_20.js";
import h from "./module-nA_20.js";
import v from "./module-A1_21.js";
import p from "./module-bT_20.js";
import d from "./module-D8_20.js";
import g from "./module-p2_20.js";
let n;
let o;
let i;
let a;
let s;
let __l_set = __l.set;
const y = c.MutationObserver || c.WebKitMutationObserver;
const c_document = c.document;
const c_process = c.process;
const c_Promise = c.Promise;
const A = f(c, "queueMicrotask");
let x = A && A.value;
if (!x) {
  const S = new h();
  const E = function () {
    let t;
    let r;
    for (g && (t = c_process.domain) && t.exit(); (r = S.get());) {
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
  if (v || g || d || !y || !c_document) {
    if (!p && c_Promise && c_Promise.resolve) {
      a = c_Promise.resolve(undefined);
      a.constructor = c_Promise;
      s = u(a.then, a);
      n = function () {
        s(E);
      };
    } else if (g) {
      n = function () {
        c_process.nextTick(E);
      };
    } else {
      __l_set = u(__l_set, c);
      n = function () {
        __l_set(E);
      };
    }
  } else {
    o = true;
    i = c_document.createTextNode("");
    new y(E).observe(i, {
      characterData: true,
    });
    n = function () {
      i.data = o = !o;
    };
  }
  x = function (t) {
    if (!S.head) {
      n();
    }
    S.add(t);
  };
}
export default x;

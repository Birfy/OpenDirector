import c from "./module-J_7.js";
import u from "./module-WG_2_6.js";
import { f } from "./module-R_6.js";
import __l from "./module-Z6_6.js";
import h from "./module-nA_6.js";
import p from "./module-A1_7.js";
import v from "./module-bT_6.js";
import d from "./module-D8_6.js";
import g from "./module-p2_6.js";
let n;
let o;
let a;
let i;
let s;
let __l_set = __l.set;
const y = c.MutationObserver || c.WebKitMutationObserver;
const c_document = c.document;
const c_process = c.process;
const c_Promise = c.Promise;
const w = f(c, "queueMicrotask");
let x = w && w.value;
if (!x) {
  const E = new h();
  const S = function () {
    let t;
    let r;
    for (g && (t = c_process.domain) && t.exit(); (r = E.get());) {
      try {
        r();
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
  if (p || g || d || !y || !c_document) {
    if (!v && c_Promise && c_Promise.resolve) {
      i = c_Promise.resolve(undefined);
      i.constructor = c_Promise;
      s = u(i.then, i);
      n = function () {
        s(S);
      };
    } else if (g) {
      n = function () {
        c_process.nextTick(S);
      };
    } else {
      __l_set = u(__l_set, c);
      n = function () {
        __l_set(S);
      };
    }
  } else {
    o = true;
    a = c_document.createTextNode("");
    new y(S).observe(a, {
      characterData: true,
    });
    n = function () {
      a.data = o = !o;
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

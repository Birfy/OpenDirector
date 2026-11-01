import u from "./module-J_17.js";
import c from "./module-WG_2_16.js";
import { f } from "./module-R_16.js";
import __l from "./module-Z6_16.js";
import h from "./module-nA_16.js";
import v from "./module-A1_17.js";
import p from "./module-bT_16.js";
import d from "./module-D8_16.js";
import g from "./module-p2_16.js";
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
const x = f(u, "queueMicrotask");
let w = x && x.value;
if (!w) {
  const S = new h();
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
      __l_set = c(__l_set, u);
      n = function () {
        __l_set(E);
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
  w = function (t) {
    if (!S.head) {
      n();
    }
    S.add(t);
  };
}
export default w;

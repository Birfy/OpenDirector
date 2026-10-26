import u from "./module-J.js";
import c from "./module-WG_2.js";
import { f } from "./module-R.js";
import __h from "./module-Z6.js";
import l from "./module-nA.js";
import v from "./module-A1.js";
import p from "./module-bT.js";
import d from "./module-D8.js";
import g from "./module-p2.js";
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
  w = function (t) {
    if (!S.head) {
      n();
    }
    S.add(t);
  };
}
export default w;

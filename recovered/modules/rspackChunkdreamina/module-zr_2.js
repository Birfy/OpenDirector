import u from "./module-u.js";
import c from "./module-fM_3.js";
import { f } from "./module-y_2.js";
import __l from "./module-u1_2.js";
import p from "./module-Le.js";
import h from "./module-xT_4.js";
import v from "./module-YM_2.js";
import d from "./module-JS_3.js";
import g from "./module-fd_4.js";
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
let A = w && w.value;
if (!A) {
  const E = new p();
  const j = function () {
    let e;
    let t;
    for (g && (e = u_process.domain) && e.exit(); (t = E.get());) {
      try {
        t();
      } catch (error) {
        if (E.head) {
          n();
        }
        throw error;
      }
    }
    if (e) {
      e.enter();
    }
  };
  if (h || g || d || !y || !u_document) {
    if (!v && u_Promise && u_Promise.resolve) {
      a = u_Promise.resolve(undefined);
      a.constructor = u_Promise;
      s = c(a.then, a);
      n = function () {
        s(j);
      };
    } else if (g) {
      n = function () {
        u_process.nextTick(j);
      };
    } else {
      __l_set = c(__l_set, u);
      n = function () {
        __l_set(j);
      };
    }
  } else {
    o = true;
    i = u_document.createTextNode("");
    new y(j).observe(i, {
      characterData: true,
    });
    n = function () {
      i.data = o = !o;
    };
  }
  A = function (e) {
    if (!E.head) {
      n();
    }
    E.add(e);
  };
}
export default A;

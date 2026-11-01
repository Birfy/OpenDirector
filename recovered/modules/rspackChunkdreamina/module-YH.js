import { v6 } from "./module-wcw.js";
import { c as c_1 } from "./module-JZn.js";
export var i = (e, t) => {
  var r;
  var { promise, resolve } = v6();
  if (!t.length) {
    resolve();
    return promise;
  }
  for (var c of t) {
    if ((r = c_1(e, c))) {
      break;
    }
  }
  if (r) {
    r.onUnmount(() => {
      resolve();
    });
  } else {
    resolve();
  }
  return promise;
};

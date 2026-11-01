import { N, e as e_1 } from "./module-Mi.js";
export function A(e) {
  let t = null;
  let n = function (...n) {
    if (t) {
      N(t);
    }
    t = e_1(() => {
      e(...n);
      t = null;
    });
  };
  n.cancel = () => {
    N(t);
    t = null;
  };
  return n;
}

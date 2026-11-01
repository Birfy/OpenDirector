import i from "PC";
import { Gv } from "./module-NnE_2.js";
let r;
let o;
let s = "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";
let a = Number((o = i.version) == null ? undefined : o.split(".")[0]) > 17;
let c = (e) => {
  if (Gv(i[s])) {
    i[s].usingClientEntryPoint = e;
  }
};
try {
  r = i.createRoot;
} catch (e) {}
export let X =
  a && r
    ? (e, t) => {
        c(true);
        let n = r(t);
        c(false);
        n.render(e);
        n._unmount = function () {
          setTimeout(() => {
            var e;
            if (!(n == null || (e = n.unmount) == null)) {
              e.call(n);
            }
          });
        };
        return n;
      }
    : function (e, t) {
        i.render(e, t);
        return {
          render: (e) => {
            i.render(e, t);
          },
          _unmount() {
            i.unmountComponentAtNode(t);
          },
        };
      };

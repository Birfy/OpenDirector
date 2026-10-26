import i from "PC";
import { Gv } from "./module-Pl5.js";
let r;
let o;
const a = "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";
const c = Number((r = i.version) == null ? undefined : r.split(".")[0]) > 17;
const u = (e) => {
  if (Gv(i[a])) {
    i[a].usingClientEntryPoint = e;
  }
};
try {
  o = i.createRoot;
} catch (e) {}
export var X =
  c && o
    ? function (e, t) {
        u(true);
        const n = o(t);
        u(false);
        n.render(e);
        n._unmount = function () {
          setTimeout(() => {
            let e;
            if ((e = n == null ? undefined : n.unmount) != null) {
              e.call(n);
            }
          });
        };
        return n;
      }
    : function (e, t) {
        i.render(e, t);
        return {
          render: function (e) {
            i.render(e, t);
          },
          _unmount: function () {
            i.unmountComponentAtNode(t);
          },
        };
      };

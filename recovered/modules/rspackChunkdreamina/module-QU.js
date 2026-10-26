import a from "PC";
let r;
let i;
const o = "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";
const l = Number((r = a.version) == null ? undefined : r.split(".")[0]) > 17;
const u = (e) => {
  let t;
  t = a[o];
  if (Object.prototype.toString.call(t) === "[object Object]") {
    a[o].usingClientEntryPoint = e;
  }
};
try {
  i = a.createRoot;
} catch (e) {}
export var X =
  l && i
    ? function (e, t) {
        u(true);
        const n = i(t);
        u(false);
        n.render(e);
        n._unmount = function () {
          setTimeout(() => {
            if (!(n == null || n.unmount == null)) {
              n.unmount();
            }
          });
        };
        return n;
      }
    : function (e, t) {
        a.render(e, t);
        return {
          render: function (e) {
            a.render(e, t);
          },
          _unmount: function () {
            a.unmountComponentAtNode(t);
          },
        };
      };

import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import l from "bT";
import s from "vn";
import u from "wF";
import d from "CtwG";
class c extends Error {
  constructor(e, t, i) {
    super();
    this.name = "error-boundary";
    this.message = "error-boundary: ".concat(e);
    this.stack = t;
    this.cause = i;
  }
}
export var t = l.memo(function (e) {
  const { children, onError } = e;
  const m = a._(e, ["children", "onError"]);
  const p = u.h(d.F);
  const onError_1 = l.useCallback(
    (e, t) => {
      if (onError != null) {
        onError(e, t);
      }
      p.sendLog(d.D.ERROR, "error-boundary-stack:: ".concat(t.componentStack));
      var r = new c(e.message, e.stack, e.cause);
      p.captureException("error-boundary", r, {
        stack: t.componentStack,
      });
    },
    [onError, p],
  );
  return o.jsx(
    s.tH,
    n._(
      r._(
        {
          onError: onError_1,
        },
        m,
      ),
      {
        children,
      },
    ),
  );
});

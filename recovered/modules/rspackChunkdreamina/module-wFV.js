import t from "oa";
import n from "qa";
import i from "z8";
import "yeA";
import r from "buNM";
import o from "hkF";
import l from "bT";
export var M = l.memo(function (e) {
  const { onMouseDown, className, "aria-label": aria_label } = e;
  const d = n._(e, ["onMouseDown", "className", "aria-label"]);
  const cRef = l.useRef(null);
  o.M(cRef, aria_label, !!e.range);
  const mRef = l.useRef(false);
  const pRef = l.useRef();
  const v = l.useCallback(() => {
    var e;
    if ((e = pRef.current) != null) {
      e.call(pRef);
    }
    pRef.current = undefined;
  }, []);
  l.useEffect(() => v, [v]);
  const onMouseDown_1 = l.useCallback(
    (e) => {
      if (onMouseDown != null) {
        onMouseDown(e);
      }
      mRef.current = true;
      v();
      var a = () => {
        mRef.current = false;
        v();
      };
      window.addEventListener("mouseup", a, true);
      pRef.current = () => {
        window.removeEventListener("mouseup", a, true);
      };
      requestAnimationFrame(() => {
        var u;
        var a;
        if (mRef.current) {
          if (
            !(
              (a = cRef.current) == null ||
              (u = a.querySelector('[role="slider"]')) == null
            )
          ) {
            u.dispatchEvent(e.nativeEvent);
          }
        }
      });
    },
    [onMouseDown, v],
  );
  return i.jsx("div", {
    ref: cRef,
    style: {
      display: "contents",
    },
    onMouseDown: onMouseDown_1,
    children: i.jsx(
      r.A,
      t._(
        {
          className,
        },
        d,
      ),
    ),
  });
});

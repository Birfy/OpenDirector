import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import "GLC";
import i from "mb";
import c from "Qey";
import s from "bT";
import _u from "xb";
export var X = s.memo(
  s.forwardRef(function (e, t) {
    const {
      className,
      autoFocus,
      maxLength,
      onChange,
      onPaste,
      onMaxLengthExceeded,
    } = e;
    const h = o._(e, [
      "className",
      "autoFocus",
      "maxLength",
      "onChange",
      "onPaste",
      "onMaxLengthExceeded",
    ]);
    const pRef = s.useRef(null);
    const gRef = s.useRef(autoFocus);
    const ref = s.useCallback(
      (e) => {
        var n;
        var a = (n = e == null ? undefined : e.dom) != null ? n : null;
        pRef.current = a;
        if (typeof t === "function") {
          t(a);
        } else if (t) {
          t.current = a;
        }
      },
      [t],
    );
    s.useEffect(() => {
      if (gRef.current && pRef.current) {
        var e = pRef.current;
        var t = e.value.length;
        e.setSelectionRange(t, t);
        e.focus();
      }
    }, []);
    const onChange_1 = s.useCallback(
      (e, t) => {
        if (typeof maxLength === "number" && [...e].length > maxLength) {
          if (onMaxLengthExceeded != null) {
            onMaxLengthExceeded();
          }
          return;
        }
        if (onChange != null) {
          onChange(e, t);
        }
      },
      [maxLength, onChange, onMaxLengthExceeded],
    );
    const onPaste_1 = s.useCallback(
      (e) => {
        var pRef_current = pRef.current;
        if (typeof maxLength !== "number" || !pRef_current) {
          if (onPaste != null) {
            onPaste(e);
          }
          return;
        }
        var n = e.clipboardData.getData("text/plain");
        var { value, selectionStart, selectionEnd } = pRef_current;
        var l = value.slice(0, selectionStart);
        var i = value.slice(selectionEnd);
        var c = [..."".concat(l).concat(n).concat(i)];
        if (c.length <= maxLength) {
          if (onPaste != null) {
            onPaste(e);
          }
          return;
        }
        e.preventDefault();
        var s = c.slice(0, maxLength).join("");
        if (onChange != null) {
          onChange(s, e);
        }
        var u = Math.min([...l].length + [...n].length, maxLength);
        var length = [...s].slice(0, u).join("").length;
        requestAnimationFrame(() => {
          pRef_current.setSelectionRange(length, length);
        });
        if (onPaste != null) {
          onPaste(e);
        }
        if (onMaxLengthExceeded != null) {
          onMaxLengthExceeded();
        }
      },
      [maxLength, onChange, onPaste, onMaxLengthExceeded],
    );
    return l.jsx(
      i.A.TextArea,
      r._(
        a._(
          {
            "aria-label": c.Ay.t("detail_prompt", {}, "提示词"),
            ref,
            translate: "no",
          },
          h,
        ),
        {
          maxLength,
          className: _u("textarea-UIHbfb", className),
          onChange: onChange_1,
          onPaste: onPaste_1,
        },
      ),
    );
  }),
);

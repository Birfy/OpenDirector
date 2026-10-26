import r from "oa";
import a from "bk";
import o from "bT";
import i from "NTt";
import l from "qO";
const s = ["ArrowUp", "ArrowDown", "Enter"];
export function I(e, n) {
  const {
    pluginKey,
    suggestionProps,
    triggerProps,
    options,
    onVisibleChange,
    keepVisibleWhenOptionsEmpty,
  } = e;
  const { editor, decorationNode } = suggestionProps;
  const b = o.useCallback(() => {
    i.Pn(editor.view, pluginKey);
  }, [editor, pluginKey]);
  const position = (() => {
    const { contentGeneratorRef } = o.useContext(l.b);
    const [n, setN] = o.useState("bl");
    o.useLayoutEffect(() => {
      var n =
        contentGeneratorRef == null ? undefined : contentGeneratorRef.current;
      if (n) {
        var r = n.getBoundingClientRect();
        setN(r.top + r.height / 2 > window.innerHeight / 2 ? "tl" : "bl");
      }
    }, [contentGeneratorRef]);
    return n;
  })();
  const style = ((e) => {
    const { editor, clientRect } = e;
    const rRef = o.useRef(clientRect);
    rRef.current = clientRect;
    const [a, setA] = o.useState({
      position: "fixed",
    });
    o.useLayoutEffect(() => {
      var e = null;
      var t = null;
      var a = () => {
        var e;
        var n = (e = rRef.current) == null ? undefined : e.call(rRef);
        if (n) {
          var { top, left, width, height } = n;
          if (
            !(
              t &&
              top === t.top &&
              left === t.left &&
              width === t.width &&
              height === t.height
            )
          ) {
            t = {
              top,
              left,
              width,
              height,
            };
            setA({
              position: "fixed",
              top,
              left,
              width,
              height,
            });
          }
        }
      };
      var o = () => {
        if (e === null) {
          var n = () => {
            a();
            e = requestAnimationFrame(n);
          };
          e = requestAnimationFrame(n);
        }
      };
      var l = () => {
        if (e !== null) {
          cancelAnimationFrame(e);
          e = null;
          a();
        }
      };
      a();
      var { dom } = editor.view;
      dom.addEventListener("transitionstart", o);
      dom.addEventListener("transitionend", l);
      dom.addEventListener("transitioncancel", l);
      return () => {
        if (e !== null) {
          cancelAnimationFrame(e);
        }
        dom.removeEventListener("transitionstart", o);
        dom.removeEventListener("transitionend", l);
        dom.removeEventListener("transitioncancel", l);
      };
    }, [editor]);
    return a;
  })(suggestionProps);
  const yRef = o.useRef(null);
  o.useEffect(() => {
    if (yRef.current) {
      requestAnimationFrame(() => {
        var e;
        if ((e = yRef.current) == null) {
          return undefined;
        }
        return e.click();
      });
    }
  }, []);
  o.useEffect(() => {
    if (decorationNode) {
      var e = (e) => {
        if (e.target instanceof Element && e.target.contains(decorationNode)) {
          b();
        }
      };
      window.addEventListener("scroll", e, true);
      return () => window.removeEventListener("scroll", e, true);
    }
  }, [decorationNode, b]);
  o.useEffect(() => {
    var e = (e) => {
      if (e.key === "Escape") {
        b();
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", e, true);
    return () => document.removeEventListener("keydown", e, true);
  }, [b]);
  o.useImperativeHandle(n, () => ({
    onKeyDown: (e) => {
      var n;
      var { event } = e;
      return (
        !!s.includes(event.key) &&
        ((n = yRef.current) == null ||
          n.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: event.key,
              code: event.code,
              keyCode: event.keyCode,
              bubbles: true,
              cancelable: true,
            }),
          ),
        true)
      );
    },
  }));
  const triggerElement = o.useMemo(
    () =>
      o.createElement("div", {
        ref: yRef,
        style,
      }),
    [style],
  );
  const onVisibleChange_1 = o.useCallback(
    (e) => {
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
      if (!e) {
        b();
      }
    },
    [onVisibleChange, b],
  );
  const R = !options.length && !keepVisibleWhenOptionsEmpty;
  return {
    triggerElement,
    triggerProps: o.useMemo(
      () =>
        r._(
          a._(r._({}, triggerProps), {
            position,
          }),
          R
            ? {
                style: {
                  display: "none",
                },
              }
            : null,
        ),
      [triggerProps, position, R],
    ),
    options,
    onVisibleChange: onVisibleChange_1,
  };
}

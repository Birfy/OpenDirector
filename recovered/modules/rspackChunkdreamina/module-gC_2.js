import a from "oa";
import t from "bk";
import i from "qa";
import o from "z8";
import r from "zS";
import s from "bT";
import { L } from "./module-eVT.js";
import { f as f_1 } from "./module-rAb.js";
import u from "WZ";
export var I = (e) => {
  var {
    component = "div",
    children,
    disabled = false,
    guardFileDrop = false,
    source,
    onBeforeNavigate,
  } = e;
  var b = i._(e, [
    "component",
    "children",
    "disabled",
    "guardFileDrop",
    "source",
    "onBeforeNavigate",
  ]);
  var k = L({
    source,
    onBeforeNavigate,
  });
  var onClickCapture = r.A((e) => {
    var l;
    if ((l = b.onClickCapture) != null) {
      l.call(b, e);
    }
    if (k()) {
      return void e.stopPropagation();
    }
  });
  var f = r.A((e) => {
    var l;
    if ((l = b.onDropCapture) != null) {
      l.call(b, e);
    }
    if (f_1(e.dataTransfer) && k()) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  var onDropCapture = r.A((e) => {
    var l;
    var a;
    f(e);
    if (!e.isPropagationStopped() && s.isValidElement(children)) {
      if ((l = (a = children.props).onDropCapture) != null) {
        l.call(a, e);
      }
    }
  });
  if (component === null && s.isValidElement(children)) {
    if (disabled) {
      return children;
    }
    var w = u.X(
      children,
      t._(a._({}, b), {
        onClickCapture,
      }),
    );
    if (guardFileDrop) {
      return s.cloneElement(w, {
        onDropCapture,
      });
    }
    return w;
  }
  return o.jsx(
    "div",
    t._(a._({}, b), {
      onClickCapture: disabled ? b.onClickCapture : onClickCapture,
      onDropCapture: disabled || !guardFileDrop ? b.onDropCapture : f,
      children,
    }),
  );
};

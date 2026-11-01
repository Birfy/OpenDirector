import n from "qa";
import r from "z8";
import a from "bT";
import o from "WZ";
import s from "pGb";
export var h = a.memo(function (e) {
  const { children, limitations, component } = e;
  const l = n._(e, ["children", "limitations", "component"]);
  return r.jsx(s.P.Provider, {
    value: {
      limitations,
    },
    children: o.X(children, l),
  });
});

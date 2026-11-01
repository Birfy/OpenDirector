import r from "oa";
import n from "bk";
import i from "z8";
import "Vx";
import s from "Ix";
import o from "bT";
import l from "Du8";
export var F = o.memo(function (e) {
  const { children } = e;
  const { compact } = o.useContext(l.R);
  return i.jsx(
    s.A,
    n._(r._({}, e), {
      disabled: !compact,
      children,
    }),
  );
});

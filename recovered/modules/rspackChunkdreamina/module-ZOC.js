import n from "B2";
import i from "bT";
export const A = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
  const rRef = i.useRef(t);
  const o = e(rRef.current, t);
  i.useEffect(function () {
    if (!o) {
      rRef.current = t;
    }
  });
  if (o) {
    return rRef.current;
  }
  return t;
};

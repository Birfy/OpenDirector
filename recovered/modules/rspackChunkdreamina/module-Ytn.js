import o from "bT";
export default function (t, e) {
  const rRef = o.useRef(false);
  o.useEffect(function () {
    if (rRef.current) {
      return t();
    }
    rRef.current = true;
    return function () {};
  }, e);
}

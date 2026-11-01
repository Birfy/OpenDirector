import r from "bT";
export function A(e) {
  const tRef = r.useRef();
  r.useEffect(function () {
    tRef.current = e;
  });
  return tRef.current;
}

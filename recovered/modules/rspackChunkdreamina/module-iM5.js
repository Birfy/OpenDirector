import r from "bT";
export function A(e) {
  let tRef = r.useRef();
  r.useEffect(() => {
    tRef.current = e;
  });
  return tRef.current;
}

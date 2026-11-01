import r from "bT";
export function A() {
  const eRef = r.useRef(true);
  r.useEffect(function () {
    eRef.current = false;
  }, []);
  return eRef.current;
}

import r from "bT";
export function A() {
  let eRef = r.useRef(true);
  r.useEffect(() => {
    eRef.current = false;
  }, []);
  return eRef.current;
}

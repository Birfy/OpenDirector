import r from "bT";
export function A(e, t = []) {
  let nRef = r.useRef(false);
  r.useEffect(() => {
    if (nRef.current) {
      e();
    } else {
      nRef.current = true;
    }
  }, [...t]);
}

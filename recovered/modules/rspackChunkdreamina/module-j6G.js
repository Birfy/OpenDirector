import r from "bT";
import { b0 } from "./module-NnE_2.js";
export function A(e, t) {
  let { defaultValue, value } = t || {};
  let lRef = r.useRef(true);
  let [s, setS] = r.useState(
    b0(value) ? (b0(defaultValue) ? e : defaultValue) : value,
  );
  r.useEffect(() => {
    if (lRef.current) {
      lRef.current = false;
      return;
    }
    if (value === undefined) {
      setS(value);
    }
  }, [value]);
  return [b0(value) ? s : value, setS, s];
}

import a from "z8";
import r from "bT";
import { E } from "./module-G4.js";
export var _ = r.memo(function (e) {
  const { children } = e;
  const [n, setN] = r.useState(typeof window === "undefined");
  E(() => {
    setN(true);
    return () => {
      setN(false);
    };
  }, []);
  if (n) {
    return a.jsx(a.Fragment, {
      children,
    });
  }
  return null;
});

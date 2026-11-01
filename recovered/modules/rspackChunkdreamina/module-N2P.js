import a from "bT";
export function H(e, t) {
  const [r, setR] = a.useState(t);
  a.useEffect(() => {
    setR(t);
  }, [e, t]);
  a.useEffect(() => {
    if (!r && e) {
      var t = new Audio(e);
      var a = () => {
        if (t.duration && !isNaN(t.duration)) {
          setR(t.duration);
        }
      };
      t.addEventListener("loadedmetadata", a);
      return () => {
        t.removeEventListener("loadedmetadata", a);
      };
    }
  }, [e, r]);
  return r;
}

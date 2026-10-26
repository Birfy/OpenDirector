import r from "bT";
export function A(e, { hidden }) {
  let nRef = r.useRef(false);
  let iRef = r.useRef({});
  let l = () => {
    let t = e();
    if (t && t.style.overflow !== "hidden") {
      let e = t.style;
      nRef.current = true;
      let r =
        t.tagName === "BODY"
          ? window.innerWidth -
            (document.body.clientWidth || document.documentElement.clientWidth)
          : t.offsetWidth - t.clientWidth;
      if (r) {
        iRef.current.width = e.width;
        t.style.width = `calc(${t.style.width || "100%"} - ${r}px)`;
      }
      iRef.current.overflow = e.overflow;
      t.style.overflow = "hidden";
    }
  };
  let s = () => {
    if (nRef.current && e()) {
      let t = e();
      let n = iRef.current;
      Object.keys(n).forEach((e) => (t.style[e] = n[e]));
    }
    nRef.current = false;
    iRef.current = {};
  };
  r.useEffect(() => {
    if (hidden) {
      l();
    } else {
      s();
    }
    return () => {
      s();
    };
  }, [e, hidden]);
  return [s, l];
}

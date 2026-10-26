import a from "bT";
export function P(e, t, r) {
  a.useEffect(() => {
    var a;
    var n = (a = e.current) == null ? undefined : a.dom;
    if (n) {
      var o = n.getAttribute("aria-label");
      var l = n.getAttribute("aria-labelledby");
      if (t) {
        n.setAttribute("aria-label", t);
      }
      if (r) {
        n.setAttribute("aria-labelledby", r);
      }
      return () => {
        if (o === null) {
          n.removeAttribute("aria-label");
        } else {
          n.setAttribute("aria-label", o);
        }
        if (l === null) {
          n.removeAttribute("aria-labelledby");
        } else {
          n.setAttribute("aria-labelledby", l);
        }
      };
    }
  }, [e, t, r]);
}

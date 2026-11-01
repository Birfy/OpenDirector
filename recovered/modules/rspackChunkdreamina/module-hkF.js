import r from "bT";
export function M(e, t) {
  const a = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  r.useEffect(() => {
    if (t) {
      var r;
      var n;
      var i = Array.from(
        (r =
          (n = e.current) == null
            ? undefined
            : n.querySelectorAll('[role="slider"]')) != null
          ? r
          : [],
      );
      var s = i.map((e) => e.getAttribute("aria-label"));
      i.forEach((e, r) => {
        e.setAttribute(
          "aria-label",
          a
            ? ""
                .concat(t, " · ")
                .concat(r + 1, "/")
                .concat(i.length)
            : t,
        );
      });
      return () =>
        i.forEach((e, t) => {
          var a = s[t];
          if (a === null) {
            e.removeAttribute("aria-label");
          } else {
            e.setAttribute("aria-label", a);
          }
        });
    }
  }, [e, t, a]);
}

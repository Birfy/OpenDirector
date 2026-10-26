function t(e, r) {
  if (typeof e === "string") {
    r = e;
    e = undefined;
  }
  const n = [];
  function i(e) {
    if (typeof e !== "string") {
      let r = o();
      if (t.verbose) {
        console.log("codegen: " + r);
      }
      r = "return " + r;
      if (e) {
        for (
          var s = Object.keys(e),
            a = Array(s.length + 1),
            l = Array(s.length),
            u = 0;
          u < s.length;
        ) {
          a[u] = s[u];
          l[u] = e[s[u++]];
        }
        a[u] = r;
        return Function.apply(null, a).apply(null, l);
      }
      return Function(r)();
    }
    for (var f = Array(arguments.length - 1), c = 0; c < f.length;) {
      f[c] = arguments[++c];
    }
    c = 0;
    e = e.replace(/%([%dfijs])/g, (e, t) => {
      const r = f[c++];
      switch (t) {
        case "d":
        case "f":
          return String(Number(r));
        case "i":
          return String(Math.floor(r));
        case "j":
          return JSON.stringify(r);
        case "s":
          return String(r);
      }
      return "%";
    });
    if (c !== f.length) {
      throw Error("parameter count mismatch");
    }
    n.push(e);
    return i;
  }
  function o(t) {
    return (
      "function " +
      (t || r || "") +
      "(" +
      ((e && e.join(",")) || "") +
      "){\n  " +
      n.join("\n  ") +
      "\n}"
    );
  }
  i.toString = o;
  return i;
}
export default t;
t.verbose = false;

import n from "./module-g.js";
import o from "./module-u.js";
import i from "./module-l.js";
import a from "./module-Bh_2_2.js";
const target = "WebAssembly";
const u = o[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const f = (e, t) => {
  const r = {};
  r[e] = a(e, t, forced);
  n(
    {
      global: true,
      constructor: true,
      arity: 1,
      forced,
    },
    r,
  );
};
const l = (e, t) => {
  if (u && u[e]) {
    const r = {};
    r[e] = a(target + "." + e, t, forced);
    n(
      {
        target,
        stat: true,
        constructor: true,
        arity: 1,
        forced,
      },
      r,
    );
  }
};
f("Error", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("EvalError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("RangeError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("ReferenceError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("SyntaxError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("TypeError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
f("URIError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
l("CompileError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
l("LinkError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});
l("RuntimeError", function (e) {
  return function (t) {
    return i(e, this, arguments);
  };
});

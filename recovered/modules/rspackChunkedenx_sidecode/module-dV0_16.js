import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-Xy_2_16.js";
import a from "./module-O5_16.js";
const target = "WebAssembly";
const u = o[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const f = (t, r) => {
  const e = {};
  e[t] = a(t, r, forced);
  n(
    {
      global: true,
      constructor: true,
      arity: 1,
      forced,
    },
    e,
  );
};
const l = (t, r) => {
  if (u && u[t]) {
    const e = {};
    e[t] = a(target + "." + t, r, forced);
    n(
      {
        target,
        stat: true,
        constructor: true,
        arity: 1,
        forced,
      },
      e,
    );
  }
};
f("Error", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("EvalError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("RangeError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("ReferenceError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("SyntaxError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("TypeError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
f("URIError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
l("CompileError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
l("LinkError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});
l("RuntimeError", function (t) {
  return function (r) {
    return i(t, this, arguments);
  };
});

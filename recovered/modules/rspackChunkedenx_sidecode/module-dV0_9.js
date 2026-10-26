import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-Xy_2_9.js";
import a from "./module-O5_9.js";
const target = "WebAssembly";
const u = o[target];
const forced =
  Error("e", {
    cause: 7,
  }).cause !== 7;
const f = (t, e) => {
  const r = {};
  r[t] = a(t, e, forced);
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
const l = (t, e) => {
  if (u && u[t]) {
    const r = {};
    r[t] = a(target + "." + t, e, forced);
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
f("Error", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("EvalError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("RangeError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("ReferenceError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("SyntaxError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("TypeError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
f("URIError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
l("CompileError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
l("LinkError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});
l("RuntimeError", function (t) {
  return function (e) {
    return i(t, this, arguments);
  };
});

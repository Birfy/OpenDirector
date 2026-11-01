var indexOf = function (Z, Q) {
  if (Z.indexOf) {
    return Z.indexOf(Q);
  }
  for (let X = 0; X < Z.length; X++) {
    if (Z[X] === Q) {
      return X;
    }
  }
  return -1;
};
var Object_keys = function (Z) {
  if (Object.keys) {
    return Object.keys(Z);
  }
  const Q = [];
  for (const X in Z) {
    Q.push(X);
  }
  return Q;
};
var forEach = function (Z, Q) {
  if (Z.forEach) {
    return Z.forEach(Q);
  }
  for (let X = 0; X < Z.length; X++) {
    Q(Z[X], X, Z);
  }
};
var defineProp = (() => {
  try {
    Object.defineProperty({}, "_", {});
    return function (Z, Q, X) {
      Object.defineProperty(Z, Q, {
        writable: true,
        enumerable: false,
        configurable: true,
        value: X,
      });
    };
  } catch (Z) {
    return function (Z, Q, X) {
      Z[Q] = X;
    };
  }
})();
var globals = [
  "Array",
  "Boolean",
  "Date",
  "Error",
  "EvalError",
  "Function",
  "Infinity",
  "JSON",
  "Math",
  "NaN",
  "Number",
  "Object",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "String",
  "SyntaxError",
  "TypeError",
  "URIError",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "undefined",
  "unescape",
];
function Context() {}
Context.prototype = {};
var Script = (exports.Script = function (Z) {
  if (!(this instanceof Script)) {
    return new Script(Z);
  }
  this.code = Z;
});
Script.prototype.runInContext = function (Z) {
  if (!(Z instanceof Context)) {
    throw TypeError("needs a 'context' argument.");
  }
  const Q = document.createElement("iframe");
  if (!Q.style) {
    Q.style = {};
  }
  Q.style.display = "none";
  document.body.appendChild(Q);
  const X = Q.contentWindow;
  let $ = X.eval;
  const ee = X.execScript;
  if (!$ && ee) {
    ee.call(X, "null");
    $ = X.eval;
  }
  forEach(Object_keys(Z), function (Q) {
    X[Q] = Z[Q];
  });
  forEach(globals, function (Q) {
    if (Z[Q]) {
      X[Q] = Z[Q];
    }
  });
  const et = Object_keys(X);
  const er = $.call(X, this.code);
  forEach(Object_keys(X), function (Q) {
    if (Q in Z || indexOf(et, Q) === -1) {
      Z[Q] = X[Q];
    }
  });
  forEach(globals, function (Q) {
    if (!(Q in Z)) {
      defineProp(Z, Q, X[Q]);
    }
  });
  document.body.removeChild(Q);
  return er;
};
Script.prototype.runInThisContext = function () {
  return eval(this.code);
};
Script.prototype.runInNewContext = function (Z) {
  const Q = Script.createContext(Z);
  const X = this.runInContext(Q);
  if (Z) {
    forEach(Object_keys(Q), function (X) {
      Z[X] = Q[X];
    });
  }
  return X;
};
forEach(Object_keys(Script.prototype), function (Z) {
  exports[Z] = Script[Z] = function (Q) {
    const X = Script(Q);
    return X[Z].apply(X, [].slice.call(arguments, 1));
  };
});
exports.isContext = function (Z) {
  return Z instanceof Context;
};
exports.createScript = function (Z) {
  return exports.Script(Z);
};
exports.createContext = Script.createContext = function (Z) {
  const Q = new Context();
  if (typeof Z === "object") {
    forEach(Object_keys(Z), function (X) {
      Q[X] = Z[X];
    });
  }
  return Q;
};

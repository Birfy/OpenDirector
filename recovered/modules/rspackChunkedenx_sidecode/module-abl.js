export var F = {};
function Q(J, Q, $) {
  if (!$) {
    $ = Error;
  }
  const tt = ((J) => {
    function Z(Z, $, tt) {
      return J.call(this, typeof Q === "string" ? Q : Q(Z, $, tt)) || this;
    }
    Z.prototype = Object.create(J.prototype);
    Z.prototype.constructor = Z;
    Z.__proto__ = J;
    return Z;
  })($);
  tt.prototype.name = $.name;
  tt.prototype.code = J;
  F[J] = tt;
}
function $(J, Z) {
  if (!Array.isArray(J)) {
    return "of ".concat(Z, " ").concat(String(J));
  }
  const J_length = J.length;
  J = J.map((J) => String(J));
  if (J_length > 2) {
    return (
      "one of "
        .concat(Z, " ")
        .concat(J.slice(0, J_length - 1).join(", "), ", or ") + J[J_length - 1]
    );
  }
  if (J_length === 2) {
    return "one of ".concat(Z, " ").concat(J[0], " or ").concat(J[1]);
  }
  return "of ".concat(Z, " ").concat(J[0]);
}
Q(
  "ERR_INVALID_OPT_VALUE",
  function (J, Z) {
    return 'The value "' + Z + '" is invalid for option "' + J + '"';
  },
  TypeError,
);
Q(
  "ERR_INVALID_ARG_TYPE",
  function (J, Z, Q) {
    if (
      typeof Z === "string" &&
      ((tt = "not "), Z.substr(0, tt.length) === tt)
    ) {
      ti = "must not be";
      Z = Z.replace(/^not /, "");
    } else {
      ti = "must be";
    }
    te = " argument";
    if (tr === undefined || tr > J.length) {
      tr = J.length;
    }
    if (J.substring(tr - te.length, tr) === te) {
      to = "The ".concat(J, " ").concat(ti, " ").concat($(Z, "type"));
    } else {
      var tt;
      var te;
      var tr;
      let tn;
      var ti;
      var to;
      const ta = (typeof tn !== "number" && (tn = 0),
      tn + 1 > J.length || J.indexOf(".", tn) === -1)
        ? "argument"
        : "property";
      to = 'The "'
        .concat(J, '" ')
        .concat(ta, " ")
        .concat(ti, " ")
        .concat($(Z, "type"));
    }
    return to + `. Received type ${typeof Q}`;
  },
  TypeError,
);
Q("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Q("ERR_METHOD_NOT_IMPLEMENTED", function (J) {
  return "The " + J + " method is not implemented";
});
Q("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Q("ERR_STREAM_DESTROYED", function (J) {
  return "Cannot call " + J + " after a stream was destroyed";
});
Q("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Q("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Q("ERR_STREAM_WRITE_AFTER_END", "write after end");
Q("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Q(
  "ERR_UNKNOWN_ENCODING",
  function (J) {
    return "Unknown encoding: " + J;
  },
  TypeError,
);
Q("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");

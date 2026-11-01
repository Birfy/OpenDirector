export default (() => {
  function t(n, a) {
    if (!(this instanceof t)) {
      return new t(n, a);
    }
    const o =
      10 **
      (a = {
        ...i,
        ...a,
      }).precision;
    this.intValue = n = e(n, a);
    this.value = n / o;
    a.increment = a.increment || 1 / o;
    a.groups = a.useVedic ? s : r;
    this.s = a;
    this.p = o;
  }
  function e(e, i) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i_decimal = i.decimal;
    let i_errorOnInvalid = i.errorOnInvalid;
    const i_fromCents = i.fromCents;
    const o = 10 ** i.precision;
    const l = e instanceof t;
    if (l && i_fromCents) {
      return e.intValue;
    }
    if (typeof e === "number" || l) {
      i_decimal = l ? e.value : e;
    } else if (typeof e === "string") {
      i_errorOnInvalid = RegExp("[^-\\d" + i_decimal + "]", "g");
      i_decimal = RegExp("\\" + i_decimal, "g");
      i_decimal =
        (i_decimal = e
          .replace(/\((.*)\)/, "-$1")
          .replace(i_errorOnInvalid, "")
          .replace(i_decimal, ".")) || 0;
    } else {
      if (i_errorOnInvalid) {
        throw Error("Invalid Input");
      }
      i_decimal = 0;
    }
    if (!i_fromCents) {
      i_decimal = (i_decimal * o).toFixed(4);
    }
    if (r) {
      return Math.round(i_decimal);
    }
    return i_decimal;
  }
  var i = {
    symbol: "$",
    separator: ",",
    decimal: ".",
    errorOnInvalid: false,
    precision: 2,
    pattern: "!#",
    negativePattern: "-!#",
    format: function (t, e) {
      const e_pattern = e.pattern;
      const e_negativePattern = e.negativePattern;
      const e_symbol = e.symbol;
      const e_separator = e.separator;
      const e_decimal = e.decimal;
      e = e.groups;
      let o = ("" + t).replace(/^-/, "").split(".");
      const l = o[0];
      o = o[1];
      return (t.value >= 0 ? e_pattern : e_negativePattern)
        .replace("!", e_symbol)
        .replace(
          "#",
          l.replace(e, "$1" + e_separator) + (o ? e_decimal + o : ""),
        );
    },
    fromCents: false,
  };
  var r = /(\d)(?=(\d{3})+\b)/g;
  var s = /(\d)(?=(\d\d)+\d\b)/g;
  t.prototype = {
    add: function (i) {
      const r = this.s;
      const s = this.p;
      return t((this.intValue + e(i, r)) / (r.fromCents ? 1 : s), r);
    },
    subtract: function (i) {
      const r = this.s;
      const s = this.p;
      return t((this.intValue - e(i, r)) / (r.fromCents ? 1 : s), r);
    },
    multiply: function (e) {
      const i = this.s;
      return t((this.intValue * e) / (i.fromCents ? 1 : 10 ** i.precision), i);
    },
    divide: function (i) {
      const r = this.s;
      return t(this.intValue / e(i, r, false), r);
    },
    distribute: function (e) {
      const intValue = this.intValue;
      let r = this.p;
      const s = this.s;
      const n = [];
      const a = Math[intValue >= 0 ? "floor" : "ceil"](intValue / e);
      let o = Math.abs(intValue - a * e);
      for (r = s.fromCents ? 1 : r; e !== 0; e--) {
        let l = t(a / r, s);
        if (o-- > 0) {
          l = l[intValue >= 0 ? "add" : "subtract"](1 / r);
        }
        n.push(l);
      }
      return n;
    },
    dollars: function () {
      return ~~this.value;
    },
    cents: function () {
      return ~~(this.intValue % this.p);
    },
    format: function (t) {
      const e = this.s;
      if (typeof t === "function") {
        return t(this, e);
      }
      return e.format(this, {
        ...e,
        ...t,
      });
    },
    toString: function () {
      const t = this.s;
      const t_increment = t.increment;
      return (
        Math.round(this.intValue / this.p / t_increment) * t_increment
      ).toFixed(t.precision);
    },
    toJSON: function () {
      return this.value;
    },
  };
  return t;
})();

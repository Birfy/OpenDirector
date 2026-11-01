import { xI } from "./module-p3K.js";
import { AC, Zv, nd } from "./module-pwy.js";
import { $f, LG, Rc, cl, zH } from "./module-s2v.js";
export let QP = xI("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {});
  e._zod.def = t;
  (n = e._zod).onattach ?? (n.onattach = []);
});
let s = {
  number: "number",
  bigint: "bigint",
  object: "date",
};
export let sm = xI("$ZodCheckLessThan", (e, t) => {
  QP.init(e, t);
  let n = s[typeof t.value];
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    let r = (t.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Infinity;
    if (t.value < r) {
      if (t.inclusive) {
        bag.maximum = t.value;
      } else {
        bag.exclusiveMaximum = t.value;
      }
    }
  });
  e._zod.check = (r) => {
    if (!(t.inclusive ? r.value <= t.value : r.value < t.value)) {
      r.issues.push({
        origin: n,
        code: "too_big",
        maximum: t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let J_ = xI("$ZodCheckGreaterThan", (e, t) => {
  QP.init(e, t);
  let n = s[typeof t.value];
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    let r = (t.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? -Infinity;
    if (t.value > r) {
      if (t.inclusive) {
        bag.minimum = t.value;
      } else {
        bag.exclusiveMinimum = t.value;
      }
    }
  });
  e._zod.check = (r) => {
    if (!(t.inclusive ? r.value >= t.value : r.value > t.value)) {
      r.issues.push({
        origin: n,
        code: "too_small",
        minimum: t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let Jk = xI("$ZodCheckMultipleOf", (e, t) => {
  QP.init(e, t);
  e._zod.onattach.push((e) => {
    var n;
    (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  });
  e._zod.check = (n) => {
    if (typeof n.value != typeof t.value) {
      throw Error("Cannot mix number and bigint in multiple_of check.");
    }
    if (
      !(typeof n.value === "bigint"
        ? n.value % t.value === BigInt(0)
        : LG(n.value, t.value) === 0)
    ) {
      n.issues.push({
        origin: typeof n.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let KH = xI("$ZodCheckNumberFormat", (e, t) => {
  QP.init(e, t);
  t.format = t.format || "float64";
  let n = t.format?.includes("int");
  let r = n ? "int" : "number";
  let [s, u] = zH[t.format];
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.format = t.format;
    bag.minimum = s;
    bag.maximum = u;
    if (n) {
      bag.pattern = nd;
    }
  });
  e._zod.check = (i) => {
    let i_value = i.value;
    if (n) {
      if (!Number.isInteger(i_value)) {
        return void i.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          input: i_value,
          inst: e,
        });
      }
      if (!Number.isSafeInteger(i_value)) {
        return void (i_value > 0
          ? i.issues.push({
              input: i_value,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst: e,
              origin: r,
              continue: !t.abort,
            })
          : i.issues.push({
              input: i_value,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst: e,
              origin: r,
              continue: !t.abort,
            }));
      }
    }
    if (i_value < s) {
      i.issues.push({
        origin: "number",
        input: i_value,
        code: "too_small",
        minimum: s,
        inclusive: true,
        inst: e,
        continue: !t.abort,
      });
    }
    if (i_value > u) {
      i.issues.push({
        origin: "number",
        input: i_value,
        code: "too_big",
        maximum: u,
        inst: e,
      });
    }
  };
});
export let Yk = xI("$ZodCheckMaxLength", (e, t) => {
  var n;
  QP.init(e, t);
  (n = e._zod.def).when ??
    (n.when = (e) => {
      let e_value = e.value;
      return !cl(e_value) && e_value.length !== undefined;
    });
  e._zod.onattach.push((e) => {
    let n = e._zod.bag.maximum ?? Infinity;
    if (t.maximum < n) {
      e._zod.bag.maximum = t.maximum;
    }
  });
  e._zod.check = (n) => {
    let n_value = n.value;
    if (n_value.length <= t.maximum) {
      return;
    }
    let i = Rc(n_value);
    n.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: true,
      input: n_value,
      inst: e,
      continue: !t.abort,
    });
  };
});
export let Kk = xI("$ZodCheckMinLength", (e, t) => {
  var n;
  QP.init(e, t);
  (n = e._zod.def).when ??
    (n.when = (e) => {
      let e_value = e.value;
      return !cl(e_value) && e_value.length !== undefined;
    });
  e._zod.onattach.push((e) => {
    let n = e._zod.bag.minimum ?? -Infinity;
    if (t.minimum > n) {
      e._zod.bag.minimum = t.minimum;
    }
  });
  e._zod.check = (n) => {
    let n_value = n.value;
    if (n_value.length >= t.minimum) {
      return;
    }
    let i = Rc(n_value);
    n.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: true,
      input: n_value,
      inst: e,
      continue: !t.abort,
    });
  };
});
export let RM = xI("$ZodCheckLengthEquals", (e, t) => {
  var n;
  QP.init(e, t);
  (n = e._zod.def).when ??
    (n.when = (e) => {
      let e_value = e.value;
      return !cl(e_value) && e_value.length !== undefined;
    });
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.minimum = t.length;
    bag.maximum = t.length;
    bag.length = t.length;
  });
  e._zod.check = (n) => {
    let n_value = n.value;
    let r_length = n_value.length;
    if (r_length === t.length) {
      return;
    }
    let a = Rc(n_value);
    let s = r_length > t.length;
    n.issues.push({
      origin: a,
      ...(s
        ? {
            code: "too_big",
            maximum: t.length,
          }
        : {
            code: "too_small",
            minimum: t.length,
          }),
      inclusive: true,
      exact: true,
      input: n.value,
      inst: e,
      continue: !t.abort,
    });
  };
});
export let ql = xI("$ZodCheckStringFormat", (e, t) => {
  var n;
  var r;
  QP.init(e, t);
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.format = t.format;
    if (t.pattern) {
      bag.patterns ?? (bag.patterns = new Set());
      bag.patterns.add(t.pattern);
    }
  });
  t.pattern
    ? ((n = e._zod).check ??
      (n.check = (n) => {
        t.pattern.lastIndex = 0;
        if (!t.pattern.test(n.value)) {
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: t.format,
            input: n.value,
            ...(t.pattern
              ? {
                  pattern: t.pattern.toString(),
                }
              : {}),
            inst: e,
            continue: !t.abort,
          });
        }
      }))
    : ((r = e._zod).check ?? (r.check = () => {}));
});
export let DG = xI("$ZodCheckRegex", (e, t) => {
  ql.init(e, t);
  e._zod.check = (n) => {
    t.pattern.lastIndex = 0;
    if (!t.pattern.test(n.value)) {
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: n.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let NI = xI("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = AC);
  ql.init(e, t);
});
export let kH = xI("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Zv);
  ql.init(e, t);
});
export let Tt = xI("$ZodCheckIncludes", (e, t) => {
  QP.init(e, t);
  let n = $f(t.includes);
  let r = new RegExp(
    typeof t.position === "number" ? `^.{${t.position}}${n}` : n,
  );
  t.pattern = r;
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.patterns ?? (bag.patterns = new Set());
    bag.patterns.add(r);
  });
  e._zod.check = (n) => {
    if (!n.value.includes(t.includes, t.position)) {
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: t.includes,
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let J = xI("$ZodCheckStartsWith", (e, t) => {
  QP.init(e, t);
  let n = RegExp(`^${$f(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n);
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.patterns ?? (bag.patterns = new Set());
    bag.patterns.add(n);
  });
  e._zod.check = (n) => {
    if (!n.value.startsWith(t.prefix)) {
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let E6 = xI("$ZodCheckEndsWith", (e, t) => {
  QP.init(e, t);
  let n = RegExp(`.*${$f(t.suffix)}$`);
  t.pattern ?? (t.pattern = n);
  e._zod.onattach.push((e) => {
    let bag = e._zod.bag;
    bag.patterns ?? (bag.patterns = new Set());
    bag.patterns.add(n);
  });
  e._zod.check = (n) => {
    if (!n.value.endsWith(t.suffix)) {
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let v$ = xI("$ZodCheckOverwrite", (e, t) => {
  QP.init(e, t);
  e._zod.check = (e) => {
    e.value = t.tx(e.value);
  };
});

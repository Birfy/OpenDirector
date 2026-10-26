import { KH, QP, ql } from "./module-wDU.js";
import { $W, GT, cr, xI } from "./module-p3K.js";
import { bp, xL } from "./module-BMb.js";
import {
  Ak,
  Gl,
  K3,
  OI,
  Os,
  Rp,
  Yj,
  Z0,
  Zg,
  ai,
  ch,
  fO,
  gF,
  hQ,
  kB,
  kM,
  l7,
  p0,
  p6,
  r0,
  uR,
  uX,
  ug,
  w$,
  zM,
  zr,
} from "./module-pwy.js";
import {
  $f,
  Gv,
  NM,
  PO,
  QH,
  Qd,
  UQ,
  gJ,
  hI,
  iR,
  lQ,
  p6 as p6_1,
  qQ,
  sn,
  w5,
} from "./module-s2v.js";
class o {
  constructor(e = []) {
    this.content = [];
    this.indent = 0;
    if (this) {
      this.args = e;
    }
  }
  indented(e) {
    this.indent += 1;
    e(this);
    this.indent -= 1;
  }
  write(e) {
    if (typeof e === "function") {
      e(this, {
        execution: "sync",
      });
      e(this, {
        execution: "async",
      });
      return;
    }
    let t = e.split("\n").filter((e) => e);
    let n = Math.min(...t.map((e) => e.length - e.trimStart().length));
    for (let e of t
      .map((e) => e.slice(n))
      .map((e) => " ".repeat(2 * this.indent) + e)) {
      this.content.push(e);
    }
  }
  compile() {
    let e = Function;
    let t = this?.args;
    let n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
    return new e(...t, n.join("\n"));
  }
}
let l = {
  major: 4,
  minor: 0,
  patch: 0,
};
export let W4 = xI("$ZodType", (e, t) => {
  var n;
  e ??= {};
  e._zod.def = t;
  e._zod.bag = e._zod.bag || {};
  e._zod.version = l;
  let r = [...(e._zod.def.checks ?? [])];
  for (let t of (e._zod.traits.has("$ZodCheck") && r.unshift(e), r)) {
    for (let n of t._zod.onattach) {
      n(e);
    }
  }
  if (r.length === 0) {
    (n = e._zod).deferred ?? (n.deferred = []);
    e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  } else {
    let t = (e, t, n) => {
      let r;
      let o = QH(e);
      for (let a of t) {
        if (a._zod.def.when) {
          if (!a._zod.def.when(e)) {
            continue;
          }
        } else if (o) {
          continue;
        }
        let t = e.issues.length;
        let s = a._zod.check(e);
        if (s instanceof Promise && n?.async === false) {
          throw new GT();
        }
        if (r || s instanceof Promise) {
          r = (r ?? Promise.resolve()).then(async () => {
            await s;
            if (e.issues.length !== t) {
              if (!o) {
                o = QH(e, t);
              }
            }
          });
        } else {
          if (e.issues.length === t) {
            continue;
          }
          if (!o) {
            o = QH(e, t);
          }
        }
      }
      if (r) {
        return r.then(() => e);
      }
      return e;
    };
    e._zod.run = (n, o) => {
      let a = e._zod.parse(n, o);
      if (a instanceof Promise) {
        if (o.async === false) {
          throw new GT();
        }
        return a.then((e) => t(e, r, o));
      }
      return t(a, r, o);
    };
  }
  e["~standard"] = {
    validate: (t) => {
      try {
        let n = xL(e, t);
        if (n.success) {
          return {
            value: n.data,
          };
        }
        return {
          issues: n.error?.issues,
        };
      } catch (n) {
        return bp(e, t).then((e) => {
          if (e.success) {
            return {
              value: e.data,
            };
          }
          return {
            issues: e.error?.issues,
          };
        });
      }
    },
    vendor: "zod",
    version: 1,
  };
});
export let $v = xI("$ZodString", (e, t) => {
  W4.init(e, t);
  e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? Yj(e._zod.bag);
  e._zod.parse = (n, r) => {
    if (t.coerce) {
      try {
        n.value = String(n.value);
      } catch (e) {}
    }
    if (typeof n.value !== "string") {
      n.issues.push({
        expected: "string",
        code: "invalid_type",
        input: n.value,
        inst: e,
      });
    }
    return n;
  };
});
export let EY = xI("$ZodStringFormat", (e, t) => {
  ql.init(e, t);
  $v.init(e, t);
});
export let Zc = xI("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Os);
  EY.init(e, t);
});
export let Zn = xI("$ZodUUID", (e, t) => {
  if (t.version) {
    let e = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8,
    }[t.version];
    if (e === undefined) {
      throw Error(`Invalid UUID version: "${t.version}"`);
    }
    t.pattern ?? (t.pattern = uR(e));
  } else {
    t.pattern ?? (t.pattern = uR());
  }
  EY.init(e, t);
});
export let qG = xI("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Rp);
  EY.init(e, t);
});
export let VY = xI("$ZodURL", (e, t) => {
  EY.init(e, t);
  e._zod.check = (n) => {
    try {
      let r = n.value;
      let i = new URL(r);
      let o = i.href;
      if (t.hostname) {
        t.hostname.lastIndex = 0;
        if (!t.hostname.test(i.hostname)) {
          n.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: OI.source,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }
      if (t.protocol) {
        t.protocol.lastIndex = 0;
        if (
          !t.protocol.test(
            i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol,
          )
        ) {
          n.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: t.protocol.source,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }
      if (!r.endsWith("/") && o.endsWith("/")) {
        n.value = o.slice(0, -1);
      } else {
        n.value = o;
      }
      return;
    } catch (r) {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let cG = xI("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Zg());
  EY.init(e, t);
});
export let Py = xI("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Ak);
  EY.init(e, t);
});
export let bl = xI("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = gF);
  EY.init(e, t);
});
export let Zu = xI("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Gl);
  EY.init(e, t);
});
export let g5 = xI("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Z0);
  EY.init(e, t);
});
export let TF = xI("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = kM);
  EY.init(e, t);
});
export let GY = xI("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = fO);
  EY.init(e, t);
});
export let Ko = xI("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = w$(t));
  EY.init(e, t);
});
export let v1 = xI("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = p6);
  EY.init(e, t);
});
export let Ax = xI("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = kB(t));
  EY.init(e, t);
});
export let $N = xI("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = p0);
  EY.init(e, t);
});
export let Lc = xI("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = uX);
  EY.init(e, t);
  e._zod.onattach.push((e) => {
    e._zod.bag.format = "ipv4";
  });
});
export let Zy = xI("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ug);
  EY.init(e, t);
  e._zod.onattach.push((e) => {
    e._zod.bag.format = "ipv6";
  });
  e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let CI = xI("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = zr);
  EY.init(e, t);
});
export let Cn = xI("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = l7);
  EY.init(e, t);
  e._zod.check = (n) => {
    let [r, i] = n.value.split("/");
    try {
      if (!i) {
        throw Error();
      }
      let e = Number(i);
      if (`${e}` !== i || e < 0 || e > 128) {
        throw Error();
      }
      new URL(`http://[${r}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
function T(e) {
  if (e === "") {
    return true;
  }
  if (e.length % 4 != 0) {
    return false;
  }
  try {
    atob(e);
    return true;
  } catch {
    return false;
  }
}
export let Dq = xI("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = K3);
  EY.init(e, t);
  e._zod.onattach.push((e) => {
    e._zod.bag.contentEncoding = "base64";
  });
  e._zod.check = (n) => {
    if (!T(n.value)) {
      n.issues.push({
        code: "invalid_format",
        format: "base64",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let CQ = xI("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = r0);
  EY.init(e, t);
  e._zod.onattach.push((e) => {
    e._zod.bag.contentEncoding = "base64url";
  });
  e._zod.check = (n) => {
    if (
      !((e) => {
        if (!r0.test(e)) {
          return false;
        }
        let t = e.replace(/[-_]/g, (e) => {
          if (e === "-") {
            return "+";
          }
          return "/";
        });
        return T(t.padEnd(4 * Math.ceil(t.length / 4), "="));
      })(n.value)
    ) {
      n.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let Oy = xI("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = hQ);
  EY.init(e, t);
});
export let h8 = xI("$ZodJWT", (e, t) => {
  EY.init(e, t);
  e._zod.check = (n) => {
    if (
      !((e, t = null) => {
        try {
          let n = e.split(".");
          if (n.length !== 3) {
            return false;
          }
          let [r] = n;
          if (!r) {
            return false;
          }
          let i = JSON.parse(atob(r));
          if (
            ("typ" in i && i?.typ !== "JWT") ||
            !i.alg ||
            (t && (!("alg" in i) || i.alg !== t))
          ) {
            return false;
          }
          return true;
        } catch {
          return false;
        }
      })(n.value, t.alg)
    ) {
      n.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: n.value,
        inst: e,
        continue: !t.abort,
      });
    }
  };
});
export let vz = xI("$ZodNumber", (e, t) => {
  W4.init(e, t);
  e._zod.pattern = e._zod.bag.pattern ?? ai;
  e._zod.parse = (n, r) => {
    if (t.coerce) {
      try {
        n.value = Number(n.value);
      } catch (e) {}
    }
    let n_value = n.value;
    if (
      typeof n_value === "number" &&
      !Number.isNaN(n_value) &&
      Number.isFinite(n_value)
    ) {
      return n;
    }
    let received =
      typeof n_value === "number"
        ? Number.isNaN(n_value)
          ? "NaN"
          : Number.isFinite(n_value)
            ? undefined
            : "Infinity"
        : undefined;
    n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n_value,
      inst: e,
      ...(received
        ? {
            received,
          }
        : {}),
    });
    return n;
  };
});
export let I = xI("$ZodNumber", (e, t) => {
  KH.init(e, t);
  vz.init(e, t);
});
export let sF = xI("$ZodBoolean", (e, t) => {
  W4.init(e, t);
  e._zod.pattern = zM;
  e._zod.parse = (n, r) => {
    if (t.coerce) {
      try {
        n.value = !!n.value;
      } catch (e) {}
    }
    let n_value = n.value;
    if (typeof n_value !== "boolean") {
      n.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: n_value,
        inst: e,
      });
    }
    return n;
  };
});
export let x8 = xI("$ZodNull", (e, t) => {
  W4.init(e, t);
  e._zod.pattern = ch;
  e._zod.values = new Set([null]);
  e._zod.parse = (t, n) => {
    let t_value = t.value;
    if (t_value !== null) {
      t.issues.push({
        expected: "null",
        code: "invalid_type",
        input: t_value,
        inst: e,
      });
    }
    return t;
  };
});
export let GP = xI("$ZodUnknown", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (e) => e;
});
export let Um = xI("$ZodNever", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (t, n) => {
    t.issues.push({
      expected: "never",
      code: "invalid_type",
      input: t.value,
      inst: e,
    });
    return t;
  };
});
function L(e, t, n) {
  if (e.issues.length) {
    t.issues.push(...lQ(n, e.issues));
  }
  t.value[n] = e.value;
}
export let $p = xI("$ZodArray", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (n, r) => {
    let n_value = n.value;
    if (!Array.isArray(n_value)) {
      n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n_value,
        inst: e,
      });
      return n;
    }
    n.value = Array(n_value.length);
    let o = [];
    for (let e = 0; e < n_value.length; e++) {
      let value = n_value[e];
      let s = t.element._zod.run(
        {
          value,
          issues: [],
        },
        r,
      );
      if (s instanceof Promise) {
        o.push(s.then((t) => L(t, n, e)));
      } else {
        L(s, n, e);
      }
    }
    if (o.length) {
      return Promise.all(o).then(() => n);
    }
    return n;
  };
});
function K(e, t, n) {
  if (e.issues.length) {
    t.issues.push(...lQ(n, e.issues));
  }
  t.value[n] = e.value;
}
function V(e, t, n, r) {
  if (e.issues.length) {
    if (r[n] === undefined) {
      if (n in r) {
        t.value[n] = undefined;
      } else {
        t.value[n] = e.value;
      }
    } else {
      t.issues.push(...lQ(n, e.issues));
    }
  } else if (e.value === undefined) {
    if (n in r) {
      t.value[n] = undefined;
    }
  } else {
    t.value[n] = e.value;
  }
}
export let L8 = xI("$ZodObject", (e, t) => {
  let n;
  let r;
  W4.init(e, t);
  let a = PO(() => {
    let e = Object.keys(t.shape);
    for (let n of e) {
      if (!(t.shape[n] instanceof W4)) {
        throw Error(`Invalid element at key "${n}": expected a Zod schema`);
      }
    }
    let n = NM(t.shape);
    return {
      shape: t.shape,
      keys: e,
      keySet: new Set(e),
      numKeys: e.length,
      optionalKeys: new Set(n),
    };
  });
  gJ(e._zod, "propValues", () => {
    let t_shape = t.shape;
    let n = {};
    for (let t in t_shape) {
      let r = t_shape[t]._zod;
      if (r.values) {
        for (let e of (n[t] ?? (n[t] = new Set()), r.values)) {
          n[t].add(e);
        }
      }
    }
    return n;
  });
  let s = Gv;
  let l = !cr.jitless;
  let d = hI;
  let p = l && d.value;
  let t_catchall = t.catchall;
  e._zod.parse = (i, c) => {
    r ??= a.value;
    let i_value = i.value;
    if (!s(i_value)) {
      i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: i_value,
        inst: e,
      });
      return i;
    }
    let h = [];
    if (l && p && c?.async === false && c.jitless !== true) {
      if (!n) {
        n = ((e) => {
          let t = new o(["shape", "payload", "ctx"]);
          let a_value = a.value;
          let r = (e) => {
            let t = UQ(e);
            return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
          };
          t.write("const input = payload.value;");
          let i = Object.create(null);
          let s = 0;
          for (let e of a_value.keys) {
            i[e] = `key_${s++}`;
          }
          for (let e of (t.write("const newResult = {}"), a_value.keys)) {
            if (a_value.optionalKeys.has(e)) {
              let n = i[e];
              t.write(`const ${n} = ${r(e)};`);
              let o = UQ(e);
              t.write(`
        if (${n}.issues.length) {
          if (input[${o}] === undefined) {
            if (${o} in input) {
              newResult[${o}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${n}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${o}, ...iss.path] : [${o}],
              }))
            );
          }
        } else if (${n}.value === undefined) {
          if (${o} in input) newResult[${o}] = undefined;
        } else {
          newResult[${o}] = ${n}.value;
        }
        `);
            } else {
              let n = i[e];
              t.write(`const ${n} = ${r(e)};`);
              t.write(`
          if (${n}.issues.length) payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${UQ(e)}, ...iss.path] : [${UQ(e)}]
          })));`);
              t.write(`newResult[${UQ(e)}] = ${n}.value`);
            }
          }
          t.write("payload.value = newResult;");
          t.write("return payload;");
          let l = t.compile();
          return (t, n) => l(e, t, n);
        })(t.shape);
      }
      i = n(i, c);
    } else {
      i.value = {};
      let e = r.shape;
      for (let t of r.keys) {
        let n = e[t];
        let r = n._zod.run(
          {
            value: i_value[t],
            issues: [],
          },
          c,
        );
        let o = n._zod.optin === "optional" && n._zod.optout === "optional";
        if (r instanceof Promise) {
          h.push(
            r.then((e) => {
              if (o) {
                return V(e, i, t, i_value);
              }
              return K(e, i, t);
            }),
          );
        } else if (o) {
          V(r, i, t, i_value);
        } else {
          K(r, i, t);
        }
      }
    }
    if (!t_catchall) {
      if (h.length) {
        return Promise.all(h).then(() => i);
      }
      return i;
    }
    let m = [];
    let r_keySet = r.keySet;
    let t_catchall__zod = t_catchall._zod;
    let type = t_catchall__zod.def.type;
    for (let e of Object.keys(i_value)) {
      if (r_keySet.has(e)) {
        continue;
      }
      if (type === "never") {
        m.push(e);
        continue;
      }
      let t = t_catchall__zod.run(
        {
          value: i_value[e],
          issues: [],
        },
        c,
      );
      if (t instanceof Promise) {
        h.push(t.then((t) => K(t, i, e)));
      } else {
        K(t, i, e);
      }
    }
    if (m.length) {
      i.issues.push({
        code: "unrecognized_keys",
        keys: m,
        input: i_value,
        inst: e,
      });
    }
    if (h.length) {
      return Promise.all(h).then(() => i);
    }
    return i;
  };
});
function B(e, t, n, r) {
  for (let n of e) {
    if (n.issues.length === 0) {
      t.value = n.value;
      return t;
    }
  }
  t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((e) => e.issues.map((e) => iR(e, r, $W()))),
  });
  return t;
}
export let cu = xI("$ZodUnion", (e, t) => {
  W4.init(e, t);
  gJ(e._zod, "optin", () => {
    if (t.options.some((e) => e._zod.optin === "optional")) {
      return "optional";
    }
  });
  gJ(e._zod, "optout", () => {
    if (t.options.some((e) => e._zod.optout === "optional")) {
      return "optional";
    }
  });
  gJ(e._zod, "values", () => {
    if (t.options.every((e) => e._zod.values)) {
      return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
    }
  });
  gJ(e._zod, "pattern", () => {
    if (t.options.every((e) => e._zod.pattern)) {
      let e = t.options.map((e) => e._zod.pattern);
      return RegExp(`^(${e.map((e) => p6_1(e.source)).join("|")})$`);
    }
  });
  e._zod.parse = (n, r) => {
    let i = false;
    let o = [];
    for (let e of t.options) {
      let t = e._zod.run(
        {
          value: n.value,
          issues: [],
        },
        r,
      );
      if (t instanceof Promise) {
        o.push(t);
        i = true;
      } else {
        if (t.issues.length === 0) {
          return t;
        }
        o.push(t);
      }
    }
    if (i) {
      return Promise.all(o).then((t) => B(t, n, e, r));
    }
    return B(o, n, e, r);
  };
});
export let P0 = xI("$ZodDiscriminatedUnion", (e, t) => {
  cu.init(e, t);
  let parse = e._zod.parse;
  gJ(e._zod, "propValues", () => {
    let e = {};
    for (let n of t.options) {
      let r = n._zod.propValues;
      if (!r || Object.keys(r).length === 0) {
        throw Error(
          `Invalid discriminated union option at index "${t.options.indexOf(n)}"`,
        );
      }
      for (let [t, n] of Object.entries(r)) {
        for (let r of (e[t] || (e[t] = new Set()), n)) {
          e[t].add(r);
        }
      }
    }
    return e;
  });
  let r = PO(() => {
    let t_options = t.options;
    let n = new Map();
    for (let r of t_options) {
      let e = r._zod.propValues[t.discriminator];
      if (!e || e.size === 0) {
        throw Error(
          `Invalid discriminated union option at index "${t.options.indexOf(r)}"`,
        );
      }
      for (let t of e) {
        if (n.has(t)) {
          throw Error(`Duplicate discriminator value "${String(t)}"`);
        }
        n.set(t, r);
      }
    }
    return n;
  });
  e._zod.parse = (i, o) => {
    let i_value = i.value;
    if (!Gv(i_value)) {
      i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: i_value,
        inst: e,
      });
      return i;
    }
    let s = r.value.get(i_value?.[t.discriminator]);
    if (s) {
      return s._zod.run(i, o);
    }
    if (t.unionFallback) {
      return parse(i, o);
    }
    i.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      input: i_value,
      path: [t.discriminator],
      inst: e,
    });
    return i;
  };
});
export let LJ = xI("$ZodIntersection", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (e, n) => {
    let e_value = e.value;
    let i = t.left._zod.run(
      {
        value: e_value,
        issues: [],
      },
      n,
    );
    let o = t.right._zod.run(
      {
        value: e_value,
        issues: [],
      },
      n,
    );
    if (i instanceof Promise || o instanceof Promise) {
      return Promise.all([i, o]).then(([t, n]) => Y(e, t, n));
    }
    return Y(e, i, o);
  };
});
function Y(e, t, n) {
  if (t.issues.length) {
    e.issues.push(...t.issues);
  }
  if (n.issues.length) {
    e.issues.push(...n.issues);
  }
  if (QH(e)) {
    return e;
  }
  let r = (function e(t, n) {
    if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) {
      return {
        valid: true,
        data: t,
      };
    }
    if (Qd(t) && Qd(n)) {
      let r = Object.keys(n);
      let i = Object.keys(t).filter((e) => r.indexOf(e) !== -1);
      let o = {
        ...t,
        ...n,
      };
      for (let r of i) {
        let i = e(t[r], n[r]);
        if (!i.valid) {
          return {
            valid: false,
            mergeErrorPath: [r, ...i.mergeErrorPath],
          };
        }
        o[r] = i.data;
      }
      return {
        valid: true,
        data: o,
      };
    }
    if (Array.isArray(t) && Array.isArray(n)) {
      if (t.length !== n.length) {
        return {
          valid: false,
          mergeErrorPath: [],
        };
      }
      let r = [];
      for (let i = 0; i < t.length; i++) {
        let o = e(t[i], n[i]);
        if (!o.valid) {
          return {
            valid: false,
            mergeErrorPath: [i, ...o.mergeErrorPath],
          };
        }
        r.push(o.data);
      }
      return {
        valid: true,
        data: r,
      };
    }
    return {
      valid: false,
      mergeErrorPath: [],
    };
  })(t.value, n.value);
  if (!r.valid) {
    throw Error(
      `Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`,
    );
  }
  e.value = r.data;
  return e;
}
export let h = xI("$ZodRecord", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (n, r) => {
    let n_value = n.value;
    if (!Qd(n_value)) {
      n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n_value,
        inst: e,
      });
      return n;
    }
    let a = [];
    if (t.keyType._zod.values) {
      let i;
      let s = t.keyType._zod.values;
      for (let e of ((n.value = {}), s)) {
        if (
          typeof e === "string" ||
          typeof e === "number" ||
          typeof e === "symbol"
        ) {
          let i = t.valueType._zod.run(
            {
              value: n_value[e],
              issues: [],
            },
            r,
          );
          if (i instanceof Promise) {
            a.push(
              i.then((t) => {
                if (t.issues.length) {
                  n.issues.push(...lQ(e, t.issues));
                }
                n.value[e] = t.value;
              }),
            );
          } else {
            if (i.issues.length) {
              n.issues.push(...lQ(e, i.issues));
            }
            n.value[e] = i.value;
          }
        }
      }
      for (let e in n_value) {
        if (!s.has(e)) {
          (i = i ?? []).push(e);
        }
      }
      if (i && i.length > 0) {
        n.issues.push({
          code: "unrecognized_keys",
          input: n_value,
          inst: e,
          keys: i,
        });
      }
    } else {
      for (let s of ((n.value = {}), Reflect.ownKeys(n_value))) {
        if (s === "__proto__") {
          continue;
        }
        let l = t.keyType._zod.run(
          {
            value: s,
            issues: [],
          },
          r,
        );
        if (l instanceof Promise) {
          throw Error("Async schemas not supported in object keys currently");
        }
        if (l.issues.length) {
          n.issues.push({
            origin: "record",
            code: "invalid_key",
            issues: l.issues.map((e) => iR(e, r, $W())),
            input: s,
            path: [s],
            inst: e,
          });
          n.value[l.value] = l.value;
          continue;
        }
        let c = t.valueType._zod.run(
          {
            value: n_value[s],
            issues: [],
          },
          r,
        );
        if (c instanceof Promise) {
          a.push(
            c.then((e) => {
              if (e.issues.length) {
                n.issues.push(...lQ(s, e.issues));
              }
              n.value[l.value] = e.value;
            }),
          );
        } else {
          if (c.issues.length) {
            n.issues.push(...lQ(s, c.issues));
          }
          n.value[l.value] = c.value;
        }
      }
    }
    if (a.length) {
      return Promise.all(a).then(() => n);
    }
    return n;
  };
});
export let VO = xI("$ZodEnum", (e, t) => {
  W4.init(e, t);
  let values = w5(t.entries);
  e._zod.values = new Set(values);
  e._zod.pattern = RegExp(
    `^(${values
      .filter((e) => qQ.has(typeof e))
      .map((e) => {
        if (typeof e === "string") {
          return $f(e);
        }
        return e.toString();
      })
      .join("|")})$`,
  );
  e._zod.parse = (t, r) => {
    let t_value = t.value;
    if (!e._zod.values.has(t_value)) {
      t.issues.push({
        code: "invalid_value",
        values,
        input: t_value,
        inst: e,
      });
    }
    return t;
  };
});
export let nu = xI("$ZodLiteral", (e, t) => {
  W4.init(e, t);
  e._zod.values = new Set(t.values);
  e._zod.pattern = RegExp(
    `^(${t.values
      .map((e) => {
        if (typeof e === "string") {
          return $f(e);
        }
        if (e) {
          return e.toString();
        }
        return String(e);
      })
      .join("|")})$`,
  );
  e._zod.parse = (n, r) => {
    let n_value = n.value;
    if (!e._zod.values.has(n_value)) {
      n.issues.push({
        code: "invalid_value",
        values: t.values,
        input: n_value,
        inst: e,
      });
    }
    return n;
  };
});
export let Wc = xI("$ZodTransform", (e, t) => {
  W4.init(e, t);
  e._zod.parse = (e, n) => {
    let r = t.transform(e.value, e);
    if (n.async) {
      return (r instanceof Promise ? r : Promise.resolve(r)).then((t) => {
        e.value = t;
        return e;
      });
    }
    if (r instanceof Promise) {
      throw new GT();
    }
    e.value = r;
    return e;
  };
});
export let ig = xI("$ZodOptional", (e, t) => {
  W4.init(e, t);
  e._zod.optin = "optional";
  e._zod.optout = "optional";
  gJ(e._zod, "values", () => {
    if (t.innerType._zod.values) {
      return new Set([...t.innerType._zod.values, undefined]);
    }
  });
  gJ(e._zod, "pattern", () => {
    let pattern = t.innerType._zod.pattern;
    if (pattern) {
      return RegExp(`^(${p6_1(pattern.source)})?$`);
    }
  });
  e._zod.parse = (e, n) => {
    if (t.innerType._zod.optin === "optional") {
      return t.innerType._zod.run(e, n);
    }
    if (e.value === undefined) {
      return e;
    }
    return t.innerType._zod.run(e, n);
  };
});
export let qc = xI("$ZodNullable", (e, t) => {
  W4.init(e, t);
  gJ(e._zod, "optin", () => t.innerType._zod.optin);
  gJ(e._zod, "optout", () => t.innerType._zod.optout);
  gJ(e._zod, "pattern", () => {
    let pattern = t.innerType._zod.pattern;
    if (pattern) {
      return RegExp(`^(${p6_1(pattern.source)}|null)$`);
    }
  });
  gJ(e._zod, "values", () => {
    if (t.innerType._zod.values) {
      return new Set([...t.innerType._zod.values, null]);
    }
  });
  e._zod.parse = (e, n) => {
    if (e.value === null) {
      return e;
    }
    return t.innerType._zod.run(e, n);
  };
});
export let rv = xI("$ZodDefault", (e, t) => {
  W4.init(e, t);
  e._zod.optin = "optional";
  gJ(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, n) => {
    if (e.value === undefined) {
      e.value = t.defaultValue;
      return e;
    }
    let r = t.innerType._zod.run(e, n);
    if (r instanceof Promise) {
      return r.then((e) => ea(e, t));
    }
    return ea(r, t);
  };
});
function ea(e, t) {
  if (e.value === undefined) {
    e.value = t.defaultValue;
  }
  return e;
}
export let VF = xI("$ZodPrefault", (e, t) => {
  W4.init(e, t);
  e._zod.optin = "optional";
  gJ(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, n) => {
    if (e.value === undefined) {
      e.value = t.defaultValue;
    }
    return t.innerType._zod.run(e, n);
  };
});
export let N$ = xI("$ZodNonOptional", (e, t) => {
  W4.init(e, t);
  gJ(e._zod, "values", () => {
    let values = t.innerType._zod.values;
    if (values) {
      return new Set([...values].filter((e) => e !== undefined));
    }
  });
  e._zod.parse = (n, r) => {
    let i = t.innerType._zod.run(n, r);
    if (i instanceof Promise) {
      return i.then((t) => el(t, e));
    }
    return el(i, e);
  };
});
function el(e, t) {
  if (!(e.issues.length || e.value !== undefined)) {
    e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t,
    });
  }
  return e;
}
export let t$ = xI("$ZodCatch", (e, t) => {
  W4.init(e, t);
  e._zod.optin = "optional";
  gJ(e._zod, "optout", () => t.innerType._zod.optout);
  gJ(e._zod, "values", () => t.innerType._zod.values);
  e._zod.parse = (e, n) => {
    let r = t.innerType._zod.run(e, n);
    if (r instanceof Promise) {
      return r.then((r) => {
        e.value = r.value;
        if (r.issues.length) {
          e.value = t.catchValue({
            ...e,
            error: {
              issues: r.issues.map((e) => iR(e, n, $W())),
            },
            input: e.value,
          });
          e.issues = [];
        }
        return e;
      });
    }
    e.value = r.value;
    if (r.issues.length) {
      e.value = t.catchValue({
        ...e,
        error: {
          issues: r.issues.map((e) => iR(e, n, $W())),
        },
        input: e.value,
      });
      e.issues = [];
    }
    return e;
  };
});
export let _m = xI("$ZodPipe", (e, t) => {
  W4.init(e, t);
  gJ(e._zod, "values", () => t.in._zod.values);
  gJ(e._zod, "optin", () => t.in._zod.optin);
  gJ(e._zod, "optout", () => t.out._zod.optout);
  e._zod.parse = (e, n) => {
    let r = t.in._zod.run(e, n);
    if (r instanceof Promise) {
      return r.then((e) => ep(e, t, n));
    }
    return ep(r, t, n);
  };
});
function ep(e, t, n) {
  if (QH(e)) {
    return e;
  }
  return t.out._zod.run(
    {
      value: e.value,
      issues: e.issues,
    },
    n,
  );
}
export let Sb = xI("$ZodReadonly", (e, t) => {
  W4.init(e, t);
  gJ(e._zod, "propValues", () => t.innerType._zod.propValues);
  gJ(e._zod, "values", () => t.innerType._zod.values);
  gJ(e._zod, "optin", () => t.innerType._zod.optin);
  gJ(e._zod, "optout", () => t.innerType._zod.optout);
  e._zod.parse = (e, n) => {
    let r = t.innerType._zod.run(e, n);
    if (r instanceof Promise) {
      return r.then(eh);
    }
    return eh(r);
  };
});
function eh(e) {
  e.value = Object.freeze(e.value);
  return e;
}
export let b0 = xI("$ZodCustom", (e, t) => {
  QP.init(e, t);
  W4.init(e, t);
  e._zod.parse = (e, t) => e;
  e._zod.check = (n) => {
    let n_value = n.value;
    let i = t.fn(n_value);
    if (i instanceof Promise) {
      return i.then((t) => ev(t, n, n_value, e));
    }
    ev(i, n, n_value, e);
  };
});
function ev(e, t, input, r) {
  if (!e) {
    let e = {
      code: "custom",
      input,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    if (r._zod.def.params) {
      e.params = r._zod.def.params;
    }
    t.issues.push(sn(e));
  }
}

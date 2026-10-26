import { xI } from "./module-p3K.js";
import {
  $p,
  $v,
  CI,
  CQ,
  Cn,
  Dq,
  EY,
  GP,
  GY,
  I as I_1,
  L8,
  LJ,
  Lc,
  N$,
  Oy,
  P0,
  Py,
  Sb,
  TF,
  Um,
  VF,
  VO,
  VY,
  W4,
  Wc,
  Zc,
  Zn,
  Zu,
  Zy,
  _m,
  b0,
  bl,
  cG,
  cu,
  g5,
  h as h_1,
  h8,
  ig,
  nu,
  qG,
  qc,
  rv,
  sF,
  t$,
  vz,
  x8,
} from "./module-KwG.js";
import { A2, OH, Up, Vy, X$, cJ, gJ, h1, mw, o8, sn } from "./module-s2v.js";
import { fd } from "./module-Ggi.js";
import {
  $O,
  $S,
  Au,
  Be,
  Bj,
  Ct,
  Dl,
  ER,
  Eb,
  F7,
  FO,
  Fk,
  Fn,
  G8,
  Hi,
  Il,
  KB,
  LK,
  Mu,
  Ny,
  Pw,
  Rl,
  Tx,
  Uy,
  WN,
  YA,
  Zm,
  _L,
  _z,
  aC,
  bS,
  cU,
  dR,
  dZ,
  em as em_1,
  fU,
  fs,
  gP,
  hH,
  jw,
  lo,
  m9,
  nA,
  pY,
  qF,
  qm,
  rk,
  rt,
  tB,
  wA,
  xY,
} from "./module-XbS.js";
import { QP } from "./module-wDU.js";
import { kB, p0, p6, w$ } from "./module-rIo.js";
import { Od, Rb, Tj, wG } from "./module-BMb.js";
import { JM, Wk, a$ } from "./module-Nh_2.js";
let p = (e, t) => {
  a$.init(e, t);
  e.name = "ZodError";
  Object.defineProperties(e, {
    format: {
      value: (t) => Wk(e, t),
    },
    flatten: {
      value: (t) => JM(e, t),
    },
    addIssue: {
      value: (t) => e.issues.push(t),
    },
    addIssues: {
      value: (t) => e.issues.push(...t),
    },
    isEmpty: {
      get: () => e.issues.length === 0,
    },
  });
};
xI("ZodError", p);
let f = xI("ZodError", p, {
  Parent: Error,
});
let h = Tj(f);
let m = Rb(f);
let v = Od(f);
let g = wG(f);
let y = xI("ZodType", (e, t) => {
  W4.init(e, t);
  e.def = t;
  Object.defineProperty(e, "_def", {
    value: t,
  });
  e.check = (...n) =>
    e.clone({
      ...t,
      checks: [
        ...(t.checks ?? []),
        ...n.map((check) => {
          if (typeof check === "function") {
            return {
              _zod: {
                check,
                def: {
                  check: "custom",
                },
                onattach: [],
              },
            };
          }
          return check;
        }),
      ],
    });
  e.clone = (t, n) => o8(e, t, n);
  e.brand = () => e;
  e.register = (t, n) => {
    t.add(e, n);
    return e;
  };
  e.parse = (t, n) =>
    h(e, t, n, {
      callee: e.parse,
    });
  e.safeParse = (t, n) => v(e, t, n);
  e.parseAsync = async (t, n) =>
    m(e, t, n, {
      callee: e.parseAsync,
    });
  e.safeParseAsync = async (t, n) => g(e, t, n);
  e.spa = e.safeParseAsync;
  e.refine = (t, n) => e.check(((e, t = {}) => fU(eA, e, t))(t, n));
  e.superRefine = (t) => {
    var n;
    var r;
    let i;
    let a;
    return e.check(
      ((n = t),
      (a =
        ((r = (e) => {
          e.addIssue = (t) => {
            if (typeof t === "string") {
              e.issues.push(sn(t, e.value, a._zod.def));
            } else {
              if (t.fatal) {
                t.continue = false;
              }
              t.code ?? (t.code = "custom");
              t.input ?? (t.input = e.value);
              t.inst ?? (t.inst = a);
              t.continue ?? (t.continue = !a._zod.def.abort);
              e.issues.push(sn(t));
            }
          };
          return n(e.value, e);
        }),
        ((i = new QP({
          check: "custom",
        }))._zod.check = r),
        i))),
    );
  };
  e.overwrite = (t) => e.check(bS(t));
  e.optional = () => lq(e);
  e.nullable = () => eb(e);
  e.nullish = () => lq(eb(e));
  e.nonoptional = (t) => {
    var n;
    var r;
    n = e;
    r = t;
    return new ew({
      type: "nonoptional",
      innerType: n,
      ...A2(r),
    });
  };
  e.array = () => YO(e);
  e.or = (t) => KC([e, t]);
  e.and = (t) => E$(e, t);
  e.transform = (t) => eI(e, ev(t));
  e.default = (t) => {
    var n;
    var r;
    n = e;
    r = t;
    return new ez({
      type: "default",
      innerType: n,
      get defaultValue() {
        if (typeof r === "function") {
          return r();
        }
        return r;
      },
    });
  };
  e.prefault = (t) => {
    var n;
    var r;
    n = e;
    r = t;
    return new ek({
      type: "prefault",
      innerType: n,
      get defaultValue() {
        if (typeof r === "function") {
          return r();
        }
        return r;
      },
    });
  };
  e.catch = (t) => {
    var n;
    return new ex({
      type: "catch",
      innerType: e,
      catchValue: typeof (n = t) === "function" ? n : () => n,
    });
  };
  e.pipe = (t) => eI(e, t);
  e.readonly = () =>
    new eZ({
      type: "readonly",
      innerType: e,
    });
  e.describe = (description) => {
    let n = e.clone();
    fd.add(n, {
      description,
    });
    return n;
  };
  Object.defineProperty(e, "description", {
    get: () => fd.get(e)?.description,
    configurable: true,
  });
  e.meta = (...t) => {
    if (t.length === 0) {
      return fd.get(e);
    }
    let n = e.clone();
    fd.add(n, t[0]);
    return n;
  };
  e.isOptional = () => e.safeParse(undefined).success;
  e.isNullable = () => e.safeParse(null).success;
  return e;
});
let _ = xI("_ZodString", (e, t) => {
  $v.init(e, t);
  y.init(e, t);
  let bag = e._zod.bag;
  e.format = bag.format ?? null;
  e.minLength = bag.minimum ?? null;
  e.maxLength = bag.maximum ?? null;
  e.regex = (...t) => e.check(Fk(...t));
  e.includes = (...t) => e.check(dR(...t));
  e.startsWith = (...t) => e.check($S(...t));
  e.endsWith = (...t) => e.check(ER(...t));
  e.min = (...t) => e.check(m9(...t));
  e.max = (...t) => e.check(Eb(...t));
  e.length = (...t) => e.check(YA(...t));
  e.nonempty = (...t) => e.check(m9(1, ...t));
  e.lowercase = (t) => e.check(hH(t));
  e.uppercase = (t) => e.check(qF(t));
  e.trim = () => e.check(WN());
  e.normalize = (...t) => e.check(lo(...t));
  e.toLowerCase = () => e.check(Il());
  e.toUpperCase = () => e.check(xY());
});
let b = xI("ZodString", (e, t) => {
  $v.init(e, t);
  _.init(e, t);
  e.email = (t) => e.check(Mu(w, t));
  e.url = (t) => e.check(Fn(I, t));
  e.jwt = (t) => e.check(rk(M, t));
  e.emoji = (t) => e.check(aC(Z, t));
  e.guid = (t) => e.check(tB(x, t));
  e.uuid = (t) => e.check(Be($, t));
  e.uuidv4 = (t) => e.check(nA($, t));
  e.uuidv6 = (t) => e.check(pY($, t));
  e.uuidv7 = (t) => e.check(wA($, t));
  e.nanoid = (t) => e.check(Dl(A, t));
  e.guid = (t) => e.check(tB(x, t));
  e.cuid = (t) => e.check(fs(O, t));
  e.cuid2 = (t) => e.check(Bj(E, t));
  e.ulid = (t) => e.check(Ct(S, t));
  e.base64 = (t) => e.check(rt(U, t));
  e.base64url = (t) => e.check(cU(F, t));
  e.xid = (t) => e.check(Pw(T, t));
  e.ksuid = (t) => e.check(_z(P, t));
  e.ipv4 = (t) => e.check(Ny(j, t));
  e.ipv6 = (t) => e.check($O(N, t));
  e.cidrv4 = (t) => e.check(Uy(R, t));
  e.cidrv6 = (t) => e.check(gP(J, t));
  e.e164 = (t) => e.check(KB(C, t));
  e.datetime = (t) => e.check(w$(t));
  e.date = (t) => e.check(p6(t));
  e.time = (t) => e.check(kB(t));
  e.duration = (t) => e.check(p0(t));
});
export function Yj(e) {
  return Rl(b, e);
}
export let EB = xI("ZodStringFormat", (e, t) => {
  EY.init(e, t);
  _.init(e, t);
});
let w = xI("ZodEmail", (e, t) => {
  qG.init(e, t);
  EB.init(e, t);
});
let x = xI("ZodGUID", (e, t) => {
  Zc.init(e, t);
  EB.init(e, t);
});
let $ = xI("ZodUUID", (e, t) => {
  Zn.init(e, t);
  EB.init(e, t);
});
let I = xI("ZodURL", (e, t) => {
  VY.init(e, t);
  EB.init(e, t);
});
let Z = xI("ZodEmoji", (e, t) => {
  cG.init(e, t);
  EB.init(e, t);
});
let A = xI("ZodNanoID", (e, t) => {
  Py.init(e, t);
  EB.init(e, t);
});
let O = xI("ZodCUID", (e, t) => {
  bl.init(e, t);
  EB.init(e, t);
});
let E = xI("ZodCUID2", (e, t) => {
  Zu.init(e, t);
  EB.init(e, t);
});
let S = xI("ZodULID", (e, t) => {
  g5.init(e, t);
  EB.init(e, t);
});
let T = xI("ZodXID", (e, t) => {
  TF.init(e, t);
  EB.init(e, t);
});
let P = xI("ZodKSUID", (e, t) => {
  GY.init(e, t);
  EB.init(e, t);
});
let j = xI("ZodIPv4", (e, t) => {
  Lc.init(e, t);
  EB.init(e, t);
});
let N = xI("ZodIPv6", (e, t) => {
  Zy.init(e, t);
  EB.init(e, t);
});
let R = xI("ZodCIDRv4", (e, t) => {
  CI.init(e, t);
  EB.init(e, t);
});
let J = xI("ZodCIDRv6", (e, t) => {
  Cn.init(e, t);
  EB.init(e, t);
});
let U = xI("ZodBase64", (e, t) => {
  Dq.init(e, t);
  EB.init(e, t);
});
let F = xI("ZodBase64URL", (e, t) => {
  CQ.init(e, t);
  EB.init(e, t);
});
let C = xI("ZodE164", (e, t) => {
  Oy.init(e, t);
  EB.init(e, t);
});
let M = xI("ZodJWT", (e, t) => {
  h8.init(e, t);
  EB.init(e, t);
});
let D = xI("ZodNumber", (e, t) => {
  vz.init(e, t);
  y.init(e, t);
  e.gt = (t, n) => e.check(Tx(t, n));
  e.gte = (t, n) => e.check(qm(t, n));
  e.min = (t, n) => e.check(qm(t, n));
  e.lt = (t, n) => e.check(Au(t, n));
  e.lte = (t, n) => e.check(Zm(t, n));
  e.max = (t, n) => e.check(Zm(t, n));
  e.int = (t) => {
    var n;
    return e.check(((n = t), LK(G, n)));
  };
  e.safe = (t) => {
    var n;
    return e.check(((n = t), LK(G, n)));
  };
  e.positive = (t) => e.check(Tx(0, t));
  e.nonnegative = (t) => e.check(qm(0, t));
  e.negative = (t) => e.check(Au(0, t));
  e.nonpositive = (t) => e.check(Zm(0, t));
  e.multipleOf = (t, n) => e.check(Hi(t, n));
  e.step = (t, n) => e.check(Hi(t, n));
  e.finite = () => e;
  let bag = e._zod.bag;
  e.minValue =
    Math.max(bag.minimum ?? -Infinity, bag.exclusiveMinimum ?? -Infinity) ??
    null;
  e.maxValue =
    Math.min(bag.maximum ?? Infinity, bag.exclusiveMaximum ?? Infinity) ?? null;
  e.isInt =
    (bag.format ?? "").includes("int") ||
    Number.isSafeInteger(bag.multipleOf ?? 0.5);
  e.isFinite = true;
  e.format = bag.format ?? null;
});
export function ai(e) {
  return F7(D, e);
}
let G = xI("ZodNumberFormat", (e, t) => {
  I_1.init(e, t);
  D.init(e, t);
});
let K = xI("ZodBoolean", (e, t) => {
  sF.init(e, t);
  y.init(e, t);
});
export function zM(e) {
  return _L(K, e);
}
let W = xI("ZodNull", (e, t) => {
  x8.init(e, t);
  y.init(e, t);
});
export function ch(e) {
  return jw(W, e);
}
let Q = xI("ZodUnknown", (e, t) => {
  GP.init(e, t);
  y.init(e, t);
});
export function L5() {
  return em_1(Q);
}
let H = xI("ZodNever", (e, t) => {
  Um.init(e, t);
  y.init(e, t);
});
let Y = xI("ZodArray", (e, t) => {
  $p.init(e, t);
  y.init(e, t);
  e.element = t.element;
  e.min = (t, n) => e.check(m9(t, n));
  e.nonempty = (t) => e.check(m9(1, t));
  e.max = (t, n) => e.check(Eb(t, n));
  e.length = (t, n) => e.check(YA(t, n));
  e.unwrap = () => e.element;
});
export function YO(e, t) {
  return dZ(Y, e, t);
}
let ee = xI("ZodObject", (e, t) => {
  L8.init(e, t);
  y.init(e, t);
  gJ(e, "shape", () => t.shape);
  e.keyof = () => k5(Object.keys(e._zod.def.shape));
  e.catchall = (catchall) =>
    e.clone({
      ...e._zod.def,
      catchall,
    });
  e.passthrough = () =>
    e.clone({
      ...e._zod.def,
      catchall: L5(),
    });
  e.loose = () =>
    e.clone({
      ...e._zod.def,
      catchall: L5(),
    });
  e.strict = () =>
    e.clone({
      ...e._zod.def,
      catchall: G8(H, undefined),
    });
  e.strip = () =>
    e.clone({
      ...e._zod.def,
      catchall: undefined,
    });
  e.extend = (t) => X$(e, t);
  e.merge = (t) => h1(e, t);
  e.pick = (t) => Up(e, t);
  e.omit = (t) => cJ(e, t);
  e.partial = (...t) => OH(eg, e, t[0]);
  e.required = (...t) => mw(ew, e, t[0]);
});
export function Ik(e, t) {
  return new ee({
    type: "object",
    get shape() {
      Vy(this, "shape", {
        ...e,
      });
      return this.shape;
    },
    ...A2(t),
  });
}
export function _H(e, t) {
  return new ee({
    type: "object",
    get shape() {
      Vy(this, "shape", {
        ...e,
      });
      return this.shape;
    },
    catchall: L5(),
    ...A2(t),
  });
}
let er = xI("ZodUnion", (e, t) => {
  cu.init(e, t);
  y.init(e, t);
  e.options = t.options;
});
export function KC(e, t) {
  return new er({
    type: "union",
    options: e,
    ...A2(t),
  });
}
let eo = xI("ZodDiscriminatedUnion", (e, t) => {
  er.init(e, t);
  P0.init(e, t);
});
export function gM(discriminator, t, n) {
  return new eo({
    type: "union",
    options: t,
    discriminator,
    ...A2(n),
  });
}
let es = xI("ZodIntersection", (e, t) => {
  LJ.init(e, t);
  y.init(e, t);
});
export function E$(left, right) {
  return new es({
    type: "intersection",
    left,
    right,
  });
}
let el = xI("ZodRecord", (e, t) => {
  h_1.init(e, t);
  y.init(e, t);
  e.keyType = t.keyType;
  e.valueType = t.valueType;
});
export function g1(keyType, valueType, n) {
  return new el({
    type: "record",
    keyType,
    valueType,
    ...A2(n),
  });
}
let ed = xI("ZodEnum", (e, t) => {
  VO.init(e, t);
  y.init(e, t);
  e.enum = t.entries;
  e.options = Object.values(t.entries);
  let n = new Set(Object.keys(t.entries));
  e.extract = (e, r) => {
    let i = {};
    for (let r of e) {
      if (n.has(r)) {
        i[r] = t.entries[r];
      } else {
        throw Error(`Key ${r} not found in enum`);
      }
    }
    return new ed({
      ...t,
      checks: [],
      ...A2(r),
      entries: i,
    });
  };
  e.exclude = (e, r) => {
    let i = {
      ...t.entries,
    };
    for (let t of e) {
      if (n.has(t)) {
        delete i[t];
      } else {
        throw Error(`Key ${t} not found in enum`);
      }
    }
    return new ed({
      ...t,
      checks: [],
      ...A2(r),
      entries: i,
    });
  };
});
export function k5(e, t) {
  return new ed({
    type: "enum",
    entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
    ...A2(t),
  });
}
let ef = xI("ZodLiteral", (e, t) => {
  nu.init(e, t);
  y.init(e, t);
  e.values = new Set(t.values);
  Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1) {
        throw Error(
          "This schema contains multiple valid literal values. Use `.values` instead.",
        );
      }
      return t.values[0];
    },
  });
});
export function eu(e, t) {
  return new ef({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...A2(t),
  });
}
let em = xI("ZodTransform", (e, t) => {
  Wc.init(e, t);
  y.init(e, t);
  e._zod.parse = (n, r) => {
    n.addIssue = (r) => {
      if (typeof r === "string") {
        n.issues.push(sn(r, n.value, t));
      } else {
        if (r.fatal) {
          r.continue = false;
        }
        r.code ?? (r.code = "custom");
        r.input ?? (r.input = n.value);
        r.inst ?? (r.inst = e);
        r.continue ?? (r.continue = true);
        n.issues.push(sn(r));
      }
    };
    let i = t.transform(n.value, n);
    if (i instanceof Promise) {
      return i.then((e) => {
        n.value = e;
        return n;
      });
    }
    n.value = i;
    return n;
  };
});
function ev(transform) {
  return new em({
    type: "transform",
    transform,
  });
}
let eg = xI("ZodOptional", (e, t) => {
  ig.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
export function lq(e) {
  return new eg({
    type: "optional",
    innerType: e,
  });
}
let e_ = xI("ZodNullable", (e, t) => {
  qc.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
function eb(e) {
  return new e_({
    type: "nullable",
    innerType: e,
  });
}
let ez = xI("ZodDefault", (e, t) => {
  rv.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
  e.removeDefault = e.unwrap;
});
let ek = xI("ZodPrefault", (e, t) => {
  VF.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
let ew = xI("ZodNonOptional", (e, t) => {
  N$.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
});
let ex = xI("ZodCatch", (e, t) => {
  t$.init(e, t);
  y.init(e, t);
  e.unwrap = () => e._zod.def.innerType;
  e.removeCatch = e.unwrap;
});
let e$ = xI("ZodPipe", (e, t) => {
  _m.init(e, t);
  y.init(e, t);
  e.in = t.in;
  e.out = t.out;
});
function eI(e, out) {
  return new e$({
    type: "pipe",
    in: e,
    out,
  });
}
let eZ = xI("ZodReadonly", (e, t) => {
  Sb.init(e, t);
  y.init(e, t);
});
let eA = xI("ZodCustom", (e, t) => {
  b0.init(e, t);
  y.init(e, t);
});
export function Ie(e, t) {
  return FO(eA, e ?? (() => true), t);
}
export function vk(e, t) {
  return eI(ev(e), t);
}

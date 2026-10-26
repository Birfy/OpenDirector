export function w5(e) {
  let t = Object.values(e).filter((e) => typeof e === "number");
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
export function k8(e, t) {
  if (typeof t === "bigint") {
    return t.toString();
  }
  return t;
}
export function PO(e) {
  return {
    get value() {
      {
        let t = e();
        Object.defineProperty(this, "value", {
          value: t,
        });
        return t;
      }
    },
  };
}
export function cl(e) {
  return e == null;
}
export function p6(e) {
  let t = +!!e.startsWith("^");
  let n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
export function LG(e, t) {
  let length = (e.toString().split(".")[1] || "").length;
  let length_1 = (t.toString().split(".")[1] || "").length;
  let i = length > length_1 ? length : length_1;
  return (
    (Number.parseInt(e.toFixed(i).replace(".", "")) %
      Number.parseInt(t.toFixed(i).replace(".", ""))) /
    10 ** i
  );
}
export function gJ(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      {
        let r = n();
        e[t] = r;
        return r;
      }
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n,
      });
    },
    configurable: true,
  });
}
export function Vy(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}
export function UQ(e) {
  return JSON.stringify(e);
}
export let gx = Error.captureStackTrace
  ? Error.captureStackTrace
  : (...e) => {};
export function Gv(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
export let hI = PO(() => {
  if (
    typeof navigator !== "undefined" &&
    navigator?.userAgent?.includes("Cloudflare")
  ) {
    return false;
  }
  try {
    Function("");
    return true;
  } catch (e) {
    return false;
  }
});
export function Qd(e) {
  if (Gv(e) === false) {
    return false;
  }
  let e_constructor = e.constructor;
  if (e_constructor === undefined) {
    return true;
  }
  let t_prototype = e_constructor.prototype;
  return (
    Gv(t_prototype) !== false &&
    Object.prototype.hasOwnProperty.call(t_prototype, "isPrototypeOf") !== false
  );
}
export let qQ = new Set(["string", "number", "symbol"]);
export function $f(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function o8(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  if (!t || n?.parent) {
    r._zod.parent = e;
  }
  return r;
}
export function A2(e) {
  if (!e) {
    return {};
  }
  if (typeof e === "string") {
    return {
      error: () => e,
    };
  }
  if (e?.message !== undefined) {
    if (e?.error !== undefined) {
      throw Error("Cannot specify both `message` and `error` params");
    }
    e.error = e.message;
  }
  delete e.message;
  if (typeof e.error === "string") {
    return {
      ...e,
      error: () => e.error,
    };
  }
  return e;
}
export function NM(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
  );
}
export let zH = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-3.4028234663852886e38, 3.4028234663852886e38],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};
export function Up(e, t) {
  let n = {};
  let def = e._zod.def;
  for (let e in t) {
    if (!(e in def.shape)) {
      throw Error(`Unrecognized key: "${e}"`);
    }
    if (t[e]) {
      n[e] = def.shape[e];
    }
  }
  return o8(e, {
    ...e._zod.def,
    shape: n,
    checks: [],
  });
}
export function cJ(e, t) {
  let n = {
    ...e._zod.def.shape,
  };
  let def = e._zod.def;
  for (let e in t) {
    if (!(e in def.shape)) {
      throw Error(`Unrecognized key: "${e}"`);
    }
    if (t[e]) {
      delete n[e];
    }
  }
  return o8(e, {
    ...e._zod.def,
    shape: n,
    checks: [],
  });
}
export function X$(e, t) {
  if (!Qd(t)) {
    throw Error("Invalid input to extend: expected a plain object");
  }
  let n = {
    ...e._zod.def,
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t,
      };
      Vy(this, "shape", n);
      return n;
    },
    checks: [],
  };
  return o8(e, n);
}
export function h1(e, t) {
  return o8(e, {
    ...e._zod.def,
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t._zod.def.shape,
      };
      Vy(this, "shape", n);
      return n;
    },
    catchall: t._zod.def.catchall,
    checks: [],
  });
}
export function OH(e, t, n) {
  let shape = t._zod.def.shape;
  let i = {
    ...shape,
  };
  if (n) {
    for (let t in n) {
      if (!(t in shape)) {
        throw Error(`Unrecognized key: "${t}"`);
      }
      if (n[t]) {
        i[t] = e
          ? new e({
              type: "optional",
              innerType: shape[t],
            })
          : shape[t];
      }
    }
  } else {
    for (let t in shape) {
      i[t] = e
        ? new e({
            type: "optional",
            innerType: shape[t],
          })
        : shape[t];
    }
  }
  return o8(t, {
    ...t._zod.def,
    shape: i,
    checks: [],
  });
}
export function mw(e, t, n) {
  let shape = t._zod.def.shape;
  let i = {
    ...shape,
  };
  if (n) {
    for (let t in n) {
      if (!(t in i)) {
        throw Error(`Unrecognized key: "${t}"`);
      }
      if (n[t]) {
        i[t] = new e({
          type: "nonoptional",
          innerType: shape[t],
        });
      }
    }
  } else {
    for (let t in shape) {
      i[t] = new e({
        type: "nonoptional",
        innerType: shape[t],
      });
    }
  }
  return o8(t, {
    ...t._zod.def,
    shape: i,
    checks: [],
  });
}
export function QH(e, t = 0) {
  for (let n = t; n < e.issues.length; n++) {
    if (e.issues[n]?.continue !== true) {
      return true;
    }
  }
  return false;
}
export function lQ(e, t) {
  return t.map((t) => {
    t.path ?? (t.path = []);
    t.path.unshift(e);
    return t;
  });
}
function E(e) {
  if (typeof e === "string") {
    return e;
  }
  return e?.message;
}
export function iR(e, t, n) {
  let r = {
    ...e,
    path: e.path ?? [],
  };
  if (!e.message) {
    r.message =
      E(e.inst?._zod.def?.error?.(e)) ??
      E(t?.error?.(e)) ??
      E(n.customError?.(e)) ??
      E(n.localeError?.(e)) ??
      "Invalid input";
  }
  delete r.inst;
  delete r.continue;
  if (!t?.reportInput) {
    delete r.input;
  }
  return r;
}
export function Rc(e) {
  if (Array.isArray(e)) {
    return "array";
  }
  if (typeof e === "string") {
    return "string";
  }
  return "unknown";
}
export function sn(...e) {
  let [t, input, inst] = e;
  if (typeof t === "string") {
    return {
      message: t,
      code: "custom",
      input,
      inst,
    };
  }
  return {
    ...t,
  };
}

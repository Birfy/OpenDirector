import a from "EkZ";
import s from "KhF";
import i from "BMb";
export function KW(e) {
  return !!e._zod;
}
export function t9(e) {
  let t = Object.values(e);
  if (t.length === 0) {
    return s.Ik({});
  }
  let r = t.every(KW);
  let i = t.every((e) => !KW(e));
  if (r) {
    return s.Ik(e);
  }
  if (i) {
    return a.Ik(e);
  }
  throw Error("Mixed Zod versions detected in object shape.");
}
export function xL(e, t) {
  if (KW(e)) {
    return i.xL(e, t);
  }
  return e.safeParse(t);
}
export async function bp(e, t) {
  if (KW(e)) {
    return await i.bp(e, t);
  }
  return await e.safeParseAsync(t);
}
export function BW(e) {
  let t;
  if (e && (t = KW(e) ? e._zod?.def?.shape : e.shape)) {
    if (typeof t === "function") {
      try {
        return t();
      } catch {
        return;
      }
    }
    return t;
  }
}
export function _G(e) {
  if (e) {
    if (typeof e === "object" && !e._def && !e._zod) {
      let t = Object.values(e);
      if (
        t.length > 0 &&
        t.every(
          (e) =>
            typeof e === "object" &&
            e !== null &&
            (e._def !== undefined ||
              e._zod !== undefined ||
              typeof e.parse === "function"),
        )
      ) {
        return t9(e);
      }
    }
    if (KW(e)) {
      let t = e._zod?.def;
      if (t && (t.type === "object" || t.shape !== undefined)) {
        return e;
      }
    } else if (e.shape !== undefined) {
      return e;
    }
  }
}
export function t1(e) {
  if (e && typeof e === "object") {
    if ("message" in e && typeof e.message === "string") {
      return e.message;
    }
    if ("issues" in e && Array.isArray(e.issues) && e.issues.length > 0) {
      let t = e.issues[0];
      if (t && typeof t === "object" && "message" in t) {
        return String(t.message);
      }
    }
    try {
      return JSON.stringify(e);
    } catch {}
  }
  return String(e);
}
export function cg(e) {
  return e.description;
}
export function wA(e) {
  if (KW(e)) {
    return e._zod?.def?.type === "optional";
  }
  if (typeof e.isOptional === "function") {
    return e.isOptional();
  }
  return e._def?.typeName === "ZodOptional";
}
export function Lm(e) {
  if (KW(e)) {
    let t = e._zod?.def;
    if (t) {
      if (t.value !== undefined) {
        return t.value;
      }
      if (Array.isArray(t.values) && t.values.length > 0) {
        return t.values[0];
      }
    }
  }
  let e__def = e._def;
  if (e__def) {
    if (e__def.value !== undefined) {
      return e__def.value;
    }
    if (Array.isArray(e__def.values) && e__def.values.length > 0) {
      return e__def.values[0];
    }
  }
  let e_value = e.value;
  if (e_value !== undefined) {
    return e_value;
  }
}

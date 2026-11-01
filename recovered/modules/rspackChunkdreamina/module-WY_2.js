const n = new Set(
  Object.values(require("CR").Q).filter((e) => typeof e === "number"),
);
export function vw(e) {
  const t = typeof e === "string" && e.trim() !== "" ? Number(e) : e;
  if (typeof t === "number" && n.has(t)) {
    return t;
  }
}
function a(e) {
  return {
    kind: "failure",
    errorCode: vw(e.error_code),
    errorMessage: [
      e.errmsg,
      e.error_message,
      e.errorMessage,
      e.error,
      e.message,
    ].find((e) => typeof e === "string" && e !== ""),
  };
}
const o = {
  stream_error: (e) => a(e),
  stream_complete: (e) => {
    if (e.success === false) {
      return a(e);
    }
    return {
      kind: "success",
    };
  },
};
export function Yg(e) {
  let t;
  const i = ((e) => {
    try {
      const t = JSON.parse(e);
      if (
        typeof t === "object" &&
        t !== null &&
        !Array.isArray(t) &&
        "type" in t &&
        typeof t.type === "string"
      ) {
        return t;
      }
      return undefined;
    } catch (e) {
      return;
    }
  })(e);
  if (i) {
    if ((t = o[i.type]) == null) {
      return undefined;
    }
    return t.call(o, i);
  }
}
export function lC(e) {
  return (e == null ? undefined : e.kind) === "failure";
}
export function Dx(e) {
  let t;
  const i = e.map((e) => Yg(e.data)).filter((e) => e !== undefined);
  const n = i.filter(lC);
  if (n.length > 0) {
    if ((t = n.find((e) => e.errorCode !== undefined)) != null) {
      return t;
    }
    return n[0];
  }
  return i.find((e) => e.kind === "success");
}

export function u4(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
export function on(e, t) {
  const i = e[t];
  if (typeof i === "string") {
    return i;
  }
}
export function Uf(e, t) {
  const i = e[t];
  if (typeof i === "number") {
    return i;
  }
}
export function Tk(e, t) {
  const i = e[t];
  if (typeof i === "boolean") {
    return i;
  }
}
export function gs(e, t) {
  const i = e[t];
  if (u4(i)) {
    return i;
  }
}
export function dQ(e, t) {
  const i = e[t];
  if (Array.isArray(i)) {
    return i.filter((e) => typeof e === "string");
  }
}
export function Lx(e) {
  return Object.fromEntries(
    Object.entries(e).filter((e) => {
      var [, t] = e;
      return t !== undefined;
    }),
  );
}
export function DO(e, t) {
  return Lx(
    Object.fromEntries(
      Object.entries(t).map((t) => {
        var [i, r] = t;
        return [i, r(e)];
      }),
    ),
  );
}

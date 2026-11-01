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
export function h(e, t) {
  const i = e[t];
  if (u4(i)) {
    const n = Object.entries(i).filter((e) => typeof e[1] === "string");
    if (n.length) {
      return Object.fromEntries(n);
    }
    return undefined;
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

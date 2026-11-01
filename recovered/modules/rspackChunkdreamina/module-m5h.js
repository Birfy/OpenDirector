export var vj = (e, t, r) => {
  if (e == null) {
    return undefined;
  }
  return e.find((e) => e.pid.includes(t) && e.theme === r && e.enable);
};
export var CG = (e, t, r) => {
  if (vj(e, t, r)) {
    return vj(e, t, "light");
  }
};
export var ue = (e, t, r) => {
  if (t) {
    if (e == null) {
      return undefined;
    }
    return e.find(
      (e) =>
        e.enable && e.theme === r && e.pid.some((e) => !!e && t.includes(e)),
    );
  }
};

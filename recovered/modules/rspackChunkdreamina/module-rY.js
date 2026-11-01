export var vw = [-8, 4, -22, 8, -8, 4, -7, 4, -8, 8, -22, 4];
export var v5 = [-8, 5, -8, 5, -8, 4, -8, 4, -8, 5, -8, 5];
export function tH(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (n) {
    return 0;
  }
  const o = t ? vw : v5;
  return o[e % o.length];
}

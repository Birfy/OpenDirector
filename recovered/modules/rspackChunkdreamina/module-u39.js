export function q(e, t) {
  const { x, y } = e;
  const { x: x_1, y: y_1 } = t;
  const k = (y_1 - y) / (x_1 - x);
  return {
    k,
    b: y - k * x,
  };
}

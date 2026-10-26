export function ru(e) {
  return e.map((e) => 1 << e).reduce((acc, item) => acc + item);
}
export function gs() {
  return ru([0, 1]);
}

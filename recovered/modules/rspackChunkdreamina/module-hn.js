export function A(e, t) {
  const n = {
    ...e,
  };
  t.forEach((e) => {
    if (e in n) {
      delete n[e];
    }
  });
  return n;
}

import r from "oa";
export function A(e, t) {
  let n = r._({}, e);
  t.forEach((e) => {
    if (e in n) {
      delete n[e];
    }
  });
  return n;
}

import a from "QD";
export function W(e) {
  const t = a.createHash("md5");
  t.update(e);
  return t.digest("hex");
}

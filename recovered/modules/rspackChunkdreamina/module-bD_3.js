export function F(e) {
  if (!(e == null ? undefined : e.length)) {
    return 0;
  }
  const t = new Set();
  for (const i of e) {
    if (i.materialType === "subject") {
      let a;
      const n = (a = i.subjectData) == null ? undefined : a.subjectId;
      if (n) {
        t.add(n);
      }
    }
  }
  return t.size;
}

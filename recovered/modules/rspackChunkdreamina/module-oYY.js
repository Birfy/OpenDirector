import { h } from "./module-YI.js";
export function x(e, t) {
  const i = {};
  const n = (t == null ? undefined : t.metaList) || [];
  const a = (t == null ? undefined : t.materialList) || [];
  if (n.length === 0) {
    i.isAddTempSubject = 0;
    i.isAddSubject = 0;
    i.isAddOfficialSubject = 0;
    i.subjectId = undefined;
    e.setParams(i);
    return;
  }
  const o = n.some((e) => e.metaType === "subject");
  const l = n.some((e) => e.metaType === "image");
  i.isAddSubject = +!!o;
  i.isAddTempSubject = +!!l;
  const s = [];
  let u = false;
  n.forEach((e) => {
    if (e.metaType === "subject" && e.materialRef !== undefined) {
      var t;
      var i;
      var n = a[e.materialRef.materialIdx];
      if (h(n == null ? undefined : n.subjectData)) {
        u = true;
      }
      if (n == null || (t = n.subjectData) == null ? undefined : t.subjectId) {
        s.push(
          n == null || (i = n.subjectData) == null ? undefined : i.subjectId,
        );
      }
    }
  });
  i.subjectId = s.length > 0 ? s.join(",") : undefined;
  i.isAddOfficialSubject = +!!u;
  e.setParams(i);
}

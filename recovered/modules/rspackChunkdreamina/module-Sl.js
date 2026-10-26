import { h } from "./module-YI.js";
export function v(e, t) {
  const i = {};
  i.isAddTempSubject = 0;
  i.isAddSubject = 0;
  i.isAddOfficialSubject = 0;
  i.subjectId = undefined;
  if (!t) {
    return void e.setParams(i);
  }
  const n = (p = t.videoGenInputs) == null ? undefined : p[0];
  const a = n == null ? undefined : n.unifiedEditInput;
  const o = a == null ? undefined : a.metaList;
  if (o && o.length > 0) {
    const l = (a == null ? undefined : a.materialList) || [];
    const s = o.some((e) => e.metaType === "subject");
    const u = o.some((e) => e.metaType !== "text" && e.metaType !== "subject");
    i.isAddSubject = +!!s;
    i.isAddTempSubject = +!!u;
    const d = [];
    let c = false;
    for (const m of o) {
      if (m.metaType === "subject" && m.materialRef !== undefined) {
        var p;
        let v;
        const f = l[m.materialRef.materialIdx];
        if (h(f == null ? undefined : f.subjectData)) {
          c = true;
        }
        const g =
          f == null || (v = f.subjectData) == null ? undefined : v.subjectId;
        if (g) {
          d.push(g);
        }
      }
    }
    i.subjectId = d.length > 0 ? d.join(",") : undefined;
    i.isAddOfficialSubject = +!!c;
  }
  e.setParams(i);
}

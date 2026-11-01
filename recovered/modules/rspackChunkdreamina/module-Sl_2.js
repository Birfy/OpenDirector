import { h } from "./module-YI_2.js";
export function v(e, t) {
  const i = {};
  i.isAddTempSubject = 0;
  i.isAddSubject = 0;
  i.isAddOfficialSubject = 0;
  i.subjectId = undefined;
  if (!t) {
    return void e.setParams(i);
  }
  const n = (v = t.videoGenInputs) == null ? undefined : v[0];
  const r = n == null ? undefined : n.unifiedEditInput;
  const o = r == null ? undefined : r.metaList;
  if (o && o.length > 0) {
    const l = (r == null ? undefined : r.materialList) || [];
    const d = o.some((e) => e.metaType === "subject");
    const u = o.some((e) => e.metaType !== "text" && e.metaType !== "subject");
    i.isAddSubject = +!!d;
    i.isAddTempSubject = +!!u;
    const s = [];
    let c = false;
    for (const m of o) {
      if (m.metaType === "subject" && m.materialRef !== undefined) {
        var v;
        let p;
        const f = l[m.materialRef.materialIdx];
        if (h(f == null ? undefined : f.subjectData)) {
          c = true;
        }
        const g =
          f == null || (p = f.subjectData) == null ? undefined : p.subjectId;
        if (g) {
          s.push(g);
        }
      }
    }
    i.subjectId = s.length > 0 ? s.join(",") : undefined;
    i.isAddOfficialSubject = +!!c;
  }
  e.setParams(i);
}

import i from "YI";
export function z(e, t) {
  let r;
  const s = {};
  s.isAddTempSubject = 0;
  s.isAddSubject = 0;
  s.isAddOfficialSubject = 0;
  s.subjectId = undefined;
  if (!((r = t.taskData) == null ? undefined : r.userMessage)) {
    return void e.setParams(s);
  }
  const { referenceInfo } = t.taskData.userMessage;
  if (!(referenceInfo == null ? undefined : referenceInfo.length)) {
    return void e.setParams(s);
  }
  const n = referenceInfo.some((e) => {
    var t;
    var r;
    return (
      ((r = e.mention) == null || (t = r.material) == null
        ? undefined
        : t.materialType) === "subject"
    );
  });
  const o = referenceInfo.some((e) => {
    var t;
    var r;
    var i =
      (r = e.mention) == null || (t = r.material) == null
        ? undefined
        : t.materialType;
    return i !== undefined && i !== "subject";
  });
  s.isAddSubject = +!!n;
  s.isAddTempSubject = +!!o;
  const l = [];
  let d = false;
  referenceInfo.forEach((e) => {
    var t;
    var r = (t = e.mention) == null ? undefined : t.material;
    if (
      (r == null ? undefined : r.materialType) === "subject" &&
      r.subjectData
    ) {
      if (i.h(r.subjectData)) {
        d = true;
      }
      l.push(r.subjectData.subjectId);
    }
  });
  s.subjectId = l.length > 0 ? l.join(",") : undefined;
  s.isAddOfficialSubject = +!!d;
  e.setParams(s);
}

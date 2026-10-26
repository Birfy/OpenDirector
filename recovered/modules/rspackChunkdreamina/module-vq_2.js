import a from "Qey";
import { e as e_1 } from "./module-xI_4.js";
export function G(e) {
  const { materialList, metaList } = e;
  const r = {};
  materialList.forEach((e, t) => {
    if (e.materialType !== "subject") {
      var i;
      var a;
      ((a = r[(i = e.materialType)]) != null ? a : (r[i] = [])).push(t);
    }
  });
  const o = {};
  Object.entries(r).forEach((e) => {
    var [t, i] = e;
    i.forEach((e, i) => {
      var r;
      o[e] = a.Ay.t(
        "video_unified_edit_".concat(t, "_index"),
        {
          string: i + 1,
        },
        "".concat((r = e_1[t]) != null ? r : t, " ").concat(i + 1),
      );
    });
  });
  return metaList
    .map((e) => {
      if (e.metaType === "text") {
        if ((a = e.text) != null) {
          return a;
        }
        return "";
      }
      if (e.materialRef === undefined) {
        return "";
      }
      var i;
      var a;
      var n;
      var r;
      var { materialIdx } = e.materialRef;
      if (materialIdx < 0 || materialIdx >= materialList.length) {
        return "";
      }
      var d = materialList[materialIdx];
      if (d.materialType === "subject") {
        if (
          (n = (r = d.subjectData) == null ? undefined : r.content.name) != null
        ) {
          return n;
        }
        return "";
      }
      if ((i = o[materialIdx]) != null) {
        return i;
      }
      return "";
    })
    .join("");
}

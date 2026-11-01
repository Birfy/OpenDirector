import r from "Qey";
import { e as e_1 } from "./module-xI_2.js";
export function G(e) {
  const { materialList, metaList } = e;
  const a = {};
  materialList.forEach((e, t) => {
    if (e.materialType !== "subject") {
      var i;
      var r;
      ((r = a[(i = e.materialType)]) != null ? r : (a[i] = [])).push(t);
    }
  });
  const o = {};
  Object.entries(a).forEach((e) => {
    var [t, i] = e;
    i.forEach((e, i) => {
      var a;
      o[e] = r.Ay.t(
        "video_unified_edit_".concat(t, "_index"),
        {
          string: i + 1,
        },
        "".concat((a = e_1[t]) != null ? a : t, " ").concat(i + 1),
      );
    });
  });
  return metaList
    .map((e) => {
      if (e.metaType === "text") {
        if ((r = e.text) != null) {
          return r;
        }
        return "";
      }
      if (e.materialRef === undefined) {
        return "";
      }
      var i;
      var r;
      var n;
      var a;
      var { materialIdx } = e.materialRef;
      if (materialIdx < 0 || materialIdx >= materialList.length) {
        return "";
      }
      var s = materialList[materialIdx];
      if (s.materialType === "subject") {
        if (
          (n = (a = s.subjectData) == null ? undefined : a.content.name) != null
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

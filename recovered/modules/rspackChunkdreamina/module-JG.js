import r from "gG";
import { j } from "./module-QPN.js";
export function U(e, t, i) {
  const { materialList, metaList } = t;
  const resourceByMaterialIndex = materialList.map((t) => j(e, t, i));
  const references = resourceByMaterialIndex.filter((e) => e !== undefined);
  const promptContents = metaList
    .map((e) => {
      if (e.metaType === "text") {
        var t;
        return {
          type: "text",
          text: (t = e.text) != null ? t : "",
        };
      }
      if (e.metaType === "subject") {
        var i;
        var subject = e.materialRef
          ? (i = materialList.at(e.materialRef.materialIdx)) == null
            ? undefined
            : i.subjectData
          : undefined;
        if (!subject) {
          return;
        }
        return {
          type: "subject",
          id: r.K(subject),
          subject,
        };
      }
      var s = e.materialRef
        ? resourceByMaterialIndex.at(e.materialRef.materialIdx)
        : undefined;
      if (s) {
        return {
          type: s.type,
          id: s.id,
        };
      }
    })
    .filter((e) => e !== undefined);
  return {
    resourceByMaterialIndex,
    references,
    promptContents,
  };
}

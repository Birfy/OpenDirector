import r from "oa";
import o from "bk";
import n from "gG";
import { Q } from "./module-net.js";
import s from "CoI";
import { s as s_1 } from "./module-sqi.js";
export function E(e, t) {
  const { references, promptContents } = e;
  const u = new Set(t.acceptedResourceTypes);
  const d = references.filter((e) => u.has(e.type));
  const materialIndexByReferenceId = new Map(d.map((e, t) => [e.id, t]));
  const v = new Set();
  const _ = promptContents
    .flatMap((e) => {
      if (e.type === "subject") {
        return [e.subject];
      }
      return [];
    })
    .filter((e) => {
      var t = n.K(e);
      return !v.has(t) && (v.add(t), true);
    });
  const materialList = [
    ...d.map((e) => {
      if (e.type === "image") {
        return {
          materialType: "image",
          imageInfo: o._(r._({}, s.q(e)), {
            file: e.file,
          }),
        };
      }
      if (e.type === "video") {
        return {
          materialType: "video",
          videoInfo: o._(r._({}, s_1(e)), {
            file: e.file,
          }),
        };
      }
      return {
        materialType: "audio",
        audioInfo: o._(r._({}, Q(e)), {
          file: e.file,
        }),
      };
    }),
    ..._.map((subjectData) => ({
      materialType: "subject",
      subjectData,
    })),
  ];
  const metaList = promptContents.map((e) => {
    var t;
    if (e.type === "text") {
      return {
        metaType: "text",
        text: e.text,
      };
    }
    if (e.type === "subject") {
      return {
        metaType: "subject",
        materialRef: {
          materialIdx: materialList.findIndex(
            (t) => t.subjectData && n.K(t.subjectData) === e.id,
          ),
        },
      };
    }
    return {
      metaType: e.type,
      materialRef: {
        materialIdx:
          (t = materialIndexByReferenceId.get(e.id)) != null ? t : -1,
      },
    };
  });
  return {
    unifiedEditInput: {
      materialList,
      metaList,
    },
    materialIndexByReferenceId,
  };
}

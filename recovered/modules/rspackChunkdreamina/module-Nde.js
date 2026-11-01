import a from "SR";
import i from "K4";
import n from "rGr";
import o from "gfi";
import s from "at";
import l from "gG";
import c from "f3";
import d from "HA";
import u from "yzB";
import { H } from "./module-zGJk.js";
import { B } from "./module-VHd.js";
export function S(e, t, r) {
  return t.map((t) => {
    if (
      ((S = t.mention) == null || (f = S.material) == null
        ? undefined
        : f.materialType) === "subject"
    ) {
      var m = H(t.mention);
      if (m) {
        var subject = B(m);
        return {
          type: "subject",
          id: l.K(subject),
          subject,
        };
      }
    }
    var _ = t.file || u.X(t.mention);
    if (_) {
      var v;
      var f;
      var S;
      var resource;
      var M;
      var {
        uri,
        url = "",
        type,
        id,
        vid,
        metadata,
        fileName,
        file_description,
      } = _;
      if (id && r.has(id)) {
        return {
          type: "reference-resource",
          resource: r.get(id),
        };
      }
      if (type === a.NuroFileType.video) {
        resource = e.createInstance(i.p, {
          uri: vid,
          url,
        });
      } else if (type === a.NuroFileType.audio) {
        resource = e.createInstance(n.e, {
          uri: vid,
          url,
        });
      } else if (
        type === a.NuroFileType.pdf ||
        type === a.NuroFileType.docx ||
        type === a.NuroFileType.markdown
      ) {
        var G = o.TE({
          nuroFileType: type,
        });
        resource = e.createInstance(G, {
          uri: uri != null ? uri : "",
          url,
          name: fileName || file_description,
        });
      } else {
        resource = e.createInstance(s.Vl, {
          uri,
          url,
          aigcItemId:
            metadata == null || (M = metadata.image_metadata) == null
              ? undefined
              : M.item_id,
        });
      }
      return {
        type: "reference-resource",
        resource,
      };
    }
    if (t.extraInfo) {
      try {
        var w;
        var j;
        var D = d.E(t.extraInfo);
        if (!D) {
          return {
            type: "text",
            text: (j = t.text) != null ? j : "",
          };
        }
        if (D.type === "frame") {
          return {
            type: "reference-frame",
            layerId: D.layerId,
            title: D.title,
          };
        }
        return {
          type: "reference-text",
          layerId: D.layerId,
          text: D.title,
        };
      } catch (e) {
        return {
          type: "text",
          text: (w = t.text) != null ? w : "",
        };
      }
    }
    if (t.skill) {
      var { skillId, skillName, skillSource } = t.skill;
      return {
        type: "skill",
        id: skillId != null ? skillId : "",
        displayName: skillName != null ? skillName : "",
        source:
          skillSource === c.fc.User ||
          skillSource === c.fc.Platform ||
          skillSource === c.fc.Market
            ? skillSource
            : c.fc.Platform,
      };
    }
    return {
      type: "text",
      text: (v = t.text) != null ? v : "",
    };
  });
}

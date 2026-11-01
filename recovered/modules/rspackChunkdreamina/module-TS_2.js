import o from "Ut";
import r from "./module-Rd.js";
export const convertUnifiedEditInputAgentToDraft = function (e) {
  let t;
  let i;
  let n;
  let s;
  let d;
  let l;
  let p;
  if (e === undefined) {
    return {
      data: undefined,
    };
  }
  let u = new o.DAUnifiedEditInput();
  let c = (t = e.materialList) != null ? t : [];
  if (c.length === 0) {
    return {
      msg: "unifiedEditInput.materialList is required",
    };
  }
  let m = [];
  for (let e = 0; e < c.length; e++) {
    let t = c[e];
    if (t.materialType === undefined) {
      return {
        msg: `unifiedEditInput.materialList[${e}].materialType is required`,
      };
    }
    let s = t.materialType;
    if (
      s != o.DAUnifiedEditMaterialType.Subject &&
      (t.materialId === undefined || t.materialId === "")
    ) {
      return {
        msg: `unifiedEditInput.materialList[${e}].materialId is required`,
      };
    }
    let d = new o.DAUnifiedEditMaterial();
    d.materialType = s;
    if (s === o.DAUnifiedEditMaterialType.Image) {
      let e = new o.DAImageResource();
      e.uri = t.materialId;
      e.sourceFrom = o.DAResourceSourceFrom.upload;
      if (
        ((n = (i = t.imageInfo) == null ? undefined : i.aigcImage) == null
          ? undefined
          : n.itemId) != undefined &&
        t.imageInfo.aigcImage.itemId != 0
      ) {
        let i = new o.DAAIGCImage();
        i.itemId = r.Int.toInt64(t.imageInfo.aigcImage.itemId);
        e.aigcImage = i;
      }
      d.imageInfo = e;
    } else if (s === o.DAUnifiedEditMaterialType.Video) {
      let e = new o.DAVideoResource();
      e.vid = t.materialId;
      e.sourceFrom = o.DAResourceSourceFrom.upload;
      d.videoInfo = e;
    } else if (s === o.DAUnifiedEditMaterialType.Audio) {
      let e = new o.DAAudioResource();
      e.vid = t.materialId;
      e.sourceFrom = o.DAResourceSourceFrom.upload;
      d.audioInfo = e;
    } else {
      if (s !== o.DAUnifiedEditMaterialType.Subject) {
        return {
          msg: `unifiedEditInput.materialList[${e}].materialType is invalid`,
        };
      }
      if (t.subjectData === undefined) {
        return {
          msg: `unifiedEditInput.materialList[${e}].subjectData is required`,
        };
      }
      let i = ((e) => {
        let t;
        let i;
        let r;
        if (e.uid === "" && e.subjectId === "" && e.dataId === "") {
          return;
        }
        let n = new o.DASubjectData();
        n.uid = e.uid;
        n.subjectId = e.subjectId;
        n.dataId = e.dataId;
        if (e.content != undefined) {
          let s = new o.DASubjectContent();
          s.name = e.content.name;
          if (e.content.mainImage != undefined) {
            s.mainImage = a(e.content.mainImage);
          }
          if (e.content.auxiliaryImages != undefined) {
            s.auxiliaryImages = e.content.auxiliaryImages.map((e) => a(e));
          }
          if (e.content.videoInfo != undefined) {
            let i = new o.DAVideoResource();
            i.vid = (t = e.content.videoInfo.vid) != null ? t : "";
            i.sourceFrom = o.DAResourceSourceFrom.upload;
            s.videoInfo = i;
          }
          if (e.content.audioInfo != undefined) {
            let t = new o.DAAudioResource();
            t.vid = (i = e.content.audioInfo.vid) != null ? i : "";
            t.sourceFrom = o.DAResourceSourceFrom.upload;
            s.audioInfo = t;
          }
          if (e.content.selectedVoice != undefined) {
            let t = new o.DAAudioResource();
            t.vid = (r = e.content.selectedVoice.vid) != null ? r : "";
            t.sourceFrom = o.DAResourceSourceFrom.upload;
            let i = new o.DAVoiceResource();
            i.audioInfo = t;
            i.source = o.VoiceSourceType.VoiceSourceTypeUpload;
            s.selectedVoice = i;
          }
          n.content = s;
        }
        n.subjectControl = new o.DASubjectDataControl();
        return n;
      })(t.subjectData);
      if (i === undefined) {
        return {
          msg: `unifiedEditInput.materialList[${e}].subjectData is invalid`,
        };
      }
      d.subjectData = i;
    }
    m.push(d);
  }
  u.materialList = m;
  if (((s = e.extendInput) == null ? undefined : s.enable) === true) {
    let t = e.extendInput.extendFromMaterialIdx;
    if (t === undefined) {
      return {
        msg: "unifiedEditInput.extendInput.extendFromMaterialIdx is required",
      };
    }
    if (t < 0 || t >= c.length) {
      return {
        msg: "unifiedEditInput.extendInput.extendFromMaterialIdx out of range",
      };
    }
    if (c[t].materialType != o.DAUnifiedEditMaterialType.Video) {
      return {
        msg: "unifiedEditInput.extendInput.extendFromMaterialIdx must refer to video material",
      };
    }
    let i = new o.DAUnifiedEditExtendInput();
    i.enable = true;
    i.extendFromMaterialIdx = t;
    u.extendInput = i;
  }
  if (((d = e.editInput) == null ? undefined : d.enable) === true) {
    let t = e.editInput.editFromMaterialIdx;
    if (t === undefined) {
      return {
        msg: "unifiedEditInput.editInput.editFromMaterialIdx is required",
      };
    }
    if (t < 0 || t >= c.length) {
      return {
        msg: "unifiedEditInput.editInput.editFromMaterialIdx out of range",
      };
    }
    if (c[t].materialType != o.DAUnifiedEditMaterialType.Video) {
      return {
        msg: "unifiedEditInput.editInput.editFromMaterialIdx must refer to video material",
      };
    }
    let i = new o.DAUnifiedEditEditInput();
    i.enable = true;
    i.editFromMaterialIdx = t;
    i.startTimestampMs = e.editInput.startTimestampMs;
    i.endTimestampMs = e.editInput.endTimestampMs;
    u.editInput = i;
  }
  let v = (l = e.metaList) != null ? l : [];
  if (v.length === 0) {
    return {
      msg: "unifiedEditInput.metaList is required",
    };
  }
  let g = [];
  let f = false;
  for (let e = 0; e < v.length; e++) {
    let t = v[e];
    let i = new o.DAUnifiedEditMeta();
    if (t.metaType === undefined) {
      return {
        msg: `unifiedEditInput.metaList[${e}].metaType is required`,
      };
    }
    i.metaType = t.metaType;
    if (i.metaType === o.DAUnifiedEditMaterialType.Text) {
      i.text = (p = t.text) != null ? p : "";
      f = true;
      g.push(i);
      continue;
    }
    if (t.materialIndex === undefined) {
      return {
        msg: `unifiedEditInput.metaList[${e}].materialIndex is required`,
      };
    }
    if (t.materialIndex < 0 || t.materialIndex >= c.length) {
      return {
        msg: `unifiedEditInput.metaList[${e}].materialIndex out of range`,
      };
    }
    let r = new o.DAUnifiedEditMaterialRef();
    r.materialIdx = t.materialIndex;
    i.materialRef = r;
    g.push(i);
  }
  if (f) {
    u.metaList = g;
    return {
      data: u,
    };
  }
  return {
    msg: "unifiedEditInput.metaList requires at least one text meta",
  };
};
function a(e) {
  let t;
  let i;
  let a = new o.DAImageResource();
  a.uri = (t = e.imageUri) != null ? t : "";
  a.sourceFrom = o.DAResourceSourceFrom.upload;
  if (
    ((i = e.aigcImage) == null ? undefined : i.itemId) != undefined &&
    e.aigcImage.itemId != 0
  ) {
    let t = new o.DAAIGCImage();
    t.itemId = r.Int.toInt64(e.aigcImage.itemId);
    a.aigcImage = t;
  }
  return a;
}

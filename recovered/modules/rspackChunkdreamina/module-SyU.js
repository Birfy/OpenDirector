import r from "oa";
import { U6, fH } from "./module-OVQ.js";
import { on, u4 } from "./module-PSG.js";
import { xT } from "./module-Z7t.js";
export function Yk(e, t) {
  return (e == null ? undefined : e.assetType) === t;
}
export function bz(e) {
  if (xT(e.assetType) && Yk(e.summaryData, e.assetType)) {
    return e.summaryData;
  }
}
export function v_(e) {
  let t;
  let i;
  if ((t = e.uniqueKey) != null) {
    return t;
  }
  if ((i = e.idModel) == null) {
    return undefined;
  }
  return i.submitId;
}
export function Im(e) {
  if (u4(e == null ? undefined : e.searchRecord)) {
    return e.searchRecord;
  }
}
export function jG(e, t) {
  if (e) {
    return t.map((t) => on(e, t)).find((e) => !!e);
  }
}
export function F_(e, t) {
  if (!t || !v_(t)) {
    return false;
  }
  if (e === "document") {
    return true;
  }
  if (!Array.isArray(t.itemList) || t.itemList.length === 0) {
    return false;
  }
  if (e === "video") {
    let i;
    return !!((i = t.video) != null ? i : t.originVideo);
  }
  return true;
}
export function oo(e) {
  if (U6(e.detailData)) {
    return e.detailData;
  }
}
export function Br(e) {
  let t;
  if ((t = oo(e)) == null) {
    return undefined;
  }
  return t.aigcData;
}
export function dH(e) {
  let t;
  let i;
  let r;
  let s;
  let n;
  let o;
  let a;
  const u = oo(e);
  if (
    (t =
      (i =
        (r =
          (s = u == null ? undefined : u.uniqueKey) != null
            ? s
            : u == null || (n = u.aigcData) == null
              ? undefined
              : n.uniqueKey) != null
          ? r
          : u == null
            ? undefined
            : u.submitId) != null
        ? i
        : (o = e.sourceRef) == null
          ? undefined
          : o.uniqueKey) != null
  ) {
    return t;
  }
  if ((a = e.sourceRef) == null) {
    return undefined;
  }
  return a.submitId;
}
export function MS(e) {
  if (e) {
    if (fH(e)) {
      return Br(e);
    }
    const t = bz(e);
    const i = t == null ? undefined : t.aigcData;
    if (i && v_(i)) {
      return i;
    }
    return undefined;
  }
}
export function Ok(e) {
  if (e) {
    if (fH(e)) {
      return dH(e);
    }
    let t;
    let i;
    let r;
    const n = MS(e);
    if (n) {
      return v_(n);
    }
    if ((t = (i = e.sourceRef) == null ? undefined : i.uniqueKey) != null) {
      return t;
    }
    if ((r = e.sourceRef) == null) {
      return undefined;
    }
    return r.submitId;
  }
}
export function M8(e, t) {
  if (fH(e)) {
    var i;
    var r;
    var n;
    var o;
    var a;
    var u;
    let d;
    let c;
    let h;
    let _;
    let p;
    let m;
    let f;
    const y = oo(e);
    if (y) {
      return (
        y.historyRecordId === t ||
        y.submitId === t ||
        ((d = e.sourceRef) == null ? undefined : d.historyRecordId) === t ||
        ((c = e.sourceRef) == null ? undefined : c.recordId) === t ||
        ((h = e.sourceRef) == null ? undefined : h.submitId) === t ||
        ((p = y.aigcData) == null || (_ = p.idModel) == null
          ? undefined
          : _.recordId) === t ||
        ((f = y.aigcData) == null || (m = f.idModel) == null
          ? undefined
          : m.submitId) === t
      );
    }
  }
  const S = MS(e);
  const I = S ? v_(S) : undefined;
  return !!(
    ((i = e.sourceRef) == null ? undefined : i.historyRecordId) === t ||
    ((r = e.sourceRef) == null ? undefined : r.recordId) === t ||
    ((n = e.sourceRef) == null ? undefined : n.submitId) === t ||
    ((o = e.sourceRef) == null ? undefined : o.uniqueKey) === t ||
    (S &&
      (S.historyRecordId === t ||
        ((a = S.idModel) == null ? undefined : a.recordId) === t ||
        ((u = S.idModel) == null ? undefined : u.submitId) === t ||
        I === t))
  );
}
export function jj(assetType, aigcData) {
  if (F_(assetType, aigcData)) {
    let i;
    let s;
    let n;
    let o;
    const uniqueKey = v_(aigcData);
    const historyRecordId =
      (i = aigcData.historyRecordId) != null
        ? i
        : (s = aigcData.idModel) == null
          ? undefined
          : s.recordId;
    const submitId =
      (n = (o = aigcData.idModel) == null ? undefined : o.submitId) != null
        ? n
        : aigcData.uniqueKey;
    return r._(
      {
        assetType,
        aigcData,
        uniqueKey,
      },
      historyRecordId
        ? {
            historyRecordId,
          }
        : {},
      submitId
        ? {
            submitId,
          }
        : {},
    );
  }
}

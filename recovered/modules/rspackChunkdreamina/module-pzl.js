import { h } from "./module-uo0.js";
import { g } from "./module-AuX_2.js";
import { $ } from "./module-UR_2.js";
import { N } from "./module-pF1.js";
import { L8, gf as getDeleteGeneratedRecordDisableText } from "./module-j0.js";
const u = new Set([h.Favorites, g.Favorites]);
const l = new Set([h.Delete, g.Delete, N.Delete, h.BatchDelete]);
const d = new Set([
  h.Locate,
  g.Locate,
  h.LocateLayerPosition,
  h.LocateToOriginalPosition,
]);
export function cD(e) {
  let t;
  let i;
  let r;
  let s;
  return {
    canEdit: (t = e == null ? undefined : e.canEdit) == null || t,
    canDelete: (i = e == null ? undefined : e.canDelete) == null || i,
    canFavorite: (r = e == null ? undefined : e.canFavorite) == null || r,
    canLocate: (s = e == null ? undefined : e.canLocate) == null || s,
  };
}
export function d_(e) {
  if (e != null) {
    return String(e).trim() || undefined;
  }
}
function v(e) {
  let t;
  let i;
  return d_(
    (t = e.id) != null ? t : (i = e.commonAttr) == null ? undefined : i.id,
  );
}
export function eh(e) {
  if (!e.isTeamMode) {
    return true;
  }
  let t;
  let i;
  const r = ((e) => {
    if (
      e &&
      (!("itemList" in e) ||
        e.itemList === undefined ||
        Array.isArray(e.itemList)) &&
      ("uid" in e || "permission" in e || "itemList" in e)
    ) {
      return e;
    }
  })(e.source);
  const s = ((e) => {
    let t;
    let i;
    let r;
    let s;
    let n;
    let o;
    const { source, operation, itemId } = e;
    if (source) {
      const d = new Set(
        [
          ...((t =
            (n = source.selectedImageList) == null
              ? undefined
              : n.map((e) => d_(e.itemId))) != null
            ? t
            : []),
          ...((i =
            (o = source.selectedDocumentList) == null
              ? undefined
              : o.map((e) => {
                  var t;
                  return d_((t = e.commonAttr) == null ? undefined : t.id);
                })) != null
            ? i
            : []),
        ].filter((e) => !!e),
      );
      const _ = d_(itemId);
      const p = _
        ? ((r = source.itemList) != null ? r : []).filter((e) => v(e) === _)
        : (s = source.itemList) != null
          ? s
          : [];
      const g = (
        d.size
          ? p.filter((e) => {
              var t = v(e);
              return !!(t && d.has(t));
            })
          : p
      )
        .map((e) => e.permission)
        .filter((e) => !!e);
      if (g.length === 0 && source.permission) {
        g.push(source.permission);
      }
      if (g.length !== 0) {
        return g.every((e) => {
          var t = cD(e);
          if (operation === "delete") {
            return t.canDelete;
          }
          return t.canLocate;
        });
      }
    }
  })({
    source: r,
    operation: e.operation,
    itemId: e.itemId,
  });
  if (s !== undefined) {
    return s;
  }
  if (!r) {
    return (t = e.fallbackCanOperate) != null && t;
  }
  const n = d_(r.uid);
  if (!n) {
    return (i = e.fallbackCanOperate) == null || i;
  }
  const o = d_(e.currentUserId);
  return !!(o && o === n);
}
export function HU(e) {
  const t = {
    canDeleteGeneratedRecord: (t, itemId) => {
      var r;
      return eh({
        isTeamMode: e.getIsTeamMode(),
        currentUserId: e.getCurrentUserId(),
        source: t,
        operation: "delete",
        itemId,
        fallbackCanOperate:
          (r = e.getFallbackCanOperate) == null ? undefined : r.call(e),
      });
    },
    getDeleteGeneratedRecordDisableText,
  };
  if (e.includeLocate) {
    t.canLocateToGeneratedRecord = (t) => {
      var i;
      return eh({
        isTeamMode: e.getIsTeamMode(),
        currentUserId: e.getCurrentUserId(),
        source: t,
        operation: "locate",
        fallbackCanOperate:
          (i = e.getFallbackCanOperate) == null ? undefined : i.call(e),
      });
    };
    t.getLocateToGeneratedRecordDisableText = L8;
  }
  return t;
}
export function sB(e) {
  if (u.has(e)) {
    return "canFavorite";
  }
  if (l.has(e) || e === $.Delete) {
    return "canDelete";
  }
  if (d.has(e)) {
    return "canLocate";
  }
}
export function wq(e, t, i) {
  if (!i.isTeamMode) {
    return true;
  }
  let r;
  const s = sB(t);
  return (
    !s ||
    ((r = d_(i.itemId))
      ? e.itemList.filter((e) => {
          var t;
          var i;
          return (
            d_(
              (t = e.id) != null
                ? t
                : (i = e.commonAttr) == null
                  ? undefined
                  : i.id,
            ) === r
          );
        })
      : e.itemList
    )
      .map((e) => e.permission)
      .filter((e) => e !== undefined)
      .every((e) => cD(e)[s])
  );
}
export function LL(e, t, i) {
  return t.filter((t) => {
    if (wq(e, t, i)) {
      return true;
    }
    var r;
    var s;
    var n = sB(t);
    if (n === "canDelete") {
      return !!((r = i.operationExternalDependencies) == null
        ? undefined
        : r.canDeleteGeneratedRecord);
    }
    return (
      n === "canLocate" &&
      !!((s = i.operationExternalDependencies) == null
        ? undefined
        : s.canLocateToGeneratedRecord)
    );
  });
}

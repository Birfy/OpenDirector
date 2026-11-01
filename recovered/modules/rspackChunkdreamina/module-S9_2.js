import r from "oa";
import s from "bk";
import { xT } from "./module-Z7t.js";
import { QT } from "./module-uc.js";
export function x(e, t, favorited) {
  if (!xT(e.assetType)) {
    return s._(r._({}, e), {
      favorited,
    });
  }
  let a;
  let u;
  const l = (aigcData) => {
    var a;
    var u;
    var l;
    var d;
    var c;
    var favoriteItemIdList;
    a = e.itemLocators;
    d = ((e, t, i) => {
      if ((a = t.itemLocator) == null ? undefined : a.itemId) {
        return [t.itemLocator.itemId];
      }
      let r;
      let s;
      let n;
      var a;
      const u =
        (n =
          i == null ? undefined : i.map((e) => e.itemId).filter((e) => !!e)) !=
        null
          ? n
          : [];
      if (u.length) {
        return u;
      }
      if (
        (r =
          (s = e.itemList) == null
            ? undefined
            : s.map((e) => QT(e)).filter((e) => !!e)) != null
      ) {
        return r;
      }
      return [];
    })(aigcData, t, a);
    c =
      (u =
        (l = aigcData.assetOption) == null
          ? undefined
          : l.favoriteItemIdList) != null
        ? u
        : [];
    favoriteItemIdList = favorited
      ? Array.from(new Set([...c, ...d]))
      : c.filter((e) => !d.includes(e));
    return s._(r._({}, aigcData), {
      assetOption: s._(r._({}, aigcData.assetOption), {
        hasFavorited: !!favorited || favoriteItemIdList.length > 0,
        favoriteItemIdList,
      }),
    });
  };
  const summaryData =
    ((a = e.summaryData) == null ? undefined : a.assetType) === e.assetType &&
    e.summaryData.aigcData
      ? s._(r._({}, e.summaryData), {
          aigcData: l(e.summaryData.aigcData),
        })
      : e.summaryData;
  const detailData =
    ((u = e.detailData) == null ? undefined : u.assetType) === e.assetType &&
    e.detailData.aigcData
      ? s._(r._({}, e.detailData), {
          aigcData: l(e.detailData.aigcData),
        })
      : e.detailData;
  return s._(r._({}, e), {
    favorited,
    summaryData,
    detailData,
  });
}

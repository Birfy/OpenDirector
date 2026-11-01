import i from "oa";
import n from "bk";
import a from "SC";
const o = {
  minute: 0,
  day: 1,
  month: 2,
  quarter: 3,
  year: 4,
};
export function iu(e, t) {
  if (e.memberLimit !== t.memberLimit) {
    return e.memberLimit - t.memberLimit;
  }
  return e.productId.localeCompare(t.productId);
}
function c(e) {
  let t;
  if ((t = o[e]) != null) {
    return t;
  }
  return Number.MAX_SAFE_INTEGER;
}
export function W5(e) {
  return e
    .map((e) => {
      var t;
      var memberLimit =
        typeof (t = e.memberLimit) === "number" && Number.isFinite(t)
          ? t
          : undefined;
      if (typeof memberLimit === "number") {
        return n._(i._({}, e), {
          memberLimit,
          teamVipLevel: a.w_(e.level),
        });
      }
    })
    .filter((e) => !!(e && e.priceType === "un-auto"))
    .sort(iu);
}
export function tz(e) {
  if (e.cycleUnit === "MONTH" && e.subscribeCycle === 12) {
    return "year";
  }
  if (e.cycleUnit === "MONTH" && e.subscribeCycle === 3) {
    return "quarter";
  }
  switch (e.cycleUnit) {
    case "MINUTE":
      return "minute";
    case "DAY":
      return "day";
    case "MONTH":
    default:
      return "month";
    case "YEAR":
      return "year";
  }
}
export function to(e) {
  const t = new Map();
  W5(e).forEach((e) => {
    var r;
    var i = "".concat(tz(e), ":").concat(e.teamVipLevel);
    var n = (r = t.get(i)) != null ? r : [];
    n.push(e);
    t.set(i, n);
  });
  return Array.from(t.entries())
    .map((e) => {
      var t;
      var [groupKey, i] = e;
      var skus = [...i].sort(iu);
      var skuMatrix = skus.reduce((acc, item) => {
        var r;
        var i = tz(item);
        ((r = acc[i]) != null ? r : (acc[i] = {}))[item.memberLimit] = item;
        return acc;
      }, {});
      return {
        groupKey,
        level: (t = skus[0]) == null ? undefined : t.teamVipLevel,
        skus,
        cycles: Object.keys(skuMatrix),
        availableMemberLimits: Array.from(
          new Set(skus.map((e) => e.memberLimit)),
        ).sort((e, t) => e - t),
        skuMatrix,
      };
    })
    .sort((e, t) => {
      var r;
      var i;
      var n = c(e.cycles[0]) - c(t.cycles[0]);
      r = e.level;
      i = t.level;
      var o = r && i ? a.uf(r, i) : 0;
      return n || o || e.groupKey.localeCompare(t.groupKey);
    });
}
export function W$(e, t, r) {
  const i = e.skuMatrix[t];
  if (i) {
    const n = i[r];
    if (n) {
      return n;
    }
    const a = Object.keys(i)
      .map(Number)
      .filter((e) => e >= r)
      .sort((e, t) => e - t)[0];
    if (typeof a === "number") {
      return i[a];
    }
    return undefined;
  }
}
export function uh(e, t) {
  let r;
  const i = Object.keys((r = e.skuMatrix[t]) != null ? r : {})
    .map(Number)
    .filter((e) => Number.isFinite(e) && e > 0);
  if (i.length) {
    return Math.max(...i);
  }
}
export function Ai(e, t) {
  let r;
  const i = uh(e, t);
  if (typeof i === "number") {
    if ((r = e.skuMatrix[t]) == null) {
      return undefined;
    }
    return r[i];
  }
}

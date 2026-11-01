import i from "oa";
import n from "bk";
function a(e) {
  if (typeof e === "number" && Number.isFinite(e) && !(e < 0)) {
    return e;
  }
}
export function Mg(e) {
  if (e === undefined || e.length === 0) {
    return [];
  }
  return e.flatMap((e, t) => {
    var r;
    var i;
    var actualCredits = a(e.actualCreditAmount);
    var o = a(e.originCreditAmount);
    if (actualCredits === undefined || o === undefined || !e.title.trim()) {
      return [];
    }
    var s = Math.max(o, actualCredits);
    var c = s > actualCredits;
    if (
      Array.isArray((r = e.limitFreeType))
        ? r.length > 0
        : typeof r === "boolean"
          ? r
          : typeof r === "number"
            ? r > 0
            : typeof r === "string" &&
              r.trim() !== "" &&
              r !== "0" &&
              r !== "false"
    ) {
      i = "limit-free";
    } else if (c) {
      i = "discount";
    }
    return [
      {
        id: "".concat(e.title, ":").concat(t),
        title: e.title,
        actualCredits,
        originalCredits: c ? s : undefined,
        promotionLabel: ((e) => {
          const t = Array.isArray(e) ? e.find((e) => typeof e === "string") : e;
          if (typeof t === "string") {
            const r = t.trim();
            if (!(!r || /^(?:true|false|\d+)$/i.test(r))) {
              return r;
            }
          }
        })(e.limitFreeType),
        promotionType: i,
      },
    ];
  });
}
export function MK(e) {
  const t = new Map();
  for (const r of e) {
    let a;
    const originalCredits =
      (a = r.originalCredits) != null ? a : r.actualCredits;
    const s = t.get(r.title);
    if (!s) {
      t.set(r.title, {
        item: i._({}, r),
        originalCredits,
        allLimitFree: r.promotionType === "limit-free",
        hasSamePromotionLabel: true,
      });
      continue;
    }
    s.item.actualCredits += r.actualCredits;
    s.originalCredits += originalCredits;
    s.allLimitFree = s.allLimitFree && r.promotionType === "limit-free";
    s.hasSamePromotionLabel =
      s.hasSamePromotionLabel && s.item.promotionLabel === r.promotionLabel;
  }
  return Array.from(t.values(), (e) => {
    var t;
    var { item, originalCredits, allLimitFree, hasSamePromotionLabel } = e;
    var c = originalCredits > item.actualCredits;
    if (allLimitFree) {
      t = "limit-free";
    } else if (c) {
      t = "discount";
    }
    return n._(i._({}, item), {
      originalCredits: c ? originalCredits : undefined,
      promotionLabel:
        allLimitFree && hasSamePromotionLabel ? item.promotionLabel : undefined,
      promotionType: t,
    });
  });
}
export function mW(e, t) {
  const r = e.reduce((acc, item) => {
    var r;
    return acc + ((r = item.originalCredits) != null ? r : item.actualCredits);
  }, 0);
  if (r > t) {
    return r;
  }
}

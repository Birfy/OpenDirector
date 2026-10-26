const n = [
  "credit_count",
  "creditCount",
  "credits_amount",
  "creditsAmount",
  "credit_amount",
  "creditAmount",
];
const r = [
  "original_credit_count",
  "originalCreditCount",
  "original_credits_amount",
  "originalCreditsAmount",
  "original_credit_amount",
  "originalCreditAmount",
  "original_credits",
  "originalCredits",
];
function a(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function o(e, t) {
  if (e) {
    for (const i of t) {
      const n = e[i];
      if (typeof n === "number" && Number.isFinite(n)) {
        return n;
      }
    }
  }
}
function s(e, t) {
  if (e) {
    for (const i of t) {
      const n = e[i];
      if (typeof n === "boolean") {
        return n;
      }
    }
  }
}
function l(e, t) {
  if (e) {
    for (const i of t) {
      const n = e[i];
      if (a(n)) {
        return n;
      }
    }
  }
}
function d(e) {
  return (
    o(e, n) !== undefined ||
    o(e, r) !== undefined ||
    l(e, ["credit_display_info", "creditDisplayInfo"]) !== undefined
  );
}
function u(e, creditCount) {
  if (e) {
    let i;
    let n;
    let a;
    let d;
    const u = l(e, ["credit_display_info", "creditDisplayInfo"]);
    const actualCredits =
      (i = o(u, ["actual_credits", "actualCredits"])) != null ? i : creditCount;
    if (actualCredits !== undefined) {
      const c =
        (n = o(u, ["original_credits", "originalCredits"])) != null
          ? n
          : o(e, r);
      const originalCredits =
        c !== undefined && c > actualCredits ? c : actualCredits;
      const hasDiscount =
        originalCredits > actualCredits &&
        ((a = s(u, ["has_discount", "hasDiscount"])) == null || a);
      return {
        actualCredits,
        originalCredits,
        hasDiscount,
        discountLabel: ((e, t) => {
          if (e) {
            for (const i of t) {
              const n = e[i];
              if (typeof n === "string") {
                return n;
              }
            }
          }
        })(u, ["discount_label", "discountLabel"]),
        isFree:
          (d = s(u, ["is_free", "isFree"])) != null ? d : actualCredits <= 0,
      };
    }
  }
}
export function k(e, t) {
  let i;
  const r = a(e) ? e : undefined;
  const s = (function e(t) {
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!(i > 8)) {
      if (typeof t === "string") {
        const n = ((e) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return;
          }
        })(t);
        if (n === undefined) {
          return undefined;
        }
        return e(n, i + 1);
      }
      if (a(t)) {
        const r = l(t, ["commerce_info", "commerceInfo"]);
        if (r && d(r)) {
          return r;
        }
        if (d(t)) {
          return t;
        }
        for (const o of Object.values(t)) {
          const s = e(o, i + 1);
          if (s) {
            return s;
          }
        }
      }
    }
  })(t);
  if (!r && !s) {
    return {};
  }
  const creditCount = (i = o(r, n)) != null ? i : o(s, n);
  return {
    creditCount,
    creditDisplayInfo: (function () {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }
      const n = t.find((e) => {
        if (e == null) {
          return undefined;
        }
        return e.hasDiscount;
      });
      return n || t.find((e) => e);
    })(u(r, creditCount), u(s, creditCount)),
  };
}

export var Fu = "open_subscription_drawer";
export var ML = {
  VIPPage: "vip_page",
  Custom: "custom",
};
const o = [
  "yearly",
  "quarterly",
  "monthly",
  "oneyear",
  "onequarter",
  "onemonth",
];
const c = {
  yearly: {
    priceType: "auto",
    subscribeCycle: 12,
  },
  quarterly: {
    priceType: "auto",
    subscribeCycle: 3,
  },
  monthly: {
    priceType: "auto",
    subscribeCycle: 1,
  },
  oneyear: {
    priceType: "un-auto",
    subscribeCycle: 12,
  },
  onequarter: {
    priceType: "un-auto",
    subscribeCycle: 3,
  },
  onemonth: {
    priceType: "un-auto",
    subscribeCycle: 1,
  },
};
export var Qt = (e) => {
  var t = e == null ? undefined : e.trim();
  if (t && (t === Fu || t.startsWith("".concat(Fu, "_")))) {
    var r = t.slice(Fu.length).split("_").filter(Boolean);
    return o.find((e) => r.includes(e));
  }
};
export var Zo = (e) => {
  var t = e == null ? undefined : e.trim();
  if (t && o.includes(t)) {
    return t;
  }
};
export var MS = (e) => {
  if (e === "custom") {
    return "custom";
  }
  return "vip_page";
};
export var hU = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const r = arguments.length > 2 ? arguments[2] : undefined;
  if (r) {
    const i = c[r];
    const n = e.findIndex((e) => {
      var r;
      if ((r = e.productIds) == null) {
        return undefined;
      }
      return r.some((e) => {
        var r = t.find((t) => t.productId === e);
        return (
          (r == null ? undefined : r.priceType) === i.priceType &&
          r.subscribeCycle === i.subscribeCycle
        );
      });
    });
    if (n >= 0) {
      return n;
    }
    return undefined;
  }
};

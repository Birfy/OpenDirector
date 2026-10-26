import i from "TX";
export var j = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const r = arguments.length > 2 ? arguments[2] : undefined;
  for (const n of Array.isArray(r) ? r : [r]) {
    const a = i.hU(e, t, n);
    if (a !== undefined) {
      return {
        defaultPrice: undefined,
        defaultActiveTab: a,
        isDefaultSubscriptionTabMatched: true,
      };
    }
  }
  const o = e.findIndex((e) => {
    if (e == null) {
      return undefined;
    }
    return e.asDefault;
  });
  if (o >= 0) {
    return {
      defaultPrice: undefined,
      defaultActiveTab: o,
      isDefaultSubscriptionTabMatched: false,
    };
  }
  const s = t == null ? undefined : t.find((e) => e.asDefault);
  const c = s
    ? e.findIndex((e) => {
        var t;
        if (e == null || (t = e.productIds) == null) {
          return undefined;
        }
        return t.includes(s.productId);
      })
    : -1;
  return {
    defaultPrice: c >= 0 ? s : undefined,
    defaultActiveTab: c >= 0 ? c : 0,
    isDefaultSubscriptionTabMatched: false,
  };
};

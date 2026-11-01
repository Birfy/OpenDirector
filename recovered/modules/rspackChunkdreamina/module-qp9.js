import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import _l from "xb";
import d from "hA6";
import c from "oJV";
export var I = o.memo(function (e) {
  let u;
  const { option, className } = e;
  const l = i._(e, ["option", "className"]);
  const limitations = d.n();
  const p =
    !!(limitations == null ? undefined : limitations.trialInfo.isCreditTrial) ||
    ((u =
      limitations == null
        ? undefined
        : limitations.trialInfo.strategyFreeTrialTimes) != null
      ? u
      : 0) > 0;
  return r.jsxs(
    "div",
    n._(t._({}, l), {
      "data-commercial-status-floating": p ? "true" : undefined,
      className: _l("resolution-commercial-option-uNh3cy", className),
      children: [
        r.jsx("span", {
          className: "label-lKNNMz",
          children: option.label,
        }),
        r.jsx(c.X, {
          limitations,
          freeTrialTipClassName: "commercial-status-fQgZvi",
        }),
      ],
    }),
  );
});

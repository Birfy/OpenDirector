import r from "oa";
import l from "bk";
export var F = [];
export function N(e) {
  let t;
  const { options, baseOptions = F, extraOptions = F } = e;
  if (options) {
    return options;
  }
  if (!baseOptions.length) {
    return extraOptions;
  }
  if (!extraOptions.length) {
    return baseOptions;
  }
  const [o, ...u] = extraOptions;
  return [
    ...baseOptions,
    l._(r._({}, o), {
      appendDividerBefore: (t = o.appendDividerBefore) == null || t,
    }),
    ...u,
  ];
}

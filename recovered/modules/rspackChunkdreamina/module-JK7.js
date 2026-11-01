import r from "FOT";
import { i as i_1 } from "./module-TAi.js";
import { Q } from "./module-swS_2.js";
const a = {
  key: "reference_validation_error_combination_unmatched",
  defaultMessage: "你可以添加：{combinations}",
};
const s = {
  key: "reference_validation_error_combination_join",
  defaultMessage: "或",
};
const c = {
  key: "reference_validation_description_condition_join",
  defaultMessage: "且",
};
const l = {
  key: "reference_validation_description_count_exact",
  defaultMessage:
    "{typeCount, plural, =1 {{num} 个{type}} other {{type}合计 {num} 个}}",
};
const u = {
  key: "reference_validation_description_count_range",
  defaultMessage:
    "{typeCount, plural, =1 {{min}~{max} 个{type}} other {{type}合计 {min}~{max} 个}}",
};
const d = {
  key: "reference_validation_description_count_max",
  defaultMessage:
    "{typeCount, plural, =1 {最多 {num} 个{type}} other {{type}合计最多 {num} 个}}",
};
const h = {
  key: "reference_validation_description_count_min",
  defaultMessage: "至少 {num} 个{type}",
};
const v = {
  key: "reference_validation_description_count_none",
  defaultMessage: "不含{type}",
};
const _ = {
  key: "reference_validation_description_count_any",
  defaultMessage: "{type}数量不限",
};
const p = {
  key: "reference_validation_description_duration_max",
  defaultMessage: "总时长不超过 {num} 秒",
};
const m = {
  key: "reference_validation_description_count_with_constraints",
  defaultMessage: "{countText}（{constraints}）",
};
function g(materialTypes, t, i) {
  if (typeof i === "number") {
    const { names: names_1, typeCount } = i_1({
      materialTypes,
      joinMode: "conjunction",
      count: i,
    });
    if (typeof t === "number") {
      if (t === i) {
        return r.h(l, {
          num: i,
          type: names_1,
          typeCount,
        });
      }
      return r.h(u, {
        min: t,
        max: i,
        type: names_1,
        typeCount,
      });
    }
    return r.h(d, {
      num: i,
      type: names_1,
      typeCount,
    });
  }
  if (typeof t === "number") {
    const { names: names_1 } = i_1({
      materialTypes,
      joinMode: "disjunction",
      count: t,
    });
    return r.h(h, {
      num: t,
      type: names_1,
    });
  }
  const { names } = i_1({
    materialTypes,
    joinMode: "conjunction",
    count: 0,
  });
  return r.h(_, {
    type: names,
  });
}
function f(e) {
  const { materialTypes, maxTotalCount, maxTotalDuration } = e;
  const s =
    typeof e.minTotalCount === "number" && e.minTotalCount > 0
      ? e.minTotalCount
      : undefined;
  if (maxTotalCount === 0) {
    const { names } = i_1({
      materialTypes,
      joinMode: "disjunction",
      count: 0,
    });
    return r.h(v, {
      type: names,
    });
  }
  const countText = g(materialTypes, s, maxTotalCount);
  if (typeof maxTotalDuration !== "number") {
    return countText;
  }
  return r.h(m, {
    countText,
    constraints: r.h(p, {
      num: Q(maxTotalDuration),
    }),
  });
}
function y(e) {
  let t;
  let i;
  const o = (i = e.conditions) != null ? i : [];
  const n = o.filter((e) => e.maxTotalCount === 0);
  const a = o.filter((e) => e.maxTotalCount !== 0);
  const s = (a.length > 0 ? a : n).map(f);
  if (s.length === 0) {
    return g(undefined, undefined, undefined);
  }
  t = r.h(c);
  return s.reduce((acc, item) => {
    if (!acc) {
      return item;
    }
    var r = !/\s$/.test(t) && /^[0-9A-Za-z]/.test(item);
    return ""
      .concat(acc)
      .concat(t)
      .concat(r ? " " : "")
      .concat(item);
  }, "");
}
export function A(e) {
  return r.h(a, {
    combinations: e.map(y).join(" ".concat(r.h(s).trim(), " ")),
  });
}

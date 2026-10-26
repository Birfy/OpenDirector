import r from "K8";
import { A } from "./module-JK7.js";
import n from "FOT";
import { i as i_1 } from "./module-TAi.js";
import { Q } from "./module-swS_2.js";
import { N } from "./module-ZfK.js";
import { _ as __1 } from "./module-YT_2.js";
import { i as i_2 } from "./module-y0_3.js";
export var y = ["image", "video", "audio"];
const h = {
  key: "reference_validation_error_resource_file_prefix",
  defaultMessage: "「{fileName}」{message}",
};
const v = {
  key: "reference_validation_error_min_count",
  defaultMessage: "请至少添加 {num} 个{type}",
};
const _ = {
  key: "reference_validation_error_max_count",
  defaultMessage:
    "{typeCount, plural, =1 {最多添加 {num} 个{type}} other {{type}合计最多添加 {num} 个}}",
};
const p = {
  key: "reference_validation_error_max_duration",
  defaultMessage: "{type}总时长不能超过 {num} 秒",
};
const m = {
  key: "reference_validation_error_material_unsupported",
  defaultMessage: "暂不支持添加{type}",
};
function g(e, materialTypes) {
  const i = (materialTypes == null ? undefined : materialTypes.length)
    ? e.filter((e) => materialTypes.some((t) => t === e.type))
    : e;
  return {
    totalCount: i.length,
    totalDuration: i.reduce((acc, item) => {
      var i;
      return acc + ("duration" in item && (i = item.duration) != null ? i : 0);
    }, 0),
  };
}
function f(e) {
  const { names } = i_1({
    materialTypes: [e],
    joinMode: "disjunction",
    count: 1,
  });
  return r.xz(
    -1,
    n.h(m, {
      type: names,
    }),
  );
}
export function Z(e) {
  const {
    materials,
    limits: { materialCombinationRule, materialLimits },
  } = e;
  const y = (function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { allOfConditions = [], anyOfCombinations = [] } = t;
    for (const l of allOfConditions) {
      const u = ((e, t) => {
        const {
          materialTypes = [],
          minTotalCount = 0,
          maxTotalCount = Infinity,
          maxTotalDuration = Infinity,
        } = t;
        const { totalCount, totalDuration } = g(e, materialTypes);
        if (maxTotalCount === 0 && totalCount > 0) {
          const { names } = i_1({
            materialTypes,
            joinMode: "disjunction",
            count: 1,
          });
          return r.xz(
            -1,
            n.h(m, {
              type: names,
            }),
          );
        }
        if (totalCount > maxTotalCount) {
          const { names, typeCount } = i_1({
            materialTypes,
            joinMode: "conjunction",
            count: maxTotalCount,
          });
          return r.xz(
            -1,
            n.h(_, {
              num: maxTotalCount,
              type: names,
              typeCount,
            }),
          );
        }
        if (totalCount < minTotalCount) {
          const { names } = i_1({
            materialTypes,
            joinMode: "disjunction",
            count: minTotalCount,
          });
          return r.xz(
            -1,
            n.h(v, {
              num: minTotalCount,
              type: names,
            }),
          );
        }
        if (totalDuration > maxTotalDuration) {
          const { names } = i_1({
            materialTypes,
            joinMode: "conjunction",
            count: 1,
          });
          return r.xz(
            -1,
            n.h(p, {
              num: Q(maxTotalDuration),
              type: names,
            }),
          );
        }
        return r.nj();
      })(e, l);
      if (!u.ok) {
        return u;
      }
    }
    if (anyOfCombinations.length) {
      if (
        anyOfCombinations.some((t) => {
          var { conditions = [] } = t;
          return conditions.every((t) =>
            ((e, t) => {
              const {
                materialTypes = [],
                minTotalCount = 0,
                maxTotalCount = Infinity,
                maxTotalDuration = Infinity,
              } = t;
              const { totalCount, totalDuration } = g(e, materialTypes);
              return (
                totalCount >= minTotalCount &&
                totalCount <= maxTotalCount &&
                totalDuration <= maxTotalDuration
              );
            })(e, t),
          );
        })
      ) {
        return r.nj();
      }
      return r.xz(-1, A(anyOfCombinations));
    }
    return r.nj();
  })(materials, materialCombinationRule);
  if (!y.ok) {
    return y;
  }
  if (!materialLimits) {
    return r.nj();
  }
  for (const S of materials) {
    let C;
    const b =
      typeof materialLimits === "function" ? materialLimits(S) : materialLimits;
    if (b) {
      const V = ((e, t) => {
        switch (e.type) {
          case "image":
            if ("image" in t) {
              return __1(e, t.image);
            }
            return f("image");
          case "video":
            if ("video" in t) {
              return i_2(e, t.video);
            }
            return f("video");
          case "audio":
            if ("audio" in t) {
              return N(e, t.audio);
            }
            return f("audio");
          default:
            return r.nj();
        }
      })(S, b);
      if (!V.ok) {
        const fileName = (C = S.file) == null ? undefined : C.name;
        if (materials.length > 1 && fileName) {
          return r.xz(
            -1,
            n.h(h, {
              fileName,
              message: V.msg,
            }),
          );
        }
        return V;
      }
    }
  }
  return r.nj();
}

import i from "oa";
import { a9 } from "./module-Q9p.js";
const n = "seedance_20_mini_720p_output_5s";
const o = "seedance_20_mini_720p_output_8s";
const s = {
  audio: "3",
  image: "1",
  video: "2",
};
function c(e, t, additionalConf) {
  if (t.length !== 0) {
    const i =
      additionalConf == null
        ? undefined
        : additionalConf.find((t) => t.optionKey === e);
    if (i == null ? undefined : i.commerceInfo) {
      if (!i.condition) {
        return i.commerceInfo.benefitKey;
      }
      const a = i.condition.value;
      if (i.condition.operation === "in") {
        if (
          t.every((e) => {
            if (a == null) {
              return undefined;
            }
            return a.includes(e);
          })
        ) {
          return i.commerceInfo.benefitKey;
        }
        return undefined;
      }
      if (i.condition.operation === "contains") {
        if (a == null ? undefined : a.some((e) => t.includes(e))) {
          return i.commerceInfo.benefitKey;
        }
        return undefined;
      }
    }
  }
}
function u(e) {
  return e.length > 0;
}
function _(e) {
  return e.some((e) => {
    var t;
    var { payMode, limitStrategy } = e;
    return (
      payMode === "LimitFree" &&
      !!limitStrategy &&
      (((t = limitStrategy.quotaLeft) != null ? t : 0) > 0 ||
        (limitStrategy.quotaAll === -1 && limitStrategy.quotaLeft === -1))
    );
  });
}
function d(e, t) {
  if (e.benefitKey === n) {
    return u(t);
  }
  if (e.benefitKey === o) {
    return _(t);
  }
  return u(t);
}
function l(e) {
  let t;
  return i._(
    {
      strategyId: e.benefit.resourceId,
      resourceType: e.benefit.resourceType,
      resourceId: e.benefit.resourceId,
      benefitKey: e.benefit.benefitKey,
      extraBenefitKeys: [...new Set((t = e.extraBenefitKeys) != null ? t : [])],
      batchNumber: e.options.outputCount,
      benefitAmount: ((e, t) => {
        if (!e.chargeInputVideoDuration) {
          return e.durationSeconds;
        }
        let r;
        const i =
          t.hasInputVideo === true && (r = e.inputVideoDuration) != null
            ? r
            : 0;
        return e.durationSeconds + i;
      })(e.options, e.context),
    },
    e.reason
      ? {
          reason: e.reason,
        }
      : {},
  );
}
export function eu(e) {
  return ((e, t, r) => {
    let i;
    let a;
    let n;
    let o;
    let u;
    let _;
    let d;
    let p;
    let m;
    let v;
    let y;
    let g;
    let h;
    let S;
    let f;
    const b = e.catalog.find((t) => t.modelReqKey === e.options.modelReqKey);
    if (!b) {
      return {
        status: "unsupported",
        reason: "model_not_found",
      };
    }
    u = (i = e.options).materialTypes
      ? i.materialTypes.includes("video")
      : undefined;
    const context = {
      hasInputVideo:
        (a = (n = i.hasInputVideo) != null ? n : u) != null
          ? a
          : ((o = i.inputVideoDuration) != null ? o : 0) > 0 || undefined,
      isLongVideo: i.isLongVideo === true,
    };
    const C = t({
      phase: "before_standard",
      modelReqKey: e.options.modelReqKey,
      resolution: e.options.resolution,
      durationSeconds: e.options.durationSeconds,
    }).find((t) => r(t, e.getBenefitStrategies(t), e.options.outputCount));
    if (C) {
      return l({
        benefit: C,
        options: e.options,
        context,
      });
    }
    _ = b.commercialConfig;
    d = e.options;
    const I =
      (p =
        (m = ((e, t, r) => {
          let i;
          let a;
          let n;
          let o;
          let s;
          let c;
          const u = t.trim().toLowerCase();
          const _ =
            e == null
              ? undefined
              : e.find((e) => e.resolution.trim().toLowerCase() === u);
          if (_) {
            if (r.hasInputVideo === undefined) {
              if (r.isLongVideo && (a = _.longVideoPrice) != null) {
                return a;
              }
              return _.price;
            }
            if (r.isLongVideo) {
              if (r.hasInputVideo) {
                if ((n = _.longVideoPrice) != null) {
                  return n;
                }
                return _.price;
              }
              if (
                (o =
                  (s =
                    (c = _.noInputVideoLongVideoPrice) != null
                      ? c
                      : _.longVideoPrice) != null
                    ? s
                    : _.noInputVideoPrice) != null
              ) {
                return o;
              }
              return _.price;
            }
            if (r.hasInputVideo) {
              return _.price;
            }
            if ((i = _.noInputVideoPrice) != null) {
              return i;
            }
            return _.price;
          }
        })(_.resolutionPriceConfigs, d.resolution, context)) != null
          ? m
          : context.hasInputVideo === true
            ? (v = _.formatConf) == null
              ? undefined
              : v.unifiedEditInputVideo
            : undefined) != null
        ? p
        : _.default;
    const O = t({
      phase: "after_standard",
      modelReqKey: e.options.modelReqKey,
      resolution: e.options.resolution,
      durationSeconds: e.options.durationSeconds,
      standardBenefitKey: I.benefitKey,
    }).find((t) => r(t, e.getBenefitStrategies(t), e.options.outputCount));
    if (O) {
      return l({
        benefit: O,
        options: e.options,
        context,
        reason: "model",
      });
    }
    const additionalConf = b.commercialConfig.additionalConf;
    y = e.options.resolution;
    g = b.commercialConfig.resolutionAdditionalBenefits;
    const R = (h = y.trim().toLowerCase())
      ? Object.entries(g != null ? g : {})
          .filter((e) => {
            var [t] = e;
            return t.trim().toLowerCase() === h;
          })
          .flatMap((e) => {
            var [, t] = e;
            return t.map((e) => e.benefitKey);
          })
      : [];
    const E = c(
      "resolution",
      e.options.resolution ? [e.options.resolution] : [],
      additionalConf,
    );
    const j = c(
      "lens_recipe",
      e.options.lensRecipe ? [e.options.lensRecipe] : [],
      additionalConf,
    );
    const w = c(
      "unified_edit.input_material_type",
      (S =
        (f = e.options.materialTypes) == null
          ? undefined
          : f.map((e) => s[e])) != null
        ? S
        : [],
      additionalConf,
    );
    return l({
      benefit: I,
      options: e.options,
      context,
      extraBenefitKeys: [...R, E, j, w].filter((e) => !!e),
      reason: R.length > 0 || E ? "resolution" : "model",
    });
  })(
    e,
    (t) => {
      var r;
      var i;
      var s;
      var c;
      var d;
      var l;
      var p;
      var m;
      r = a9(t);
      i = e.getBenefitStrategies;
      s = r.find((e) => {
        var { benefitKey } = e;
        return benefitKey === n;
      });
      c = r.find((e) => {
        var { benefitKey } = e;
        return benefitKey === o;
      });
      d = s ? i(s) : [];
      l = c ? i(c) : [];
      p = [
        s && _(d) ? s : undefined,
        c && _(l) ? c : undefined,
        s && u(d) ? s : undefined,
        ...r.filter((e) => e.benefitKey !== n && e.benefitKey !== o),
      ];
      m = new Set();
      return p.filter(
        (e) => !(!e || m.has(e.benefitKey)) && (m.add(e.benefitKey), true),
      );
    },
    d,
  );
}

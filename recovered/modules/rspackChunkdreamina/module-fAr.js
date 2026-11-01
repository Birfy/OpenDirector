import i from "oa";
import a from "qa";
const n = ["generate_type", "edit_type", "enter_source"];
const o = [
  "right_id",
  "right_type",
  "right_main_type",
  "right_is_aigc",
  "right_count_type",
  "right_subscribe_type",
  "right_oneoff_mix_type",
  "right_is_trial",
  "right_trial_mode",
  "right_trial_type",
  "right_trial_limit_left",
  "right_block_type",
];
const s = (e) => typeof e === "string" || typeof e === "number";
const c = (e) => typeof e === "object" && e !== null && !Array.isArray(e);
export var ey = (e) => {
  if (!e) {
    return {};
  }
  var t = {};
  Object.keys(e).forEach((r) => {
    var i = e[r];
    if (typeof i === "string" || typeof i === "number") {
      t[r] = i;
    } else if (typeof i === "boolean") {
      t[r] = +!!i;
    } else if (c(i)) {
      t[r] = ey(i);
    }
  });
  return t;
};
export var y7 = (e) => {
  var { extra } = e;
  return a._(e, ["extra"]);
};
export var w7 = (e) => {
  var { baseExtra, rightTrackingData, customReportParams, fallbackRightId } = e;
  var d = ey(customReportParams);
  var l = customReportParams == null ? undefined : customReportParams.extra;
  var p = ey(c(l) ? l : undefined);
  var m = {};
  n.forEach((e) => {
    var t;
    var r = (t = p[e]) != null ? t : d[e];
    if (s(r)) {
      m[e] = r;
    }
  });
  var v = {};
  o.forEach((e) => {
    var t = rightTrackingData == null ? undefined : rightTrackingData[e];
    if (s(t)) {
      v[e] = t;
    }
  });
  var y = (h = v.right_id) != null ? h : fallbackRightId;
  var g = i._({}, baseExtra != null ? baseExtra : {}, p, m, v);
  if (y) {
    g.right_id = y;
    g.vip_function_id = y;
  } else {
    var h;
    var S;
    var f = (S = p.vip_function_id) != null ? S : d.vip_function_id;
    if (s(f)) {
      g.vip_function_id = f;
    }
  }
  return g;
};
export var Tz = (e) => JSON.stringify(e);
export var IW = (e) => {
  var t;
  var r;
  var { customReportParams, extra } = e;
  var n = ey(customReportParams);
  var o =
    (t =
      customReportParams == null
        ? undefined
        : customReportParams.business_extra) != null
      ? t
      : customReportParams == null
        ? undefined
        : customReportParams.businessExtra;
  if (typeof o === "string") {
    return o;
  }
  var _ = c(o) ? ey(o) : undefined;
  if (_ && Object.keys(_).length > 0) {
    return JSON.stringify(_);
  }
  var extra_enter_source = extra.enter_source;
  var l = (r = extra.right_id) != null ? r : extra.vip_function_id;
  if (s(extra_enter_source) && s(l)) {
    return JSON.stringify({
      enter_source: {
        [String(l)]: extra_enter_source,
      },
    });
  }
  if (typeof n.business_extra === "string") {
    return n.business_extra;
  }
};

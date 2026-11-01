import r from "oa";
import { wN } from "./module-BNQ.js";
const n = {
  super_resolution: 1,
  frame_interpolation: -4,
};
export function XL(e) {
  let t;
  let i;
  if ((t = (i = e.pagination) == null ? undefined : i.pageSize) != null) {
    return t;
  }
  return 30;
}
export function A3(e) {
  let t;
  let i;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const s = Number(
    (t = (i = e.pagination) == null ? undefined : i.cursor) != null ? t : r,
  );
  if (Number.isFinite(s)) {
    return s;
  }
  return r;
}
export function Vr(e) {
  let t;
  return ((t = e.filters) == null ? undefined : t.onlyFavorited) === true;
}
export function yi(e) {
  return e.subjectSource;
}
function d(e) {
  if (e == null ? undefined : e.length) {
    return [...new Set(e)];
  }
  return [];
}
export function ad(e, t) {
  let i;
  if (e !== "audio") {
    return [];
  }
  return d((i = t.filters) == null ? undefined : i.generationModeList);
}
export function r5(e, t) {
  let i;
  let r;
  const o =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : t.query
        ? "search"
        : "browse";
  const a = wN(
    e,
    (i = (r = t.filters) == null ? undefined : r.statusFilters) != null
      ? i
      : [],
    o,
  );
  return {
    historyFilterTypes: a.map((e) => n[e]),
    hasFrameInterpolation: a.includes("frame_interpolation"),
  };
}
export function jT(e, t) {
  let i;
  let s;
  let n;
  let o;
  let a;
  let u;
  if (e !== "image" && e !== "video") {
    return {};
  }
  return r._(
    {},
    (
      (s = t.filters) == null || (i = s.resolutionList) == null
        ? undefined
        : i.length
    )
      ? {
          resolutionList: d(t.filters.resolutionList),
        }
      : {},
    (
      (o = t.filters) == null || (n = o.ratioTypeList) == null
        ? undefined
        : n.length
    )
      ? {
          ratioTypeList: d(t.filters.ratioTypeList),
        }
      : {},
    e === "video" &&
      ((u = t.filters) == null || (a = u.generationModeList) == null
        ? undefined
        : a.length)
      ? {
          generationModeList: d(t.filters.generationModeList),
        }
      : {},
  );
}
export function xX(e) {
  let t;
  const { timeRange } = (t = e.filters) != null ? t : {};
  if (
    (timeRange == null ? undefined : timeRange.beginTimestamp) === undefined &&
    (timeRange == null ? undefined : timeRange.endTimestamp) === undefined
  ) {
    return {};
  }
  return {
    timeRange: r._(
      {},
      timeRange.beginTimestamp !== undefined
        ? {
            beginTimestamp: timeRange.beginTimestamp,
          }
        : {},
      timeRange.endTimestamp !== undefined
        ? {
            endTimestamp: timeRange.endTimestamp,
          }
        : {},
    ),
  };
}
export function z(e) {
  let t;
  const i = (t = e.filters) == null ? undefined : t.workspaceId;
  if (i !== undefined && i !== "") {
    const r = Number(i);
    if (Number.isFinite(r)) {
      return r;
    }
    return undefined;
  }
}
export function Oy(e) {
  let t;
  const i = (t = e.filters) == null ? undefined : t.teamMemberUserId;
  if (i !== undefined && i !== "") {
    return i;
  }
}
export function _y(e) {
  return e.hideStoryAgentResult;
}
export function AG(e) {
  let t;
  if (((t = e.sort) == null ? undefined : t.order) === "asc") {
    return 2;
  }
  return 1;
}
export function yV(e) {
  let t;
  switch ((t = e.sort) == null ? undefined : t.field) {
    case "created_time":
      return 0;
    case "updated_time":
      return 1;
    case "generated_time":
      return 2;
    default:
      return;
  }
}
export function cc(e) {
  let t;
  switch ((t = e.sort) == null ? undefined : t.field) {
    case "updated_time":
      return 0;
    case "created_time":
      return 1;
    case "generated_time":
      return 2;
    default:
      return;
  }
}
export function un(e) {
  if (e.sort) {
    return +(e.sort.order === "asc");
  }
}
Object.defineProperty(exports, "FE", {
  enumerable: true,
  get: () => 0,
});
Object.defineProperty(exports, "yQ", {
  enumerable: true,
  get: () => 30,
});

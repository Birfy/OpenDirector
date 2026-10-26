import r from "oa";
import s from "bk";
const browse = {
  image: {
    supportsOnlyFavoritedFilter: true,
    supportedStatusFilters: ["super_resolution"],
  },
  video: {
    supportsOnlyFavoritedFilter: true,
    supportedStatusFilters: ["super_resolution", "frame_interpolation"],
  },
  audio: {
    supportsOnlyFavoritedFilter: true,
  },
  document: {
    supportsOnlyFavoritedFilter: true,
  },
  story: {
    supportsOnlyFavoritedFilter: true,
  },
  subject: {
    supportsOnlyFavoritedFilter: true,
  },
};
const search = s._(r._({}, browse), {
  canvas: {
    supportsOnlyFavoritedFilter: true,
  },
});
const a = {
  browse,
  search,
};
function u(e) {
  let t;
  const i =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "browse";
  if ((t = a[i][e]) != null) {
    return t;
  }
  return {};
}
export function LQ(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "browse";
  return u(e, t).supportsOnlyFavoritedFilter === true;
}
export function wN(e, t) {
  let i;
  const r =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "browse";
  const s = new Set((i = u(e, r).supportedStatusFilters) != null ? i : []);
  return t.filter((e) => s.has(e));
}
export function LH(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "browse";
  return wN(e, [t], i).length > 0;
}

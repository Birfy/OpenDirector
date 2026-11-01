const r = {
  initial: "feed_enterauto",
  "load-more": "feed_loadmore",
  refresh: "feed_refresh",
  "preload-more": "feed_preloadmore",
};
export function dj(e) {
  return typeof e === "string" && Object.prototype.hasOwnProperty.call(r, e);
}
export function SQ(e) {
  return r[e];
}

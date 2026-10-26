import n from "e3";
import r from "aS";
const a = {
  image: new Set([
    1, 2, 3, 4, 27, 7, 8, 9, 12, 13, 14, 15, 26, 35, 28, 38, 39, 51, 100, 101,
  ]),
  video: new Set([10, 16, 17, 20, 21, 29, 32, 33, 24, 31, 30, 45]),
  audio: new Set([22, 23, 44]),
  document: new Set([46]),
};
const o = {
  image: [1, 10],
  video: [2, 5, 7, 8, 9, 10],
  audio: [6, 10],
  document: [10, 12],
};
export function C(e, t) {
  let i;
  let o;
  if (a[e].has(t.generateType)) {
    return true;
  }
  switch (e) {
    case "image":
      return (
        n.A(t) ||
        !!((i = t.itemList) == null
          ? undefined
          : i.some((e) => {
              var t;
              if ((t = e.image) == null) {
                return undefined;
              }
              return t.url;
            }))
      );
    case "video":
      return (
        r.g(t) ||
        !!((o = t.itemList) == null
          ? undefined
          : o.some((e) => {
              var t;
              var i;
              var n;
              return (
                ((t = e.video) == null ? undefined : t.coverUrl) ||
                ((n = e.video) == null || (i = n.thumb) == null
                  ? undefined
                  : i.url)
              );
            }))
      );
    default:
      return false;
  }
}
export function X(e) {
  return o[e];
}

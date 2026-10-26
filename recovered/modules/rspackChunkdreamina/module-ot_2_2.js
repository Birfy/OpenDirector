import i from "krN";
export function P(e) {
  let t;
  let n;
  const { content } = e;
  if (i.uZ(e) === i.yC.Video) {
    if ((n = content.videoInfo) == null) {
      return undefined;
    }
    return n.coverUrl;
  }
  if ((t = content.mainImage) == null) {
    return undefined;
  }
  return t.imageUrl;
}

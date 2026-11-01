import i from "XJB";
import s from "LLl";
import a from "A3X";
export function U(e) {
  const aspectRatio = ((e) => {
    if (!s.Y(e)) {
      return 1;
    }
    const { text2imageParams, image } = e;
    const {
      imageRatio,
      largeImageInfo: { width, height },
    } = text2imageParams;
    const l =
      (d = i.dv.find((e) => e.type === imageRatio)) == null
        ? undefined
        : d.value;
    if (l) {
      return l;
    }
    var d;
    let c;
    let u;
    const { width: width_1, height: height_1 } =
      (c = (u = image.largeImages) == null ? undefined : u[0]) != null ? c : {};
    return (
      (width_1 != null ? width_1 : width) /
      (height_1 != null ? height_1 : height)
    );
  })(e);
  if (s.Y(e)) {
    return {
      id: e.id,
      type: "image",
      effectType: e.effectType,
      coverUrl: e.commonAttr.coverUrl,
      coverUrlMap: e.commonAttr.coverUrlMap,
      aspectRatio,
    };
  }
  if (a.s(e)) {
    return {
      id: e.id,
      type: "video",
      effectType: e.effectType,
      coverUrl: e.commonAttr.coverUrl,
      coverUrlMap: e.commonAttr.coverUrlMap,
      aspectRatio,
    };
  }
}

import r from "Ut";
import n from "yMd";
import { Q } from "./module-WC_2.js";
const o = r.DAImageRatioTypeUtils.titleOfValue(
  r.DAImageRatioType.ImageRatioType_916,
);
export function X(e, t) {
  let i;
  let l;
  let s;
  const u = {};
  const d =
    Q(t) > 0
      ? "custom"
      : (i = (s = t.originalInput) == null ? undefined : s.videoAspectRatio) !=
          null
        ? i
        : r.DAImageRatioTypeUtils.titleOfValue(t.videoRatio);
  u.aspectRatio =
    (l =
      d != null
        ? d
        : ((e) => {
            if (e.generateType === n.ce.VideoDubbing) {
              let t;
              let i;
              let a;
              let o;
              let l;
              const { sourceMaterial, unifiedEditInput } =
                (t = e.videoDubbingInfo) != null ? t : {};
              const d =
                (i =
                  (sourceMaterial == null
                    ? undefined
                    : sourceMaterial.materialType) === "video"
                    ? sourceMaterial.videoInfo
                    : undefined) != null
                  ? i
                  : unifiedEditInput == null ||
                      (o = unifiedEditInput.materialList.find(
                        (e) => e.materialType === "video",
                      )) == null
                    ? undefined
                    : o.videoInfo;
              const c = [
                d == null ? undefined : d.originVideo,
                d == null || (l = d.transcodedVideo) == null
                  ? undefined
                  : l.origin,
                ...Object.values(
                  (a = d == null ? undefined : d.transcodedVideo) != null
                    ? a
                    : {},
                ),
              ].find((e) => (e == null ? undefined : e.width) && e.height);
              if ((c == null ? undefined : c.width) && c.height) {
                return r.DAImageRatioTypeUtils.titleOfValue(
                  r.DAImageRatioTypeUtils.valueToType(c.width / c.height),
                );
              }
            }
          })(t)) != null
      ? l
      : t.generateType === n.ce.CloudRenderVideo
        ? o
        : undefined;
  e.setParams(u);
}

import a from "Ut";
import n from "yMd";
import { Q } from "./module-WC_3.js";
const o = a.DAImageRatioTypeUtils.titleOfValue(
  a.DAImageRatioType.ImageRatioType_916,
);
export function X(e, t) {
  let i;
  let l;
  let d;
  const u = {};
  const s =
    Q(t) > 0
      ? "custom"
      : (i = (d = t.originalInput) == null ? undefined : d.videoAspectRatio) !=
          null
        ? i
        : a.DAImageRatioTypeUtils.titleOfValue(t.videoRatio);
  u.aspectRatio =
    (l =
      s != null
        ? s
        : ((e) => {
            if (e.generateType === n.ce.VideoDubbing) {
              let t;
              let i;
              let r;
              let o;
              let l;
              const { sourceMaterial, unifiedEditInput } =
                (t = e.videoDubbingInfo) != null ? t : {};
              const s =
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
                s == null ? undefined : s.originVideo,
                s == null || (l = s.transcodedVideo) == null
                  ? undefined
                  : l.origin,
                ...Object.values(
                  (r = s == null ? undefined : s.transcodedVideo) != null
                    ? r
                    : {},
                ),
              ].find((e) => (e == null ? undefined : e.width) && e.height);
              if ((c == null ? undefined : c.width) && c.height) {
                return a.DAImageRatioTypeUtils.titleOfValue(
                  a.DAImageRatioTypeUtils.valueToType(c.width / c.height),
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

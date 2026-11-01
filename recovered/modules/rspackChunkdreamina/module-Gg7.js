import a from "K8";
import i from "krN";
import n from "IHa";
import o from "n4G";
import s from "VOK";
import l from "lt";
import { h as h_1 } from "./module-ejz.js";
import { p } from "./module-baR.js";
export function g(e, t) {
  const {
    data: { feature },
    omniDubbingManager,
    videoTranslationManager,
    audioSeparationManager,
  } = e;
  const m = p(t, feature);
  if (!m.ok) {
    return m;
  }
  if (feature === "omniDubbing") {
    let p;
    let _;
    let v;
    let f;
    let S;
    const {
      data: { references, promptContents },
    } = omniDubbingManager;
    const k =
      (p = (v = t.omniDubbingConfig) == null ? undefined : v.referenceLimits) !=
      null
        ? p
        : {};
    const R =
      (_ =
        (S = t.omniDubbingConfig) == null || (f = S.referenceLimits) == null
          ? undefined
          : f.materialLimits) != null
        ? _
        : {};
    const I = new Set(Object.values(i.yC).filter((e) => e in R));
    return n.T({
      materials: o.G({
        resources: references,
        resourceMaterialMapper: (e) => s.M(e, k),
        subjects: l.I(promptContents),
        subjectMaterialPicker: (e) => h_1(e, I),
      }),
      limits: k,
    });
  }
  if (feature === "videoTranslation") {
    let b;
    let C;
    const {
      data: { references },
    } = videoTranslationManager;
    const A =
      (b =
        (C = t.videoTranslationConfig) == null
          ? undefined
          : C.referenceLimits) != null
        ? b
        : {};
    return n.T({
      materials: references,
      limits: A,
    });
  }
  if (feature === "audioSeparation") {
    let T;
    let G;
    const {
      data: { references },
    } = audioSeparationManager;
    const j =
      (T =
        (G = t.audioSeparationConfig) == null
          ? undefined
          : G.referenceLimits) != null
        ? T
        : {};
    return n.T({
      materials: references,
      limits: j,
    });
  }
  return a.nj();
}

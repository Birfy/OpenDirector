import a from "yMd";
import r from "j6i";
import { N } from "./module-cm_2.js";
import o from "gu";
export function F(e, t) {
  let n;
  let l;
  const scene =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : o.Sk.ImageBasicGenerate;
  const { resolutionMap } = e;
  if (!resolutionMap) {
    return null;
  }
  const u = Object.keys(resolutionMap);
  const d =
    (n = (l = e.feats) == null ? undefined : l.includes(a.Si.PerPiece)) !=
      null && n;
  for (const resolutionType of u) {
    const sceneOptions = r.O({
      scene,
      modelReqKey: e.key,
      resolutionType,
      imageInputNum: 0,
      benefitCount: d ? 4 : undefined,
    });
    if (
      t.isBenefitFreeForAll({
        scene,
        sceneOptions,
        benefitAmount: N(sceneOptions),
      })
    ) {
      return resolutionType;
    }
  }
  return null;
}

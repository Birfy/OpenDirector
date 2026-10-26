import a from "LLl";
import r from "yMd";
import n from "A4";
import { q } from "./module-qxT.js";
export function s(t, e) {
  let i;
  let l;
  const s = {};
  if (a.Y(e)) {
    s.model = (i = e.modelInfo) == null ? undefined : i.modelReqKey;
    s.prompt = e.text2imageParams.prompt;
    s.seed = e.text2imageParams.seed;
    s.steps = e.text2imageParams.sampleStrength;
    s.isReference = q(
      ((l = e.aigcImageParams) == null ? undefined : l.firstGenerateType) ===
        r.ce.Blend,
    );
    s.scale = e.text2imageParams.imageRatio
      ? n.t[e.text2imageParams.imageRatio]
      : undefined;
    t.setParams(s);
  }
}

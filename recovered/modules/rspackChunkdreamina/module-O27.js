import a from "HSE";
import r from "yMd";
import n from "A4";
import { q } from "./module-qxT.js";
export function b(t, e) {
  let i;
  let l;
  let s;
  let u;
  const c = {};
  if (a.J(e)) {
    const d = e.collection[0];
    c.model = (i = d.modelInfo) == null ? undefined : i.modelReqKey;
    c.prompt = d.text2imageParams.prompt;
    c.seed = d.text2imageParams.seed;
    c.steps =
      (s = d.aigcImageParams) == null || (l = s.text2imageParams) == null
        ? undefined
        : l.sampleStrength;
    c.isReference = q(
      ((u = e.aigcImageParams) == null ? undefined : u.firstGenerateType) ===
        r.ce.Blend,
    );
    c.scale = d.text2imageParams.imageRatio
      ? n.t[d.text2imageParams.imageRatio]
      : undefined;
    c.collectionId = e.id;
    c.templateId = d.id;
    t.setParams(c);
  }
}

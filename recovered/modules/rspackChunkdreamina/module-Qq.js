import n from "Ut";
import { X, c } from "./module-NaK.js";
export function r(e) {
  const t = new n.DAImageStyleReference();
  t.styleWeight = e.styleWeight;
  t.styleItemId = e.styleItemId;
  t.styleTitle = e.styleTitle;
  t.styleTitleStarlingKey = e.styleTitleStarlingKey;
  t.styleType = e.styleType;
  t.image = c(e.image);
  return t;
}
export function U(e, t) {
  let i;
  let n;
  return {
    styleWeight: (i = e.styleWeight) != null ? i : 0,
    styleItemId: e.styleItemId,
    styleTitle: e.styleTitle,
    styleTitleStarlingKey: e.styleTitleStarlingKey,
    styleType: e.styleType,
    image: (n = X(e.image, t)) != null ? n : {},
  };
}

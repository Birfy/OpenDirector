import { YG, jz } from "./module-yMd.js";
export function I(e) {
  let t;
  return (
    e.status === YG.Online &&
    ((t = e.reviewInfo) == null ? undefined : t.reviewStatus) === jz.Reviewing
  );
}

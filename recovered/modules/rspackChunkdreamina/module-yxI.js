import { YG, jz } from "./module-yMd.js";
export function r(e) {
  let t;
  return (
    e.status === YG.Reviewing ||
    ((t = e.reviewInfo) == null ? undefined : t.reviewStatus) === jz.Reviewing
  );
}

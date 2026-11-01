import { r } from "./module-yxI.js";
import { I } from "./module-Amc.js";
export function z(status, reviewInfo) {
  if (
    I({
      status,
      reviewInfo,
    })
  ) {
    return "update-in-review";
  }
  if (
    r({
      status,
      reviewInfo,
    })
  ) {
    return "in-review";
  }
}

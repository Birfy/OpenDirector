import { r } from "./module-yxI_2.js";
import { I } from "./module-Amc_2.js";
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

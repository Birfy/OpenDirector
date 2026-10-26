import r from "Qey";
import n from "K8";
import { W } from "./module-qI_3.js";
import { Q, z } from "./module-swS.js";
export var p = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { minDuration = 0, maxDuration = Infinity } = t;
  const { duration } = e;
  if (typeof duration !== "number") {
    return n.nj();
  }
  const type = e.type ? W[e.type] : W.any;
  if (duration < minDuration) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_min_duration",
        {
          num: z(minDuration),
          type,
        },
        "{type}时长不能短于 {num} 秒",
      ),
    );
  }
  if (duration > maxDuration) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_duration",
        {
          num: Q(maxDuration),
          type,
        },
        "{type}时长不能超过 {num} 秒",
      ),
    );
  }
  return n.nj();
};

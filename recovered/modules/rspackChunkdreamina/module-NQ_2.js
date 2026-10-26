import r from "Qey";
import o from "K8";
import n from "qI";
import { Q, z } from "./module-swS_2.js";
export var p = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { minDuration = 0, maxDuration = Infinity } = t;
  const { duration } = e;
  if (typeof duration !== "number") {
    return o.nj();
  }
  const type = e.type ? n.W[e.type] : n.W.any;
  if (duration < minDuration) {
    return o.xz(
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
    return o.xz(
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
  return o.nj();
};

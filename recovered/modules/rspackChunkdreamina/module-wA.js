import { j } from "./module-H5.js";
import { K } from "./module-ha.js";
import { W } from "./module-Kk.js";
export function I(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const i = [...e.replyMessages, ...t];
  const o = K(i);
  const s = j(i);
  return W([...o, ...s]);
}

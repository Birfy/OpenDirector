import t from "bT";
import { w } from "./module-Vb7.js";
const i = (e) => {
  var u = w.onMove(e);
  return () => {
    u.dispose();
  };
};
export function x() {
  const e = t.useSyncExternalStore(i, w.getMoveDataSnapshot.bind(w));
  try {
    return {
      x: 0,
      y: 0,
      ...JSON.parse(e),
    };
  } catch (e) {
    return {
      x: 0,
      y: 0,
    };
  }
}

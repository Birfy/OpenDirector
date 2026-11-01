import { Gw } from "./module-NDq.js";
const n = parseFloat("549px");
const a = parseFloat("312px");
const o = parseFloat("8px");
export var b1 = parseFloat("2028px");
export function bp(e) {
  const { isStuck, localEndGap, navigationWidth, safeRight } = e;
  return (
    !!isStuck &&
    navigationWidth - Math.max(0, safeRight - localEndGap) - o - a < n
  );
}
export var Z1 = Gw;

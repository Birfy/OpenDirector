import i from "NDq";
const a = parseFloat("549px");
const o = parseFloat("312px");
const n = parseFloat("8px");
export var b1 = parseFloat("2028px");
export function bp(e) {
  const { isStuck, localEndGap, navigationWidth, safeRight } = e;
  return (
    !!isStuck &&
    navigationWidth - Math.max(0, safeRight - localEndGap) - n - o < a
  );
}
export var Z1 = i.Gw;

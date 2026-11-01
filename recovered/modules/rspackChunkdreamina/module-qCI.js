import { E } from "./module-cfI.js";
export function X(e, t) {
  const r = E[t];
  return e.some((e) => e.generateModes.includes(r));
}

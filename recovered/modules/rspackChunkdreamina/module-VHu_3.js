export function C(e, t) {
  let i;
  let a;
  let n;
  const r = {};
  const o = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  r.lensMotionStrengthKey =
    o == null || (a = o.lensRecipeInput) == null ? undefined : a.strengthKey;
  r.lensMotionKey =
    o == null || (n = o.lensRecipeInput) == null ? undefined : n.lensRecipeKey;
  e.setParams(r);
}

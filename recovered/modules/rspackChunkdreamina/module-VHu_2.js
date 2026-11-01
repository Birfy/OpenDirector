export function C(e, t) {
  let i;
  let r;
  let n;
  const a = {};
  const o = (i = t.originalInput) == null ? undefined : i.videoGenInputs[0];
  a.lensMotionStrengthKey =
    o == null || (r = o.lensRecipeInput) == null ? undefined : r.strengthKey;
  a.lensMotionKey =
    o == null || (n = o.lensRecipeInput) == null ? undefined : n.lensRecipeKey;
  e.setParams(a);
}

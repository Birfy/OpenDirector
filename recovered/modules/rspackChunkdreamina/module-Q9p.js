const i = Object.freeze({
  rules: Object.freeze([
    Object.freeze({
      id: "seedance-fast-5s",
      phase: "before_standard",
      modelReqKey: "dreamina_seedance_40_vision",
      maxDurationSeconds: 5,
      benefit: Object.freeze({
        resourceType: "aigc",
        resourceId: "generate_video",
        benefitKey: "dreamina_seedance_20_fast_5s",
      }),
    }),
    Object.freeze({
      id: "seedance-mini-720p-8s",
      phase: "after_standard",
      standardBenefitKey: "seedance_20_mini_720p_output",
      resolution: "720p",
      maxDurationSeconds: 8,
      benefit: Object.freeze({
        resourceType: "aigc",
        resourceId: "generate_video",
        benefitKey: "seedance_20_mini_720p_output_8s",
      }),
    }),
    Object.freeze({
      id: "seedance-mini-720p-5s",
      phase: "after_standard",
      standardBenefitKey: "seedance_20_mini_720p_output",
      resolution: "720p",
      maxDurationSeconds: 5,
      benefit: Object.freeze({
        resourceType: "aigc",
        resourceId: "generate_video",
        benefitKey: "seedance_20_mini_720p_output_5s",
      }),
    }),
  ]),
});
export function a9(e) {
  if (!Number.isFinite(e.durationSeconds) || e.durationSeconds <= 0) {
    return [];
  }
  return i.rules
    .filter(
      (t) =>
        t.phase === e.phase &&
        e.durationSeconds <= t.maxDurationSeconds &&
        (t.modelReqKey === undefined || t.modelReqKey === e.modelReqKey) &&
        (t.standardBenefitKey === undefined ||
          t.standardBenefitKey === e.standardBenefitKey) &&
        (t.resolution === undefined || t.resolution === e.resolution),
    )
    .map((e) => e.benefit);
}
export function Ve(e) {
  return a9(e)[0];
}

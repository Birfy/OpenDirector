export var O = {
  ContentGenerator: "content-generator",
  HomeBanner: "home-banner",
  HomeCreationPreset: "home-creation-preset",
  ExploreSkill: "explore-skill",
};
export function c(e) {
  return (
    (e == null ? undefined : e.from) === O.ContentGenerator ||
    (e == null ? undefined : e.from) === O.HomeBanner ||
    (e == null ? undefined : e.from) === O.ExploreSkill
  );
}

import a from "f3";
export function m(t) {
  if (t.source === a.fc.Platform) {
    return {
      skillSource: a.fc.Platform,
      skillId: t.id,
      skillTags: [],
    };
  }
  if (t.source === a.fc.User) {
    let e;
    let i;
    let r;
    const { originalSkillId, extraInfo } = t;
    if (originalSkillId && !extraInfo.isEdited) {
      return {
        skillSource: a.fc.Market,
        skillId: originalSkillId,
        originalSkillId,
        skillTags: (i = t.categoryIds) != null ? i : [],
      };
    }
    if (originalSkillId && extraInfo.isEdited) {
      return {
        skillSource: a.fc.User,
        skillId: t.id,
        originalSkillId,
        skillTags: (r = t.categoryIds) != null ? r : [],
      };
    }
    return {
      skillSource: a.fc.User,
      skillId: t.id,
      skillTags: (e = t.categoryIds) != null ? e : [],
    };
  }
  return {
    skillSource: a.fc.Market,
    skillId: t.id,
    originalSkillId: t.id,
    skillTags: t.categoryIds,
  };
}

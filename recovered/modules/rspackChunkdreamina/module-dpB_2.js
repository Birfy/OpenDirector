import a from "Ut";
export function B(e, t) {
  let i;
  let n;
  const r = {};
  if (t && t.length !== 0) {
    const o = t.find((e) => e.abilityName === a.DABlendAbilityName.IpKeep);
    if (o) {
      const { ipData } = o;
      if (ipData.length !== 0) {
        r.aiRoleCnt = ipData.length;
        r.roleId = ipData.map((e) => e.characterId).join(",") || undefined;
        r.roleFaceIntensity =
          (i = ipData[0]) == null ? undefined : i.refIdWeight;
        r.roleSubjectIntensity =
          (n = ipData[0]) == null ? undefined : n.refIpWeight;
        e.setParams(r);
      }
    }
  }
}

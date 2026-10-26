import r from "Ut";
export function B(e, t) {
  let i;
  let n;
  const a = {};
  if (t && t.length !== 0) {
    const o = t.find((e) => e.abilityName === r.DABlendAbilityName.IpKeep);
    if (o) {
      const { ipData } = o;
      if (ipData.length !== 0) {
        a.aiRoleCnt = ipData.length;
        a.roleId = ipData.map((e) => e.characterId).join(",") || undefined;
        a.roleFaceIntensity =
          (i = ipData[0]) == null ? undefined : i.refIdWeight;
        a.roleSubjectIntensity =
          (n = ipData[0]) == null ? undefined : n.refIpWeight;
        e.setParams(a);
      }
    }
  }
}

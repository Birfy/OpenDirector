import { fq } from "./module-zbK.js";
export function Z(e) {
  const { aid, teamContext, needCompensationPrice } = e;
  return {
    aid,
    region: "cn",
    platform: 7,
    scene: fq.Teams,
    groupId: teamContext == null ? undefined : teamContext.currentTeamId,
    enterFrom: teamContext == null ? undefined : teamContext.enterFrom,
    needCompensationPrice,
  };
}

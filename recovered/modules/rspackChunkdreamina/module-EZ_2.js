import r from "Qey";
import { p } from "./module-dIc.js";
import { gs } from "./module-gd.js";
export function Q(e, t) {
  return e.filter(
    (e) => t || e.actKey !== "2026-520-dreamina-weekly-challenge",
  );
}
export function c(e) {
  let t;
  const i = (t = e.actCoverV2) == null ? undefined : t.trim();
  const o =
    e.actCoverMapV2 && Object.keys(e.actCoverMapV2).length > 0
      ? e.actCoverMapV2
      : undefined;
  const isNewInspirationAct = gs({
    actVersion: e.actVersion,
    actWorkTypeList: e.actWorkTypeList,
  });
  return {
    id: e.actKey,
    title: e.actName,
    cover: {
      type: "image",
      url: i || e.actCover,
      resolutionMap: i ? o : e.actCoverMap,
      previewUrl: e.actCoverVideo || undefined,
    },
    statusText: p({
      actStatus: e.actStatus,
      actEndTime: e.actEndTime,
      isNewInspirationAct,
    }),
    reward: ((e) => {
      let t;
      let i;
      let r;
      const e_actReward = e.actReward;
      if (e_actReward) {
        if (e_actReward.rewardType === "other") {
          if (e_actReward.other) {
            return {
              icon: "gift",
              text: e_actReward.other,
            };
          }
          return undefined;
        }
        const text =
          (t =
            (i = e_actReward.point2) != null
              ? i
              : (r = e_actReward.point) == null
                ? undefined
                : r.toString()) != null
            ? t
            : "";
        const o = Number(text);
        if (Number.isFinite(o) && o > 0) {
          return {
            icon: "point",
            text,
          };
        }
        return undefined;
      }
    })(e),
    participantText: e.actWorkTypeList.includes("external")
      ? undefined
      : r.Ay.t(
          "web_activity_participants",
          {
            num: e.actSubmitWorkNum,
            number0: e.actSubmitWorkNum,
          },
          "{number0} participants",
        ),
  };
}

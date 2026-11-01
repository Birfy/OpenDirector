import i from "oa";
import a from "bk";
import o from "f3";
import n from "SW";
import s from "K8";
export var m = {
  WebChat: "web_chat_capsule",
  WebCanvas: "web_canvas_capsule",
};
const c = "skill";
function d(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function u(e) {
  if (typeof e === "string" && e.trim().length > 0) {
    return e;
  }
}
export function g(e, t) {
  if (d(e) && Array.isArray(e.capsules)) {
    return s.TZ({
      capsules: e.capsules.flatMap((e) => {
        var r = ((e, t) => {
          if (d(e) && e.capsuleType === c && e.scene === t) {
            let r;
            let s;
            let l;
            const v = u(e.capsuleId);
            const displayFallbackText = u(e.displayFallbackText);
            const displayStarlingKey = u(e.displayStarlingKey);
            const tag =
              (s =
                (r = u(e.tag)) == null ? undefined : r.trim().toLowerCase()) ===
                "hot" || s === "new"
                ? s
                : undefined;
            const skill =
              (l = ((e) => {
                if (d(e)) {
                  const t = u(e.id);
                  const defaultTitle = u(e.defaultTitle);
                  const o = [
                    e.name,
                    e.titleStarlingKey,
                    e.descStarlingKey,
                    e.defaultDesc,
                    e.guideTextStarlingKey,
                    e.defaultGuideText,
                  ];
                  if (
                    !(
                      !t ||
                      !defaultTitle ||
                      o.some((e) => typeof e !== "string")
                    )
                  ) {
                    try {
                      return n.Q3(
                        a._(i._({}, e), {
                          id: t,
                          defaultTitle,
                        }),
                      );
                    } catch (e) {
                      return;
                    }
                  }
                }
              })(e.officialSkillInfo)) != null
                ? l
                : ((e) => {
                    if (d(e)) {
                      const skillId = u(e.skillId);
                      const skillName = u(e.skillName);
                      if (skillId && skillName) {
                        let s;
                        const l = a._(i._({}, e), {
                          skillId,
                          skillName,
                          source:
                            (s = e.source) === o.fc.User ||
                            s === o.fc.Platform ||
                            s === o.fc.Market
                              ? e.source
                              : o.fc.Platform,
                        });
                        try {
                          return n.T0(l);
                        } catch (e) {
                          return;
                        }
                      }
                    }
                  })(e.skillInfo);
            if (v && displayFallbackText && skill) {
              return a._(
                i._(
                  {
                    id: v,
                    type: c,
                    displayFallbackText,
                  },
                  displayStarlingKey
                    ? {
                        displayStarlingKey,
                      }
                    : {},
                  tag
                    ? {
                        tag,
                      }
                    : {},
                ),
                {
                  skill,
                },
              );
            }
          }
        })(e, t);
        if (r) {
          return [r];
        }
        return [];
      }),
    });
  }
  return s.xz(-1, "invalid capability capsules response");
}

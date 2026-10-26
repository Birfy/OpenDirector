import r from "NY";
import n from "QWK";
import a from "AAv";
import o from "kT";
import s from "xi";
import l from "./module-Ye_3.js";
import { H } from "./module-W4.js";
import d from "HNM";
import p from "oa";
import f from "bk";
import b from "vpF";
import S from "kUI";
const u = new Set(["model", "view", "text"]);
const h = new Set(["text", "rich_text"]);
function m(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function g(e) {
  if (typeof e === "string") {
    return e.trim().length > 0;
  }
  return typeof e === "number" && Number.isFinite(e);
}
function v(e) {
  return e === undefined || typeof e === "string";
}
function _(e) {
  if (e == null) {
    return undefined;
  }
  return e.trim().replace(/^`|`$/g, "").trim();
}
function w(e) {
  return f._(p._({}, e), {
    source: "imc",
  });
}
export class W {
  fetchCurrentIntroConfig(e) {
    return r
      ._(function* (e) {
        const { hasShown, getStartupResult, now, isUs, isOversea } = e;
        const [l, configs] = yield Promise.all([
          this._fetchVimoConfig(hasShown).catch(() => undefined),
          this._fetchImcConfigs(),
        ]);
        return (
          l ||
          (yield (function (e) {
            return r
              ._(function* (e) {
                const {
                  configs,
                  hasShown,
                  getStartupResult,
                  now = () => new Date(),
                  isUs = false,
                  isOversea = false,
                } = e;
                if (configs) {
                  const c = b(now());
                  for (const d of [...configs]
                    .sort(
                      (e, t) =>
                        b(t.startTime).valueOf() - b(e.startTime).valueOf(),
                    )
                    .filter((e) => {
                      var t = w(e);
                      return (
                        e.status &&
                        c.isAfter(b(e.startTime)) &&
                        c.isBefore(b(e.endTime)) &&
                        !hasShown(t) &&
                        (!isUs || !!e.displayInUs)
                      );
                    })) {
                    if (
                      yield ((e, t) =>
                        r._(function* () {
                          let i;
                          const { audienceControl } = e;
                          if (!audienceControl) {
                            return true;
                          }
                          if (audienceControl !== a.Cy.NotBuyTeams) {
                            return false;
                          }
                          const n = yield t();
                          return (
                            (n == null || (i = n.userTag) == null
                              ? undefined
                              : i.isNotBuyTeams) === true
                          );
                        })())(d, getStartupResult)
                    ) {
                      const u = w(d);
                      if (
                        yield ((e, t, i) =>
                          r._(function* () {
                            if (S.x2[i ? "i18n" : "cn"] !== e.id) {
                              return false;
                            }
                            const r = yield t();
                            return (
                              (r == null
                                ? undefined
                                : r.libraConfig.dreaminaPopupWindowConfig
                                    .isHideNewModelPopupWindow) === true
                            );
                          })())(u, getStartupResult, isOversea)
                      ) {
                        return;
                      }
                      return u;
                    }
                  }
                }
              })
              .apply(this, arguments);
          })({
            configs,
            hasShown,
            getStartupResult,
            now,
            isUs,
            isOversea,
          }))
        );
      })
      .apply(this, arguments);
  }
  _fetchVimoConfig(e) {
    return r
      ._(function* () {
        let t;
        let i;
        let r;
        let n;
        const a =
          yield this._introDialogResourcePositionRepository.queryIntroDialogResourcePosition();
        const o =
          (t =
            a == null || (r = a.resourceInfo) == null ? undefined : r[l.i]) !=
          null
            ? t
            : a == null || (n = a.resourceInfo) == null
              ? undefined
              : n[l.M];
        const s = o == null ? undefined : o.material;
        const c =
          (i = o == null ? undefined : o.planId) != null
            ? i
            : o == null
              ? undefined
              : o.plan_id;
        return ((e) => {
          if (!e) {
            return [];
          }
          if (Array.isArray(e)) {
            return e;
          }
          const e_list = e.list;
          if (Array.isArray(e_list)) {
            return e_list;
          }
          if (m(e)) {
            return [e];
          }
          return [];
        })(s)
          .flatMap((e, t) => {
            var i = ((e, t) => {
              let i;
              let r;
              let n;
              const id = g(e.id) ? e.id : t;
              if (
                !g(id) ||
                (e.modalType && !u.has(e.modalType)) ||
                (e.descriptionType && !h.has(e.descriptionType)) ||
                (e.mediaType !== "image" && e.mediaType !== "video") ||
                !v(e.imageUrl) ||
                !v(e.videoUrl)
              ) {
                return;
              }
              const imageUrl = _(e.imageUrl);
              const videoUrl = _(e.videoUrl);
              if (
                (e.mediaType !== "image" || imageUrl) &&
                (e.mediaType !== "video" || videoUrl)
              ) {
                if (
                  ((i = e.videoHasVolume) === undefined ||
                    typeof i === "boolean") &&
                  v(e.description) &&
                  v(e.primaryButton) &&
                  v(e.secondaryButton) &&
                  (e.secondaryLink === undefined || d.Zp(e.secondaryLink)) &&
                  typeof e.title === "string" &&
                  e.title
                ) {
                  const primaryConfig = ((e) => {
                    if (e === undefined || !m(e)) {
                      return;
                    }
                    const { generateType, modelKey, primaryLink, routeConfig } =
                      e;
                    const primaryLink_1 =
                      typeof primaryLink === "string" ? primaryLink : undefined;
                    if (
                      !v(generateType) ||
                      !v(modelKey) ||
                      (primaryLink_1 !== undefined &&
                        !primaryLink_1.startsWith("guide:") &&
                        !primaryLink_1.startsWith("vip:") &&
                        !d.Zp(primaryLink_1))
                    ) {
                      return;
                    }
                    if (routeConfig === undefined) {
                      return {
                        generateType,
                        modelKey,
                        primaryLink: primaryLink_1,
                      };
                    }
                    if (
                      m(routeConfig) &&
                      typeof routeConfig.routeId === "string"
                    ) {
                      const { params, queryEntries } = routeConfig;
                      if (
                        (params === undefined ||
                          (m(params) &&
                            Object.values(params).every(
                              (e) => typeof e === "string",
                            ))) &&
                        (queryEntries === undefined ||
                          (Array.isArray(queryEntries) &&
                            queryEntries.every(
                              (e) =>
                                m(e) &&
                                typeof e.key === "string" &&
                                typeof e.value === "string",
                            )))
                      ) {
                        return {
                          generateType,
                          modelKey,
                          primaryLink: primaryLink_1,
                          routeConfig: {
                            routeId: routeConfig.routeId,
                            params,
                            queryEntries,
                          },
                        };
                      }
                    }
                  })(e.primaryConfig);
                  if (e.primaryConfig === undefined || primaryConfig) {
                    const c = e.descriptionType === "rich_text";
                    return {
                      id,
                      source: "vimo",
                      modalType: (r = e.modalType) != null ? r : "view",
                      mediaType: e.mediaType,
                      imageUrl,
                      videoUrl,
                      videoHasVolume: e.videoHasVolume,
                      titleText: e.title,
                      titleStarlingKey: e.title,
                      descType: (n = e.descriptionType) != null ? n : "text",
                      descRichText: c ? e.description : undefined,
                      descText: c ? undefined : e.description,
                      descStarlingKey: c ? undefined : e.description,
                      primaryText: e.primaryButton,
                      primaryStarlingKey: e.primaryButton,
                      primaryConfig,
                      secondaryText: e.secondaryButton,
                      secondaryStarlingKey: e.secondaryButton,
                      secondaryLink: e.secondaryLink,
                    };
                  }
                }
              }
            })(e, c === undefined ? undefined : "".concat(c, "-").concat(t));
            if (i) {
              return [i];
            }
            return [];
          })
          .find((t) => !e(t));
      })
      .call(this);
  }
  _fetchImcConfigs() {
    return r
      ._(function* () {
        try {
          const e = yield this._dreaminaImcConfigService.getImcConfigByKey(
            a.r1.IntroDialogConfigs,
          );
          if (e != null) {
            return e;
          }
          return undefined;
        } catch (error) {
          s.V.warn("[IntroDialog][IMC] configs fetch failed", {
            error,
          });
          return;
        }
      })
      .call(this);
  }
  constructor(e, t) {
    this._dreaminaImcConfigService = e;
    this._introDialogResourcePositionRepository = t;
  }
}
W = n.Cg(
  [
    n.Qj(0, o.R),
    n.Qj(1, H),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      o.R === undefined ? Object : o.R,
      H === undefined ? Object : H,
    ]),
  ],
  W,
);

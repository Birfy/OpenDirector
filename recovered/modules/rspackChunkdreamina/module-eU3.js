import i from "NY";
import a from "QWK";
import o from "T7";
import n from "kT";
import s from "TK";
import l from "xi";
import c from "zP";
import d from "Bh7";
import u from "Lha";
import v from "lBw";
import h from "oa";
import p from "bk";
import m from "cO";
import g from "Qey";
import _ from "Wl";
import y from "m1";
import { KX } from "./module-gHz_2.js";
import k from "EZ";
import b from "AAv";
import * as w from "./module-Pm_3.js";
function S(e, t) {
  const r = g.Ay.t(e, {}, t);
  if (r == null) {
    return t;
  }
  return String(r);
}
export class E {
  load() {
    return i
      ._(function* () {
        const e = w.v4;
        const [t, r] = yield Promise.allSettled([
          this._loadBanners(),
          this._loadActivities(e),
        ]);
        const i = this._getSettledValue(t, "banner");
        const a = this._getSettledValue(r, "activity");
        return [...i, ...a].slice(0, e);
      })
      .call(this);
  }
  _loadBanners() {
    return i
      ._(function* () {
        const e = yield this._imcConfigService.getImcConfigByKey(
          b.r1.HomeBannerConfig,
        );
        const ignoreTimeWindow =
          typeof window !== "undefined" &&
          new URLSearchParams(window.location.search).get(
            "debug_home_banner_time",
          ) === "1";
        return (function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : Date.now();
          const r =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : S;
          const {
            ignoreTimeWindow = false,
            videoEnabled = false,
            shortDramaEnabled = _.T7(),
          } = arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : {};
          return e
            .filter((e) => {
              var r;
              return (
                e.isShow &&
                (videoEnabled ||
                  !((r = e.displayVid) == null ? undefined : r.trim())) &&
                (ignoreTimeWindow || y.P$(e.startTime, e.endTime, t))
              );
            })
            .sort((e, t) => {
              var r = Number.isFinite(e.sortWeight) ? e.sortWeight : undefined;
              var i = Number.isFinite(t.sortWeight) ? t.sortWeight : undefined;
              if (r === undefined) {
                return +(i !== undefined);
              }
              if (i === undefined) {
                return -1;
              }
              return i - r;
            })
            .flatMap((e) => {
              var t;
              var i;
              var a;
              var n;
              var s;
              var l;
              var c = ((e) => {
                const { schemaInfo } = e;
                if (
                  schemaInfo === undefined ||
                  (typeof schemaInfo === "string" && !schemaInfo.trim())
                ) {
                  return {
                    type: "open-url",
                    href: m.m(e.link, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: true,
                      bid: "cc_dreamina",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: false,
                      escapeRule: "escape-report",
                      reportUrl:
                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                      htmlparserOptions: "{}",
                      scmBranch: "-",
                      scmName: "-",
                      scmVersion: "-",
                      webpackPluginVersion: "3.6.0",
                      filename:
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZEdl$0$5$mpCaFZ6$n$%RmhL-kdNe%9%Rmpi$T$z$ERKR2ExbFlRakJh$0$wNlRESm9kb%p-$lhSWmJ$WjFZbTFXZ$$4WFJtdFpXR%l3$2xoSmRX%kl%bWhq-ldReFkz-zlQ%T09",
                    }),
                  };
                }
                const r = KX(schemaInfo);
                if (r) {
                  if (r.type === "use-link") {
                    return {
                      type: "open-url",
                      href: m.m(e.link, null, {
                        logType: "js.href/src",
                        reportOnly: "false",
                        blackConfig: "{}",
                        configMode: "merge",
                        isCloseSSRReport: true,
                        bid: "cc_dreamina",
                        region: "cn",
                        urlLimit: "-1",
                        htmlLimit: "-1",
                        isSaveValidUrl: false,
                        isRuntimeLog: false,
                        isDOMParser: false,
                        escapeRule: "escape-report",
                        reportUrl:
                          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                        htmlparserOptions: "{}",
                        scmBranch: "-",
                        scmName: "-",
                        scmVersion: "-",
                        webpackPluginVersion: "3.6.0",
                        filename:
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZEdl$0$5$mpCaFZ6$n$%RmhL-kdNe%9%Rmpi$T$z$ERKR2ExbFlRakJh$0$wNlRESm9kb%p-$lhSWmJ$WjFZbTFXZ$$4WFJtdFpXR%l3$2xoSmRX%kl%bWhq-ldReFkz-zlQ%T09",
                      }),
                    };
                  }
                  return r;
                }
              })(e);
              if (
                !c ||
                (!shortDramaEnabled && c.type === "open-url" && _.lQ(c.href))
              ) {
                return [];
              }
              t = e.titleStarlingKey;
              i = e.title;
              var title = t ? r(t, i) : i;
              var u =
                (title == null ? undefined : title.trim()) ||
                ((s = e.titleStarlingKey) == null ? undefined : s.trim()) ||
                String(e.id);
              var v =
                c.type === "open-url" && _.lQ(c.href) ? c.href : undefined;
              return [
                p._(
                  h._(
                    {
                      key: "banner:".concat(e.id),
                      title,
                      coverUrl: (n = e.coverUrlV2) != null ? n : e.coverUrl,
                    },
                    ((l = e.displayVid) == null ? undefined : l.trim())
                      ? {
                          videoUrl: e.displayVid.trim(),
                        }
                      : {},
                  ),
                  {
                    clickReport: {
                      bannerType: "banner",
                      banner: v ? "short_novel" : u,
                    },
                    action: v
                      ? {
                          type: "open-url",
                          href: m.m(
                            ((a = new URL(
                              v,
                              "https://dreamina.invalid",
                            )).searchParams.set("enter_from", "create_banner"),
                            a.searchParams.set("from_page", "create"),
                            ""
                              .concat(v.trim().split(/[?#]/, 1)[0])
                              .concat(a.search)
                              .concat(a.hash)),
                            null,
                            {
                              logType: "js.href/src",
                              reportOnly: "false",
                              blackConfig: "{}",
                              configMode: "merge",
                              isCloseSSRReport: true,
                              bid: "cc_dreamina",
                              region: "cn",
                              urlLimit: "-1",
                              htmlLimit: "-1",
                              isSaveValidUrl: false,
                              isRuntimeLog: false,
                              isDOMParser: false,
                              escapeRule: "escape-report",
                              reportUrl:
                                "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                              htmlparserOptions: "{}",
                              scmBranch: "-",
                              scmName: "-",
                              scmVersion: "-",
                              webpackPluginVersion: "3.6.0",
                              filename:
                                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZEdl$0$5$mpCaFZ6$n$%RmhL-kdNe%9%Rmpi$T$z$ERKR2ExbFlRakJh$0$wNlRESm9kb%p-$lhSWmJ$WjFZbTFXZ$$4WFJtdFpXR%l3$2xoSmRX%kl%bWhq-ldReFkz-zlQ%T09",
                            },
                          ),
                        }
                      : c,
                  },
                ),
              ];
            });
        })(e != null ? e : [], Date.now(), undefined, {
          ignoreTimeWindow,
          videoEnabled: false,
        });
      })
      .call(this);
  }
  _loadActivities(count) {
    return i
      ._(function* () {
        let t;
        let r;
        const imageInfo = yield d.u();
        const language = u.d(this._i18nService.currentLocale, "other");
        const n = yield this._activityDataService.getWeeklyChallengeList(
          w.oU({
            imageInfo,
            language,
            count,
          }),
        );
        if (!n.ok) {
          return [];
        }
        const s =
          ((r =
            this._configurationService.serverAbTestManager.getAbTestValueSync(
              o.s.DreaminaMarketingBuddyEntry,
            )) == null
            ? undefined
            : r.enable) === 1;
        t = n.value.value;
        return k.Q(t, s).map((e) => {
          var actKey;
          var r;
          var i;
          var banner =
            ((r = e.actName) == null ? undefined : r.trim()) || e.actKey;
          var o = (i = e.actCoverV2) == null ? undefined : i.trim();
          var n =
            e.actCoverMapV2 && Object.keys(e.actCoverMapV2).length > 0
              ? e.actCoverMapV2
              : undefined;
          return {
            key: "activity:".concat(e.actKey),
            title: e.actName,
            coverUrl: o || e.actCover,
            coverUrlMap: o ? n : e.actCoverMap,
            clickReport: {
              bannerType: "activity",
              banner,
              actKey: e.actKey,
            },
            action:
              (actKey = e.actKey) === "feature-video-plan"
                ? {
                    type: "open-url",
                    href: m.m(
                      "/visionary?utm_medium=Product&utm_source=dreamina",
                      null,
                      {
                        logType: "js.href/src",
                        reportOnly: "false",
                        blackConfig: "{}",
                        configMode: "merge",
                        isCloseSSRReport: true,
                        bid: "cc_dreamina",
                        region: "cn",
                        urlLimit: "-1",
                        htmlLimit: "-1",
                        isSaveValidUrl: false,
                        isRuntimeLog: false,
                        isDOMParser: false,
                        escapeRule: "escape-report",
                        reportUrl:
                          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                        htmlparserOptions: "{}",
                        scmBranch: "-",
                        scmName: "-",
                        scmVersion: "-",
                        webpackPluginVersion: "3.6.0",
                        filename:
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZEdl$0$5$mpCaFZ6$n$%RmhL-kdNe%9%Rmpi$T$z$ERKR2ExbFlRakJh$0$wNlRETmtiRnB-ZEhObF$6RnFZ$WRH-zJKSFZu$mFNbF-w$1Zk%2FHTkl$bXhq-$R$d1l6Skdl$m96$m5vPQ",
                      },
                    ),
                  }
                : {
                    type: "activity-detail",
                    actKey,
                  },
          };
        });
      })
      .call(this);
  }
  _getSettledValue(e, t) {
    if (e.status === "fulfilled") {
      return e.value;
    }
    l.V.error(
      "MarketingResourceDataService",
      "Failed to load ".concat(t, " resources"),
      e.reason,
    );
    return [];
  }
  constructor(e, t, r, i) {
    this._activityDataService = e;
    this._imcConfigService = t;
    this._i18nService = r;
    this._configurationService = i;
  }
}
E = a.Cg(
  [
    a.Qj(0, v.C),
    a.Qj(1, n.R),
    a.Qj(2, c.n),
    a.Qj(3, s.a),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      v.C === undefined ? Object : v.C,
      n.R === undefined ? Object : n.R,
      c.n === undefined ? Object : c.n,
      s.a === undefined ? Object : s.a,
    ]),
  ],
  E,
);

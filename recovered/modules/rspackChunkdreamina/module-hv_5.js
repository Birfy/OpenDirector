import a from "NY";
import r from "QWK";
import i from "K8";
import o from "yF";
import l from "KC";
import s from "qN";
import c from "dR";
import u from "K6J";
import d from "fg";
import m from "fm";
import p from "b5";
import v from "iN";
import h from "Kt";
import g from "cBI";
import { m as m_1 } from "./module-nqL_2.js";
import { F } from "./module-ui_3.js";
import { n as n_1 } from "./module-Erg_2.js";
import y from "oa";
import { A } from "./module-crc_2.js";
import k from "SZS";
import C from "kV9";
import j from "A0";
import w from "dzV";
function M(e) {
  if (typeof e === "number") {
    return A(e);
  }
  return Infinity;
}
class T {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new l.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        g.U(e, t),
        s.Wh(t),
        c.vo(t),
        o.P(t),
        u.U(t),
        t);
    }
    return this._networkClientInstance;
  }
  fetchAgentConfig() {
    return a
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                needCache: true,
              };
        try {
          let t;
          let n;
          let a;
          let r;
          let o;
          let l;
          let s;
          let c;
          let u;
          let v;
          const { needCache, needRefresh } = e;
          const b = yield this._networkClient.post(
            this._getUrl(n_1.GET_AGENT_CONFIG),
            {},
            {
              params: {
                needCache,
                needRefresh,
              },
            },
          );
          const x = d.o(b.data, m.Cb);
          return i.TZ({
            inferenceData: x.inferenceData,
            imageData: m_1(x.imageData),
            videoData: this._transformVideoModelConfigs(x.videoData),
            showCanvasAgentInput: x.showCanvasAgentInput,
            showCreationModeSelector: x.showCreationModeSelector === true,
            starlingMapping: x.starlingMapping,
            userCustomSkillsConfig: x.userCustomSkillsConfig,
            referenceLimits: {
              materialLimits:
                ((n = t = x.referenceResourceConfig),
                (v = {
                  image: {
                    minHeight: 0,
                    maxHeight: Infinity,
                    minWidth: 0,
                    maxWidth: Infinity,
                    minAspectRatio: 0,
                    maxAspectRatio: Infinity,
                    minTotalPixels: 0,
                    maxTotalPixels: k.IF,
                    maxFileSize: M(
                      n == null ? undefined : n.maxImageFileSizeMb,
                    ),
                    acceptedFileTypes: C.R,
                  },
                  video: {
                    minHeight: 0,
                    maxHeight: Infinity,
                    minWidth: 0,
                    maxWidth: Infinity,
                    minAspectRatio: 0,
                    maxAspectRatio: Infinity,
                    minTotalPixels: 0,
                    maxTotalPixels: Infinity,
                    minDuration:
                      (a = n == null ? undefined : n.minVideoDuration) != null
                        ? a
                        : 0,
                    maxDuration:
                      (r = n == null ? undefined : n.maxVideoDuration) != null
                        ? r
                        : Infinity,
                    maxFileSize: M(
                      n == null ? undefined : n.maxVideoFileSizeMb,
                    ),
                    acceptedFileTypes: j.P,
                  },
                  audio: {
                    minDuration:
                      (o = n == null ? undefined : n.minAudioDuration) != null
                        ? o
                        : 0,
                    maxDuration:
                      (l = n == null ? undefined : n.maxAudioDuration) != null
                        ? l
                        : Infinity,
                    maxFileSize: M(
                      n == null ? undefined : n.maxAudioFileSizeMb,
                    ),
                    acceptedFileTypes: w.M,
                  },
                })),
              materialCombinationRule: ((e) => {
                const allOfConditions = [];
                const n = {
                  image: e == null ? undefined : e.maxImageCount,
                  video: e == null ? undefined : e.maxVideoCount,
                  audio: e == null ? undefined : e.maxAudioCount,
                };
                for (const a of ["image", "video", "audio"]) {
                  const maxTotalCount = n[a];
                  if (typeof maxTotalCount === "number") {
                    allOfConditions.push({
                      materialTypes: [a],
                      maxTotalCount,
                    });
                  }
                }
                if (
                  typeof (e == null ? undefined : e.maxResourceCount) ===
                  "number"
                ) {
                  allOfConditions.push({
                    materialTypes: [],
                    maxTotalCount: e.maxResourceCount,
                  });
                }
                if (
                  typeof (e == null ? undefined : e.maxTotalVideoDuration) ===
                  "number"
                ) {
                  allOfConditions.push({
                    materialTypes: ["video"],
                    maxTotalDuration: e.maxTotalVideoDuration,
                  });
                }
                if (
                  typeof (e == null ? undefined : e.maxTotalAudioDuration) ===
                  "number"
                ) {
                  allOfConditions.push({
                    materialTypes: ["audio"],
                    maxTotalDuration: e.maxTotalAudioDuration,
                  });
                }
                if (allOfConditions.length > 0) {
                  return {
                    allOfConditions,
                    anyOfCombinations: [],
                  };
                }
              })(t),
              acceptedFileTypes: y._(
                {},
                (s = v.image) == null ? undefined : s.acceptedFileTypes,
                (c = v.video) == null ? undefined : c.acceptedFileTypes,
                (u = v.audio) == null ? undefined : u.acceptedFileTypes,
              ),
            },
            promptMaxLength: x.promptMaxLength,
          });
        } catch (error) {
          return p.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: v.X.DEFAULT,
      path,
    });
  }
  _transformVideoModelConfigs(e) {
    const modelList = e.modelList.map((t) => F(t, e.featureConf));
    const defaultModel = modelList[e.defaultModelIdx];
    const e_forbiddenDisplay = e.forbiddenDisplay;
    const { modelReqKeyEmptyReplace } = e;
    return {
      modelList,
      defaultModel,
      disabled: e_forbiddenDisplay,
      modelReqKeyEmptyReplace,
    };
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
export { T as o };
T = r.Cg(
  [
    r.Qj(0, h._),
    r.Qj(1, v.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      h._ === undefined ? Object : h._,
      v.r === undefined ? Object : v.r,
    ]),
  ],
  T,
);

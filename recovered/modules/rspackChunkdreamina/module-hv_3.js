import n from "NY";
import o from "QWK";
import a from "K8";
import l from "yF";
import r from "KC";
import d from "qN";
import u from "dR";
import s from "K6J";
import g from "fg";
import c from "fm";
import m from "b5";
import f from "iN";
import v from "Kt";
import p from "cBI";
import { m as m_1 } from "./module-nqL.js";
import { F } from "./module-ui.js";
import { n as n_1 } from "./module-Erg.js";
import y from "oa";
import { A as A_1 } from "./module-crc.js";
import S from "SZS";
import D from "kV9";
import b from "A0";
import A from "dzV";
function x(e) {
  if (typeof e === "number") {
    return A_1(e);
  }
  return Infinity;
}
class T {
  get _networkClient() {
    let e;
    let i;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (i = new r.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        p.U(e, i),
        d.Wh(i),
        u.vo(i),
        l.P(i),
        s.U(i),
        i);
    }
    return this._networkClientInstance;
  }
  fetchAgentConfig() {
    return n
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                needCache: true,
              };
        try {
          let i;
          let t;
          let n;
          let o;
          let l;
          let r;
          let d;
          let u;
          let s;
          let f;
          const { needCache, needRefresh } = e;
          const _ = yield this._networkClient.post(
            this._getUrl(n_1.GET_AGENT_CONFIG),
            {},
            {
              params: {
                needCache,
                needRefresh,
              },
            },
          );
          const M = g.o(_.data, c.Cb);
          return a.TZ({
            inferenceData: M.inferenceData,
            imageData: m_1(M.imageData),
            videoData: this._transformVideoModelConfigs(M.videoData),
            showCanvasAgentInput: M.showCanvasAgentInput,
            showCreationModeSelector: M.showCreationModeSelector === true,
            starlingMapping: M.starlingMapping,
            userCustomSkillsConfig: M.userCustomSkillsConfig,
            referenceLimits: {
              materialLimits:
                ((t = i = M.referenceResourceConfig),
                (f = {
                  image: {
                    minHeight: 0,
                    maxHeight: Infinity,
                    minWidth: 0,
                    maxWidth: Infinity,
                    minAspectRatio: 0,
                    maxAspectRatio: Infinity,
                    minTotalPixels: 0,
                    maxTotalPixels: S.IF,
                    maxFileSize: x(
                      t == null ? undefined : t.maxImageFileSizeMb,
                    ),
                    acceptedFileTypes: D.R,
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
                      (n = t == null ? undefined : t.minVideoDuration) != null
                        ? n
                        : 0,
                    maxDuration:
                      (o = t == null ? undefined : t.maxVideoDuration) != null
                        ? o
                        : Infinity,
                    maxFileSize: x(
                      t == null ? undefined : t.maxVideoFileSizeMb,
                    ),
                    acceptedFileTypes: b.P,
                  },
                  audio: {
                    minDuration:
                      (l = t == null ? undefined : t.minAudioDuration) != null
                        ? l
                        : 0,
                    maxDuration:
                      (r = t == null ? undefined : t.maxAudioDuration) != null
                        ? r
                        : Infinity,
                    maxFileSize: x(
                      t == null ? undefined : t.maxAudioFileSizeMb,
                    ),
                    acceptedFileTypes: A.M,
                  },
                })),
              materialCombinationRule: ((e) => {
                const allOfConditions = [];
                const t = {
                  image: e == null ? undefined : e.maxImageCount,
                  video: e == null ? undefined : e.maxVideoCount,
                  audio: e == null ? undefined : e.maxAudioCount,
                };
                for (const n of ["image", "video", "audio"]) {
                  const maxTotalCount = t[n];
                  if (typeof maxTotalCount === "number") {
                    allOfConditions.push({
                      materialTypes: [n],
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
              })(i),
              acceptedFileTypes: y._(
                {},
                (d = f.image) == null ? undefined : d.acceptedFileTypes,
                (u = f.video) == null ? undefined : u.acceptedFileTypes,
                (s = f.audio) == null ? undefined : s.acceptedFileTypes,
              ),
            },
            promptMaxLength: M.promptMaxLength,
          });
        } catch (error) {
          return m.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path,
    });
  }
  _transformVideoModelConfigs(e) {
    const modelList = e.modelList.map((i) => F(i, e.featureConf));
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
  constructor(e, i) {
    this._containerService = e;
    this._httpApiSettingService = i;
  }
}
export { T as o };
T = o.Cg(
  [
    o.Qj(0, v._),
    o.Qj(1, f.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      v._ === undefined ? Object : v._,
      f.r === undefined ? Object : f.r,
    ]),
  ],
  T,
);

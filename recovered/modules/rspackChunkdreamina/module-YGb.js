import r from "oa";
import a from "bk";
import n from "Ut";
import o from "K8";
import s from "Dpr";
import d from "nGq";
import l from "k1J";
import u from "P2s";
import { X } from "./module-MGT.js";
import m from "UH9";
import { ri } from "./module-sa0.js";
import p from "hE";
import v from "Wa8";
import I from "Tz";
import _ from "yMd";
function h() {
  return ri({
    scenario: "image_video_generation",
    featureKey: "aigc_cutout",
    featureEntranceDetail: "".concat(m.F(), "-cutout"),
  });
}
export function i$(e, t) {
  let i;
  let m;
  let g;
  let f;
  let b;
  let y;
  let k;
  let S;
  let C;
  let M;
  let T;
  let A;
  let R;
  if ("targetAIGCData" in t) {
    C = l.W();
    Object.assign(
      (M = Object.assign(
        t,
        r._(
          a._(r._({}, C), {
            mode: (i = t.mode) != null ? i : n.DAAIGCMode.workbench,
            draftContent: t.targetAIGCData.draftContent,
            infiniteCanvasExtend: t.infiniteCanvasExtend,
          }),
          t.isRegenerate
            ? {
                itemId:
                  (m =
                    (y = t.targetAIGCData.refInfo) == null ||
                    (b = y.refRecordInfo) == null
                      ? undefined
                      : b.refItemId) != null
                    ? m
                    : "",
                originHistoryId:
                  (g =
                    (S = t.targetAIGCData.refInfo) == null ||
                    (k = S.refRecordInfo) == null
                      ? undefined
                      : k.refHistoryId) != null
                    ? g
                    : "",
              }
            : {
                itemId: t.itemId,
                originHistoryId:
                  (f = t.targetAIGCData.historyRecordId) != null ? f : "",
              },
        ),
      )),
      u.r(e, {
        targetAIGCData: t.targetAIGCData,
        metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
        isRegenerate: t.isRegenerate,
        submitId: C.submitId,
        input: M,
      }),
    );
    return e.createInstance(X, {
      mockDataCreator: () => {
        var e;
        var i;
        var n;
        e = t.targetAIGCData;
        n = M.submitId;
        return a._(
          r._(
            {},
            p.l({
              submitId: n,
              generateType: _.ce.Cutout,
              workspaceId: M.workspaceId,
            }),
            v.T(e),
          ),
          {
            prompt: M.prompt || "",
            refInfo: I.d(e, {
              originHistoryId: M.originHistoryId,
              itemId: M.itemId,
              isRegenerate: (i = M.isRegenerate) != null && i,
            }),
            text2imageParams: {
              largeImageInfo: e.text2imageParams.largeImageInfo,
            },
            metricsExtra: M.metricsExtra,
            isDraftGen: true,
          },
        );
      },
      processInputParamsConverter: () => o.TZ(new s.d(M).convert()),
      submitQueryParams: {
        babiParam: h(),
      },
    });
  }
  A = l.W();
  Object.assign(
    (R = Object.assign(
      t,
      a._(r._({}, A), {
        mode: (T = t.mode) != null ? T : n.DAAIGCMode.workbench,
      }),
    )),
    u.r(e, {
      metricsExtra: t.metricsExtra,
      submitId: A.submitId,
      input: R,
      isRegenerate: false,
    }),
  );
  return e.createInstance(X, {
    mockDataCreator: () => {
      var e;
      e = R.submitId;
      return a._(
        r._(
          {},
          p.l({
            submitId: e,
            generateType: _.ce.Cutout,
            workspaceId: R.workspaceId,
          }),
        ),
        {
          prompt: R.prompt || "",
          text2imageParams: {},
          metricsExtra: R.metricsExtra,
          isDraftGen: true,
        },
      );
    },
    processInputParamsConverter: () => o.TZ(new d.Y(R).convert()),
    submitQueryParams: {
      babiParam: h(),
    },
  });
}

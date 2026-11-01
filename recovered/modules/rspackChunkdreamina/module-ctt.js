import r from "gr";
import o from "Ut";
import n from "K8";
import a from "I3";
import s from "fm";
import c from "fg";
import l from "fHC";
export function sJ(e) {
  let t;
  let i;
  let n;
  let c;
  const { commonAttr, audio, extra } = e;
  const { id, title = "", effectType, webExtra } = commonAttr;
  const m = s.wN(a.j(webExtra), r.A);
  const g = s.wN(a.j(m.tonetype), r.A);
  const { isFavorite = false } = extra;
  return {
    id,
    name: title,
    isFavorite,
    audio,
    effectType,
    itemPlatform: o.CommonItemPlatform.Dmop,
    tags: Object.fromEntries(
      (t =
        (n = g.tagList) == null
          ? undefined
          : n.map((e) => {
              var { type, value } = e;
              return [type, value];
            })) != null
        ? t
        : [],
    ),
    emotions:
      (i =
        (c = g.emotion) == null
          ? undefined
          : c.map((e) => {
              var { emotion, emotionScale } = e;
              return {
                type: emotion != null ? emotion : "",
                scale: emotionScale != null ? emotionScale : 0,
              };
            })) != null
        ? i
        : [],
    isSpeedAdjustmentEnabled: !g.isNotSupportSpeechRate,
    isVoiceConversionEnabled: !!g.vcSpeakerId,
    supportedModelKeys: m.supportModelReqKeyList,
  };
}
export function QW(e) {
  const {
    commonAttr,
    audio,
    cloneVoiceInfo: { status, supportModelReqKeyList },
    extra,
  } = e;
  const { id, title = "", effectType } = commonAttr;
  const { isFavorite = false } = extra;
  return {
    id,
    name: title,
    isFavorite,
    audio,
    effectType,
    itemPlatform: o.CommonItemPlatform.Local,
    voiceCloning: {
      status,
    },
    supportedModelKeys: supportModelReqKeyList,
  };
}
export function bm(e) {
  const { itemList } = c.o(e.data);
  if (!itemList.length) {
    return n.xz(-1, "voice not found");
  }
  const [i] = itemList;
  const {
    cloneVoiceInfo: { status, failCode },
  } = i;
  if (status === l.$Q.Fail) {
    return n.xz(
      Number(failCode != null ? failCode : "-1"),
      "voice cloning failed",
    );
  }
  const a = QW(i);
  return n.TZ(a);
}
export function ME(e) {
  const { hasMore, nextOffset, itemList } = c.o(e.data);
  const list = itemList.map(QW);
  return n.TZ({
    list,
    hasMore,
    nextOffset,
  });
}
export function Dn(e) {
  let t;
  const {
    status,
    failCode,
    voiceCloneResult: { item },
  } = c.o(e.data);
  const {
    cloneVoiceInfo: { status: status_1, failCode: failCode_1 },
  } = item;
  if (status === l.k_.Fail || status_1 === l.$Q.Fail) {
    return n.xz(
      Number(
        (t = failCode_1 != null ? failCode_1 : failCode) != null ? t : "-1",
      ),
      "voice cloning failed",
    );
  }
  const voice = QW(item);
  return n.TZ({
    voice,
  });
}
export function NE(e) {
  const {
    voiceConversionResult: { taskId },
  } = c.o(e.data);
  return n.TZ({
    taskId,
  });
}
export function qp(e) {
  const { taskList } = c.o(e.data);
  return n.TZ({
    tasks: taskList.map((e) => {
      var {
        voiceConversionResult: { taskId, data },
      } = e;
      return {
        taskId,
        data,
      };
    }),
  });
}
export function M_(e) {
  const { item } = c.o(e.data);
  return n.TZ(QW(item));
}

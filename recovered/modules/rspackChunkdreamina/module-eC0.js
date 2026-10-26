import a from "z8";
import o from "Qey";
import i from "xm3";
import r from "mC";
import l from "M8X";
import s from "wF";
import c from "oq";
import u from "doF";
import d from "ED";
import m from "OR";
import p from "bT";
const h = p.memo(function (e) {
  const { maxAudioDuration } = e;
  const number0 = p.useMemo(
    () => maxAudioDuration.toFixed(1),
    [maxAudioDuration],
  );
  return a.jsx("p", {
    className: "description-hcgyIb",
    children: o.Ay.t(
      "web_dreamina_lipsync_tts_trimaudio_desc",
      {
        number0,
      },
      "你要对口型的视频为 {number0}s，请将配音裁剪至 {number0}s 以内。你也可以返回修改，删减文字或加快朗读速度后，重新生成配音。",
    ),
  });
});
const _ = d.PA(function () {
  const { digitalHumanGeneratorManager } = s.h(i.V);
  const { audioTrimManager } = digitalHumanGeneratorManager;
  const {
    metadata: { name, audioBuffer, minReservedDuration, maxReservedDuration },
    data: { startTime, endTime },
    updateStartTime,
    updateEndTime,
  } = audioTrimManager;
  if (audioBuffer) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(h, {
          maxAudioDuration: maxReservedDuration,
        }),
        a.jsx(m.B, {
          scrollbarWidth: 712,
          name,
          audioBuffer,
          minReservedDuration,
          maxReservedDuration,
          startTime,
          endTime,
          onStartTimeChange: updateStartTime,
          onEndTimeChange: updateEndTime,
        }),
      ],
    });
  }
  return null;
});
var g = (e) => {
  var { containerService } = e;
  var { digitalHumanGeneratorManager } = l.cQ(containerService, i.V);
  var { audioTrimManager, reportManager } = digitalHumanGeneratorManager;
  var { promise, resolve } = Promise.withResolvers();
  c.a.confirm({
    className: "audio-trim-modal-R5qnQU",
    title: o.Ay.t("web_dreamina_lipsync_trimaudio_title", {}, "裁剪音频长度"),
    okText: o.Ay.t("web_dreamina_lipsync_audio_trim_btn_adopt", {}, "确认裁切"),
    cancelText: o.Ay.t(
      "web_dreamina_lipsync_tts_trimaudio_btn_back_to_amend",
      {},
      "返回修改",
    ),
    afterOpen: () => {
      reportManager.reportLipSyncTrimPopup("show");
    },
    onOk: () => {
      var {
        metadata: { audioBuffer },
        data: { startTime, endTime },
      } = audioTrimManager;
      reportManager.reportLipSyncTrimPopup("confirm");
      if (audioBuffer) {
        resolve(r.r(audioBuffer, startTime, endTime));
      } else {
        resolve(null);
      }
    },
    onCancel: () => {
      resolve(null);
      reportManager.reportLipSyncTrimPopup("close");
    },
    footer: (e, n) =>
      a.jsxs(u.v, {
        minReservedDuration: audioTrimManager.metadata.minReservedDuration,
        maxReservedDuration: audioTrimManager.metadata.maxReservedDuration,
        children: [e, n],
      }),
    content: a.jsx(s.Z, {
      instantiationService: containerService,
      children: a.jsx(_, {}),
    }),
  });
  return promise;
};
export { g as o };

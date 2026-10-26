import n from "z8";
import r from "Qey";
import l from "mC";
import o from "oq";
import i from "doF";
import s from "bT";
import c from "OR";
const d = s.memo(function (e) {
  const {
    name,
    audioBuffer,
    minReservedDuration,
    maxReservedDuration,
    onStartTimeChange,
    onEndTimeChange,
  } = e;
  const [startTime, setStartTime] = s.useState(0);
  const [endTime, setEndTime] = s.useState(maxReservedDuration);
  const onStartTimeChange_1 = s.useCallback(
    (e) => {
      setStartTime(e);
      onStartTimeChange(e);
    },
    [onStartTimeChange],
  );
  const onEndTimeChange_1 = s.useCallback(
    (e) => {
      setEndTime(e);
      onEndTimeChange(e);
    },
    [onEndTimeChange],
  );
  return n.jsx(c.B, {
    scrollbarWidth: 712,
    name,
    audioBuffer,
    minReservedDuration,
    maxReservedDuration,
    startTime,
    endTime,
    onStartTimeChange: onStartTimeChange_1,
    onEndTimeChange: onEndTimeChange_1,
  });
});
export var e = (e) => {
  var { name, audioBuffer, minReservedDuration, maxReservedDuration } = e;
  var { promise, resolve } = Promise.withResolvers();
  var p = 0;
  var v = maxReservedDuration;
  o.a.confirm({
    className: "audio-trim-modal-HMQVy4",
    title: r.Ay.t("web_dreamina_lipsync_trimaudio_title", {}, "裁剪音频长度"),
    okText: r.Ay.t("web_dreamina_lipsync_audio_trim_btn_adopt", {}, "确认裁切"),
    onOk: () => {
      resolve(l.r(audioBuffer, p, v));
    },
    onCancel: () => {
      resolve(null);
    },
    footer: (e, a) =>
      n.jsxs(i.v, {
        minReservedDuration,
        maxReservedDuration,
        children: [e, a],
      }),
    content: n.jsx(d, {
      name,
      audioBuffer,
      minReservedDuration,
      maxReservedDuration,
      onStartTimeChange: (e) => {
        p = e;
      },
      onEndTimeChange: (e) => {
        v = e;
      },
    }),
  });
  return promise;
};

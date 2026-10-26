import a from "oa";
import o from "bk";
import i from "z8";
import r from "bT";
import l from "UOA";
import s from "SX";
import c from "ED";
import u from "Qey";
import d from "xm3";
import m from "wF";
import p from "XC";
import h from "Dh";
import g from "yw";
import v from "fSn";
import x from "gC";
import b from "lBB";
import j from "n3";
const _ = c.PA(function () {
  const { digitalHumanGeneratorManager } = m.h(d.V);
  const {
    metadata: { modelOptions, isModelListLoading },
    data: { modelKey },
    switchModel,
  } = digitalHumanGeneratorManager;
  const l = r.useMemo(
    () => [
      {
        label: u.Ay.t("web_new_video_settings_button_content", {}, "加载中"),
        value: "",
        extra: {},
      },
    ],
    [],
  );
  const triggerProps = r.useMemo(
    () => ({
      disabled: isModelListLoading,
    }),
    [isModelListLoading],
  );
  const onChange = p.P({
    currentValue: modelKey,
    options: modelOptions,
    onAllowedChange: switchModel,
  });
  if (isModelListLoading || modelOptions.length !== 0) {
    return i.jsx(h.W, {
      triggerProps,
      options: isModelListLoading ? l : modelOptions,
      value: modelKey,
      onChange,
    });
  }
  return null;
});
const y = c.PA(function () {
  const { digitalHumanGeneratorManager } = m.h(d.V);
  const { speechToSpeechManager } = digitalHumanGeneratorManager;
  const {
    metadata: { acceptedAudioFileTypes },
    importLocalAudio,
  } = speechToSpeechManager;
  const icon = r.useMemo(() => i.jsx(g.tTg, {}), []);
  const onClick = r.useCallback(() => {
    v.y({
      accept: acceptedAudioFileTypes,
      onFilesSelected: (e) => {
        var [n] = e;
        return importLocalAudio(n);
      },
    });
  }, [acceptedAudioFileTypes, importLocalAudio]);
  return i.jsx(x.I, {
    component: null,
    source: j.HH.Upload,
    children: i.jsx(b.E, {
      icon,
      onClick,
      children: u.Ay.t("web_avatar_audio_upload_btn", {}, "上传音频"),
    }),
  });
});
export var I = r.memo(function (e) {
  return i.jsxs(
    l.U,
    o._(a._({}, e), {
      children: [i.jsx(s.R, {}), i.jsx(_, {}), i.jsx(y, {})],
    }),
  );
});

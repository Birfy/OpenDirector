import r from "oa";
import o from "bk";
import n from "fg";
import a from "JSz";
import s from "yMd";
import c from "fHC";
export function NJ(e) {
  return n.w(
    o._(r._({}, e), {
      effectType: s.NB.ClonedVoice,
      filterOpt: {
        cloneVoiceStatus: [c.$Q.Generating, c.$Q.Success],
      },
      packLocalItemOpt: {
        needFavoriteInfo: true,
      },
    }),
  );
}
export function WP(e) {
  const { voiceId } = e;
  return n.w({
    itemIdList: [voiceId],
  });
}
export function Ez(e) {
  const { submitId, audio, name } = e;
  return n.w({
    submitId,
    scene: c.WW.VoiceCloning,
    voiceClone: {
      audio,
      name,
    },
  });
}
export function e(e) {
  const {
    audio,
    voice: { id, itemPlatform },
  } = e;
  return n.w({
    submitId: a.bz(),
    scene: c.WW.VoiceConversion,
    voiceConversion: {
      audio,
      voiceInfo: {
        idInfo: {
          id,
          itemPlatform,
        },
      },
      audioConfig: {
        format: "mp3",
        pitchRate: 0,
        sampleRate: 24000,
      },
    },
  });
}
export function JP(e) {
  const { taskIds } = e;
  return n.w({
    taskIdList: taskIds,
  });
}
export function ts(e) {
  const { voiceId } = e;
  return n.w({
    localItemId: voiceId,
  });
}
export function hZ(e) {
  const { voiceId, name } = e;
  return n.w({
    localItemId: voiceId,
    name,
  });
}
export function pG(e) {
  const { voiceId, isFavorite } = e;
  return n.w({
    itemId: voiceId,
    isFavorite,
  });
}

import i from "Ut";
import s from "zkC";
import a from "Y5t";
export function O(e) {
  if (s.m(e)) {
    let t;
    let r;
    const { audioData } = e;
    const audioVid =
      audioData == null ||
      (t = audioData.audioList[audioData.defaultIndex].audio) == null
        ? undefined
        : t.vid;
    if ((e == null || (r = e.item) == null ? undefined : r.id) && audioVid) {
      return {
        enable: true,
        videoItemId: e.item.id,
        audioVid,
        scene: a.O(e)
          ? i.DAGenerateVideoAudioScene.BGM
          : i.DAGenerateVideoAudioScene.EFFECT,
      };
    }
  }
}

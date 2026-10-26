import n from "Ut";
import a from "yMd";
export function H(e) {
  let t;
  let i;
  let o;
  let r;
  let l;
  let d;
  const { abilities } = e;
  if (
    abilities == null || (t = abilities.genVideo) == null ? undefined : t.scene
  ) {
    return abilities.genVideo.scene;
  }
  if (e.generateType === n.DAVideoGenerateType.videoTemplate) {
    return a.Jv.VideoTemplate;
  }
  const m = (i = e.abilities) == null ? undefined : i.lipSync;
  switch (m == null ? undefined : m.referenceType) {
    case n.DALipSyncReferenceType.aiVideo:
      return a.Jv.LipSync;
    case n.DALipSyncReferenceType.image:
      return a.Jv.LipSyncImage;
    case n.DALipSyncReferenceType.video:
      return a.Jv.LipSyncUserVideo;
  }
  if (
    (r = e.abilities) == null || (o = r.videoBGM) == null
      ? undefined
      : o.originItemId
  ) {
    return a.Jv.VideoBGM;
  }
  if (
    (d = e.abilities) == null || (l = d.videoAudioEffect) == null
      ? undefined
      : l.originItemId
  ) {
    return a.Jv.VideoAudioEffect;
  }
}

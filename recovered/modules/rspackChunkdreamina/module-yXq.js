import n from "Ut";
const a = [
  {
    lipSyncMode: n.DALipSyncMode.standard,
    videoMode: n.DAVideoMode.avatar,
  },
  {
    lipSyncMode: n.DALipSyncMode.loopy,
    videoMode: n.DAVideoMode.avatarLoopy,
  },
  {
    lipSyncMode: n.DALipSyncMode.hq,
    videoMode: n.DAVideoMode.avatarHq,
  },
  {
    lipSyncMode: n.DALipSyncMode.hq480,
    videoMode: n.DAVideoMode.avatarHq480,
  },
];
export var c = {
  lipSyncModeToVideoMode(e) {
    let t;
    if (e) {
      if ((t = a.find((t) => t.lipSyncMode === e)) == null) {
        return undefined;
      }
      return t.videoMode;
    }
  },
  videoModeToLipSyncMode(e) {
    let t;
    if (e) {
      if ((t = a.find((t) => t.videoMode === e)) == null) {
        return undefined;
      }
      return t.lipSyncMode;
    }
  },
};

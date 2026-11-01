import i from "yMd";
import r from "krN";
export function GT(e) {
  switch (e) {
    case "image":
      return i.Mt.Image;
    case "video":
      return i.Mt.Video;
    case "audio":
      return i.Mt.Audio;
    default:
      return i.Mt.Unknown;
  }
}
export function Ye(e) {
  if (e) {
    return GT(r.uZ(e));
  }
  return i.Mt.Unknown;
}
export function RE(e) {
  if (e.materialType === "subject") {
    return Ye(e.subjectData);
  }
  return GT(e.materialType);
}
export function io(e) {
  if (e) {
    return r.yX(e).videoDuration;
  }
  return 0;
}
export function pH(e) {
  if (e.materialType === "video") {
    let t;
    let n;
    if ((t = (n = e.videoInfo) == null ? undefined : n.duration) != null) {
      return t;
    }
    return 0;
  }
  if (e.materialType === "subject") {
    return io(e.subjectData);
  }
  return 0;
}

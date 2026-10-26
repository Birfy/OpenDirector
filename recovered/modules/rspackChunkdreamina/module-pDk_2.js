import t from "oa";
import n from "bk";
const i = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "bmp",
  "tif",
  "tiff",
  "gif",
  "heic",
  "heif",
]);
const r = new Set(["mp4", "mov"]);
const o = new Set(["wav", "mp3"]);
const l = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/bmp",
  "image/tiff",
  "image/gif",
  "image/heic",
  "image/heif",
  "image/heic-sequence",
  "image/heif-sequence",
]);
const s = new Set(["video/mp4", "video/quicktime"]);
const d = new Set([
  "audio/wav",
  "audio/x-wav",
  "audio/wave",
  "audio/mpeg",
  "audio/mp3",
]);
export var Ez = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/webp": [".webp"],
  "image/bmp": [".bmp"],
  "image/tiff": [".tif", ".tiff"],
  "image/gif": [".gif"],
  "image/heic": [".heic"],
  "image/heif": [".heif"],
  "image/heic-sequence": [".heic"],
  "image/heif-sequence": [".heif"],
};
export var _p = {
  "video/mp4": [".mp4"],
  "video/quicktime": [".mov"],
};
export var hp = {
  "audio/wav": [".wav"],
  "audio/x-wav": [".wav"],
  "audio/wave": [".wav"],
  "audio/mpeg": [".mp3"],
  "audio/mp3": [".mp3"],
};
export var aH = t._({}, Ez, _p, hp);
function F(e, u, a) {
  let t;
  let n;
  const i = e.type.toLowerCase();
  if (i && u.has(i)) {
    return true;
  }
  const r =
    (n = (t = e.name.split(".").pop()) == null ? undefined : t.toLowerCase()) &&
    n !== e.name.toLowerCase()
      ? n
      : undefined;
  return !!(r && a.has(r));
}
export function uJ(e) {
  if (F(e, l, i)) {
    return "image";
  }
  if (F(e, s, r)) {
    return "video";
  }
  if (F(e, d, o)) {
    return "audio";
  }
}
export function vG(e) {
  let u;
  let a;
  let t;
  let n;
  let i;
  let r;
  if (typeof e.duration === "number") {
    return e.duration;
  }
  if (e.type === "video") {
    if ((u = (a = e.videoInfo) == null ? undefined : a.duration) != null) {
      return u;
    }
    if ((n = e.videoInfo) == null || (t = n.originVideo) == null) {
      return undefined;
    }
    return t.duration;
  }
  if (e.type === "audio") {
    if ((r = e.audioInfo) == null || (i = r.originAudio) == null) {
      return undefined;
    }
    return i.duration;
  }
}
export function bu(e, u) {
  let a;
  let i;
  let r;
  let o;
  let l;
  let s;
  let d;
  let c;
  let m;
  let p;
  let v;
  let F;
  let A;
  let h;
  let E;
  let f;
  let D;
  let b;
  return n._(t._({}, e), {
    uploadStatus: ((e) => {
      switch (e) {
        case "success":
          return "success";
        case "failed":
          return "failed";
        case "cancelled":
          return "cancelled";
        case "pending":
          return "pending";
        default:
          return "uploading";
      }
    })(u.status),
    uploadErrorMessage: u.errorMessage,
    width: (a = u.width) != null ? a : e.width,
    height: (i = u.height) != null ? i : e.height,
    duration:
      (r =
        (o =
          (l = (v = u.videoInfo) == null ? undefined : v.duration) != null
            ? l
            : (A = u.videoInfo) == null || (F = A.originVideo) == null
              ? undefined
              : F.duration) != null
          ? o
          : (E = u.audioInfo) == null || (h = E.originAudio) == null
            ? undefined
            : h.duration) != null
        ? r
        : e.duration,
    coverUrl:
      (s =
        (d = (f = u.videoInfo) == null ? undefined : f.coverUrl) != null
          ? d
          : (b = u.videoInfo) == null || (D = b.originVideo) == null
            ? undefined
            : D.coverUrl) != null
        ? s
        : e.coverUrl,
    imageInfo: (c = u.imageInfo) != null ? c : e.imageInfo,
    videoInfo: (m = u.videoInfo) != null ? m : e.videoInfo,
    audioInfo: (p = u.audioInfo) != null ? p : e.audioInfo,
  });
}

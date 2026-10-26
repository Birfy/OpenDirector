import _ from "NRL";
import f from "Wo";
import h from "ji";
import S from "I5";
import g from "Po";
import y from "hqQ";
import w from "JTJ";
let a;
let o;
let i;
let n;
let c;
let l;
let s;
let d;
let u;
let p;
let C;
if (require.j == "wl4") var I = require("Se3");
function b(size) {
  let t = "";
  t =
    size < 102.4
      ? `${size.toFixed(2)}B`
      : size < 104857.6
        ? `${(size / 1024).toFixed(2)}KB`
        : size < 1073741824
          ? `${(size / 1048576).toFixed(2)}MB`
          : size < 1099511627776
            ? `${(size / 1073741824).toFixed(2)}GB`
            : `${(size / 1099511627776).toFixed(2)}TB`;
  let r = `${t}`;
  let a = r.indexOf(".");
  if (r.substr(a + 1, 2) == "00") {
    return r.substring(0, a) + r.substr(a + 3, 2);
  }
  return t;
}
a = {
  file: {
    acceptType: ["application/zip"],
    acceptSuffix: [".zip"],
  },
  video: {
    acceptType: [
      "video/mp4",
      "video/mov",
      "video/m4v",
      "video/x-flv",
      "video/quicktime",
      "video/avi",
      "video/webm",
      "video/mp2t",
      "video/x-ms-asf",
    ],
    acceptSuffix: [
      ".mp4",
      ".mov",
      ".m4v",
      ".flv",
      ".mkv",
      ".avi",
      ".webm",
      ".wmv",
      ".rm",
      ".rmvb",
      ".3gp",
      ".m2ts",
      ".mt2s",
      ".m2t",
      ".mxf",
      ".mpg",
      ".mpeg",
      ".mpe",
      ".ts",
      ".mts",
      ".qt",
      ".asf",
    ],
  },
  audio: {
    acceptType: [
      "audio/mp3",
      "audio/mpeg",
      "audio/m4a",
      "audio/x-m4a",
      "audio/wav",
      "audio/flac",
    ],
    acceptSuffix: [
      ".mp3",
      ".flac",
      ".m4a",
      ".wav",
      ".aac",
      ".oga",
      ".ogg",
      ".wma",
      ".amr",
      ".aif",
      ".aiff",
      ".ac3",
      ".mpa",
      ".ape",
      ".mac",
      ".mp2",
      ".acc",
    ],
  },
  image: {
    acceptType: [
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "image/bmp",
      "image/png",
      "image/gif",
      "image/heif",
      "image/heic",
      "image/tiff",
      "image/x-tiff",
      "image/x-icon",
      "image/vnd.microsoft.icon",
      "image/svg+xml",
      "image/vnd.adobe.photoshop",
      "image/avif",
    ],
    acceptSuffix: [
      ".jpeg",
      ".jpg",
      ".png",
      ".gif",
      ".heif",
      ".heic",
      ".tiff",
      ".tif",
      ".ico",
      ".svg",
      ".svgz",
      ".psd",
      ".avif",
    ],
  },
};
o = (e) => {
  let acceptType = a[e].acceptType;
  let acceptSuffix = a[e].acceptSuffix;
  return [...acceptType, ...acceptSuffix].join(",");
};
let j = {
  file: {
    ...a.file,
    accept: o("file"),
  },
  video: {
    ...a.video,
    accept: o("video"),
  },
  audio: {
    ...a.audio,
    accept: o("audio"),
  },
  image: {
    ...a.image,
    accept: o("image"),
  },
  allAccept: `${o("video")},${o("audio")},${o("image")}`,
};
function k({ file, accepts = ["audio", "video", "image"] }) {
  let r = file.name.lastIndexOf(".");
  let a = "";
  if (r !== -1) {
    a = file.name.substr(r);
  }
  if (a) {
    for (let e of accepts) {
      if (j[e].acceptSuffix.includes(a.toLocaleLowerCase())) {
        return e;
      }
    }
  }
  let o = file.type.toLocaleLowerCase();
  if (o) {
    for (let e of accepts) {
      if (j[e].acceptType.includes(o)) {
        return e;
      }
    }
  }
}
export function xI(e) {
  if (!e) {
    return "file";
  }
  for (let [t, r] of Object.entries({
    video: [
      "application/vnd.rn-realmedia-vbr",
      "application/vnd.rn-realmedia",
      "application/mxf",
    ],
    audio: ["application/x-wav", "application/ogg", "video/x-ms-wma"],
    image: [],
  })) {
    if (r.includes(e.toLocaleLowerCase())) {
      return t;
    }
  }
  if (e.toLowerCase().startsWith("video")) {
    return "video";
  }
  if (e.toLowerCase().startsWith("image")) {
    return "image";
  }
  if (e.toLowerCase().startsWith("audio")) {
    return "audio";
  }
  return "file";
}
function x(e) {
  let t;
  let { obj, serializeKey, targetKey } = e;
  try {
    t = JSON.parse(obj[serializeKey]);
  } catch (e) {
    console.warn(
      `${serializeKey} \u{5B57}\u{6BB5}\u{975E}\u{6CD5},\u{65E0}\u{6CD5}\u{89E3}\u{6790}\u{8BE5}\u{5B57}\u{6BB5}\u{5185}\u{5BB9}`,
      obj,
    );
  }
  return {
    ...obj,
    [targetKey]: t,
  };
}
export let Pb = {
  FILM_ASSET: "10001",
  MID_PRODUCT: "40001",
  AIGC_VIDEO: "60001",
};
const A = {
  USER_SPACE_SIZE_CHANGE: "USER_SPACE_SIZE_CHANGE",
};
s = {};
s[(s.VA = 0)] = "VA";
s[(s.GCP = 1)] = "GCP";
s[(s.CN = 2)] = "CN";
export var BO = s;
let R = {
  [BO.VA]: "va",
  [BO.GCP]: "gcp",
};
let E = [200, 360, 480, 720, 1080, 2400, "origin"];
let B = "origin";
let N = {
  0: "origin",
  1: 200,
  2: 360,
  3: 480,
  4: 720,
  5: 1080,
  6: 2400,
};
let L = {
  origin: 0,
  200: 1,
  360: 2,
  480: 3,
  720: 4,
  1080: 5,
  2400: 6,
};
d = {};
d[(d.UNTRANSCODE = -1)] = "UNTRANSCODE";
d[(d.SUCCESS = 0)] = "SUCCESS";
d[(d.TRANSCODING = 1)] = "TRANSCODING";
d[(d.FAILED = 2)] = "FAILED";
d[(d.TIMEOUT = 3)] = "TIMEOUT";
d[(d.CANCEL = -2)] = "CANCEL";
const F = d;
let J = {
  360: [640, 360],
  480: [854, 480],
  720: [1280, 720],
  1080: [1920, 1080],
};
let O = "video";
let Q = "package";
class W {
  constructor(e) {
    this._sourceData = e;
  }
}
u = {};
u[(u.NORMAL = 0)] = "NORMAL";
u[(u.SCRIPT = 3)] = "SCRIPT";
u[(u.GRAPHIC = 5)] = "GRAPHIC";
const U = u;
p = {};
p[(p.EDIT = 0)] = "EDIT";
p[(p.TEMPLATE = 1)] = "TEMPLATE";
p[(p.IMAGE_TEXT = 2)] = "IMAGE_TEXT";
p[(p.SCRIPT = 3)] = "SCRIPT";
p[(p.TOOL = 4)] = "TOOL";
p[(p.GRAPHIC = 5)] = "GRAPHIC";
const q = p;
C = {};
C[(C.PERSONAL = 1)] = "PERSONAL";
C[(C.PUBLIC = 0)] = "PUBLIC";
const G = C;
class V extends W {
  constructor(obj, t) {
    super(
      x({
        obj,
        serializeKey: "meta",
        targetKey: "_meta",
      }),
    );
    this.sdk = t;
  }
  get isValid() {
    return !h.A(this._sourceData._meta);
  }
  get id() {
    return this.notOnlyId;
  }
  get notOnlyId() {
    return this._sourceData.id;
  }
  get md5() {
    return this._sourceData.md5;
  }
  get name() {
    return this.entry?.entry_name || this._sourceData.file_name;
  }
  get author() {
    return this._sourceData.author;
  }
  get sourcePath() {
    return this._sourceData.source_path;
  }
  get mime() {
    return this._sourceData.mime;
  }
  get subType() {
    return this._sourceData.sub_type;
  }
  get size() {
    return this._sourceData.size;
  }
  get sizeStr() {
    return b(this.size);
  }
  get filterList() {
    return this._sourceData.filter_list || [];
  }
  get type() {
    return "file";
  }
  get width() {
    return this._sourceData.width;
  }
  get height() {
    return this._sourceData.height;
  }
  get updatedAt() {
    return (
      1000 *
      (this._sourceData?.entry?.access_at_ts || this._sourceData.updated_at_ts)
    );
  }
  get createdAt() {
    return 1000 * this._sourceData.uploaded_at;
  }
  get downloadUrl() {
    return this._sourceData.asset_meta?.download_url;
  }
  get meta() {
    return this._sourceData?._meta;
  }
  get status() {
    return this._sourceData?.status;
  }
  get permission() {
    if (qm.isGroupSdk) {
      return this._sourceData.permission || G.PUBLIC;
    }
    return G.PERSONAL;
  }
  get isPublic() {
    return this.permission === G.PUBLIC;
  }
  get isPersonal() {
    return this.permission === G.PERSONAL;
  }
  get owner() {
    return this._sourceData?._meta?.uploadSource?.owner;
  }
  get uploadedAt() {
    return 1000 * this._sourceData.uploaded_at;
  }
  get entryId() {
    return this._sourceData.entry_id;
  }
  get entry() {
    return this._sourceData.entry || this._sourceData.entry_data;
  }
  get sourceData() {
    return this._sourceData;
  }
  get hasMaterialTag() {
    return this._sourceData.has_material_tag;
  }
}
class H extends V {
  get type() {
    return "audio";
  }
  get duration() {
    return this._sourceData.duration;
  }
  get unencryptedPreviewUrl() {
    return this._sourceData?.unencryptedPlayInfo?.info?.audio?.primary_url;
  }
  get transcodeStatus() {
    return this._sourceData.transcode_status;
  }
}
class z extends V {
  get type() {
    return "image";
  }
  get previewUrl() {
    if (this.imageTranscodeInfo[360]?.status_code === F.SUCCESS) {
      return this.imageTranscodeInfo[360].preview_url;
    }
    return this._sourceData?.asset_meta?.preview360_url;
  }
  get previewKey() {
    if (this.imageTranscodeInfo[360]?.status_code === F.SUCCESS) {
      return this.imageTranscodeInfo[360].key;
    }
    return this._sourceData?.asset_meta?.key;
  }
  get preview72Url() {
    if (this.imageTranscodeInfo[720]?.status_code === F.SUCCESS) {
      return this.imageTranscodeInfo[720].preview_url;
    }
    return this._sourceData?.asset_meta?.preview720_url;
  }
  get imageAsyncResize() {
    return !!this._sourceData.image_async_resize;
  }
  getTranscodeStatus(e) {
    let t = {};
    (e?.length ? e : E).forEach((e) => {
      let r = `preview${e}_url`;
      let a = this._sourceData?.asset_meta?.[r];
      let o = e === B ? e : `p_${e}`;
      let i = this._sourceData.image_transcode_info?.[o];
      if (i) {
        t[e] = i.status_code;
      } else if (a) {
        t[e] = F.SUCCESS;
      } else if (this.imageAsyncResize) {
        t[e] = F.TRANSCODING;
      } else {
        t[e] = F.UNTRANSCODE;
      }
    });
    return t;
  }
  get imageTranscodeInfo() {
    let e = {};
    E.forEach((t) => {
      let r = `preview${t}_url`;
      let preview_url = this._sourceData?.asset_meta?.[r];
      let o = t === B ? t : `p_${t}`;
      let i = this._sourceData.image_transcode_info?.[o];
      if (i) {
        e[t] = {
          ...i,
          key: this._sourceData.image_transcode_info.key,
        };
      } else if (preview_url && !e[t]?.preview_url) {
        let r = this.getPreviewSizeByResolution(t);
        e[t] = {
          preview_url,
          width: r.width,
          height: r.height,
          status_code: F.SUCCESS,
          key: this._sourceData?.asset_meta?.key,
        };
      }
    });
    return e;
  }
  async getPreviewInfo(e) {
    if (this.sdk) {
      return this.sdk.getImagePreviewInfo(this, e);
    }
    return this.imageTranscodeInfo;
  }
  getPreviewSizeByResolution(e) {
    let t;
    let r = J[e];
    if (!r || !this.width || !this.height || e === B) {
      return {
        width: 0,
        height: 0,
      };
    }
    let width = this.width || 0;
    let height = this.height || 0;
    let [i, n] = r;
    if (width / height > 3) {
      if (width * height < i * n) {
        return {
          width,
          height,
        };
      }
      let e = Math.sqrt((i * n) / (width * height));
      return {
        width: Math.floor(width * e),
        height: Math.floor(height * e),
      };
    }
    if (width <= i && height <= n) {
      return {
        width,
        height,
      };
    }
    let c = i / width;
    let l = n / height;
    return {
      width: Math.floor(width * (t = c > l ? l : c)),
      height: Math.floor(height * t),
    };
  }
}
class $ extends V {
  get type() {
    return O;
  }
  get duration() {
    return this._sourceData.duration;
  }
  get width() {
    return this._sourceData.width;
  }
  get height() {
    return this._sourceData.height;
  }
  get previewUrl() {
    return this._sourceData?.asset_meta?.preview360_url;
  }
  get previewKey() {
    return this._sourceData?.asset_meta?.key;
  }
  get unencryptedPreviewUrl() {
    return this._sourceData?.unencryptedPlayInfo?.info?.p360?.primary_url;
  }
  get sprit() {
    return this._sourceData.sprite_info;
  }
  get transcodeStatus() {
    return this._sourceData.transcode_status;
  }
  setUnencryptedInfo(e) {
    if (this._sourceData) {
      this._sourceData.unencryptedPlayInfo = e;
    }
  }
}
class K extends z {
  get type() {
    return "live-photo";
  }
}
class Y extends W {
  constructor(e) {
    let t = x({
      obj: e,
      serializeKey: "meta",
      targetKey: "_meta",
    });
    super({
      ...e,
      _meta: t._meta,
      entry: t,
    });
  }
  get isValid() {
    return !h.A(this._sourceData._meta);
  }
  get id() {
    return this.notOnlyId;
  }
  get notOnlyId() {
    return this._sourceData.id;
  }
  get author() {
    return this._sourceData.creator;
  }
  get key() {
    return this._sourceData.key;
  }
  get name() {
    return this._sourceData?._meta?.draft?.name ?? "";
  }
  get size() {
    return this._sourceData?._meta?.draft?.size || 0;
  }
  get sizeStr() {
    if (this.size) {
      return b(this.size);
    }
  }
  get type() {
    return Q;
  }
  get subType() {
    return this._sourceData._meta?.draft?.type;
  }
  get updatedAt() {
    if (this.entry?.access_at_ts) {
      return this.entry?.access_at_ts * 1000;
    }
    return this._sourceData?._meta?.draft?.updateTime;
  }
  get createdAt() {
    let _meta = this._sourceData._meta;
    return _meta?.createSource?.createTime ?? _meta?.uploadSource?.createTime;
  }
  get meta() {
    return this._sourceData?._meta;
  }
  get coverMd5() {
    return this._sourceData?.assets?.find(
      (e) => e.path === this._sourceData?._meta?.draft.cover,
    )?.md5;
  }
  get allCoverMd5() {
    if (!this._sourceData?._meta?.draft.cover) {
      return [];
    }
    let e = [...this._sourceData?.assets].reverse();
    return S.A(e, "path")
      .reverse()
      ?.filter((e) => /^cover(_[0-9]+)?\.(jpe?g|png)$/.test(e.path))
      .map((e) => e.md5);
  }
  get duration() {
    return this._sourceData?._meta?.draft.duration;
  }
  get assets() {
    return (this._sourceData.assets || []).map((e) => {
      let _meta = e.meta || "";
      let r = {};
      try {
        r = JSON.parse(_meta);
      } catch (e) {}
      return {
        ...e,
        entryIds: e.entry_ids,
        meta: r,
        _meta,
      };
    });
  }
  get creator() {
    return this._sourceData.creator;
  }
  get status() {
    return this._sourceData?.status;
  }
  get permission() {
    if (qm.isGroupSdk) {
      return this._sourceData.permission || G.PUBLIC;
    }
    return G.PERSONAL;
  }
  get isPublic() {
    return this.permission === G.PUBLIC;
  }
  get isPersonal() {
    return this.permission === G.PERSONAL;
  }
  get owner() {
    return (
      this._sourceData?._meta?.createSource?.owner ||
      this._sourceData?._meta?.uploadSource?.owner ||
      ""
    );
  }
  get entryId() {
    return this._sourceData.entry_id;
  }
  get entry() {
    return this._sourceData.entry;
  }
}
class Z {
  constructor(e) {
    this.options = e;
  }
  get fileName() {
    return this.options.fileName;
  }
  get uid() {
    return this.options.uid;
  }
  get asset() {
    return this.options.assetInfo;
  }
  get clusterInfo() {
    return this.options.clusterInfo;
  }
  get duration() {
    return this.options.duration;
  }
  get size() {
    return this.options.size;
  }
  get type() {
    return this.options.type;
  }
  get spritInfo() {
    return this.options.spritInfo;
  }
  get videoInfo() {
    return this.options.videoInfo;
  }
  get audioInfo() {
    return this.options.audioInfo;
  }
  get extInfo() {
    return this.options.extInfo;
  }
  merge(e) {
    g.A(this.options, e.options);
    return this;
  }
}
class X extends $ {
  get type() {
    return "film";
  }
}
class ee extends W {
  constructor({ cluster, lastAsset }) {
    let r = x({
      obj: cluster,
      serializeKey: "meta",
      targetKey: "_meta",
    });
    super(
      (r = x({
        obj: r,
        serializeKey: "relation",
        targetKey: "_relation",
      })),
    );
    this._lastAsset = lastAsset;
    this.tryGetDraftName();
  }
  get type() {
    return "cluster-film";
  }
  get id() {
    return this.entryId || this.entry?.entry_id;
  }
  get notOnlyId() {
    return this._sourceData.cluster_id;
  }
  get name() {
    return this._lastAsset?.name || "";
  }
  get duration() {
    return this._lastAsset?.duration;
  }
  get size() {
    return this._lastAsset?.size;
  }
  get sizeStr() {
    return this._lastAsset?.sizeStr;
  }
  get author() {
    return this.entry?.owner_id;
  }
  get updatedAt() {
    return this._sourceData?.entry?.access_at_ts * 1000;
  }
  get relation() {
    return this._sourceData._relation?.map((e) => `${e}`);
  }
  get meta() {
    return this._sourceData?._meta;
  }
  get assetCount() {
    return this._sourceData.n_asset;
  }
  get asset() {
    return this._sourceData.assets || [];
  }
  get lastAssetId() {
    let e = this.asset[this.asset.length - 1];
    let t = qm.sortArrayByRelation({
      exists: this.asset,
      relation: this.relation ?? [],
    });
    return t[t.length - 1] ?? e;
  }
  get bindId() {
    return this._sourceData.bind_id;
  }
  updateLastAsset(e) {
    this._lastAsset = e;
  }
  get draftName() {
    return this._draftName ?? this.meta?.draft?.name;
  }
  get lastAsset() {
    return this._lastAsset;
  }
  async tryGetDraftName() {
    if (!this.bindId) {
      this._draftName = this.meta?.draft?.name;
      return this._draftName;
    }
    try {
      let e = await qm.getPackageByKey(this.bindId);
      this._draftName = e?.name ?? this.meta?.draft?.name;
      return this._draftName;
    } catch (e) {
      return this.meta?.draft?.name;
    }
  }
  get permission() {
    if (qm.isGroupSdk) {
      return this.entry?.permission ?? G.PUBLIC;
    }
    return G.PERSONAL;
  }
  get isPublic() {
    return this.permission === G.PUBLIC;
  }
  get isPersonal() {
    return this.permission === G.PERSONAL;
  }
  get owner() {
    return this._sourceData._meta?.uploadSource?.owner || "";
  }
  get entryId() {
    return this._sourceData.entry_id;
  }
  get entry() {
    return this._sourceData.entry;
  }
  get createdAt() {
    return this._sourceData?.entry?.created_at_ts * 1000;
  }
}
class et extends W {
  constructor(e) {
    let entry = x({
      obj: e.entry,
      serializeKey: "meta",
      targetKey: "_meta",
    });
    super({
      ...e,
      entry,
    });
  }
  get type() {
    return "folder";
  }
  get meta() {
    return this._sourceData?.entry._meta;
  }
  get id() {
    return this.entry?.entry_id;
  }
  get notOnlyId() {
    return this._sourceData.id;
  }
  get entry() {
    return this._sourceData?.entry;
  }
  get name() {
    return this._sourceData?.name;
  }
  get subCnt() {
    return this._sourceData.sub_cnt;
  }
  get updatedAt() {
    return this._sourceData?.entry.access_at_ts * 1000;
  }
  get accessAt() {
    return this._sourceData?.entry.access_at_ts * 1000;
  }
  get createdAt() {
    return this._sourceData?.entry.created_at_ts * 1000;
  }
  get creator() {
    return this._sourceData.entry.creator_id;
  }
  get permission() {
    if (qm.isGroupSdk) {
      return this._sourceData.entry.permission || G.PUBLIC;
    }
    return G.PERSONAL;
  }
  get isPublic() {
    return this.permission === G.PUBLIC;
  }
  get isPersonal() {
    return this.permission === G.PERSONAL;
  }
  get owner() {
    return this.meta?.uploadSource?.owner;
  }
  get author() {
    return this._sourceData.entry.owner_id;
  }
  get size() {
    return this._sourceData.size ?? 0;
  }
  get sizeStr() {
    return "0";
  }
}
function er(e, t) {
  switch (xI(e.mime)) {
    case "video":
      if ((e.filter_list || []).includes(Pb.FILM_ASSET)) {
        return new X(e);
      }
      return new $(e);
    case "audio":
      return new H(e);
    case "image":
      if (e.sub_type === "livephoto") {
        return new K(e);
      }
      return new z(e, t);
    default:
      return new V(e);
  }
}
function ea(e, t) {
  if (qm?.options && qm?.options?.level === "trace") {
    console[t?.type ?? "info"](`EverCloud: ${e}`);
  }
}
let eo = (e, t) => {
  if (e === G.PERSONAL) {
    let e = false;
    if (t.type === Q) {
      if (t.subType === q.SCRIPT) {
        return t.owner === qm.uid;
      } else {
        e = t.creator === qm.everUserId || t.owner === qm.uid;
      }
    }
    return t.author === qm.everUserId || e;
  }
  return t.isPublic;
};
function ei() {
  return {
    uploadSource: {
      owner: qm.options?.user_id,
      platform: "browser",
      systemVersion: window.navigator.userAgent,
      appVersion: "1.1.0",
    },
  };
}
class en {
  constructor(e) {
    this._maxConcurrency = e;
    this._availableConcurrency = e;
    this._waitingQueue = [];
  }
  async acquire() {
    return new Promise((resolve) => {
      if (this._availableConcurrency > 0) {
        this._availableConcurrency--;
        resolve();
      } else {
        this._waitingQueue.push(resolve);
      }
    });
  }
  release() {
    if (this._waitingQueue.length > 0) {
      let e = this._waitingQueue.shift();
      if (e) {
        e();
      }
    } else {
      if (this._availableConcurrency < this._maxConcurrency) {
        this._availableConcurrency++;
      }
    }
  }
}
class ec extends Error {
  constructor() {
    super("DuplicateNameError");
  }
}
class el extends Error {
  constructor(e) {
    super("TranscodeError");
    this.status = e;
  }
}
class em extends Error {
  constructor() {
    super("Request Timeout");
  }
}
class es extends Error {
  constructor() {
    super("Init Timeout");
  }
}
class ed extends Error {
  constructor() {
    super("Can not move public item to personal folder");
  }
}
class eu extends Error {
  constructor(e) {
    super(`Folder depth can not more than ${e}`);
  }
}
class ep extends _.A {
  constructor(e, t) {
    super();
    this.requestId = "";
    this.isDestroy = false;
    this.destroyHandler = this.destroy.bind(this);
    this.requestId = e;
    this.sdk = t;
    this.sdk.eventBus.addListener(eJ.BusDestroy, this.destroyHandler);
  }
  destroy() {
    this.requestId = "";
    this.isDestroy = true;
    this.sdk.eventBus.removeListener(eJ.BusDestroy, this.destroyHandler);
    this.removeAllListeners();
  }
}
class eC extends ep {
  destroy() {
    super.destroy();
  }
}
class ev extends ep {
  constructor(e, t) {
    super("unknow", t);
    this.size = 0;
    this.chunks = [];
    this.finishListenQueue = [];
    this._options = e;
    this.onIdleHandler = this.eventFilter(this._onIdleHandler.bind(this));
    this.onProgressHandler = this.eventFilter(
      this._onProgressHandler.bind(this),
    );
    this.onFinishHandler = this.eventFilter(this._onFinishHandler.bind(this));
    this.sdk.eventBus.addListener(eJ.AssetDownloadIdle, this.onIdleHandler);
    this.sdk.eventBus.addListener(
      eJ.AssetDownloadProgress,
      this.onProgressHandler,
    );
    this.sdk.eventBus.addListener(
      eJ.AssetDownloaddFinish,
      this.onFinishHandler,
    );
  }
  setRequestId(e) {
    if (this.requestId === "unknow") {
      this.requestId = e;
    } else {
      throw Error("request-id 已经初始化完成，请勿修改");
    }
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  appendChunk(e) {
    this.chunks.push(e);
  }
  async cancel() {
    return await this.sdk.sdk.cancel_upload(this.requestId);
  }
  destroy() {
    super.destroy();
    this.chunks = [];
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(eJ.AssetDownloadIdle, this.onIdleHandler);
    this.sdk.eventBus.removeListener(
      eJ.AssetDownloadProgress,
      this.onProgressHandler,
    );
    this.sdk.eventBus.removeListener(
      eJ.AssetDownloaddFinish,
      this.onFinishHandler,
    );
  }
  thirdpartDone({ buffer }) {
    this.result = {
      status: "success",
      buffer,
    };
    this._finish();
  }
  _onIdleHandler() {
    this.onIdle?.();
  }
  _onProgressHandler(e) {
    this.onProgress?.({
      total: e.bytes_total,
      done: e.bytes_done,
    });
  }
  _onFinishHandler(e) {
    if (e.completed) {
      let t;
      let e;
      let r;
      e = new Uint8Array(
        (t = this.chunks).reduce((acc, item) => acc + item.length, 0),
      );
      r = 0;
      t.forEach((t) => {
        e.set(t, r);
        r += t.length;
      });
      let a = e;
      this.result = {
        status: "success",
        buffer: a,
      };
      this.cacheSource(a);
    } else {
      if (e.cancelled) {
        this.result = {
          status: "cancel",
        };
      } else {
        this.result = {
          status: "error",
          errInfo: e.error_info,
        };
      }
    }
    this._finish();
  }
  async cacheSource(buffer) {
    if (this.sdk.cachePlugin && this._options?.url) {
      try {
        await this.sdk.cachePlugin.saveSourceBlob({
          key: this._options.url,
          buffer,
        });
        ea(
          `\u{7F13}\u{5B58}\u{6587}\u{4EF6}${this._options.url}\u{6210}\u{529F}.`,
        );
        console.log(
          `\u{7F13}\u{5B58}\u{6587}\u{4EF6}${this._options.url}\u{6210}\u{529F}.`,
        );
      } catch (error) {
        let e = String(error);
        console.log(
          `\u{7F13}\u{5B58}\u{6587}\u{4EF6}${this._options.url}\u{5931}\u{8D25}: ${e}`,
        );
        ea(
          `\u{7F13}\u{5B58}\u{6587}\u{4EF6}${this._options.url}\u{5931}\u{8D25}: ${e}`,
          {
            type: "warn",
          },
        );
      }
    }
  }
  _finish() {
    for (let e of this.finishListenQueue) {
      if (this.result.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
  eventFilter(e) {
    return (t) => {
      let { request_id } = t;
      if (request_id === this.requestId) {
        e(t);
      }
    };
  }
}
class e_ extends eC {
  constructor({ requestId, fileType, autoPromote, workspaceId, biz_scene }, i) {
    super(requestId, i);
    this._autoPromote = false;
    this.finishListenQueue = [];
    this._fileType = fileType;
    this._autoPromote = autoPromote;
    this._workspaceId = workspaceId;
    this._biz_scene = biz_scene;
    this.onIdleHandler = this.eventFilter(this._onIdleHandler.bind(this));
    this.onUploadMetaReadyHandler = this.eventFilter(
      this._onUploadMetaReadyHandler.bind(this),
    );
    this.onProgressHandler = this.eventFilter(
      this._onProgressHandler.bind(this),
    );
    this.onFinishHandler = this.eventFilter(this._onFinishHandler.bind(this));
    this.sdk.eventBus.addListener(eJ.UploadIdle, this.onIdleHandler);
    this.sdk.eventBus.addListener(
      eJ.UploadMetaReady,
      this.onUploadMetaReadyHandler,
    );
    this.sdk.eventBus.addListener(eJ.UploadProgress, this.onProgressHandler);
    this.sdk.eventBus.addListener(eJ.UploadFinish, this.onFinishHandler);
  }
  get fileType() {
    return this._fileType;
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_upload(this.requestId);
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(eJ.UploadIdle, this.onIdleHandler);
    this.sdk.eventBus.removeListener(eJ.UploadProgress, this.onProgressHandler);
    this.sdk.eventBus.removeListener(eJ.UploadFinish, this.onFinishHandler);
  }
  _onUploadMetaReadyHandler(e) {
    this.onUploadMetaReady?.({
      uploadId: e.upload_id,
      md5: e.md5,
    });
  }
  _onIdleHandler(e) {
    this.onIdle?.(e);
  }
  _onProgressHandler(e) {
    this.onProgress?.({
      total: e.bytes_total,
      done: e.bytes_done,
      md5: e.md5,
    });
  }
  async _onFinishHandler(e) {
    if (e.completed) {
      let t = e.asset_id;
      let entryId = e.entry_id;
      if (!t) {
        if (entryId) {
          try {
            t = (await this.sdk.getEntryAsset(entryId, true)).id;
          } catch (r) {
            t = (await this.sdk.getAssetByMd5(e.md5)).id;
          }
        } else {
          t = (await this.sdk.getAssetByMd5(e.md5)).id;
        }
      }
      if (this._autoPromote) {
        if (t) {
          try {
            await this.sdk.dependencies.apiFunc.promoteAsset({
              assetId: t,
              spaceId: this.sdk.spaceId,
              workspaceId: this._workspaceId,
              biz_scene: this._biz_scene,
            });
          } catch (error) {
            this.result = {
              status: "error",
              errInfo: {
                code: -1,
                msg: `asset promote failure, cause:${error?.message}`,
              },
            };
          }
        } else {
          this.result = {
            status: "error",
            errInfo: {
              code: -1,
              msg: "asset id is not found, could not promote",
            },
          };
        }
      }
      if (this.result?.status !== "error") {
        this.result = {
          status: "success",
          fileId: t,
          md5: e.md5,
          entry: e.entry,
          entryId,
        };
      }
    } else {
      if (e.cancelled) {
        this.result = {
          status: "cancel",
        };
      } else {
        this.result = {
          status: "error",
          errInfo: {
            code: e.error_info.code,
            msg: e.error_info.message,
            message: e.error_info.message,
          },
        };
      }
    }
    for (let e of this.finishListenQueue) {
      if (this.result.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
  eventFilter(e) {
    return (t) => {
      let { request_id } = t;
      if (request_id === this.requestId) {
        e(t);
      }
    };
  }
}
class ef extends eC {
  constructor(e, t) {
    let file_type;
    super("unknow", t);
    this.finishListenQueue = [];
    this._params = e;
    let a = "video";
    switch (e.fileType) {
      case "video":
        a = "video";
        file_type = 0;
        break;
      case "audio":
        a = "video";
        file_type = 2;
        break;
      default:
        a = "object";
        file_type = 1;
    }
    this.onStart = e.onStart;
    e.uploader.upload({
      file: e.file,
      type: a,
      onSuccess: async (t) => {
        this.result = {
          status: "success",
        };
        let vid = t.Vid || t.Uri;
        this.vid = vid;
        try {
          let o = await this.sdk.dependencies.apiFunc.createVideoData({
            vid,
            tmp_id: this.sdk.getTempId,
            file_name: e.fileName,
            file_type,
            source_path: e.file.webkitRelativePath
              ? e.file.webkitRelativePath
              : e.fileName,
          });
          this.result.fileId = o;
          this.result.uri = t.Uri;
        } catch (error) {
          this.result.status = "error";
          this.result.errInfo = {
            code: error?.data?.ret || -1,
            msg: error?.data?.errmsg || "create video task failure",
          };
        }
        this.onFinishHandler();
      },
      onError: (e) => {
        this.result = {
          status: "error",
          errInfo: {
            code: e?.extra?.errorCode,
          },
        };
        this.onFinishHandler();
      },
      onStart: (e, t) => {
        this.onIdle?.();
        this.onStart?.(e, t);
      },
      onProgress: (e) => {
        this.onProgress?.({
          total: e.fileSize,
          done: Math.floor(e.fileSize * (e.percent / 100)),
        });
      },
    });
  }
  get fileType() {
    return this._params?.fileType;
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel(e) {
    let t = this._params?.uploader;
    if (!t) {
      return Promise.reject("uploader does not exist");
    }
    try {
      await Promise.resolve(t.cancel?.(e));
      this.finishListenQueue = this.finishListenQueue.filter(
        (t) => t.fileKey === e,
      );
      this.onCancel?.(e);
    } catch (error) {
      console.error(error);
      return Promise.reject(error?.message);
    }
  }
  destroy() {
    this._params = undefined;
    this.finishListenQueue = [];
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class eh extends ep {
  destroy() {
    super.destroy();
  }
}
class eT extends eh {
  constructor(e, t) {
    super("unknow", t);
    this.finishListenQueue = [];
    this.target = e;
    this.onTranscodeDoneHandler = this._onTranscodeDoneHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.VideoInfoEndPullEvent,
      this.onTranscodeDoneHandler,
    );
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_get_asset_play_info_loop({
      ids: this.target.id,
    });
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.VideoInfoEndPullEvent,
      this.onTranscodeDoneHandler,
    );
  }
  _onTranscodeDoneHandler(e) {
    for (let t of e.infos) {
      if (t[this.target.key] === this.target.id) {
        this.result = {
          status: "success",
          data: t,
        };
        this.onFinishHandler();
        return;
      }
    }
    for (let t of e.failed_ids) {
      if (t[this.target.key] === this.target.id) {
        this.result = {
          status: "error",
          errInfo: new el(t.status),
        };
        this.onFinishHandler();
        return;
      }
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class eS extends eh {
  constructor(e, t) {
    super("unknow", t);
    this.delayTime = Date.now();
    this.Delay_Times = 12000;
    this.finishListenQueue = [];
    this.options = e;
    this.timer = setInterval(() => {
      if (Date.now() - this.delayTime > this.Delay_Times) {
        this.result = {
          status: "error",
          errInfo: {
            code: -1,
            msg: "overtime",
          },
        };
        this.onFinishHandler();
      } else {
        this.fetchVideoTaskInfo();
      }
    }, 3000);
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel() {
    this.result = {
      status: "cancel",
    };
    this.onFinishHandler();
  }
  destroy() {
    super.destroy();
    clearInterval(this.timer);
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.VideoInfoEndPullEvent,
      this.onTranscodeDoneHandler,
    );
  }
  async fetchVideoTaskInfo() {
    try {
      let e = await this.sdk.dependencies.apiFunc.getVideoTaskInfo(
        this.options,
      );
      this.delayTime = Date.now();
      switch (e.status) {
        case 0:
          return;
        case 1:
          this.result = {
            status: "success",
            data: e,
          };
          this.onFinishHandler();
          return;
        default:
          this.onFinishHandler();
          this.result = {
            status: "error",
            errInfo: new TranscodeError(),
          };
          return;
      }
    } catch (error) {
      this.result = {
        status: "error",
        errInfo: {
          code: error.data.ret,
          msg: error.data.errmsg,
        },
      };
      this.onFinishHandler();
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class eg extends ep {
  constructor(e, t) {
    super("unknow", t);
    this.finishListenQueue = [];
    this.target = e;
    this.onSyncAssetHandler = this._onSyncAssetHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.ThridPartResourceSyncStateEvent,
      this.onSyncAssetHandler,
    );
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_get_sync_state_loop({
      resource: [this.target.id],
    });
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.ThridPartResourceSyncStateEvent,
      this.onSyncAssetHandler,
    );
  }
  _onSyncAssetHandler(e) {
    for (let t of e.sync_ids) {
      if (t.resource_id === this.target.id) {
        this.result = {
          status: "success",
          data: {
            resourceId: t.resource_id,
            md5: t.md5,
            assetId: t.asset_id,
            entryId: t.entry_id,
          },
        };
        this.onFinishHandler();
        return;
      }
    }
    for (let t of e.failed_ids) {
      if (t === this.target.id) {
        this.result = {
          status: "error",
        };
        this.onFinishHandler();
        return;
      }
    }
    if (e.api_failed === 1) {
      this.result = {
        status: "error",
        errMsg: "Network failure",
      };
      this.onFinishHandler();
      return;
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class ey {
  constructor(e, t) {
    this.finishListenQueue = [];
    this.target = e;
    this.sdk = t;
    this.onDoneHandler = this._onDoneHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.PreviewInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_get_preivew_info_loop({
      ids: this.target.key === "id" ? [this.target.id] : [],
      md5s: this.target.key === "md5" ? [this.target.id] : [],
    });
  }
  destroy() {
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.PreviewInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  _onDoneHandler(e) {
    for (let t of e.infos) {
      if (t[this.target.key] === this.target.id) {
        this.result = {
          status: "success",
          data: er(t, this.sdk),
        };
        this.onFinishHandler();
        return;
      }
    }
    if (e.timeout) {
      this.result = {
        status: "error",
        errInfo: new em(),
      };
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class ew {
  constructor(e, t) {
    this.finishListenQueue = [];
    this.target = e;
    this.sdk = t;
    this.onDoneHandler = this._onDoneHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.SpriteInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_get_preivew_info_loop({
      ids: this.target.key === "id" ? [this.target.id] : [],
      md5s: this.target.key === "md5" ? [this.target.id] : [],
    });
  }
  destroy() {
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.SpriteInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  _onDoneHandler(e) {
    for (let t of e.infos) {
      if (t[this.target.key] === this.target.id) {
        this.result = {
          status: "success",
          data: er(t),
        };
        this.onFinishHandler();
        return;
      }
    }
    if (e.timeout) {
      this.result = {
        status: "error",
        errInfo: new em(),
      };
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
class eI extends ep {
  constructor(e, t) {
    super(e, t);
    this.finishListenQueue = [];
    this.onDoneHandler = this._onDoneHandler.bind(this);
    this.onProgressHandler = this._onProgressHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.SpaceMoveProgressEvent,
      this.onProgressHandler,
    );
    this.sdk.eventBus.addListener(eJ.SpaceMoveFinishEvent, this.onDoneHandler);
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.PreviewInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  _onProgressHandler(e) {
    if ((e.process_id = this.requestId)) {
      this.onProgress?.(e.progress);
    }
  }
  _onDoneHandler(e) {
    let { process_id, status } = e;
    if (process_id === this.requestId) {
      if (status === 3) {
        this.result = {
          status: "success",
          data: e,
        };
        this._onFinishHandler();
        this.onProgress?.(100);
        return;
      }
      if (status === 4) {
        this.result = {
          status: "error",
          data: e,
        };
        this._onFinishHandler();
        this.onProgress?.(100);
        return;
      }
    }
  }
  _onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.destroy();
  }
}
class eb extends ep {
  constructor(e, t) {
    super(e, t);
    this.finishListenQueue = [];
    this.sdk = t;
    this.onDoneHandler = this._onDoneHandler.bind(this);
    this.onProgressHandler = this._onProgressHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.SpaceCopyProgressEvent,
      this.onProgressHandler,
    );
    this.sdk.eventBus.addListener(eJ.SpaceCopyFinishEvent, this.onDoneHandler);
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.PreviewInfoEndPullEvent,
      this.onDoneHandler,
    );
  }
  _onProgressHandler(e) {
    if ((e.process_id = this.requestId)) {
      this.onProgress?.(e.progress);
    }
  }
  _onDoneHandler(e) {
    let { process_id, status } = e;
    if (process_id === this.requestId) {
      if (status === 3) {
        this.result = {
          status: "success",
          data: e,
        };
        this._onFinishHandler();
        this.onProgress?.(100);
        return;
      }
      if (status === 4) {
        this.result = {
          status: "error",
          data: e,
        };
        this.onProgress?.(100);
        this._onFinishHandler();
        return;
      }
    }
  }
  _onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.destroy();
  }
}
class ej extends eh {
  constructor(e, t) {
    super("unknow", t);
    this.result = {
      data: new Map(),
    };
    this.finishedFlag = 0;
    this.finishListenQueue = [];
    this._triggerTimes = 3000;
    this.target = e;
    e.forEach((e) => {
      e.ids?.forEach((t) => {
        this.result?.data?.set(`${e.resolution}_${t}`, F.UNTRANSCODE);
      });
      e.md5s?.forEach((t) => {
        this.result?.data?.set(`${e.resolution}_${t}`, F.UNTRANSCODE);
      });
    });
    this._triggerGetUpdates();
    this.onTranscodeDoneHandler = this._onTranscodeDoneHandler.bind(this);
    this.sdk.eventBus.addListener(
      eJ.ImageTranscodeInfoEndPull,
      this.onTranscodeDoneHandler,
    );
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result && this.result.status) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      }
      this.finishListenQueue.push([resolve, reject]);
    });
  }
  async cancel() {
    this.result.status = "cancel";
    this.result?.data?.forEach((e, t) => {
      if (e === F.UNTRANSCODE) {
        this.result?.data?.set(t, F.CANCEL);
      }
    });
    return await this.sdk.sdk.cancel_image_transcode_info_loop({
      listeners: this.target.map((e) => ({
        ...e,
        transcode_type: L[e.resolution],
      })),
      cancel_all: 0,
    });
  }
  destroy() {
    super.destroy();
    clearTimeout(this._triggerTimer);
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(
      eJ.ImageTranscodeInfoEndPull,
      this.onTranscodeDoneHandler,
    );
  }
  _triggerGetUpdates() {
    this._triggerTimer = setTimeout(() => {
      this.sdk.throttlingGetUpdatesTrigger({
        throttle: this._triggerTimes,
      });
      this._triggerTimer = undefined;
      this._triggerGetUpdates();
    }, this._triggerTimes);
  }
  _onTranscodeDoneHandler(e) {
    if (e.timeout) {
      this.result.data?.forEach((e, t) => {
        if (e === F.UNTRANSCODE) {
          this.result.data?.set(t, F.TIMEOUT);
          this.finishedFlag += 1;
        }
      });
      this.onProcess?.(this.result);
      this.result.status = "error";
      this.onFinishHandler();
      return;
    }
    for (let t of e.infos) {
      let e = false;
      let { transcode_type, assets, failed_list } = t;
      let i = N[transcode_type];
      assets?.forEach((t) => {
        let r = `${i}_${t.id}`;
        let a = `${i}_${t.md5}`;
        if (this.result?.data?.get(r) === F.UNTRANSCODE) {
          this.result?.data?.set(r, F.SUCCESS);
          this.finishedFlag += 1;
          e = true;
        }
        if (this.result?.data?.get(a) === F.UNTRANSCODE) {
          this.result?.data?.set(a, F.SUCCESS);
          this.finishedFlag += 1;
          e = true;
        }
      });
      failed_list?.forEach((t) => {
        let r = `${i}_${t.asset_id}`;
        let a = `${i}_${t.md5}`;
        if (this.result?.data?.get(r) === F.UNTRANSCODE) {
          this.result?.data?.set(r, F.FAILED);
          this.finishedFlag += 1;
          e = true;
        }
        if (this.result?.data?.get(a) === F.UNTRANSCODE) {
          this.result?.data?.set(a, F.FAILED);
          this.finishedFlag += 1;
          e = true;
        }
      });
      if (e) {
        this.onProcess?.(this.result);
      }
      if (this.result.data?.size === this.finishedFlag) {
        this.result.status = "success";
        this.onFinishHandler();
      }
    }
  }
  onFinishHandler() {
    for (let e of this.finishListenQueue) {
      if (this.result?.status === "success") {
        e[0](this.result);
      } else {
        e[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
}
function ek() {
  return function (e, t, r) {
    let r_value = r.value;
    if (typeof r_value === "function") {
      r.value = async function (...e) {
        await this?.syncDone?.();
        return await r_value.apply(this, e);
      };
    }
    return r;
  };
}
function eP() {
  return function (e, t, r) {
    let r_value = r.value;
    if (typeof r_value === "function") {
      r.value = async function (...e) {
        await this?.init?.();
        return await r_value.apply(this, e);
      };
    }
    return r;
  };
}
function ex() {
  return function (e, t, r) {
    let r_value = r.value;
    if (typeof r_value === "function") {
      r.value = async function (...e) {
        let t = await r_value.apply(this, e);
        this?.emitUserSpaceSizeChange?.();
        return t;
      };
    }
    return r;
  };
}
class eM {
  get hasBeenDone() {
    return this._hasBeenDone;
  }
  get costTimes() {
    if (!this._initCostTimes) {
      return;
    }
    let { start, end } = this._initCostTimes;
    return (end || Date.now()) - start;
  }
  get initResult() {
    if (this._hasBeenDone) {
      return {
        resolve: this.resolveResult,
        reject: this.rejectResult,
      };
    }
  }
  get isIniting() {
    return this._isIniting;
  }
  awaitForInit({ key, timeout } = {}) {
    let r;
    let a;
    if (this._hasBeenDone && this.initResult) {
      let { resolve, reject } = this.initResult;
      if (reject) {
        return Promise.reject(reject);
      }
      return Promise.resolve(resolve);
    }
    if (key && this._waitingResolverMap.has(key)) {
      return this._waitingResolverMap.get(key);
    }
    if (!timeout) {
      let t = new Promise((resolve, reject) => {
        this._waitingResolvers.add([resolve, reject]);
      });
      if (key) {
        this._waitingResolverMap.set(key, t);
      }
      return t;
    }
    let o = Promise.race([
      new Promise((resolve, reject) => {
        r = [
          () => {
            clearTimeout(a);
            resolve();
          },
          reject,
        ];
        this._waitingResolvers.add([r, reject]);
      }),
      new Promise((resolve, reject) => {
        a = setTimeout(() => {
          this._waitingResolvers.delete(r);
          reject(Error("Timed out waiting for init"));
        }, timeout);
      }),
    ]);
    if (key) {
      this._waitingResolverMap.set(key, o);
    }
    return o;
  }
  startToInit() {
    return (
      !this._hasBeenDone &&
      !this._isIniting &&
      ((this._isIniting = true),
      (this._initCostTimes = {
        start: Date.now(),
      }),
      true)
    );
  }
  initDone(e) {
    if (this._hasBeenDone) {
      throw Error("Cannot release an inited locker");
    }
    if (this._initCostTimes) {
      this._initCostTimes.end = Date.now();
    }
    let t = false;
    for (let r of (e?.reject
      ? ((t = true), (this.rejectResult = e.reject))
      : (this.resolveResult = e?.resolve),
    this._waitingResolvers)) {
      if (t) {
        r[1](this.rejectResult);
      } else {
        r[0](this.resolveResult);
      }
    }
    this._waitingResolverMap.clear();
    this._waitingResolvers.clear();
    this._hasBeenDone = true;
    this._isIniting = false;
  }
  constructor() {
    this._hasBeenDone = false;
    this._isIniting = false;
    this._initCostTimes = undefined;
    this._waitingResolvers = new Set();
    this._waitingResolverMap = new Map();
  }
}
class eA {
  addParams(e) {
    this.data = g.A({}, this.data, e);
  }
  get reportData() {
    return {
      event: this.event,
      data: this.data,
    };
  }
  addProcessParams(e) {
    this.process = g.A({}, this.process, e);
  }
  get reportProcess() {
    return {
      event: this.progressEvent,
      data: this.process,
    };
  }
  constructor() {
    this.event = "evercloud_sdk_init_timer";
    this.data = {};
    this.progressEvent = "evercloud_sdk_init_process";
    this.process = {};
  }
}
class eD extends ep {
  constructor({ requestId }, t) {
    super(requestId, t);
    this.finishListenQueue = [];
    this.onIdleHandler = this.eventFilter(this._onIdleHandler.bind(this));
    this.onProgressHandler = this.eventFilter(
      this._onProgressHandler.bind(this),
    );
    this.onFinishHandler = this.eventFilter(this._onFinishHandler.bind(this));
    this.sdk.eventBus.addListener(eJ.UploadIdle, this.onIdleHandler);
    this.sdk.eventBus.addListener(eJ.UploadProgress, this.onProgressHandler);
    this.sdk.eventBus.addListener(eJ.UploadFinish, this.onFinishHandler);
  }
  uploadDone() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this.result) {
        if (this.result.status === "success") {
          resolve(this.result);
        } else {
          reject(this.result);
        }
      } else {
        this.finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel() {
    return await this.sdk.sdk.cancel_upload(this.requestId);
  }
  async append(e) {
    return this.sdk.appendClipToUpload(
      this.requestId,
      e.seqNo,
      e.file,
      e.isLast,
    );
  }
  destroy() {
    super.destroy();
    this.finishListenQueue = [];
    this.sdk.eventBus.removeListener(eJ.UploadIdle, this.onIdleHandler);
    this.sdk.eventBus.removeListener(eJ.UploadProgress, this.onProgressHandler);
    this.sdk.eventBus.removeListener(eJ.UploadFinish, this.onFinishHandler);
  }
  _onIdleHandler(e) {
    this.onIdle?.(e);
  }
  _onProgressHandler(e) {
    this.onProgress?.({
      done: e.bytes_done,
    });
  }
  async _onFinishHandler(e) {
    for (let t of (e.completed
      ? e.stream_clip_transcode
        ? (this.result = {
            status: "success",
            uploadId: e.stream_clip_transcode.upload_id,
            bucketKey: e.stream_clip_transcode.bucket_key,
            streamId: e.stream_clip_transcode.stream_id,
            streamM3u8: e.stream_clip_transcode.stream_m3u8,
            streamMp4: e.stream_clip_transcode.stream_mp4,
            streamMd5: e.stream_clip_transcode.stream_md5,
            coverUrl: e.stream_clip_transcode.cover_url,
            spriteUrl: e.stream_clip_transcode.sprite_url,
            streamDuration: e.stream_clip_transcode.stream_duration,
          })
        : (this.result = {
            status: "error",
            errInfo: {
              code: "NO_TRANSCODE_INFO",
              msg: "NO_TRANSCODE_INFO",
            },
          })
      : (e.cancelled
          ? (this.result = {
              status: "cancel",
            })
          : (this.result = {
              status: "error",
              errInfo: e.error_info,
              failedPartList: e.stream_clip_err_ext?.part_num
                ? [e.stream_clip_err_ext.part_num]
                : [],
            }),
        this.onError?.(this.result)),
    this.finishListenQueue)) {
      if (this.result.status === "success") {
        t[0](this.result);
      } else {
        t[1](this.result);
      }
    }
    this.onFinish?.(this.result);
    this.destroy();
  }
  eventFilter(e) {
    return (t) => {
      let { request_id } = t;
      if (request_id === this.requestId) {
        e(t);
      }
    };
  }
}
class eR {
  constructor(e) {
    this._options = e;
    this._fileMd5Calculator =
      (i ||
        (i = new y.M({
          entryCDN: w.z.entryCDN,
          wasmCDN: w.z.wasmCDN,
        })),
      i);
  }
  get md5() {
    return this._md5;
  }
  analyzeFileMd5({ file, onError }) {
    this._fileMd5Calculator
      .calcFileMd5(file)
      .then((r) => {
        if (r.ok) {
          this._md5 = r.value;
          this._options.onMd5Ready?.();
        } else {
          onError?.({
            code: -1,
            msg: `[error]file md5 cal failed, file name is ${file.name} and file size is ${file.size} ]}`,
          });
        }
      })
      .catch((e) => {
        onError?.({
          code: -1,
          msg: `[error]file md5 cal failed, ${e.message}`,
        });
      });
  }
}
function eE() {
  let e;
  let t;
  let promise = new Promise((resolve, reject) => {
    e = resolve;
    t = reject;
  });
  return {
    resolve: e,
    reject: t,
    promise,
  };
}
class eB extends eC {
  constructor(e, t) {
    super("unknow", t);
    this._finishListenQueue = [];
    this._uploadStatus = "waitingUpload";
    this._didPreparedDefer = eE();
    this._didUploadedDefer = eE();
    this._isFileExistOnCloud = false;
    this._handleFileInfoAnalyzed = async () => {
      try {
        let e = Date.now();
        let t = await this._sdk.dependencies.apiFunc.prepareUpload({
          workspace_id: this._params?.workspaceId,
          space_id: "0",
          md5: this._fileInfoAnalyze.md5,
          size: this._params?.file.size,
          file_type: this._params.fileType,
          flags: this._params?.flags,
        });
        this._prepareResult = t;
        this.onUploadMetaReady?.({
          uploadId: this._prepareResult.upload_id,
          md5: this._fileInfoAnalyze.md5,
        });
        let r = Date.now() - e;
        this._reportUploadAnalyze({
          action: "prepare_asset",
          size: this._params.file.size,
          duration: r,
          filename: this._params.file.name,
        });
        this._didPreparedDefer.resolve();
        if (t?.state === 0) {
          await Promise.resolve(
            this._params.uploader?.cancel?.(this._uploadKey),
          );
          this._isFileExistOnCloud = true;
          this._didUploadedDefer.resolve();
        } else if (t?.state === 4) {
          let e = {
            code: -1,
            msg: "[error] prepare upload response fail",
          };
          this._didUploadedDefer.reject(e);
          this._result = this._formatErrorResponse(e);
          this._onErrorHandler();
        }
      } catch (error) {
        let e = `[error]prepare upload failure: ${error?.data?.errmsg ?? error}`;
        this._result = this._formatErrorResponse({
          code: error?.data?.ret || -1,
          msg: e,
        });
        this._didPreparedDefer.reject({
          code: -1,
          msg: e,
        });
        this._onErrorHandler();
      }
    };
    this._postCreateAsset = async (e) =>
      this._sdk.dependencies.apiFunc.createAsset(e);
    this._handleFileAnalyzeError = (e) => {
      this._result = this._formatErrorResponse({
        code: e.code,
        msg: e.msg ?? e,
      });
      this._onErrorHandler();
    };
    let r = "video";
    this._params = e;
    this._sdk = t;
    switch (e.fileType) {
      case "video":
      case "audio":
        r = "video";
        break;
      default:
        r = "object";
    }
    this.onStart = e.onStart;
    let a = Date.now();
    e.uploader.upload({
      file: e.file,
      type: r,
      onSuccess: async (t) => {
        if (this._uploadStatus === "cancel") {
          return;
        }
        if (e.fileType === "video" || e.fileType === "audio") {
          this._uploadedFileMeta = {
            duration: t.VideoMeta?.Duration,
            height: t.VideoMeta?.Height,
            width: t.VideoMeta?.Width,
            size: t.VideoMeta?.Size,
            uri: t.VideoMeta?.Uri,
            vid: t.Vid,
          };
        } else {
          this._uploadedFileMeta = {
            uri: t.Uri,
          };
        }
        let r = Date.now() - a;
        this._reportUploadAnalyze({
          action: "upload_process",
          size: e.file.size,
          duration: r,
          isInstantlyUpload: this._isFileExistOnCloud,
          filename: e.file.name,
        });
        this._didUploadedDefer.resolve();
      },
      onError: (e) => {
        let t = `[error]error from uploader: [${e?.extra?.errorCode}] ${e?.extra?.message}`;
        this._didUploadedDefer.reject({
          code: -1,
          msg: t,
        });
        this._result = this._formatErrorResponse({
          code: e?.extra?.errorCode,
          msg: t,
        });
        this._onErrorHandler();
      },
      onStart: (e, t) => {
        this.onIdle?.();
        this.onStart?.(e, t);
        this._uploadKey = e;
      },
      onProgress: (progress) => {
        this._uploadStatus = "uploading";
        this.onProgress?.({
          total: progress.fileSize,
          done: Math.floor(progress.fileSize * (progress.percent / 100)),
        });
        this._params.onProgress?.({
          total: progress.fileSize,
          done: Math.floor(progress.fileSize * (progress.percent / 100)),
          progress,
        });
      },
    });
    let o = Date.now();
    this._fileInfoAnalyze = new eR({
      onMd5Ready: () => {
        let t = Date.now() - o;
        this._handleFileInfoAnalyzed();
        this._reportUploadAnalyze({
          action: "analyze_file",
          size: e.file.size,
          duration: t,
          filename: e.file.name,
        });
      },
    });
    this._fileInfoAnalyze.analyzeFileMd5({
      file: e.file,
      onError: this._handleFileAnalyzeError,
    });
    this._listenDidPreparedAndDidUploaded();
  }
  get fileType() {
    return this._params.fileType;
  }
  done() {
    return new Promise((resolve, reject) => {
      if (this._result) {
        if (this._result.status === "success") {
          resolve(this._result);
        } else {
          reject(this._result);
        }
      } else {
        this._finishListenQueue.push([resolve, reject]);
      }
    });
  }
  async cancel(e) {
    let t = this._params?.uploader;
    if (!t) {
      return Promise.reject("uploader does not exist");
    }
    try {
      await Promise.resolve(t.cancel?.(this._uploadKey));
      this._uploadStatus = "cancel";
      this._finishListenQueue = this._finishListenQueue.filter(
        (t) => t.fileKey === e,
      );
      this._result = this._formatCancelResponse();
      this._didUploadedDefer.reject({
        code: -1,
        msg: "[warn]cancel analyze because cancel upload",
      });
      this.onCancel?.(this._uploadKey);
    } catch (error) {
      console.error(error);
      return Promise.reject(error?.message);
    }
    this._params.onCancel?.();
  }
  destroy() {
    this._finishListenQueue = [];
  }
  async _onFinishHandler() {
    if (this._uploadStatus !== "error") {
      if (this._params.autoPromote) {
        let assetId = this._createAssetResult?.cloud_asset?.asset_id;
        if (assetId) {
          try {
            let t = Date.now();
            await this.sdk.dependencies.apiFunc.promoteAsset({
              assetId,
              spaceId: this.sdk.spaceId,
              workspaceId: this._params.workspaceId,
              biz_scene: this._params.meta?.biz_scene,
            });
            let r = Date.now() - t;
            this._reportUploadAnalyze({
              action: "promote_asset",
              size: this._params.file.size,
              duration: r,
              isInstantlyUpload: this._isFileExistOnCloud,
              filename: this._params.file.name,
            });
          } catch (error) {
            this._result = {
              status: "error",
              errInfo: {
                code: -1,
                msg: `[error]asset promote failure, cause:${error?.message}`,
              },
            };
          }
        } else {
          this._result = this._formatErrorResponse({
            code: -1,
            msg: "[error]asset id is not found, could not promote",
          });
        }
      }
      for (let e of this._finishListenQueue) {
        if (this._result?.status === "success") {
          e[0](this._result);
        } else {
          e[1](this._result);
        }
      }
      this.onFinish?.(this._result);
      this._params.onFinish?.();
      if (this._params.startTime) {
        let e = Date.now() - this._params.startTime;
        this._reportUploadAnalyze({
          action: "complete_upload",
          size: this._params.file.size,
          duration: e,
          isInstantlyUpload: this._isFileExistOnCloud,
          filename: this._params.file.name,
        });
      }
      this.destroy();
    }
  }
  async _onErrorHandler() {
    if (
      this._uploadStatus !== "success" &&
      this._uploadStatus !== "error" &&
      this._uploadStatus !== "cancel"
    ) {
      for (let e of (await Promise.resolve(
        this._params.uploader?.cancel?.(this._uploadKey),
      ),
      this._reportUploadAnalyze({
        action: "error",
        size: this._params.file.size,
        code: this._result?.errInfo?.code,
        errorMsg: this._result?.errInfo?.msg,
        filename: this._params.file.name,
      }),
      (this._uploadStatus = "error"),
      this._finishListenQueue)) {
        if (this._result?.status === "success") {
          e[0](this._result);
        } else {
          e[1](this._result);
        }
      }
      this.onFinish?.(this._result);
      this._params.onFinish?.();
      this.destroy();
    }
  }
  _listenDidPreparedAndDidUploaded() {
    Promise.all([
      this._didPreparedDefer.promise,
      this._didUploadedDefer.promise,
    ])
      .then(async () => {
        try {
          if (!this._isFileExistOnCloud && !this._uploadedFileMeta) {
            throw Error(
              "[error]file not exist on server, but no uploaded file meta.",
            );
          }
          let e = Date.now();
          let t = await this._postCreateAsset({
            everphoto_id: this._prepareResult?.everphoto_user_id,
            asset: this._getAssetInfoForCreating(),
          });
          this._createAssetResult = t;
          this._result = this._formatSuccessResponse({
            assetId: t.cloud_asset.asset_id,
            md5: this._fileInfoAnalyze.md5,
            entryId: t.cloud_file_entry?.entry_id,
            entry: t.cloud_file_entry,
          });
          this._uploadStatus = "success";
          let r = Date.now() - e;
          this._reportUploadAnalyze({
            action: "create_asset",
            size: this._params.file.size,
            duration: r,
            isInstantlyUpload: this._isFileExistOnCloud,
            filename: this._params.file.name,
          });
        } catch (error) {
          this._result = this._formatErrorResponse({
            code: error?.data?.ret || -1,
            msg: `[error]create asset failure: ${error?.data?.errmsg ?? error}`,
          });
          this._onErrorHandler();
          return;
        }
        this._onFinishHandler();
      })
      .catch((e) =>
        this._reportUploadAnalyze({
          action: "cancel_file_analyze",
          size: this._params.file.size,
          code: e.code,
          errorMsg: e.msg ?? e,
          filename: this._params.file.name,
        }),
      );
  }
  _formatSuccessResponse(e) {
    let { assetId, md5, entryId, entry } = e;
    return {
      status: "success",
      fileId: assetId,
      entryId,
      md5,
      entry,
    };
  }
  _formatErrorResponse(e) {
    let { code, msg } = e;
    return {
      status: "error",
      errInfo: {
        code: Number(code),
        msg,
      },
    };
  }
  _formatCancelResponse() {
    return {
      status: "cancel",
    };
  }
  _getAssetInfoForCreating() {
    let e;
    try {
      let t = {
        ...this._params.meta,
        vid: this._uploadedFileMeta?.vid,
      };
      e = JSON.stringify(t);
    } catch {
      e = "{}";
    }
    let t = {
      size: this._params.file.size,
      workspace_id: this._params.workspaceId,
      filename: this._params.fileName,
      upload_id: this._prepareResult.upload_id,
      preserve_video_multi_definition: this._params.isMultiDefTranscode,
      if_image_async_resize: true,
      transcode_template_type: this._params.transcodeTemplateType,
      permission: this._params.permission,
      space_id: "0",
      flags: this._params.flags,
      file_type: this._params.fileType,
      folder_id: this._params.folderId,
      meta: e,
      md5: this._fileInfoAnalyze.md5,
      no_copy: this._params.noCopy,
    };
    if (this._isFileExistOnCloud) {
      return t;
    }
    return {
      uri: this._uploadedFileMeta?.uri,
      ...t,
    };
  }
  _reportUploadAnalyze(e) {
    let { action, duration, size, isInstantlyUpload, errorMsg, code } = e;
    this.sdk.reportUploadAnalyze({
      action,
      size,
      duration,
      isInstantlyUpload,
      errorMsg,
      code,
      uploaderType: eF.Vod,
      filename: e.filename,
      fileType: this._params?.fileType,
    });
  }
}
function eN(e, t, r, a) {
  let o;
  const arguments_length = arguments.length;
  let n =
    arguments_length < 3
      ? t
      : a === null
        ? (a = Object.getOwnPropertyDescriptor(t, r))
        : a;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    n = Reflect.decorate(e, t, r, a);
  } else {
    for (let c = e.length - 1; c >= 0; c--) {
      if ((o = e[c])) {
        n =
          (arguments_length < 3
            ? o(n)
            : arguments_length > 3
              ? o(t, r, n)
              : o(t, r)) || n;
      }
    }
  }
  if (arguments_length > 3 && n) {
    Object.defineProperty(t, r, n);
  }
  return n;
}
function eL(e, t) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(e, t);
  }
}
var eF = {
  Vod: "vod",
  Normal: "normal",
};
let eJ = {
  BusDestroy: "destroy",
  UploadMetaReady: "asset_upload_meta_ready",
  UploadIdle: "asset_upload_idle",
  UploadProgress: "asset_upload_progress",
  UploadFinish: "asset_upload_finish",
  AssetDownloadIdle: "asset_download_idle",
  AssetDownloadProgress: "asset_download_progress",
  AssetDownloaddFinish: "asset_download_finish",
  VideoInfoEndPullEvent: "video_info_end_pull",
  ThridPartResourceSyncStateEvent: "thirdpart_resource_sync_state",
  TrackSendEvent: "track_send_event",
  SpriteInfoEndPullEvent: "sprite_info_end_pull",
  PreviewInfoEndPullEvent: "preview_info_end_pull",
  SpaceMoveProgressEvent: "space_move_progress",
  SpaceMoveFinishEvent: "space_move_finish",
  SpaceCopyProgressEvent: "space_copy_progress",
  SpaceCopyFinishEvent: "space_copy_finish",
  ImageTranscodeInfoEndPull: "image_transcode_info_end_pull",
  EverCloudCancelImageTranscode: "ever_cloud_cancel_image_transcode",
  LogReportEvent: "log_report_event",
  UploadAnalyze: "import_material_upload_analyze",
};
class eO {
  get getTempId() {
    return this.noSignOptions?.uniqueId;
  }
  get everUserId() {
    return this.webUserId;
  }
  get dependencies() {
    if (!this._dependencies) {
      throw Error("EverSDK dependencies must be set before use");
    }
    return this._dependencies;
  }
  get cachePlugin() {
    return this.idbPlugin;
  }
  get isGroupSdk() {
    return !!qm.space && qm.space !== undefined;
  }
  get spaceId() {
    return this.options?.space;
  }
  get netconf() {
    return this.options?.netconf;
  }
  setCachePlugin(e) {
    this.idbPlugin = e;
  }
  setTeaReporter(e) {
    this.TeaReporter = e;
  }
  setSlardarReporter(e) {
    this.slardarReporter = e;
  }
  setDependencies(e) {
    this._dependencies = e;
  }
  get hasSetOptions() {
    return !!this.options;
  }
  get hasSetNoSignOptions() {
    return !!this.noSignOptions;
  }
  async setOptions(e) {
    await this._setEverCloudOptions(e);
    this._defaultUploaderType =
      e?.defaultUploaderConfig?.type === "vod" ? "vod" : "normal";
  }
  setPermission(e) {
    this.permission = e;
  }
  setNoSignOptions(e) {
    if (this.noSignOptions) {
      ea("参数重复设置，请确认。 init 后将不会被覆盖");
    } else {
      this.noSignOptions = e;
      ea(
        `\u{521D}\u{59CB}\u{5316}\u{53C2}\u{6570}\u{5DF2}\u{8BBE}\u{7F6E}\u{FF08}\u{672A}\u{767B}\u{5F55}\u{FF09}: ${JSON.stringify(e)}`,
      );
    }
  }
  getUploader(e, t) {
    return this.dependencies.getUploader(e, t);
  }
  getSignUploader(e) {
    return this.dependencies.getSignUploader(e);
  }
  emitUserSpaceSizeChange() {
    this.eventBus.emit(A.USER_SPACE_SIZE_CHANGE);
  }
  onUserSpaceSizeChange(e) {
    return this.eventBus.on(A.USER_SPACE_SIZE_CHANGE, e);
  }
  get uid() {
    return this.options?.user_id;
  }
  init() {
    if (this.destroyed) {
      return Promise.reject(Error("SDK destroyed"));
    }
    if (this.initLocker.hasBeenDone) {
      return this.initLocker.awaitForInit();
    }
    let e = this.options && this.options.user_id;
    if (!e) {
      ea("未设置必要参数, 等待参数设置中");
    }
    if (!this.initLocker.isIniting && e) {
      this.initLocker.startToInit();
      this.loadLocker.startToInit();
      let { timeout } = this.options || {};
      let { init = 300000 } = timeout || {};
      setTimeout(() => {
        if (!this.initLocker.hasBeenDone) {
          this.initLocker.initDone({
            reject: new es(),
          });
        }
      }, init);
      this.initEverCloudSdk({
        initDoneCb: () => {
          this.initLocker.initDone();
        },
        loadDoneCb: () => {
          this.loadLocker.initDone();
        },
        syncDoneCb: (e) => {
          if (e) {
            if (!this.initLocker.hasBeenDone) {
              this.initLocker.initDone();
            }
            this.syncLocker.initDone();
          }
        },
      });
    }
    return this.initLocker.awaitForInit();
  }
  async startSyncLoop() {
    if (!(this.syncLocker.isIniting || this.syncLocker.hasBeenDone)) {
      this.syncLocker.startToInit();
      await this.sdk.start_sync_loop();
    }
  }
  async syncDone() {
    await this.startSyncLoop();
    return await this.syncLocker.awaitForInit();
  }
  loadDone() {
    return this.loadLocker.awaitForInit();
  }
  async noSignInit() {
    let noSignOptions = this.noSignOptions;
    if (!noSignOptions) {
      ea("未设置必要参数, 等待参数设置中(noSing)");
    }
    return new Promise(async (resolve, reject) => {
      if (this.syncNoSignInitDone) {
        resolve();
      }
      if (this.syncNoSignInitError) {
        reject(Error("Cloud Sdk 发生非预期错误，请刷新页面"));
      }
      this.initNoSignQueue.push([resolve, reject]);
      if (!this.syncNoSignIniting && noSignOptions) {
        this.syncNoSignIniting = true;
        this.syncNoSignInitDone = true;
        let e = this.noSignOptions;
        if (!e) {
          throw Error("impossible way");
        }
        this.offlineVideoUploader = this.getUploader(e, "video");
        this.offlineFileUploader = this.getUploader(e, "file");
        this.initNoSignQueue.forEach((e) => {
          e[0]();
        });
        this.initNoSignQueue = [];
      }
    });
  }
  async destroy() {
    if (this.destroyed) {
      this.sdk = null;
      this.options = null;
      this.eventBus.emit(eJ.BusDestroy);
      this.eventBus.removeAllListeners();
      return Promise.resolve();
    }
    this.sdk = null;
    this.destroyed = true;
    this.options = null;
    this.eventBus.emit(eJ.BusDestroy);
    this.eventBus.removeAllListeners();
    return await this.tearDown();
  }
  async getFilesListByFloder(e) {
    let t = (
      await this.getAsset({
        material: true,
        ...e,
      })
    )
      .filter((e) => !e?.cluster_list?.length)
      .map((e) => er(e, this));
    let r = await this.getPackages();
    let a = [];
    a = await this.getClusters();
    return [...t, ...r, ...a].sort(
      (e, t) => (e.updatedAt ?? 0) - (t.updatedAt ?? 0),
    );
  }
  async getAsset(e) {
    let t = {
      ...e,
    };
    if (t?.ids?.length || t?.md5s?.length) {
      await this.initLocker.awaitForInit();
    } else {
      await this.syncDone();
    }
    return await this.sdk.get_asset(t);
  }
  async getAssets(e) {
    return (
      await this.getAsset({
        material: true,
        ...e,
      })
    )
      .filter((e) => !e?.cluster_list?.length)
      .map((e) => er(e, this));
  }
  async asset_preview(md5) {
    return new Promise((resolve) => {
      this.sdk.download_asset(
        {
          md5,
          preview: "360p",
        },
        (e) => {
          if (e.length < 98304) {
            resolve(btoa(String.fromCharCode(...new Uint8Array(e))));
          }
        },
      );
    });
  }
  async uploadAsset(e) {
    if ((e.uploaderConfig?.type || this._defaultUploaderType) === "vod") {
      return this._uploadAssetByVod(e);
    }
    return this._uploadAssetByEverCloud(e);
  }
  reportUploadAnalyze(e) {
    let {
      uploaderType,
      action,
      duration,
      size,
      errorMsg,
      code,
      isInstantlyUpload,
      filename,
      fileType = "",
    } = e;
    let error_msg = errorMsg ?? (e.action === "error" ? "unkown error." : "");
    this.reportSdkEvent({
      type: "event",
      event_name: eJ.UploadAnalyze,
      str_params: {
        uploader_type: uploaderType ?? "",
        action,
        error_msg: errorMsg ?? "",
        code: String(code),
        filename,
      },
      int_params: {
        duration: duration ?? -1,
        size,
      },
      float_params: {},
    });
    this.slardarReporter?.({
      type: "event",
      eventName: eJ.UploadAnalyze,
      extra: {
        event_name: eJ.UploadAnalyze,
        event_from: "ever_cloud_sdk",
        space_id: this.spaceId ?? "unknown",
        uploader_type: uploaderType,
        is_instantly_upload: +!!isInstantlyUpload,
        action,
        duration: duration ?? -1,
        size,
        error_msg,
        code: String(code),
        filename,
        fileType,
      },
      content: "",
    });
  }
  async streamClipUploadAsset(e) {
    let { format, fileName, meta, permission, extra } = e;
    let n = JSON.stringify(meta);
    let c = extra || {};
    if (c.ve) {
      c.ve = JSON.stringify(c.ve);
    }
    let { request_id } = await this.sdk.stream_clip_upload_asset(
      format,
      fileName,
      n,
      permission,
      c,
    );
    return new eD(
      {
        requestId: request_id,
      },
      this,
    );
  }
  async appendClipToUpload(e, t, r, a) {
    return await this.sdk.append_clip_to_upload(e, t, r, a);
  }
  async uploadVid(e) {
    return await this.sdk.upload_vid(e.vid, e.material, e.folder);
  }
  async syncVideoToEverCloud(
    e,
    {
      resouceType = 1,
      fileSize,
      meta,
      imageAsyncResize = true,
      folderId = qm.rootFolderId,
      invisible = false,
      noTranscode = false,
      noOccupy = false,
    },
  ) {
    let m = new eg(
      {
        id: e,
      },
      this,
    );
    let s = g.A(ei(), meta);
    await this.sdk.sync_asset({
      resource: [
        {
          resource_id: e,
          resource_type: resouceType || 1,
          size: fileSize,
          meta: JSON.stringify(s),
          region: null,
          image_async_resize: imageAsyncResize,
          folder_id: folderId,
          invisible,
          no_transcode: noTranscode,
          no_occupy: noOccupy,
        },
      ],
    });
    return m;
  }
  async getAssetsByMd5(md5s) {
    if (md5s.length) {
      return (
        (
          await this.getAsset({
            md5s,
          })
        ).map((e) => er(e, this)) ?? []
      );
    }
    return [];
  }
  async getAssetByMd5(e) {
    let t = ((await this.getAsset({
      md5s: [e],
    })) || [])[0];
    if (!t) {
      throw Error(`asset not found: md5=${e}`);
    }
    return er(t, this);
  }
  async getAssetByFileId(e, t = false) {
    let r = (
      await this.getAsset({
        ids: [e],
      })
    )[0];
    if (!r) {
      throw Error(`asset not found: assetId=${e}`);
    }
    if (t) {
      let e = await this.getUnencryptedPlayInfo({
        id: r.id,
      });
      r.unencryptedPlayInfo = e;
    }
    return er(r, this);
  }
  async getAssetsByFileId(e) {
    if (e.length) {
      return (
        (
          await this.getAsset({
            ids: e,
          })
        ).map((e) => er(e, this)) ?? []
      );
    }
    return [];
  }
  async getFileDetailWithTranscode(e, t = false) {
    let assetInfo;
    let a = await this.getVideoAssetTranscodeStatus(e);
    let o = await a.done();
    if (o.status !== "success") {
      throw Error(`transcode failure: ${JSON.stringify(o.errInfo)}`);
    }
    assetInfo = e.entryId
      ? await this.getEntryAsset(e.entryId, true, t)
      : e.md5
        ? await this.getAssetByMd5(e.md5)
        : await this.getEntryAsset(e.id, true, t);
    let videoInfo = [];
    let o_data = o.data;
    if (o_data) {
      let e = (e, type) => {
        if (o_data[e]) {
          let { primary_url, url_key } = o_data[e];
          if (primary_url && url_key) {
            videoInfo.push({
              type,
              url: primary_url,
              key: url_key,
            });
          }
        }
      };
      if (o_data.origin) {
        e("origin", "origin");
      }
      e("p360", "360p");
      e("p480", "480p");
      e("p720", "720p");
    }
    return new Z({
      uid: assetInfo.author,
      type: assetInfo.type,
      duration: assetInfo.duration,
      fileName: assetInfo.name,
      size: assetInfo.size,
      assetInfo,
      spritInfo: assetInfo.sprit,
      videoInfo,
      audioInfo: {
        url: o?.data?.audio?.primary_url,
        key: o.data?.audio?.url_key,
      },
    });
  }
  async getFileDetailWithTranscodeNoSign(e, t) {
    let r = await this.getVideoAssetTranscodeStatusNoSign(e, t);
    let a = await r.done();
    if (a.status !== "success") {
      throw Error(JSON.stringify(a.errInfo));
    }
    return new Z({
      fileName: a.data?.video?.file_name,
      type: O,
      size: a.data?.video?.size,
      spritInfo: a.data?.video.thumb,
      duration: (a.data?.video.duration ?? 0) * 1000,
      videoInfo: a.data?.video.video_infos
        ?.map((e) => ({
          type: e.definition ?? e.defination,
          url: e.url,
          key: e.key,
        }))
        .sort((e, t) => {
          let r = ["360p", "480p", "720p"];
          return r.indexOf(e?.type) - r.indexOf(t?.type);
        }),
      extInfo: {
        vid: a.data?.video.source,
      },
    });
  }
  async getVideoAssetTranscodeStatus(e) {
    let t;
    let r;
    if (e.md5) {
      t = {
        id: e.md5,
        key: "md5",
      };
      r = {
        md5s: [e.md5],
      };
    } else {
      t = {
        id: e.id,
        key: "asset_id",
      };
      r = {
        ids: [e.id],
      };
    }
    let a = new eT(t, this);
    await this.sdk.get_asset_play_info(r);
    return a;
  }
  async getAssetsPlayInfo(e) {
    return await this.sdk.get_asset_play_info(e);
  }
  async getVideoAssetTranscodeStatusNoSign(task_id, t) {
    await this.noSignInit();
    return new eS(
      {
        tmp_id: this.noSignOptions?.uniqueId,
        task_id,
        is_support_webp: +(t === true),
      },
      this,
    );
  }
  async getAssetSpirtInfo(e) {
    let t;
    let r;
    if (e.md5) {
      t = {
        id: e.md5,
        key: "md5",
      };
      r = {
        md5s: [e.md5],
      };
    } else {
      t = {
        id: e.id,
        key: "id",
      };
      r = {
        ids: [e.id],
      };
    }
    let a = new ew(t, this);
    await this.sdk.get_asset_sprite_info(r);
    return a;
  }
  async getAssetPreviewInfo(e) {
    let t;
    let r;
    if (e.md5) {
      t = {
        id: e.md5,
        key: "md5",
      };
      r = {
        md5s: [e.md5],
      };
    } else {
      t = {
        id: e.id,
        key: "id",
      };
      r = {
        ids: [e.id],
      };
    }
    let a = new ey(t, this);
    await this.sdk.get_asset_preview_info(r);
    return a;
  }
  async uploadAssetNoLogin(e) {
    await this.noSignInit();
    let { file, fileName, onStart } = e;
    let o = fileName || file.name;
    let fileType = k({
      file,
    });
    let uploader =
      fileType === "video" || fileType === "audio"
        ? this.offlineVideoUploader
        : this.offlineFileUploader;
    if (!uploader) {
      throw Error("No-sign uploader was not initialized");
    }
    await uploader.init();
    return new ef(
      {
        file,
        fileName: o,
        fileType,
        uploader,
        onStart,
      },
      this,
    );
  }
  async cancelAllUploadAsset() {
    return await this.sdk.cancel_upload_all();
  }
  async cancelUploadAsset(e) {
    return await this.sdk.cancel_upload(e);
  }
  async deleteAsset({ ids = [], md5s = [] }) {
    let r = [];
    for (let t = 0; 20 * t < ids.length; t++) {
      r.push(
        this.sdk.delete_asset({
          ids: ids.slice(20 * t, (t + 1) * 20),
        }),
      );
    }
    for (let e = 0; 20 * e < md5s.length; e++) {
      r.push(
        this.sdk.delete_asset({
          md5s: md5s.slice(20 * e, (e + 1) * 20),
        }),
      );
    }
    await Promise.all(r);
  }
  async renameAsset(e) {
    if (
      await this.isAssetNameDumplicate({
        fileName: e.fileName,
        filterMd5: e.md5,
      })
    ) {
      throw new ec();
    }
    return await this.sdk.rename_asset({
      md5: e.md5,
      file_name: e.fileName,
    });
  }
  async downloadByUrlKey(e) {
    if (!e?.url) {
      throw Error("[EverSdk] downloadByUrlKey: url can not be empty");
    }
    let t = {
      ...e,
      url: e.url || "",
    };
    let r = t.skipCache ? undefined : await this.getFromCache(t.url);
    let a = new ev(
      {
        url: t.url,
      },
      this,
    );
    if (r && r instanceof Uint8Array) {
      a.thirdpartDone({
        buffer: r,
      });
    } else {
      let e = await this.sdk.download_url(t, (e) => {
        a.appendChunk(e);
      });
      a.setRequestId(e.request_id);
      a.size = e.size;
    }
    return a;
  }
  async downloadAssetStream(e) {
    let t = e.skipCache ? undefined : await this.getFromCache(e.md5);
    let r = new ev({}, this);
    if (t && t instanceof Uint8Array) {
      r.thirdpartDone({
        buffer: t,
      });
    } else {
      let t = await this.sdk.download_asset(e, (e) => {
        r.appendChunk(e);
      });
      r.setRequestId(t.request_id);
      r.size = t.size;
    }
    return r;
  }
  async downloadAssetUrl(e, t, r) {
    let { token } = await this.dependencies.apiFunc.getEverPhotoToken(
      this.options?.space,
    );
    let { data, headers } = await f.A.get(e, {
      headers: {
        "x-everphoto-token": token,
      },
      responseType: "blob",
    });
    let n = headers["content-type"];
    let c = new Blob([data], {
      type: r || (typeof n === "string" ? n : undefined),
    });
    let l = (headers["content-disposition"] || "").split("filename=")[1];
    let m = document.createElement("a");
    let s = window.URL.createObjectURL(c);
    m.download = l || t || "";
    m.href = s;
    m.style.display = "none";
    m.click();
  }
  async getDownloadUrl(e) {
    let urlMap =
      (
        await this.sdk.get_asset_dynamic_download_url({
          ids: e.ids,
          max_time: e.maxTime,
          ttl: e.ttl,
        })
      )?.data ?? {};
    let noDownloadLink = [];
    for (let a = 0; a < e.ids.length; a++) {
      let o = e.ids[a];
      let i = e?.names?.[a] ?? "";
      if (urlMap[o]) {
        urlMap[o].url = urlMap[o].url + (i ? `&target_name=${i}` : "");
      } else {
        noDownloadLink.push(o);
      }
    }
    return {
      urlMap,
      noDownloadLink,
    };
  }
  async downloadAssetUrlV2(e) {
    let t =
      (
        await this.sdk.get_asset_dynamic_download_url({
          ids: e.ids,
          max_time: e.maxTime,
          ttl: e.ttl,
        })
      )?.data ?? {};
    let r = [];
    for (let a = 0; a < e.ids.length; a++) {
      let o = e.ids[a];
      let i = e?.names?.[a] ?? "";
      if (t[o]) {
        if (e.downloadMode === "anchor") {
          ((e) => {
            let t = document.createElement("a");
            t.download = "";
            t.target = "_blank";
            t.href = e;
            t.style.display = "none";
            t.click();
          })(t[o].url + (i ? `&target_name=${i}` : ""));
        } else {
          ((e) => {
            let t = document.createElement("iframe");
            t.src = e;
            t.style.display = "none";
            document.body.appendChild(t);
          })(t[o].url + (i ? `&target_name=${i}` : ""));
        }
      } else {
        r.push(o);
      }
    }
    return r;
  }
  async getPackages() {
    let e = (await this.sdk.get_package(null)).map((e) => new Y(e));
    let t = [q.EDIT, q.SCRIPT, q.TEMPLATE, q.GRAPHIC];
    return e
      .filter((e) => e.isValid)
      .filter((e) => t.includes(e.subType))
      .sort((e, t) => (t.updatedAt ?? 0) - (e.updatedAt ?? 0));
  }
  async getPackageById(e) {
    return this.getPackageByKey(e);
  }
  async getPackageByKey(e) {
    let t = await this.sdk.get_package([e]);
    if (t.length) {
      return new Y(t[0]);
    }
    throw Error(`\u{8349}\u{7A3F}key(${e})\u{4E0D}\u{5B58}\u{5728}`);
  }
  async savePackage(e) {
    let {
      draftId,
      draftMeta,
      assets,
      isForceReplace = false,
      permission = this.permission ?? G.PUBLIC,
      folderId,
      name,
      draftType = U.NORMAL,
    } = e;
    let base_package_id = e.prePkgId || null;
    if (isForceReplace) {
      base_package_id = (await this.getPackageByKey(draftId)).id;
    }
    return await this.sdk.save_package({
      key: draftId,
      meta: JSON.stringify(draftMeta),
      package_assets: assets.map((e) => ({
        md5: e.md5,
        size: e.size,
        path: e.path,
        entry_ids: e.entryIds,
        meta: JSON.stringify(e.meta),
      })),
      base_package_id,
      permission,
      folder_id: folderId,
      draft_type: draftType,
      name,
    });
  }
  async sharePackage(e) {
    let {
      entryId,
      spaceId,
      draftMeta,
      packageId,
      folderId,
      name,
      packageKey,
      overwrite,
      permission,
    } = e;
    await this.sdk.share_package({
      overwrite,
      permission,
      name,
      package_id: packageId,
      entry_id: entryId,
      meta: JSON.stringify(draftMeta),
      folder_id: folderId,
      package_key: packageKey,
      to_space_id: spaceId,
    });
  }
  async deletePackageById(e) {
    await this.sdk.delete_package(e);
  }
  async renamePackages({ key, name }) {
    let r = await this.getPackageByKey(key);
    let a = g.A({}, r.meta, {
      draft: {
        name,
        updateTime: new Date().valueOf(),
      },
    });
    return new Y(
      (
        await this.sdk.rename_package({
          package_id: r.id,
          meta: JSON.stringify(a),
        })
      ).package,
    );
  }
  async updatePackageMeta({ id, key, meta, autoMergeMeta = false }) {
    let package_id = id;
    let i = meta;
    if (key) {
      try {
        let e = await this.getPackageByKey(key);
        package_id = package_id || e.id;
        if (autoMergeMeta) {
          i = g.A({}, e.meta, i);
        }
      } catch (e) {
        if (autoMergeMeta) {
          throw Error("Not found local meta info, could not merge");
        }
      }
    }
    if (!package_id) {
      throw Error("params id or key is required at least one.");
    }
    return new Y(
      (
        await this.sdk.rename_package({
          package_id,
          meta: JSON.stringify(i),
        })
      ).package,
    );
  }
  async validateWebEditorSupportPkg(e) {
    let t = {
      platform: ["browser"],
      ...e,
    };
    let r = await this.getPackageByKey(t.draftId);
    return !!r && t.platform.includes(r.meta?.uploadSource.platform ?? "");
  }
  async forceSyncPullUpdates() {
    await this.sdk.sync_pull_updates({});
  }
  async getClusters() {
    let e = (await this.sdk.get_clusters({}))
      .filter((e) => e.n_asset)
      .map(
        (e) =>
          new ee({
            cluster: e,
          }),
      );
    let t = e.map((e) => e.lastAssetId);
    let r = (await this.getAssetsByFileId(t)).reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    e.forEach((e) => e.updateLastAsset(r[e.lastAssetId]));
    return e;
  }
  async getClusterLastAsset(e) {
    let t =
      (await this.getAssetsFromCluster({
        clusterId: e.id,
        sortByRelation: true,
      })) || [];
    return t[t.length - 1];
  }
  async getClusterById(e) {
    let t = (
      await this.sdk.get_clusters({
        cluster_ids: [e.clusterId],
      })
    )[0];
    if (!(t && t.n_asset)) {
      throw Error("cluster invalid");
    }
    let r = new ee({
      cluster: t,
    });
    if (e.needLastAsset) {
      let e = await this.getClusterLastAsset(r);
      r.updateLastAsset(e);
    }
    return r;
  }
  async createCluster(e) {
    return await this.sdk.create_cluster({
      ...e,
      relation: JSON.stringify(e.relation ?? []),
      meta: JSON.stringify(e.meta),
    });
  }
  async delCluster(e) {
    return await this.sdk.delete_cluster({
      cluster_id: e.id,
      delete_resource: e.deleteAsset,
    });
  }
  async addAssetToCluster({ clusterId, assetIds, relation }) {
    if (!relation) {
      let a = await this.getClusterById({
        clusterId,
      });
      if (!a) {
        throw Error(`cluster id is not found: ${clusterId}`);
      }
      relation = a.relation;
      relation?.push(...assetIds);
    }
    return await this.sdk.add_cluster_resource({
      cluster_id: clusterId,
      ids: assetIds,
      relation: JSON.stringify(relation),
    });
  }
  async delAssetFromCluster({ clusterId, assetIds = [], relation, delAsset }) {
    if (!relation) {
      let a = await this.getClusterById({
        clusterId,
      });
      if (!a) {
        throw Error(`cluster id is not found: ${clusterId}`);
      }
      relation = a.relation;
      relation = relation?.filter((e) => !assetIds.includes(e));
    }
    await this.sdk.remove_cluster_resource({
      cluster_id: clusterId,
      ids: assetIds,
      relation: JSON.stringify(relation),
    });
    if (delAsset) {
      await this.deleteByEntry(assetIds);
    }
  }
  async updateCluster({ clusterId, meta, relation }) {
    await this.sdk.update_cluster({
      cluster_id: clusterId,
      meta: meta ? JSON.stringify(meta) : undefined,
      relation: relation ? JSON.stringify(relation) : undefined,
    });
  }
  async getAssetsFromCluster(e) {
    let t = await this.sdk.get_asset_from_cluster({
      cluster_id: e.clusterId,
    });
    let r = t?.map((e) => er(e, this)) ?? [];
    if (e.sortByRelation) {
      let t = await this.getClusterById({
        clusterId: e.clusterId,
      });
      if (t?.relation) {
        r = this.sortArrayByRelation({
          exists: r,
          relation: t.relation || [],
          getter: (e) => e.notOnlyId,
        });
      }
    }
    return r;
  }
  async createFolder(e) {
    return new et(
      (
        await this.sdk.create_folder({
          name: e.name,
          parent_id: e.parentId,
          permission: e.permission,
          meta: JSON.stringify(g.A(ei(), e.meta || {})),
        })
      ).folder,
    );
  }
  async deleteFolder(e) {
    if (e && e.length) {
      return await this.sdk.delete_folder({
        ids: e,
      });
    }
  }
  async moveTo(e) {
    let { ids, target } = e;
    let a = {
      ids: e.ids,
      parent_id: e.target,
    };
    try {
      this.cacheCurrentFolders(e.target);
    } catch (e) {}
    let o = !this.isGroupSdk;
    if (qm.isRootFolderId(target)) {
      return await this.sdk.move_to_folder(a);
    }
    let i = await this.getFolderPaths({
      folderId: target,
    });
    let i_length = i.length;
    let c = i.pop();
    if (!c) {
      throw Error("[EverSDK] moveTo: target folder not exist");
    }
    let l = await this.getFolders(ids);
    if (
      (await Promise.all(l.map((e) => this.getFolderMaxDepth(e.id)))).some(
        (e) => e.depth > qm.maxFolderDepth - i_length,
      )
    ) {
      throw new eu(qm.maxFolderDepth);
    }
    if (o || c.permission === G.PUBLIC) {
      return await this.sdk.move_to_folder(a);
    }
    if ([...(await this.getEntryAssets(ids)), ...l].some((e) => e.isPublic)) {
      throw new ed();
    }
    return await this.sdk.move_to_folder(a);
  }
  async updateFolder(e) {
    return await this.sdk.update_folder({
      ...e,
      folderId: e.folderId,
      access_time: +!!e.access,
    });
  }
  async getFolders(e) {
    if (!e || !e?.length) {
      return [];
    }
    if (e.some((e) => qm.isRootFolderId(e))) {
      throw Error("[EverSDK] getFolders: can not get root folder info ");
    }
    let t = await this.sdk.get_folders({
      ids: e,
    });
    return (t?.folders || []).map((e) => new et(e));
  }
  async getFolder(folderId, t) {
    if (qm.isRootFolderId(folderId)) {
      return;
    }
    let r = (await this.getFolders([folderId]))[0];
    if (!r || t === undefined || !this.isGroupSdk) {
      return r;
    }
    let [a] = await this.getFolderPaths(
      {
        folderId,
      },
      t,
    );
    if (
      (t === G.PERSONAL && a?.author === qm.everUserId) ||
      (t === G.PUBLIC && a.isPublic)
    ) {
      return r;
    }
    return null;
  }
  async getFolderPaths(e, t) {
    if (!e || !e.folderId) {
      throw Error("[EverSDK] getFolderPaths: folder_id can not be empty");
    }
    if (qm.isRootFolderId(e.folderId)) {
      throw Error("[EverSDK] getFolders: can not get root folder info ");
    }
    let r = await this.sdk.get_folder_path({
      folder_id: e.folderId,
    });
    let a = (r?.path || []).map((e) => new et(e));
    if (
      a.length &&
      this.isGroupSdk &&
      t !== undefined &&
      (t !== G.PUBLIC || !a[0].isPublic) &&
      (t !== G.PERSONAL || a[0].author !== this.everUserId)
    ) {
      return [];
    }
    return a;
  }
  async getAssetsByFolder(e, t) {
    let { folderId, filter } = e;
    let o = await this.sdk.get_folder_items({
      folder_id: folderId,
      filter: filter || 0,
    });
    let assets = (o.assets || [])
      .filter((e) => !e?.cluster_list?.length)
      .map((e) => er(e, this));
    let n = (o.packages || []).map((e) => new Y(e)).filter((e) => e.isValid);
    let packages = n
      .filter((e) => e.subType === q.EDIT)
      .sort((e, t) => (t.updatedAt ?? 0) - (e.updatedAt ?? 0));
    let scripts = n
      .filter((e) => e.subType === q.SCRIPT)
      .sort((e, t) => (t.updatedAt ?? 0) - (e.updatedAt ?? 0));
    let clusters = [];
    clusters = (o.clusters || [])
      .filter((e) => e.n_asset)
      .map(
        (e) =>
          new ee({
            cluster: e,
          }),
      );
    await Promise.all(
      clusters.map(async (e) => {
        let t = await this.getClusterLastAsset(e);
        e.updateLastAsset(t);
      }),
    );
    let folders = (o.folders || []).map((e) => new et(e));
    if (!this.isGroupSdk || t === undefined) {
      return {
        assets,
        packages,
        clusters,
        folders,
        scripts,
      };
    }
    if (qm.isRootFolderId(folderId)) {
      return {
        assets: assets.filter((e) => eo(t, e)),
        packages: packages.filter((e) => eo(t, e)),
        clusters: clusters.filter((e) => eo(t, e)),
        folders: folders.filter((e) => eo(t, e)),
        scripts: scripts.filter((e) => eo(t, e)),
      };
    }
    let d = await this.getFolderPaths(
      {
        folderId,
      },
      t,
    );
    if (!d.length) {
      return {};
    }
    let u = d[0];
    if (
      (t === G.PERSONAL && u.author === qm.everUserId) ||
      (t === G.PUBLIC && u.isPublic)
    ) {
      return {
        assets,
        packages,
        clusters,
        folders,
        scripts,
      };
    }
    return {};
  }
  async copyAsset(e) {
    if (!e || !e.entryId) {
      throw Error("[EverSDK] copyAsset: entry_id can not be empty");
    }
    try {
      this.cacheCurrentFolders(e.parentId);
    } catch (e) {}
    return er(
      (
        await this.sdk.copy_asset({
          entry_id: e.entryId,
          name: e.name,
          parent_id: e.parentId,
        })
      ).asset,
      this,
    );
  }
  async copyPackage(e) {
    if (!e || !e.src_package_id) {
      throw Error("[EverSDK] copyPackage: src_package_id can not be empty");
    }
    let { owner, platform, appVersion, systemVersion } = ei().uploadSource;
    let i = {
      owner,
      platform,
      appVersion,
      systemVersion,
      createTime: Date.now(),
    };
    return new Y(
      (
        await this.sdk.copy_package({
          src_package_id: e.src_package_id,
          target_name: e.target_name,
          target_package_key: e.target_package_key,
          target_meta: JSON.stringify(
            g.A(ei(), e.target_meta, {
              createSource: i,
              uploadSource: i,
            }),
          ),
        })
      ).package,
    );
  }
  async copyAndRename(e) {
    let { file, parent } = e;
    let a = await qm.getAssetsByFolder({
      folderId: parent,
      filter: 0,
    });
    let o = [
      ...(a.assets || []),
      ...(a.clusters || []),
      ...(a.folders || []),
      ...(a.packages || []),
      ...(a.scripts || []),
    ].map((e) => e.name);
    let i = this.dependencies.getFileCopyName(file.name, o);
    if (file.type === Q) {
      let { meta } = file;
      let target_meta = {
        ...meta,
        uploadSource: {
          ...meta?.uploadSource,
          ...ei().uploadSource,
          platform: "browser",
        },
        createSource: {
          ...meta?.createSource,
          ...ei().uploadSource,
          platform: "browser",
        },
        draft: {
          ...meta?.draft,
          name: i,
        },
      };
      return qm.copyPackage({
        src_package_id: file.id,
        target_name: i,
        target_package_key: crypto.randomUUID().toUpperCase(),
        target_meta,
      });
    }
    return qm.copyAsset({
      entryId: file.id,
      parentId: parent,
      name: i,
    });
  }
  cacheCurrentFolders(e) {
    if (qm.isRootFolderId(e)) {
      return;
    }
    let t = [
      e,
      ...this.getCacheCurrentFolderIds().filter((t) => t !== e),
    ].slice(0, this.cacheFoldersNum);
    window.localStorage.setItem(this.getCacheFolderKey(), JSON.stringify(t));
  }
  getCacheCurrentFolderIds() {
    let e = [];
    try {
      let t = JSON.parse(
        window.localStorage.getItem(this.getCacheFolderKey()) || "",
      );
      if (Array.isArray(t)) {
        e = t;
      }
    } catch (e) {}
    return e;
  }
  async getCurrentFolders(e = 5) {
    let relation = this.getCacheCurrentFolderIds();
    let exists = await this.getFolders(
      relation.filter((e) => !qm.isRootFolderId(e)),
    );
    let a = this.sortArrayByRelation({
      exists,
      relation,
      getter: (e) => e.id,
    });
    let o = a.map((e) => e.id);
    window.localStorage.setItem(this.getCacheFolderKey(), JSON.stringify(o));
    return a.slice(0, e);
  }
  async updateEntry(e) {
    if (!e || !e.id) {
      throw Error("[EverSDK] updateEntry: entry_id can not be empty");
    }
    let t = {
      id: e.id,
    };
    if (e.name) {
      t.name = e.name;
    }
    if (e.access) {
      t.access_time = e.access;
    }
    if (e.permission !== null && e.permission !== undefined) {
      t.permission = +(e.permission === G.PERSONAL);
    }
    if (e.meta) {
      try {
        t.meta = JSON.stringify(e.meta);
      } catch (e) {}
    }
    return await this.sdk.update_entry(t);
  }
  async getEntryAssets(ids, t = false) {
    return (
      (await this.sdk.get_entry_asset({
        ids,
        allow_cluster: !!t,
      })) || []
    ).map((e) => er(e, this));
  }
  async getEntryAsset(e, t = false, r = false) {
    let a = (
      await this.sdk.get_entry_asset({
        ids: [e],
        allow_cluster: !!t,
      })
    )[0];
    if (!a) {
      throw Error(`asset not found: entryId=${e}`);
    }
    let o = er(a, this);
    if (r) {
      let e = await this.getUnencryptedPlayInfo({
        id: o.notOnlyId,
      });
      o._sourceData.unencryptedPlayInfo = e;
    }
    return o;
  }
  async deleteByEntry(e = []) {
    let t = [];
    for (let r = 0; 20 * r < e.length; r++) {
      t.push(
        this.sdk.delete_entry({
          ids: e.slice(20 * r, (r + 1) * 20),
        }),
      );
    }
    return await Promise.all(t);
  }
  async getFolderMaxDepth(folder_id) {
    return await this.sdk.get_folder_max_depth({
      folder_id,
    });
  }
  async resetSpaceStorage(e) {
    let { quota, usage } =
      await this.dependencies.apiFunc.getEverPhotoUserSpace(e);
    return quota - usage;
  }
  sortArrayByRelation(e) {
    let t = e?.getter || ((e) => e);
    let r = e.exists.slice();
    let a = [];
    for (let o of e.relation ?? []) {
      let e = r.findIndex((e) => t(e) === o);
      a.push(...r.splice(e, e < 0 ? 0 : 1));
    }
    a.push(...r);
    return a;
  }
  async tearDown() {
    if (this.sdk) {
      return this.sdk.tear_down();
    }
    return Promise.resolve();
  }
  async updatePermission(e) {
    let {
      permission = this.permission ?? G.PUBLIC,
      assetIds = [],
      assetMd5s = [],
      packageIds = [],
    } = e;
    return await this.sdk.update_permission({
      permission,
      asset_ids: assetIds,
      asset_md5s: assetMd5s,
      package_ids: packageIds,
    });
  }
  async getUnencryptedPlayInfo(e) {
    return await this.sdk.get_asset_unencrypted_play_info(e);
  }
  async moveFromSpace(e) {
    let t = {
      from_space: e.fromSpace || "0",
      resource_id: e.resourceId,
      resource_type: e.resourceType,
      to_space: e.toSpace || this.options?.space || "0",
      meta: JSON.stringify(e.meta),
    };
    if (!this.options?.is_boe) {
      t.from_idc = e.fromIdc;
      t.to_idc = e.toIdc ?? this.idc;
    }
    return new eI((await this.sdk.move_from_space(t)).process_id, this);
  }
  async copyFromSpace(e) {
    let t = {
      from_space: e.fromSpace || "0",
      resource_id: e.resourceId,
      resource_type: e.resourceType,
      to_space: e.toSpace || this.options?.space || "0",
      meta: JSON.stringify(e.meta),
      package_key: e.packageKey,
    };
    if (!this.options?.is_boe) {
      t.from_idc = e.fromIdc;
      t.to_idc = e.toIdc ?? this.idc;
    }
    return new eb((await this.sdk.copy_from_space(t)).process_id, this);
  }
  async getImagesTranscodeStatus(e) {
    let t = new ej(e, this);
    await this.sdk.get_image_transcode_info({
      listeners: e.map((e) => ({
        ...e,
        transcode_type: L[e.resolution],
      })),
    });
    return t;
  }
  async triggerImageResize(e) {
    let { ids = [], md5s = [] } = e;
    let a = [];
    for (let e = 0; 50 * e < ids.length; e++) {
      a.push(
        this.sdk.trigger_image_resize({
          ids: ids.slice(50 * e, (e + 1) * 50),
        }),
      );
    }
    for (let e = 0; 50 * e < md5s.length; e++) {
      a.push(
        this.sdk.trigger_image_resize({
          md5s: md5s.slice(50 * e, (e + 1) * 50),
        }),
      );
    }
    return await Promise.all(a);
  }
  async cancelImagesTranscodeStatus(options, t) {
    await this.sdk.cancel_image_transcode_info_loop({
      listeners: options.map((e) => ({
        ...e,
        transcode_type: L[e.resolution],
      })),
      cancel_all: t,
    });
    this.eventBus.emit(eJ.EverCloudCancelImageTranscode, {
      options,
      cancelAll: t,
    });
  }
  async getImagePreviewInfo(e, t) {
    let e_imageTranscodeInfo = e.imageTranscodeInfo;
    let a = {};
    let o = [];
    (t || E).forEach((e) => {
      if (e_imageTranscodeInfo[e]) {
        a[e] = e_imageTranscodeInfo[e];
      } else {
        o.push(e);
      }
    });
    if (!o.length) {
      return a;
    }
    let i = await this.getImagesTranscodeStatus(
      o.map((t) => ({
        ids: [e.id],
        resolution: t,
      })),
    );
    if (!e.imageAsyncResize) {
      let t = await this.triggerImageResize({
        ids: [e.id],
      });
      ea(`EverCloud triggerImageResize ${e.id} ${JSON.stringify(t)}`);
    }
    try {
      await i.done();
      return (await this.getAssetByFileId(e.id)).imageTranscodeInfo;
    } catch (e) {
      return a;
    }
  }
  async getImagesPreviewInfo(e) {
    let { resolutions, ids, md5s } = e;
    let o = resolutions?.map((e) => ({
      ids,
      md5s,
      resolution: e,
    }));
    let i = await this.getImagesTranscodeStatus(o);
    let n = await this.triggerImageResize({
      ids,
      md5s,
    });
    ea(`EverCloud triggerImageResize: 
 ids-[${ids?.join(",") ?? ""}] 
 md5s-[${md5s?.join(",") ?? ""}]: 
${JSON.stringify(n)}`);
    await i.done();
    let c =
      (
        await this.getAsset({
          ids,
          md5s,
        })
      ).map((e) => er(e, this)) ?? [];
    let l = {};
    c.forEach((e) => {
      l[e.id] = e;
      l[e.md5] = e;
    });
    let m = {};
    ids?.forEach((e) => {
      if (l[e]) {
        m[e] = l[e].imageTranscodeInfo;
      }
    });
    md5s?.forEach((e) => {
      if (l[e]) {
        m[e] = l[e].imageTranscodeInfo;
      }
    });
    return m;
  }
  async throttlingGetUpdatesTrigger(
    e = {
      throttle: 2000,
    },
  ) {
    if (this._getUpdatesTriggerLastTime) {
      if (Date.now() - this._getUpdatesTriggerLastTime > e.throttle) {
        this._getUpdatesTriggerLastTime = Date.now();
        this.sdk.trigger_pull_updates();
      }
    } else {
      this._getUpdatesTriggerLastTime = Date.now();
      this.sdk.trigger_pull_updates();
      return;
    }
  }
  async initEverCloudSdk(e) {
    let token;
    let a;
    if (this.sdk) {
      return void ea("this has been init", {
        type: "warn",
      });
    }
    let o = Date.now();
    let i = (() => {
      try {
        let e =
          typeof __userInfoStringify !== "undefined"
            ? JSON.parse(__userInfoStringify)
            : undefined;
        if (e && e.ret === "0") {
          return e.data;
        }
        return;
      } catch (e) {
        return;
      }
    })();
    if (i?.ever_photo.token && i?.ever_photo.web_user_id) {
      token = i.ever_photo.token;
      a = i.ever_photo.web_user_id;
    } else {
      let e = await this.dependencies.apiFunc.getEverPhotoToken(
        this.options?.space,
      );
      token = e.token;
      a = e.ever_photo_user.web_user_id;
    }
    this.initEverCloudSdkReporter.addParams({
      getToken: Date.now() - o,
    });
    this.webUserId = a;
    let { EverCloudSdk } = await require
      .e("hx1")
      .then(require.bind(require, "xGQ"));
    let { timeout } = this.options || {};
    let { init = 300000, ...rest } = timeout || {};
    let s = new EverCloudSdk(
      {
        token,
        ep_uid: this.webUserId,
        source_from: this.dependencies.constant.sourceFrom,
        level: "error",
        ...this.options,
        event_conf: {
          enable_asset_status_event: false,
          enable_package_status_event: false,
        },
        common_params: {
          aid: this.dependencies.constant.aid,
        },
        headers: {
          ...this.options?.headers,
        },
        backup_conf: {
          max_count_of_concurrent_upload: 5,
          chunk_size: 5,
          ...this.options?.backup_conf,
        },
        timeout: {
          general: 30,
          upload: 120,
          download: 120,
          ...rest,
        },
      },
      async () => {
        let e = await this.dependencies.apiFunc.getEverPhotoToken(
          this.options?.space,
        );
        this.webUserId = e.ever_photo_user.web_user_id;
        return {
          new_token: e.token,
          ep_uid: this.webUserId,
          third_party_uid: this.options.user_id,
        };
      },
    );
    this.sdk = s;
    try {
      await s.init();
    } catch (error) {
      this.initLocker.initDone({
        reject: error,
      });
    }
    if (!this.options?.disable_start_sync_loop) {
      await this.startSyncLoop();
    }
    e.initDoneCb();
    s.set_event_callback((t) => {
      let r = JSON.parse(t);
      let r_type = r.type;
      ea(`this receive event: ${r_type} data: ${t}`);
      if (r_type === "sync_load_done") {
        e.loadDoneCb();
      }
      if (r_type === "sync_init_done") {
        e.syncDoneCb(r.code === 0, t);
        this.initEverCloudSdkReporter.addParams({
          sdkInit: this.initLocker.costTimes,
          sdkSync: this.syncLocker.costTimes,
          total: Date.now() - o,
        });
        let { reportData } = this.initEverCloudSdkReporter;
        this.TeaReporter?.event(reportData.event, reportData.data);
      }
      if (r_type === eJ.TrackSendEvent) {
        this.reportSdkEvent(r);
      }
      if (r_type === eJ.LogReportEvent) {
        this._reportSlardarLog(r);
      }
      this.eventBus.emit(r_type, r);
    });
  }
  async isAssetNameDumplicate({ fileName, filterMd5 }) {
    return Object.keys(
      (await this.getFilesListByFloder({})).reduce((acc, item) => {
        if (item.type !== Q) {
          if (filterMd5 && item.md5 === filterMd5) {
            return acc;
          }
          acc[item.name ?? ""] = true;
        }
        return acc;
      }, {}),
    ).includes(fileName);
  }
  reportSdkEvent(e) {
    if (this.TeaReporter) {
      let { event_name, str_params, int_params, float_params } = e;
      this.TeaReporter?.event(event_name, {
        ...str_params,
        ...int_params,
        ...float_params,
      });
    }
  }
  async getFromCache(e) {
    if (e && this.idbPlugin) {
      return await this.idbPlugin.tryGetSource(e);
    }
  }
  getCacheFolderKey() {
    return `current_folder_${this.webUserId}_${this.options?.space || ""}`;
  }
  _reportSlardarLog(e) {
    this.slardarReporter?.({
      type: "log",
      content: e.content,
      level: e.level,
      extra: {
        event_name: eJ.LogReportEvent,
        event_from: "ever_cloud_sdk",
        space_id: this.spaceId ?? "unknown",
      },
    });
  }
  async _setEverCloudOptions(e) {
    if (!this.hasSetOptions) {
      if (!e.netconf && 1) {
        Object.assign(e, {
          netconf: e.is_boe
            ? {
                base: "everphoto-lv-boe._____________",
                media: "everphoto-lv-boe._____________",
                is_https: true,
              }
            : {
                base: "lv-everphoto-bcdn.____________",
                media: "lv-everphoto-bcdn.____________",
                is_https: true,
              },
        });
      }
      let t =
        (this.dependencies.overwriteSDKInitOptions &&
          (await this.dependencies.overwriteSDKInitOptions(e))) ||
        e;
      t.netconf = {
        is_https: true,
        ...t.netconf,
      };
      this.options = t;
      this.idc = R[e.dc_name] ?? e.dc_name;
    }
  }
  async _uploadAssetByEverCloud(e) {
    let {
      file,
      fileName,
      permission = this.permission ?? G.PUBLIC,
      folderId,
    } = e;
    let i = fileName || file.name;
    if (
      !e?.skipDuplicate &&
      (await this.isAssetNameDumplicate({
        fileName: i,
      }))
    ) {
      throw new ec();
    }
    let n = g.A(ei(), e?.meta);
    let { fileType } = e;
    if (!fileType) {
      fileType =
        k({
          file,
        }) ?? "file";
    }
    return new e_(
      {
        requestId: (
          await this.sdk.upload_asset(
            file,
            fileType,
            i,
            JSON.stringify(n),
            permission === G.PERSONAL ? "personal" : "",
            e?.flags,
            folderId,
            e.isMultiDefTranscode,
            e.transcodeTemplateType,
          )
        ).request_id,
        fileType,
        autoPromote: !!e.autoPromote,
        workspaceId: e.workspaceId,
        biz_scene: n?.biz_scene,
      },
      this,
    );
  }
  async _uploadAssetByVod(e) {
    let t;
    let { fileType } = e;
    if (!fileType) {
      fileType =
        k({
          file: e.file,
        }) ?? "file";
    }
    this.reportUploadAnalyze({
      action: "start",
      size: -1,
      uploaderType: "vod",
      filename: e.file.name,
      fileType,
    });
    let startTime = Date.now();
    let o = e.fileName || e.file.name;
    let i = (t) => {
      this.reportUploadAnalyze({
        action: "error",
        size: e.file.size || -1,
        uploaderType: "vod",
        errorMsg: t.msg,
        filename: e.file.name,
        fileType,
      });
    };
    if (!e?.skipDuplicate) {
      let e;
      try {
        e = await this.isAssetNameDumplicate({
          fileName: o,
        });
      } catch (error) {
        let e = `[error]asset name dumplicate error: ${error.msg || error.message}`;
        i({
          code: error.code,
          msg: e,
        });
        throw Error(error);
      }
      if (e) {
        throw new ec();
      }
    }
    if (!this.vodUploader) {
      this.vodUploader = this.getSignUploader({
        workspaceId: e.workspaceId,
        userId: this.options?.user_id,
      });
    }
    let vodUploader = this.vodUploader;
    if (!vodUploader) {
      throw Error("Signed uploader was not initialized");
    }
    let meta = g.A(ei(), e?.meta);
    let l = Date.now() - startTime;
    this.reportUploadAnalyze({
      action: "init",
      size: e.file.size || 0,
      duration: l,
      uploaderType: "vod",
      filename: e.file.name,
      fileType,
    });
    let m = false;
    let s = () => {
      this._concurrencyLockForVod.release();
      if (!m) {
        m = true;
        clearTimeout(t);
      }
    };
    let onProgress = () => {
      if (!m) {
        clearTimeout(t);
        t = setTimeout(() => {
          if (!m) {
            this._concurrencyLockForVod.release();
            m = true;
          }
        }, 15000);
      }
    };
    let u = Date.now();
    await this._concurrencyLockForVod.acquire();
    let p = Date.now() - u;
    this.reportUploadAnalyze({
      action: "concurrency_lock_wait",
      size: e.file.size || 0,
      duration: p,
      uploaderType: "vod",
      filename: e.file.name,
      fileType,
    });
    let e_uploaderConfig = e.uploaderConfig;
    return new eB(
      {
        file: e.file,
        fileName: o,
        fileType,
        uploader: vodUploader,
        workspaceId: e.workspaceId,
        flags: e.flags,
        folderId: e.folderId,
        meta,
        isMultiDefTranscode: e.isMultiDefTranscode,
        autoPromote: e.autoPromote,
        transcodeTemplateType: e.transcodeTemplateType,
        permission: e.permission || this.permission || G.PUBLIC,
        noCopy: e_uploaderConfig?.noCopy,
        startTime,
        onStart: e.onStart,
        onCancel: () => {
          s();
        },
        onFinish: () => {
          s();
        },
        onProgress,
      },
      this,
    );
  }
  constructor() {
    this.eventBus = new _.A();
    this._defaultUploaderType = "normal";
    this.noSignOptions = null;
    this.options = null;
    this.initLocker = new eM();
    this.syncLocker = new eM();
    this.loadLocker = new eM();
    this._concurrencyLockForVod = new en(5);
    this.syncNoSignInitDone = false;
    this.syncNoSignIniting = false;
    this.syncNoSignInitError = false;
    this.initNoSignQueue = [];
    this.destroyed = false;
    this.cacheFoldersNum = 10;
    this.initEverCloudSdkReporter = new eA();
  }
}
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [typeof Query === "undefined" ? Object : Query]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getFilesListByFloder",
  null,
);
eN(
  [
    ((n = 0),
    (c = []),
    (l = async () => {
      if (c.length > 0 && n < 10) {
        let e = c.shift();
        if (e) {
          let { fn, resolve, reject } = e;
          n++;
          try {
            await fn().then(resolve).catch(reject);
          } finally {
            n--;
            l();
          }
        } else {
          l();
        }
      }
    }),
    function (e, t, r) {
      let r_value = r.value;
      r.value = async function (...e) {
        if (n >= 10) {
          return new Promise((resolve, reject) => {
            c.push({
              fn: () => r_value.apply(this, e),
              resolve,
              reject,
            });
          });
        }
        n++;
        try {
          return await r_value.apply(this, e);
        } finally {
          n--;
          l();
        }
      };
      return r;
    }),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAsset",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [typeof Query === "undefined" ? Object : Query]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssets",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "asset_preview",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof StreamUploadParams === "undefined" ? Object : StreamUploadParams,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "streamClipUploadAsset",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      String,
      Number,
      typeof File === "undefined" ? Object : File,
      Boolean,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "appendClipToUpload",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "uploadVid",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [String, Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "syncVideoToEverCloud",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetsByMd5",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetByMd5",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [String, undefined]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetByFileId",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [typeof Array === "undefined" ? Object : Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetsByFileId",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object, undefined]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getFileDetailWithTranscode",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getVideoAssetTranscodeStatus",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetsPlayInfo",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetSpirtInfo",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetPreviewInfo",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", []),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "cancelAllUploadAsset",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "cancelUploadAsset",
  null,
);
eN(
  [
    eP(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "deleteAsset",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "renameAsset",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "downloadByUrlKey",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof DonwloadAssetParams === "undefined" ? Object : DonwloadAssetParams,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "downloadAssetStream",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [String, String, String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "downloadAssetUrl",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof IBrowserDownload === "undefined" ? Object : IBrowserDownload,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getDownloadUrl",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "downloadAssetUrlV2",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", []),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getPackages",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getPackageByKey",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "savePackage",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "sharePackage",
  null,
);
eN(
  [
    eP(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "deletePackageById",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "renamePackages",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "updatePackageMeta",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", []),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "forceSyncPullUpdates",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", []),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getClusters",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [ee === undefined ? Object : ee]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getClusterLastAsset",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getClusterById",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "createCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "delCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "addAssetToCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "delAssetFromCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "updateCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetsFromCluster",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "createFolder",
  null,
);
eN(
  [
    ek(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "deleteFolder",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "moveTo",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "updateFolder",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getFolders",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object, G === undefined ? Object : G]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getFolderPaths",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object, G === undefined ? Object : G]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getAssetsByFolder",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "copyAsset",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "copyPackage",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "updateEntry",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array, undefined]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getEntryAssets",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [String, undefined, undefined]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getEntryAsset",
  null,
);
eN(
  [
    ek(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "deleteByEntry",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [String]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getFolderMaxDepth",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "updatePermission",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getUnencryptedPlayInfo",
  null,
);
eN(
  [
    eP(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof IMoveFromSpaceOption === "undefined"
        ? Object
        : IMoveFromSpaceOption,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "moveFromSpace",
  null,
);
eN(
  [
    eP(),
    ex(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof IMoveFromSpaceOption === "undefined"
        ? Object
        : IMoveFromSpaceOption,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "copyFromSpace",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getImagesTranscodeStatus",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "triggerImageResize",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Array, Boolean]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "cancelImagesTranscodeStatus",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [z === undefined ? Object : z, Array]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getImagePreviewInfo",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "getImagesPreviewInfo",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "throttlingGetUpdatesTrigger",
  null,
);
eN(
  [
    ek(),
    eL("design:type", Function),
    eL("design:paramtypes", [Object]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "isAssetNameDumplicate",
  null,
);
eN(
  [
    eP(),
    eL("design:type", Function),
    eL("design:paramtypes", [
      typeof UploadParams === "undefined" ? Object : UploadParams,
    ]),
    eL("design:returntype", Promise),
  ],
  eO.prototype,
  "_uploadAssetByEverCloud",
  null,
);
class eQ {
  static {
    this.eventBus = new _.A();
  }
  static {
    this.EVENTS = {
      SPACE_CHANGE: "space_change",
    };
  }
  static {
    this.sdkList = new Map();
  }
  static {
    this.maxFolderDepth = 10;
  }
  static {
    this.space = "";
  }
  static {
    this.TeaReporter = null;
  }
  static {
    this.slardarReporter = null;
  }
  static {
    this.duration = 60000;
  }
  static {
    this.maxSize = 3;
  }
  static {
    this.timer = setTimeout(() => {
      eQ._destroySdk();
    }, eQ.duration);
  }
  static {
    this.dependencies = undefined;
  }
  static {
    this._initLocker = new eM();
  }
  static {
    this.awaitInitQueue = new Map();
  }
  static get sdk() {
    let e = eQ._getSdkKey(eQ.options);
    let t = eQ.sdkList.get(e);
    if (t) {
      return t.sdk;
    }
    eQ.initNoSignSdk();
    let r = eQ.sdkList.get(eQ._getSdkKey());
    return r?.sdk;
  }
  static get supportImageResolutions() {
    return E;
  }
  static async prefetchWasmCode() {
    let { evpt_sdk_init_wasm_module } = await require
      .e("hx1")
      .then(require.bind(require, "xGQ"));
    await evpt_sdk_init_wasm_module();
  }
  static async getSdkInstance(e) {
    let { autoDestroy = false, dcName, netconf, userId } = e;
    let { spaceId } = e;
    if (!spaceId) {
      spaceId = "0";
    }
    let n = `${eQ.options?.user_id || ""}-${spaceId}`;
    let initProcessReporter = new eA();
    initProcessReporter.addProcessParams({
      method: "getSdkInstance",
      process: "wait-set-options",
      key: n,
    });
    ea(`EverCloud: getSdkInstance ${n} start wait setOptions`);
    this.TeaReporter?.event(
      initProcessReporter.progressEvent,
      initProcessReporter.process,
    );
    ea(`EverCloud: getSdkInstance ${n} end wait setOptions`);
    await eQ.init({
      spaceId,
      dcName,
      netconf,
      autoDestroy,
      initProcessReporter,
      userId,
    });
    let l = eQ.sdkList.get(n);
    if (l) {
      l.referenceCount += 1;
      ea(`EverCloud: Reference instance [${n}], reference-${l.referenceCount}`);
      initProcessReporter.addProcessParams({
        process: "init-success",
      });
      this.TeaReporter?.event(
        initProcessReporter.progressEvent,
        initProcessReporter.process,
      );
      l.autoDestroy = autoDestroy;
      return l.sdk;
    }
    initProcessReporter.addProcessParams({
      process: "init-error",
      error: `EverCloud sdk init edn bug sdk=${n} not found in cache`,
    });
    this.TeaReporter?.event(
      initProcessReporter.progressEvent,
      initProcessReporter.process,
    );
    throw Error("EverCloud: sdk init failed");
  }
  static setNoSignOptions(e) {
    eQ.noSignOptions = e;
    eQ.sdkList.forEach((t) => {
      t.sdk.setNoSignOptions(e);
    });
  }
  static async noSignInit() {
    await eQ.initNoSignSdk();
  }
  static async initNoSignSdk() {
    if (!eQ.sdkList.get(eQ._getSdkKey())) {
      let e = new eO();
      if (eQ.dependencies) {
        e.setDependencies(eQ.dependencies);
      } else {
        throw Error("please call setDependencies before init.");
      }
      e.setNoSignOptions(eQ.noSignOptions);
      eQ.sdkList.set(eQ._getSdkKey(), {
        referenceCount: 0,
        sdk: e,
        updateTime: Date.now(),
        createTime: Date.now(),
        autoDestroy: true,
      });
      await e.noSignInit();
    }
  }
  static async changeSpace(e) {
    eQ.space = e.spaceId || "0";
    let t = await eQ.init(e);
    eQ._emitSpaceChange();
    return t;
  }
  static setTeaReporter(e) {
    eQ.TeaReporter = e;
    eQ.sdkList.forEach(({ sdk }) => {
      sdk.setTeaReporter(e);
    });
  }
  static setSlardarReporter(e) {
    eQ.slardarReporter = e;
    eQ.sdkList.forEach(({ sdk }) => {
      sdk.setSlardarReporter(e);
    });
  }
  static setOptions(e, t) {
    if (!eQ.options || t) {
      eQ.options = e;
      eQ._initLocker.startToInit();
      eQ._initLocker.initDone();
    }
  }
  static async init(e) {
    let {
      spaceId,
      autoDestroy = true,
      dcName,
      netconf,
      initProcessReporter,
      userId,
    } = e || {};
    let { idbPlugin, options, sdkList, space } = eQ;
    let space_1 = spaceId || space || options.space || "0";
    let u = eQ._getSdkKey(options, space_1);
    let p = initProcessReporter || new eA();
    p.addProcessParams({
      method: p.reportProcess.data.method || "init",
      key: p.reportProcess.data.key || u,
      process: "wait-init",
    });
    this.TeaReporter?.event(p.progressEvent, p.process);
    let C = sdkList.get(u);
    if (C) {
      p.addProcessParams({
        process: "sdk-init-existed",
      });
      this.TeaReporter?.event(p.progressEvent, p.process);
      let { sdk } = C;
      if (idbPlugin) {
        sdk.setCachePlugin(idbPlugin);
      }
      C.updateTime = Date.now();
      eQ.awaitInitQueue.get(u)?.forEach(({ resolve }) => resolve(C.sdk));
      eQ.awaitInitQueue.delete(u);
      eQ._destroySdk();
      return sdk.init();
    }
    let v = eQ.awaitInitQueue.get(u);
    if (v && v.length) {
      p.addProcessParams({
        process: "sdk-init-doing",
      });
      this.TeaReporter?.event(p.progressEvent, p.process);
      return new Promise((resolve, reject) => {
        v.push({
          resolve,
          reject,
        });
      });
    }
    p.addProcessParams({
      process: "sdk-init-new",
    });
    this.TeaReporter?.event(p.progressEvent, p.process);
    let _ = new eO();
    if (idbPlugin) {
      _.setCachePlugin(idbPlugin);
    }
    if (eQ.dependencies) {
      _.setDependencies(eQ.dependencies);
    } else {
      throw Error("please call setDependencies before init.");
    }
    _.setNoSignOptions(eQ.noSignOptions);
    _.setTeaReporter(eQ.TeaReporter);
    if (eQ.slardarReporter) {
      _.setSlardarReporter(eQ.slardarReporter);
    }
    return new Promise(async (resolvePromise, rejectPromise) => {
      eQ.awaitInitQueue.set(u, [
        {
          resolve: resolvePromise,
          reject: rejectPromise,
        },
      ]);
      try {
        let e = {
          ...options,
          space: space_1,
          netconf: netconf ?? options?.netconf,
          dc_name: dcName ?? options.dc_name,
        };
        if (userId) {
          e.user_id = userId;
        }
        await _.setOptions(e);
        let t = eQ._getSdkKey(options, space_1);
        let i = await _.init();
        p.addProcessParams({
          process: "sdk-init-done",
        });
        this.TeaReporter?.event(p.progressEvent, p.process);
        sdkList.set(t, {
          referenceCount: 0,
          sdk: _,
          updateTime: Date.now(),
          createTime: Date.now(),
          autoDestroy,
        });
        eQ.awaitInitQueue.get(u)?.forEach(({ resolve }) => resolve(i));
        eQ.awaitInitQueue.delete(u);
        eQ._destroySdk();
        return i;
      } catch (error) {
        p.addProcessParams({
          process: "init-error",
          error: error?.toString?.(),
        });
        this.TeaReporter?.event(p.progressEvent, p.process);
        ea(
          `EverCloud: getSdkInstance ${u} \u{521D}\u{59CB}\u{5316}\u{5931}\u{8D25}: ${error?.toString?.()}`,
        );
        eQ.awaitInitQueue.get(u)?.forEach(({ reject }) => reject(error));
        eQ.awaitInitQueue.delete(u);
      }
    });
  }
  static setCachePlugin(e) {
    eQ.idbPlugin = e;
  }
  static onSpaceChange(e) {
    return eQ.eventBus.on(eQ.EVENTS.SPACE_CHANGE, e);
  }
  static setDependencies(e) {
    eQ.dependencies = e;
    eQ.sdkList.forEach(({ sdk }) => {
      sdk.setDependencies(e);
    });
  }
  static get rootFolderId() {
    return "";
  }
  static isRootFolderId(e) {
    return !e || Number(e) === -1;
  }
  static async destroySdk(e = "") {
    let t = eQ._getSdkKey(eQ.options, e);
    let r = eQ.sdkList.get(t);
    if (r?.sdk && t !== "-") {
      r.referenceCount -= 1;
      if (r.sdk === eQ.sdk) {
        return void ea(
          `Can not destroy instance [${t}], because it is being used as default sdk. reference-${r.referenceCount}`,
        );
      }
      if (r.referenceCount <= 0) {
        eQ.sdkList.delete(t);
        await r.sdk.destroy();
        ea(`Destroy instance [${t}]`);
      } else {
        ea(
          `Can not destroy instance [${t}], because it is being used. reference-${r.referenceCount}`,
        );
      }
    }
  }
  static _emitSpaceChange() {
    eQ.eventBus.emit(eQ.EVENTS.SPACE_CHANGE);
  }
  static _getSdkKey(e, t = eQ.space) {
    return `${e?.user_id || ""}-${t || e?.space || "0"}`;
  }
  static _destroySdk() {
    if (eQ.timer) {
      clearTimeout(eQ.timer);
    }
    let eQ_sdkList = eQ.sdkList;
    let t = null;
    let r = "";
    eQ_sdkList.forEach((a, o) => {
      let { sdk, updateTime, autoDestroy, referenceCount } = a;
      if (sdk !== eQ.sdk && o !== "-" && autoDestroy) {
        if (updateTime < Date.now() - eQ.duration && referenceCount <= 0) {
          eQ_sdkList.delete(o);
          sdk.destroy();
          ea(`AutoDestroy overdue instance [${o}]`);
        }
        if (referenceCount > 0) {
          ea(
            `Can not auto destroy overdue instance [${o}], because it is being used. reference-${referenceCount}`,
          );
        }
        if (!t || t.updateTime > updateTime) {
          t = a;
          r = o;
        }
      }
    });
    if (t && eQ_sdkList.size > eQ.maxSize) {
      let { sdk, autoDestroy, referenceCount } = t;
      if (autoDestroy && referenceCount <= 0) {
        eQ_sdkList.delete(r);
        sdk.destroy();
        ea(`AutoDestroy excess instance [${r}]`);
      }
    }
    eQ.timer = setTimeout(() => {
      eQ._destroySdk();
    }, eQ.duration);
  }
}
export class I3 {
  constructor() {
    this._store = I.y$("lv-ever-cloud", "lv-ever-cloud-url");
  }
  async tryGetSource(e) {
    return await I.Jt(e, this._store);
  }
  async saveSourceBlob({ key, buffer }) {
    return await I.hZ(key, buffer, this._store);
  }
  async delSource(e) {
    return await I.yH(e, this._store);
  }
}
export let qm = new Proxy(
  {},
  {
    get: (e, t) => {
      switch (t) {
        case "setOptions":
        case "options":
        case "space":
        case "init":
        case "setCachePlugin":
        case "onSpaceChange":
        case "changeSpace":
        case "setTeaReporter":
        case "setSlardarReporter":
        case "isRootFolderId":
        case "rootFolderId":
        case "maxFolderDepth":
        case "setDependencies":
        case "destroySdk":
        case "getSdkInstance":
        case "setNoSignOptions":
        case "noSignInit":
        case "initNoSignSdk":
        case "prefetchWasmCode":
        case "TeaReporter":
        case "slardarReporter":
        case "sdkList":
        case "supportImageResolutions":
        case "$$typeof":
          return eQ[t];
        default:
          let r = eQ.sdk;
          if (!r) {
            return void console.warn(
              `EverCloud:EverCloudBaseCore.${String(t)} ever-sdk \u{672A}\u{521D}\u{59CB}\u{5316}`,
            );
          }
          if (typeof r[t] === "function") {
            return r[t].bind(r);
          }
          return r[t];
      }
    },
  },
);

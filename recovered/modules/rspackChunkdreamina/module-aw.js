import i from "Ut";
import a from "Dm";
export function B(e) {
  if (e) {
    const t = new i.DAReqImageInfo();
    t.height = e.height;
    t.width = e.width;
    t.format = e.format;
    if (e.resolutionType) {
      switch (e.resolutionType) {
        case "1k":
          t.resolutionType = i.DAImageResolutionType.ImageResolutionType_1k;
          break;
        case "1.5k":
          t.resolutionType = i.DAImageResolutionType.ImageResolutionType_1_5k;
          break;
        case "2k":
          t.resolutionType = i.DAImageResolutionType.ImageResolutionType_2k;
          break;
        case "4k":
          t.resolutionType = i.DAImageResolutionType.ImageResolutionType_4k;
          break;
        case "8k":
          t.resolutionType = i.DAImageResolutionType.ImageResolutionType_8k;
          break;
        default:
          a.DR(e.resolutionType);
      }
    }
    return t;
  }
}
export function S(e) {
  let t;
  let r;
  if (e) {
    return {
      height: (t = e.height) != null ? t : 0,
      width: (r = e.width) != null ? r : 0,
      format: e.format,
    };
  }
}

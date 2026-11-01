import n from "Ut";
import r from "po";
import o from "ad";
import s from "w1u";
import l from "OY";
import d from "nfs";
import u from "oFp";
import v from "fl";
function a(e) {
  if (e) {
    let t;
    let i;
    let a;
    const o = new n.DAImageResource();
    o.sourceFrom = (e == null ? undefined : e.aigcImage)
      ? n.DAResourceSourceFrom.produced
      : n.DAResourceSourceFrom.upload;
    o.platformType = n.DAImageResourcePlatformType.imageX;
    o.uri = e.imageUri;
    o.width = (t = e.width) != null ? t : 0;
    o.height = (i = e.height) != null ? i : 0;
    o.format = (a = e.format) != null ? a : "";
    if (e.aigcImage) {
      const s = new n.DAAIGCImage();
      s.itemId = e.aigcImage.itemId;
      o.aigcImage = s;
    }
    o.everPhoto = r.j(e.everPhoto);
    return o;
  }
}
export var k = (e, t) => {
  var i = new n.DAVideoGenInput();
  var { firstFrameImage, endFrameImage } = e;
  i.prompt = e.prompt;
  i.isDraft = e.isDraftMode;
  i.firstFrameImage = a(firstFrameImage);
  i.endFrameImage = a(endFrameImage);
  i.lensMotionType = e.lensMotionType;
  i.motionSpeed = e.motionSpeed;
  i.vid = e.vid;
  i.audioVid = e.audioVid ? e.audioVid : undefined;
  i.videoMode = n.DAVideoMode._default;
  i.fps = e.fps;
  i.durationMs = e.durationMs;
  i.resolution = e.resolution;
  i.cameraStrength = e.cameraStrength;
  i.templateId = e.templateId;
  i.endingControl = e.endFrameImage ? "1.0" : undefined;
  i.lensRecipeInput = d.Z(e.lensRecipeInput);
  i.multiFrames = v.x(e.multiFrames);
  i.idipFrames = s.V(e.idipFrames);
  i.idipMetaList = l.i(e.idipMetaList);
  i.unifiedEditInput = o.TX(e.unifiedEditInput, {
    includeSourceInfo: t == null ? undefined : t.includeUnifiedEditSourceInfo,
  });
  i.longVideoInput = u.O(e.longVideoInput);
  return i;
};

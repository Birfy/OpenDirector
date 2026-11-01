import o from "Cw";
import r from "Ut";
import { DAGenVideoAbility } from "./module-pi.js";
import { DASubtitleEraseAbility } from "./module-DO.js";
import { DAText2VideoParams } from "./module-PH_2.js";
import { DAVideoGenI2V, DAVideoGenLivephoto } from "./module-zl.js";
import { DAVideoGenInput, DAVideoMode } from "./module-gb.js";
import { DAVideoProcessType } from "./module-yd_2.js";
import { TMAIGCText2VideoParams, TMAIGCVideoMode } from "./module-zso.js";
import c from "./module-Rd.js";
export class ADTODA_VideoTransformer {
  constructor(e) {
    this.draft = new r.DADraft();
    this.videoMetaData = new TMAIGCText2VideoParams(e);
  }
  convertToDraft() {
    let e;
    let t;
    let i;
    let videoMetaData = this.videoMetaData;
    let d = new r.DAVideoBaseComponent();
    d.aigcMode = r.DAAIGCMode.workbench;
    d.genType = r.DAAIGCGenerateType.text2Video;
    if (videoMetaData.subtitleEraseInput != undefined) {
      let e = new DASubtitleEraseAbility();
      e.subtitleEraseInput = videoMetaData.subtitleEraseInput;
      let t = new r.DAVideoGenerateAbilities();
      t.subtitleErase = e;
      d.abilities = t;
      d.generateType = r.DAVideoGenerateType.subtitleErase;
      d.processType = DAVideoProcessType.SubtitleErase;
      this.draft.setMainComponent(d);
      return this.draft;
    }
    d.generateType = r.DAVideoGenerateType.genVideo;
    let l = new DAGenVideoAbility();
    e = new DAText2VideoParams();
    e.seed = videoMetaData.seed;
    e.videoAspectRatio = videoMetaData.video_aspect_ratio;
    e.modelReqKey = videoMetaData.model_req_key;
    if ((t = videoMetaData.video_gen_inputs) != undefined && t.length > 0) {
      e.videoGenInputs = [this.convertVideoGenInput(t[0])];
    }
    l.text2VideoParams = e;
    i = new r.DAVideoGenerateAbilities();
    i.genVideo = l;
    d.abilities = i;
    this.draft.setMainComponent(d);
    return this.draft;
  }
  convertVideoGenInput(e) {
    let t;
    let i = new DAVideoGenInput();
    i.prompt = e.prompt;
    i.firstFrameImage = this.convertToDAImageResource(e.first_frame_image);
    i.endFrameImage = this.convertToDAImageResource(e.end_frame_image);
    i.lensMotionType = e.lens_motion_type;
    i.motionSpeed = e.motion_speed;
    i.vid = e.vid;
    i.endingControl = e.ending_control;
    i.preTaskId = e.pre_task_id;
    i.audioVid = c.Int64.parse((t = e.audio_vid) != null ? t : "0");
    i.videoMode = this.convertVideoMode(e.video_mode);
    i.fps = e.fps;
    i.endingControl = "1.0";
    i.durationMs = e.duration_ms;
    i.cameraStrength = e.camera_strength;
    i.templateId = e.template_id;
    i.i2vOpt = this.convertI2VOpt(e.i2v_opt);
    i.unifiedEditInput = e.unified_edit_input;
    i.longVideoInput = e.long_video_input;
    return i;
  }
  convertVideoMode(e) {
    if (e === undefined) {
      return DAVideoMode._default;
    }
    switch (e) {
      case TMAIGCVideoMode.V1Default:
        return DAVideoMode.v1Default;
      case TMAIGCVideoMode.Preview:
        return DAVideoMode.preview;
      case TMAIGCVideoMode.Default:
        return DAVideoMode._default;
      case TMAIGCVideoMode.ICLivePhoto:
        return DAVideoMode.iCLivePhoto;
      case TMAIGCVideoMode.Avatar:
        return DAVideoMode.avatar;
      case TMAIGCVideoMode.Avatar_Loopy:
        return DAVideoMode.avatarLoopy;
    }
  }
  convertI2VOpt(e) {
    if (e === undefined) {
      return;
    }
    let t = new DAVideoGenI2V();
    t.livePhoto = this.convertLivePhoto(e.live_photo);
    return t;
  }
  convertLivePhoto(e) {
    if (e === undefined) {
      return;
    }
    let t = new DAVideoGenLivephoto();
    t.faceChecked = e.face_checked;
    return t;
  }
  convertToDAImageResource(e) {
    let t;
    let i;
    let a;
    let n;
    if (e === undefined) {
      return;
    }
    let s = new r.DAImageResource();
    s.sourceFrom = r.DAResourceSourceFrom.upload;
    s.uri = e.image_uri;
    s.width = (t = e.width) != null ? t : 0;
    s.height = (i = e.height) != null ? i : 0;
    s.format = (a = e.format) != null ? a : "";
    let e_aigc_image = e.aigc_image;
    if (e_aigc_image != undefined) {
      n = new o.DAAIGCImage();
      n.itemId = e_aigc_image.item_id;
      s.aigcImage = n;
    }
    return s;
  }
}

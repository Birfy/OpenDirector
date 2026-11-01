import n from "zO";
import s from "ox";
import { DASubtitleEraseInput } from "./module-DO.js";
import { TMAIGCImageInfo } from "./module-Uw.js";
import p from "./module-Rd.js";
let o;
export var TMAIGCVideoMode;
const a =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class TMAIGCText2VideoParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.subtitleEraseInput = undefined;
    this.video_gen_inputs = undefined;
    this.seed = undefined;
    this.video_aspect_ratio = undefined;
    this.model_req_key = undefined;
  }
}
a(
  [p.serializable("subtitle_erase_input", () => DASubtitleEraseInput)],
  TMAIGCText2VideoParams.prototype,
  "subtitleEraseInput",
  undefined,
);
a(
  [p.serializable("video_gen_inputs", () => TMAIGCVideoGenInput)],
  TMAIGCText2VideoParams.prototype,
  "video_gen_inputs",
  undefined,
);
a(
  [p.serializable("seed", undefined, "int64")],
  TMAIGCText2VideoParams.prototype,
  "seed",
  undefined,
);
a(
  [p.serializable("video_aspect_ratio")],
  TMAIGCText2VideoParams.prototype,
  "video_aspect_ratio",
  undefined,
);
a(
  [p.serializable("model_req_key")],
  TMAIGCText2VideoParams.prototype,
  "model_req_key",
  undefined,
);
export class TMAIGCVideoGenInput extends p.Serializable {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.first_frame_image = undefined;
    this.end_frame_image = undefined;
    this.lens_motion_type = undefined;
    this.motion_speed = undefined;
    this.vid = undefined;
    this.ending_control = undefined;
    this.pre_task_id = undefined;
    this.audio_vid = undefined;
    this.video_mode = undefined;
    this.fps = undefined;
    this.duration_ms = undefined;
    this.camera_strength = undefined;
    this.template_id = undefined;
    this.i2v_opt = undefined;
    this.unified_edit_input = undefined;
    this.long_video_input = undefined;
  }
}
a(
  [p.serializable("prompt")],
  TMAIGCVideoGenInput.prototype,
  "prompt",
  undefined,
);
a(
  [p.serializable("first_frame_image", () => TMAIGCImageInfo)],
  TMAIGCVideoGenInput.prototype,
  "first_frame_image",
  undefined,
);
a(
  [p.serializable("end_frame_image", () => TMAIGCImageInfo)],
  TMAIGCVideoGenInput.prototype,
  "end_frame_image",
  undefined,
);
a(
  [p.serializable("lens_motion_type")],
  TMAIGCVideoGenInput.prototype,
  "lens_motion_type",
  undefined,
);
a(
  [p.serializable("motion_speed")],
  TMAIGCVideoGenInput.prototype,
  "motion_speed",
  undefined,
);
a([p.serializable("vid")], TMAIGCVideoGenInput.prototype, "vid", undefined);
a(
  [p.serializable("ending_control")],
  TMAIGCVideoGenInput.prototype,
  "ending_control",
  undefined,
);
a(
  [p.serializable("pre_task_id", undefined, "int64")],
  TMAIGCVideoGenInput.prototype,
  "pre_task_id",
  undefined,
);
a(
  [p.serializable("audio_vid")],
  TMAIGCVideoGenInput.prototype,
  "audio_vid",
  undefined,
);
a(
  [p.serializable("video_mode")],
  TMAIGCVideoGenInput.prototype,
  "video_mode",
  undefined,
);
a([p.serializable("fps")], TMAIGCVideoGenInput.prototype, "fps", undefined);
a(
  [p.serializable("duration_ms")],
  TMAIGCVideoGenInput.prototype,
  "duration_ms",
  undefined,
);
a(
  [p.serializable("camera_strength")],
  TMAIGCVideoGenInput.prototype,
  "camera_strength",
  undefined,
);
a(
  [p.serializable("template_id", undefined, "int64")],
  TMAIGCVideoGenInput.prototype,
  "template_id",
  undefined,
);
a(
  [p.serializable("i2v_opt", () => TMAIGCI2VOpt)],
  TMAIGCVideoGenInput.prototype,
  "i2v_opt",
  undefined,
);
a(
  [p.serializable("unified_edit_input", () => s.DAUnifiedEditInput)],
  TMAIGCVideoGenInput.prototype,
  "unified_edit_input",
  undefined,
);
a(
  [p.serializable("long_video_input", () => n.DALongVideoInput)],
  TMAIGCVideoGenInput.prototype,
  "long_video_input",
  undefined,
);
export class TMAIGCI2VOpt extends p.Serializable {
  constructor() {
    super(...arguments);
    this.live_photo = undefined;
  }
}
a(
  [p.serializable("live_photo", () => TMAIGCLivephoto)],
  TMAIGCI2VOpt.prototype,
  "live_photo",
  undefined,
);
export class TMAIGCLivephoto extends p.Serializable {
  constructor() {
    super(...arguments);
    this.face_checked = undefined;
  }
}
a(
  [p.serializable("face_checked")],
  TMAIGCLivephoto.prototype,
  "face_checked",
  undefined,
);
o = TMAIGCVideoMode || (TMAIGCVideoMode = {});
o[(o.V1Default = 0)] = "V1Default";
o[(o.Preview = 1)] = "Preview";
o[(o.Default = 2)] = "Default";
o[(o.ICLivePhoto = 3)] = "ICLivePhoto";
o[(o.Avatar = 4)] = "Avatar";
o[(o.Avatar_Loopy = 5)] = "Avatar_Loopy";

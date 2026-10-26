import i from "Qey";
import r from "xH6";
export var Jy = [
  [r.gP.ByteEdit, r.gP.BgPaint],
  [r.gP.ByteEdit, r.gP.FaceGan],
  [r.gP.ByteEdit, r.gP.IpKeep],
  [r.gP.ByteEdit, r.gP.StyleReference],
  [r.gP.ByteEdit, r.gP.ControlNetCanny],
  [r.gP.ByteEdit, r.gP.ControlNetDepth],
  [r.gP.ByteEdit, r.gP.ControlNetPose],
  [r.gP.ByteEdit, r.gP.ByteEdit],
  [r.gP.ByteEdit, r.gP.StyleCode],
  [r.gP.BgPaint, r.gP.IpKeep],
  [r.gP.BgPaint, r.gP.ControlNetCanny],
  [r.gP.BgPaint, r.gP.ControlNetDepth],
  [r.gP.BgPaint, r.gP.ControlNetPose],
  [r.gP.BgPaint, r.gP.BgPaint],
  [r.gP.BgPaint, r.gP.StyleReference],
  [r.gP.BgPaint, r.gP.StyleCode],
  [r.gP.FaceGan, r.gP.IpKeep],
  [r.gP.FaceGan, r.gP.FaceGan],
  [r.gP.FaceGan, r.gP.StyleReference],
  [r.gP.FaceGan, r.gP.StyleCode],
  [r.gP.StyleReference, r.gP.StyleReference],
  [r.gP.StyleReference, r.gP.ControlNetCanny],
  [r.gP.StyleReference, r.gP.ControlNetDepth],
  [r.gP.StyleReference, r.gP.ControlNetPose],
  [r.gP.StyleCode, r.gP.StyleReference],
  [r.gP.StyleCode, r.gP.IpKeep],
  [r.gP.StyleCode, r.gP.ControlNetCanny],
  [r.gP.StyleCode, r.gP.ControlNetDepth],
  [r.gP.StyleCode, r.gP.ControlNetPose],
  [r.gP.IpKeep, r.gP.StyleReference],
  [r.gP.IpKeep, r.gP.ControlNetCanny],
  [r.gP.IpKeep, r.gP.ControlNetDepth],
  [r.gP.IpKeep, r.gP.ControlNetPose],
  [r.gP.IpKeep, r.gP.IpKeep],
  [r.gP.ControlNetCanny, r.gP.ControlNetCanny],
  [r.gP.ControlNetDepth, r.gP.ControlNetDepth],
  [r.gP.ControlNetPose, r.gP.ControlNetPose],
  [r.gP.ControlNetCanny, r.gP.StyleReference],
  [r.gP.ControlNetDepth, r.gP.StyleReference],
  [r.gP.ControlNetPose, r.gP.StyleReference],
];
export var ef = {
  [r.gP.FaceGan]: {
    get [r.gP.FaceGan]() {
      return i.Ay.t(
        "web_new_one_face_only",
        {},
        "已参考上图的人物长相，无法重复设置",
      );
    },
    get [r.gP.StyleReference]() {
      return i.Ay.t(
        "web_new_dre_t2i_style_conflict_with_ip_toast",
        {},
        "参考风格后，不支持参考风格人物长相",
      );
    },
    get [r.gP.StyleCode]() {
      return i.Ay.t(
        "web_face_reference_not_support_with_style_code",
        {},
        "添加风格码后，不支持参考人像",
      );
    },
  },
  [r.gP.BgPaint]: {
    get [r.gP.BgPaint]() {
      return i.Ay.t(
        "web_new_one_reference_object_only",
        {},
        "已参考上图的主体，无法重复设置",
      );
    },
    get [r.gP.StyleReference]() {
      return i.Ay.t(
        "web_obejct_reference_not_support_with_style",
        {},
        "参考风格后，不支持参考主体",
      );
    },
    get [r.gP.StyleCode]() {
      return i.Ay.t(
        "web_object_reference_not_support_with_style_code",
        {},
        "添加风格码后，不支持参考主体",
      );
    },
  },
  [r.gP.ControlNetCanny]: {
    get [r.gP.BgPaint]() {
      return i.Ay.t(
        "web_new_cannot_refer_canny_with_object",
        {},
        "参考主体后，不支持参考轮廓边缘",
      );
    },
    get [r.gP.ControlNetCanny]() {
      return i.Ay.t(
        "web_new_multiple_canny_only",
        {},
        "已参考上图的轮廓边缘，无法重复设置",
      );
    },
    get [r.gP.StyleReference]() {
      return "";
    },
    get [r.gP.StyleCode]() {
      return "";
    },
  },
  [r.gP.ControlNetDepth]: {
    get [r.gP.BgPaint]() {
      return i.Ay.t(
        "web_new_multiple_depth_cancel",
        {},
        "参考主体后，不支持参考景深",
      );
    },
    get [r.gP.ControlNetDepth]() {
      return i.Ay.t(
        "web_new_multiple_depth_only",
        {},
        "已参考上图的景深，无法重复设置",
      );
    },
    get [r.gP.StyleReference]() {
      return "";
    },
    get [r.gP.StyleCode]() {
      return "";
    },
  },
  [r.gP.ControlNetPose]: {
    get [r.gP.BgPaint]() {
      return i.Ay.t(
        "web_new_multiple_pose_cancel",
        {},
        "参考主体后，不支持参考姿势",
      );
    },
    get [r.gP.ControlNetPose]() {
      return i.Ay.t(
        "web_new_multiple_pose_only",
        {},
        "已参考上图的人物姿势，无法重复设置",
      );
    },
    get [r.gP.StyleReference]() {
      return "";
    },
    get [r.gP.StyleCode]() {
      return "";
    },
  },
  get [r.gP.IpKeep]() {
    return i.Ay.t(
      "web_new_IP_web_notsupport_other",
      {},
      "参考其他内容后，不支持参考角色特征",
    );
  },
  get [r.gP.ByteEdit]() {
    return i.Ay.t(
      "web_new_custom_reference_not_support_after_select_other",
      {},
      "已参考其他图片，不支持设置智能参考",
    );
  },
  [r.gP.StyleReference]: {
    get [r.gP.StyleReference]() {
      return i.Ay.t(
        "web_new_style_already_not_repeat",
        {},
        "已参考上图的图片风格，无法重复设置",
      );
    },
    get [r.gP.StyleCode]() {
      return i.Ay.t(
        "web_new_dre_t2i_style_conflict_with_code_toast",
        {},
        "参考风格码之后，不支持参考风格",
      );
    },
    get [r.gP.FaceGan]() {
      return i.Ay.t(
        "web_new_dre_t2i_ip_conflict_with_code_toast",
        {},
        "参考其他人脸后，不支持参考风格",
      );
    },
    get [r.gP.BgPaint]() {
      return i.Ay.t(
        "web_style_reference_not_support_with_object",
        {},
        "参考主体后，不支持参考风格",
      );
    },
    get [r.gP.ControlNetCanny]() {
      return "";
    },
    get [r.gP.ControlNetDepth]() {
      return "";
    },
    get [r.gP.ControlNetPose]() {
      return "";
    },
  },
  [r.gP.Unknown]: "",
  [r.gP.ControlNet]: "",
  [r.gP.T2I]: "",
  [r.gP.I2I]: "",
  [r.gP.StyleCode]: "",
};
export var lD = {
  [r.gP.FaceGan]: r.gP.FaceGan,
  [r.gP.BgPaint]: r.gP.BgPaint,
  [r.gP.ControlNetCanny]: r.gP.ControlNetCanny,
  [r.gP.ControlNetDepth]: r.gP.ControlNetDepth,
  [r.gP.ControlNetPose]: r.gP.ControlNetPose,
  [r.gP.StyleReference]: r.gP.StyleReference,
};
export var _I = {
  [r.gP.FaceGan]: "Can’t reference human face after adding other references",
  [r.gP.BgPaint]: "Can’t reference object after adding other references",
  [r.gP.IpKeep]: "Can’t reference character after adding other references",
  [r.gP.ControlNetCanny]:
    "Cant reference edge after selecting a reference object.",
  [r.gP.ControlNetDepth]:
    "Can’t reference depth after selecting a reference object.",
  [r.gP.ControlNetPose]:
    "Can’t reference pose after selecting a reference object.",
  [r.gP.ByteEdit]:
    "Can't select custom reference after adding other references",
  [r.gP.Unknown]: "",
  [r.gP.ControlNet]: "",
  [r.gP.T2I]: "",
  [r.gP.I2I]: "",
  [r.gP.StyleReference]:
    "Can’t reference style reference after adding other references",
  [r.gP.StyleCode]: "",
};
export var $V = {
  [r.gP.ByteEdit]: "web_reference_element_smart",
  [r.gP.FaceGan]: "web_reference_element_face",
  [r.gP.BgPaint]: "web_reference_element_object",
  [r.gP.IpKeep]: "web_reference_element_character",
  [r.gP.ControlNetCanny]: "web_reference_element_edge",
  [r.gP.ControlNetDepth]: "web_reference_element_depth",
  [r.gP.ControlNetPose]: "web_reference_element_pose",
  [r.gP.Unknown]: "",
  [r.gP.ControlNet]: "",
  [r.gP.StyleReference]: "web_reference_element_style",
  [r.gP.StyleCode]: "web_t2i_style_code_placeholder",
  [r.gP.T2I]: "",
  [r.gP.I2I]: "",
};
export var hy = {
  [r.gP.ByteEdit]: "Custom",
  [r.gP.FaceGan]: "Human face",
  [r.gP.BgPaint]: "Object",
  [r.gP.IpKeep]: "Character",
  [r.gP.ControlNetCanny]: "Edge",
  [r.gP.ControlNetDepth]: "Depth",
  [r.gP.ControlNetPose]: "Pose",
  [r.gP.Unknown]: "",
  [r.gP.ControlNet]: "",
  [r.gP.StyleReference]: "Reference image style",
  [r.gP.StyleCode]: "Style code",
  [r.gP.T2I]: "",
  [r.gP.I2I]: "",
};

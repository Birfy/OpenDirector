import i from "Qey";
import { Mi } from "./module-xH6_2.js";
import * as a from "./module-EHr_2.js";
export var N = {
  get [Mi.Ratio]() {
    return i.Ay.t(
      "web_new_upload_error_ratio",
      {
        number0: 1,
        number1: a.an,
        number3: a.an,
        number4: 1,
      },
      "请上传长宽之比在{number0}:{number1}和{number3}:{number4}之间的图片",
    );
  },
  get [Mi.Width]() {
    return i.Ay.t(
      "web_new_upload_error_width_px",
      {
        number0: a._0,
      },
      "请上传长边不超过{number0}px的图片",
    );
  },
  get [Mi.Height]() {
    return i.Ay.t(
      "web_new_upload_error_height_px",
      {
        number0: a.rK,
      },
      "请上传长边不超过{number0}px的图片",
    );
  },
  get [Mi.Size]() {
    return i.Ay.t(
      "web_new_upload_error_m",
      {
        number0: a.ho >> 20,
      },
      "请上传图片大小不超过{number0}MB的图片",
    );
  },
  get [Mi.Type]() {
    return i.Ay.t(
      "web_new_upload_error_form",
      {
        formats: a.YX,
      },
      "请上传{formats}格式的文件",
    );
  },
  get [Mi.TotalPixels]() {
    return i.Ay.t("web_new_pc_sticker_size_big", {}, "所选文件过大");
  },
  get [Mi.Unknown]() {
    return i.Ay.t("web_new_pc_sticker_size_big", {}, "所选文件过大");
  },
};

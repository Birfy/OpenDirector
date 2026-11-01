import r from "Qey";
import * as a from "./module-T3j.js";
export function X() {
  return {
    title: r.Ay.t("seedance_25_video_edit", {}, "视频编辑"),
    tools: {
      rect: r.Ay.t("seedance_25_edit_oblong", {}, "矩形"),
      brush: r.Ay.t("web_image_edit_tool_brush", {}, "画笔"),
      arrow: r.Ay.t("web_inpaint_add_arrow", {}, "箭头"),
      text: r.Ay.t("web_inpaint_add_text", {}, "文字"),
      eraser: r.Ay.t("web_image_edit_tool_eraser", {}, "橡皮"),
      marker: r.Ay.t("web_inpaint_annotate", {}, "标记"),
    },
    actions: {
      undo: r.Ay.t("web_canva_undo", {}, "撤销"),
      redo: r.Ay.t("web_canva_redo", {}, "重做"),
      cancel: r.Ay.t("seedance_25_edit_cancel", {}, "取消"),
      confirmAnnotation: r.Ay.t("seedance_25_edit_confirm", {}, "添加至输入框"),
      uploadReference: r.Ay.t("video_unified_edit_upload", {}, "上传参考内容"),
    },
    a11y: {
      brushColor: r.Ay.t("web_inpaint_brush_stroke_color", {}, "画笔颜色"),
      arrowColor: r.Ay.t("web_inpaint_arrow_stroke_color", {}, "箭头颜色"),
      textColor: r.Ay.t("web_inpaint_text_color", {}, "文字颜色"),
      textMaxLengthToast: r.Ay.t(
        "seedance_25_edit_text_maxcnt",
        {
          string: String(a.ss),
        },
        "输入文字不能超过{string}",
      ),
      arrowVariant: r.Ay.t("web_inpaint_add_arrow", {}, "箭头"),
      lineVariant: r.Ay.t("web_inpaint_arrow_style_line", {}, "直线"),
    },
  };
}

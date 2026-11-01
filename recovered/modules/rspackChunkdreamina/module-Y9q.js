import r from "Q0d";
import o from "Qey";
import n from "M8X";
import a from "aEB";
const s = {
  image: ["reference_image_not_supported_tip", {}, "该模型不支持参考图片"],
  video: ["reference_video_not_supported_tip", {}, "该模型不支持参考视频"],
  audio: ["reference_audio_not_supported_tip", {}, "该模型不支持参考音频"],
  markdown: [
    "reference_document_not_supported_tip",
    {},
    "该模型不支持参考文档",
  ],
  pdf: ["reference_document_not_supported_tip", {}, "该模型不支持参考文档"],
  docx: ["reference_document_not_supported_tip", {}, "该模型不支持参考文档"],
};
export function I(e, t, i) {
  const c = n.cQ(e, a.Ot);
  const l = new Set(i);
  const [u, d] = r.A(t, (e) => l.has(e.type));
  for (const h of [...new Set(d.map((e) => e.type))]) {
    c.warning(o.Ay.t(...s[h]));
  }
  return u;
}

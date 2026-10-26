import r from "SR";
import a from "meA";
import { t as t_1 } from "./module-xvf.js";
export function X(e) {
  if (e) {
    let t;
    let i;
    let s;
    let o;
    let l;
    let c;
    let u;
    let d;
    const { material } = e;
    if (material) {
      const p =
        (t = (i = material.pdfInfo) != null ? i : material.docxInfo) != null
          ? t
          : material.markdownInfo;
      const g = a.jV({
        fileName: p == null ? undefined : p.title,
        url: p == null ? undefined : p.url,
      });
      const v =
        (s = t_1(material.materialType)) != null ? s : g ? a.S3(g) : undefined;
      if (v) {
        const m = new r.NuroFile(v);
        m.id = e.fileId;
        const f = material.videoInfo;
        switch (v) {
          case r.NuroFileType.image:
            m.url = (o = material.imageInfo) == null ? undefined : o.imageUrl;
            m.uri = (l = material.imageInfo) == null ? undefined : l.imageUri;
            if ((c = material.imageInfo) == null ? undefined : c.title) {
              m.fileName = material.imageInfo.title;
            }
            break;
          case r.NuroFileType.video:
            m.url = f == null ? undefined : f.videoUrl;
            m.vid = f == null ? undefined : f.vid;
            if (f == null ? undefined : f.title) {
              m.fileName = f.title;
            }
            break;
          case r.NuroFileType.audio:
            m.url = (u = material.audioInfo) == null ? undefined : u.audioUrl;
            m.vid = (d = material.audioInfo) == null ? undefined : d.vid;
            break;
          case r.NuroFileType.pdf:
          case r.NuroFileType.docx:
          case r.NuroFileType.markdown:
            const _ =
              v === r.NuroFileType.pdf
                ? material.pdfInfo
                : v === r.NuroFileType.docx
                  ? material.docxInfo
                  : undefined;
            const k = _ != null ? _ : material.markdownInfo;
            m.url = k == null ? undefined : k.url;
            m.uri = k == null ? undefined : k.uri;
            m.fileName = k == null ? undefined : k.title;
            m.mimeType = a.A8(v);
            break;
          default:
            return;
        }
        return m;
      }
    }
  }
}

import r from "SR";
export function t(e) {
  if (e) {
    switch (e) {
      case "image":
        return r.NuroFileType.image;
      case "video":
        return r.NuroFileType.video;
      case "audio":
        return r.NuroFileType.audio;
      case "markdown":
        return r.NuroFileType.markdown;
      case "pdf":
        return r.NuroFileType.pdf;
      case "docx":
        return r.NuroFileType.docx;
    }
  }
}

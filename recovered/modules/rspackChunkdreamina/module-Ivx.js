import a from "SR";
export function q(e) {
  const t = new a.NuroMention();
  const r = new a.NuroUnifiedEditMaterial();
  const { format } = e;
  t.material = r;
  t.fileId = e.id;
  r.materialType = format;
  switch (format) {
    case "pdf":
      const n = new a.NuroPdfMaterialInfo();
      n.uri = e.uri;
      n.url = e.url;
      n.title = e.title;
      r.pdfInfo = n;
      break;
    case "docx":
      const o = new a.NuroDocxMaterialInfo();
      o.uri = e.uri;
      o.url = e.url;
      o.title = e.title;
      r.docxInfo = o;
      break;
    case "markdown":
      const s = new a.NuroMarkdownMaterialInfo();
      s.uri = e.uri;
      s.url = e.url;
      s.title = e.title;
      r.markdownInfo = s;
      break;
    default:
      throw Error("未知的文档格式: ".concat(format));
  }
  return t;
}

import a from "SR";
export function V(e) {
  let t;
  const r = new a.NuroFile(a.NuroFileType.audio);
  r.id = e.id;
  r.url = e.audioUrl;
  r.vid = e.vid;
  if (e.title) {
    r.fileName = e.title;
  }
  if (!r.vid && e.localFile) {
    r.localFile = new a.NuroLocalFile(
      (t = e.audioUrl) != null ? t : "",
      e.localFile,
    );
    r.mimeType = e.localFile.type;
  }
  return r;
}

import a from "SR";
export function U(e) {
  const t = new a.NuroFile(a.NuroFileType.video);
  t.url = e.videoUrl;
  t.vid = e.vid;
  t.id = e.id;
  if (e.title) {
    t.fileName = e.title;
  }
  if (!t.vid && e.localFile) {
    t.localFile = new a.NuroLocalFile(e.videoUrl, e.localFile);
    t.mimeType = e.localFile.type;
  }
  return t;
}

import a from "SR";
export function w(e) {
  const t = new a.NuroMention();
  const r = new a.NuroUnifiedEditMaterial();
  t.material = r;
  t.fileId = e.id;
  r.materialType = "video";
  r.videoInfo = {
    videoUrl: e.videoUrl,
    vid: e.vid,
    title: e.title,
  };
  return t;
}

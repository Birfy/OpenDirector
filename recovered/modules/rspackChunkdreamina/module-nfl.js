import a from "SR";
export function b(e) {
  const t = new a.NuroMention();
  const r = new a.NuroUnifiedEditMaterial();
  t.material = r;
  t.fileId = e.id;
  r.materialType = "audio";
  r.audioInfo = {
    audioUrl: e.audioUrl,
    vid: e.vid,
  };
  if (e.title) {
    Reflect.set(r.audioInfo, "title", e.title);
  }
  return t;
}

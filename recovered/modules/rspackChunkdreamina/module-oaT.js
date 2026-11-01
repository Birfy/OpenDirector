import a from "SR";
function i(e) {
  const t = new a.NuroMention();
  const r = new a.NuroUnifiedEditMaterial();
  t.material = r;
  t.fileId = e.id;
  r.materialType = "image";
  r.imageInfo = {
    imageUrl: e.imageUrl,
    imageUri: e.imageUri,
    title: e.title,
  };
  return t;
}
export { i };

export function t(e) {
  let t;
  return new File([e.source], e.fileName, {
    type: e.fileType || ((t = e.source) == null ? undefined : t.type) || "",
  });
}

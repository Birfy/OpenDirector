import a from "at";
import r from "K4";
import s from "rGr";
import l from "gfi";
export function f(t, file) {
  if (file.type.startsWith("image/")) {
    return t.createInstance(a.Vl, {
      file,
    });
  }
  if (file.type.startsWith("video/")) {
    return t.createInstance(r.p, {
      file,
    });
  }
  if (file.type.startsWith("audio/")) {
    return t.createInstance(s.e, {
      file,
    });
  }
  const i = l.TE({
    mimeType: file.type,
    fileName: file.name,
  });
  if (i) {
    return t.createInstance(i, {
      file,
    });
  }
  return null;
}

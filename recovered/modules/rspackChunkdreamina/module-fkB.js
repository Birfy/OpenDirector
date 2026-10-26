import a from "SR";
import i from "JSz";
import n from "K4";
import o from "rGr";
import s from "gfi";
import l from "at";
function c(e, t) {
  const r = new Map();
  t.forEach((t) => {
    var c;
    var d;
    var { type, uri = "", url = "", vid = "", fileName, file_description } = t;
    var name = fileName || file_description;
    if (type === a.NuroFileType.video) {
      d = e.createInstance(n.p, {
        uri: vid,
        url,
        name,
      });
    } else if (type === a.NuroFileType.audio) {
      d = e.createInstance(o.e, {
        uri: vid,
        url,
        name,
      });
    } else if (
      type === a.NuroFileType.pdf ||
      type === a.NuroFileType.docx ||
      type === a.NuroFileType.markdown
    ) {
      var f = s.TE({
        nuroFileType: type,
      });
      d = e.createInstance(f, {
        uri,
        url,
        name,
      });
    } else {
      d = e.createInstance(l.Vl, {
        uri,
        url,
        name,
      });
    }
    r.set((c = t.id) != null ? c : i.bz(), d);
  });
  return r;
}
export { c as a };

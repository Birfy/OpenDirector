import r from "NY";
import a from "oZ";
const n = [
  "application/zip",
  "application/x-zip-compressed",
  "application/x-7z-compressed",
  "application/gzip",
  "application/x-tar",
];
function o(e, t) {
  return r._(function* () {
    if (n.includes((i = t.split(";")[0]) ? i.trim() : "")) {
      var i;
      const r = {};
      const { entries } = yield a.$1(e);
      for (const [s, d] of Object.entries(entries)) {
        if (
          !(
            d.isDirectory ||
            s.startsWith("__MACOSX") ||
            s.includes(".DS_Store")
          )
        ) {
          const arrayBuffer = yield d.arrayBuffer();
          r[s.replaceAll("//", "/")] = {
            isDirectory: d.isDirectory,
            size: d.size,
            name: d.name,
            arrayBuffer,
          };
        }
      }
      return Promise.resolve(r);
    }
    return Promise.resolve(e);
  })();
}
export { o as r };

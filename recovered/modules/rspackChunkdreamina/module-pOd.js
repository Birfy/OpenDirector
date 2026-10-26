import i from "NY";
import a from "K8";
import n from "M8X";
import o from "g98";
export function q(e, t) {
  return i._(function* () {
    try {
      if (typeof t === "string") {
        var file;
        let i;
        let s;
        let lastModified;
        s =
          (i = t.startsWith("blob")
            ? yield fetch(t).then((e) => e.blob())
            : ((e) => {
                if (typeof e !== "string" || !e) {
                  throw Error("invalid dataURL");
                }
                let t;
                let r;
                const i = e.split(",");
                for (
                  var a = window.atob(i[1]),
                    n = (r = i[0]) == null ? undefined : r.match(/:(.*?);/),
                    type = (t = n == null ? undefined : n[1]) != null ? t : "",
                    s = new Uint8Array(a.length),
                    m = 0;
                  m < a.length;
                  m++
                ) {
                  s[m] = a.charCodeAt(m);
                }
                return new Blob([s], {
                  type,
                });
              })(t)).type || "";
        lastModified = Date.now();
        file = new File([i], "dreamina_image_".concat(lastModified), {
          type: s,
          lastModified,
        });
      } else {
        file = t;
      }
      const l = n.cQ(e, o.H);
      return yield l.uploadImage({
        file,
      });
    } catch (error) {
      return a.iX(-1, "upload image failed", error);
    }
  })();
}

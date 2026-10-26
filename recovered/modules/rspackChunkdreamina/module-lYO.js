import a from "NY";
import r from "g98";
import i from "M8X";
import o from "K8";
import l from "ks";
export var c = (e) => {
  var { fileOrUrl, containerService } = e;
  return a._(function* () {
    let e;
    let s;
    let imageUrl = "";
    let u = false;
    if (fileOrUrl instanceof File) {
      if (fileOrUrl.type !== "image/png") {
        return o.TZ(undefined);
      }
      imageUrl = URL.createObjectURL(fileOrUrl);
      u = true;
    } else {
      imageUrl = fileOrUrl;
      if (
        (yield (
          ((e = imageUrl),
          new Promise((resolve, reject) => {
            var a = new XMLHttpRequest();
            a.onreadystatechange = function () {
              if (a.readyState === XMLHttpRequest.DONE) {
                if (a.status === 200) {
                  const e = a.getResponseHeader("Content-Type");
                  resolve(e != null ? e : "");
                } else {
                  reject(Error("Failed to get image file type"));
                }
              }
            };
            a.open("GET", e);
            a.send();
          }))
        )) !== "image/png"
      ) {
        return o.TZ(undefined);
      }
    }
    let d = "";
    const { transferredUrl, hasChanged } = yield (function (e) {
      return a
        ._(function* (e) {
          const { imageUrl } = e;
          let n = document.createElement("canvas");
          const a = n.getContext("2d");
          if (!a) {
            return {
              hasChanged: false,
              transferredUrl: "",
            };
          }
          const r = yield l.y(imageUrl);
          const { width, height } = r;
          n.height = height;
          n.width = width;
          a.drawImage(r, 0, 0, width, height, 0, 0, width, height);
          for (
            var s = a.getImageData(0, 0, n.width, n.height), c = false, u = 0;
            u < s.data.length;
            u += 4
          ) {
            const d = s.data[u + 3];
            c = c || d === 0 || d !== 255;
            if (d === 0) {
              s.data[u + 0] = 255;
              s.data[u + 1] = 255;
              s.data[u + 2] = 255;
            }
            if (d !== 255) {
              s.data[u + 3] = 255;
            }
          }
          if (!c) {
            return {
              hasChanged: false,
              transferredUrl: "",
            };
          }
          a.clearRect(0, 0, n.width, n.height);
          a.putImageData(s, 0, 0);
          const transferredUrl_1 = n.toDataURL("image/png");
          a.clearRect(0, 0, n.width, n.height);
          n.width = width;
          n.height = height;
          n = null;
          return {
            hasChanged: true,
            transferredUrl: transferredUrl_1,
          };
        })
        .apply(this, arguments);
    })({
      imageUrl,
      containerService,
    });
    if (u) {
      URL.revokeObjectURL(imageUrl);
    }
    if (!(d = transferredUrl != null ? transferredUrl : "") || !hasChanged) {
      return o.TZ(undefined);
    }
    const file = yield (
      ((s = d),
      a._(function* () {
        const e = yield fetch(s);
        const t = yield e.blob();
        return new File([t], "image", {
          type: t.type,
        });
      })())
    );
    const h = i.cQ(containerService, r.H);
    const g = yield h.uploadImage({
      file,
    });
    if (g.ok) {
      return o.TZ(g.value.uri);
    }
    return o.xz(-1, "upload failed");
  })();
};

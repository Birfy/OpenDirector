import i from "NY";
import { y } from "./module-H1B.js";
export function q(e) {
  return i
    ._(function* (e) {
      const { imageUrl } = e;
      let r = document.createElement("canvas");
      const i = r.getContext("2d");
      if (!i) {
        return {
          hasChanged: false,
          transferredUrl: "",
        };
      }
      const n = yield y(imageUrl);
      const { width, height } = n;
      r.height = height;
      r.width = width;
      i.drawImage(n, 0, 0, width, height, 0, 0, width, height);
      for (
        var m = i.getImageData(0, 0, r.width, r.height), l = false, p = 0;
        p < m.data.length;
        p += 4
      ) {
        const u = m.data[p + 3];
        l = l || u === 0 || u !== 255;
        if (u === 0) {
          m.data[p + 0] = 255;
          m.data[p + 1] = 255;
          m.data[p + 2] = 255;
        }
        if (u !== 255) {
          m.data[p + 3] = 255;
        }
      }
      if (!l) {
        return {
          hasChanged: false,
          transferredUrl: "",
        };
      }
      i.clearRect(0, 0, r.width, r.height);
      i.putImageData(m, 0, 0);
      const transferredUrl = r.toDataURL("image/png");
      i.clearRect(0, 0, r.width, r.height);
      r.width = width;
      r.height = height;
      r = null;
      return {
        hasChanged: true,
        transferredUrl,
      };
    })
    .apply(this, arguments);
}

import o from "oa";
import i from "aW";
import { U } from "./module-qS.js";
import { F } from "./module-h3.js";
let a;
let m = RegExp(
  "capcut-web-.*\\.bytedance\\.net|edit-api-.*\\.capcut\\.com|web-edit\\.us\\.capcut\\.com|web-edit-us-ttp2\\.us\\.capcut\\.com",
);
a = {
  bigintStoreAsString: true,
};
export let gh = {
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [(e = {}) => i.stringify(e)],
  transformResponse: [
    function (e) {
      try {
        return i({
          storeAsString: a.bigintStoreAsString,
        }).parse(e);
      } catch (t) {
        return {
          data: e,
        };
      }
    },
  ],
};
export class LL {
  build(e) {
    let t = U(e);
    t.interceptors.request.use((e) => {
      var t;
      var r;
      r = (t = e.url) != null ? t : "";
      if (m.test(r)) {
        e = o._(
          {
            withCredentials: true,
          },
          e,
        );
      }
      return e;
    });
    F(t);
    return t;
  }
}

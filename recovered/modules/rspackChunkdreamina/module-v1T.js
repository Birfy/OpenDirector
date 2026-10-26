import i from "K8";
import r from "krN";
import { h } from "./module-FOT.js";
import { f } from "./module-VMz.js";
const l = {
  key: "subject_content_type_not_supported_in_mode",
  defaultMessage: "当前模式暂不支持{type}主体",
};
export var W = (e, t) => {
  var { acceptedContentTypes } = t;
  var u = r.uZ(e);
  if (acceptedContentTypes.has(u)) {
    return i.nj();
  }
  return i.xz(
    -1,
    h(l, {
      type: f({
        type: u,
        count: 1,
      }),
    }),
  );
};

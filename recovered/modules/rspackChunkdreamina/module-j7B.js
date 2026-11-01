import n from "oa";
import s from "bk";
import a from "Qey";
import * as r from "./module-pE.js";
export function k() {
  const scaleArr = [
    {
      name: "33%",
      value: 0.33,
    },
    {
      name: "50%",
      value: 0.5,
    },
    {
      name: "100%",
      value: 1,
    },
    {
      name: "200%",
      value: 2,
    },
    {
      name: "300%",
      value: 3,
    },
    {
      name: a.Ay.t("web_new_wimg2img_content_overwiew", {}, "全览"),
      value: r.P9,
      resetOffset: true,
    },
  ];
  const scaleMap = scaleArr.reduce(
    (acc, item) =>
      s._(n._({}, acc), {
        [item.value]: item.name,
      }),
    {},
  );
  return {
    scaleArr,
    scaleMap,
  };
}

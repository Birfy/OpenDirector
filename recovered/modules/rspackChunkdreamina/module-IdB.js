import r from "NY";
import { L } from "./module-fFg.js";
import o from "yMd";
let i;
const l = [
  {
    width: 2400,
    height: 2400,
    scene: "normal",
  },
  {
    width: 1080,
    height: 1080,
    scene: "loss",
  },
  {
    width: 900,
    height: 900,
    scene: "loss",
  },
  {
    width: 720,
    height: 720,
    scene: "loss",
  },
  {
    width: 480,
    height: 480,
    scene: "loss",
  },
  {
    width: 360,
    height: 360,
    scene: "loss",
  },
];
var u = (e) =>
  r._(function* () {
    if (!i) {
      const { result } = yield L();
      i = result;
    }
    const format = i ? o.jK.Webp : o.jK.Jpeg;
    return {
      width: 2048,
      height: 2048,
      format,
      image_scene_list: l
        .filter((t) => {
          var { scene } = t;
          if (e.enableCommon) {
            return ["normal", "loss"].includes(scene);
          }
          return !!e.enableSmartCrop && scene === "smart_crop";
        })
        .map((e) => {
          var t;
          var { width, height, scene } = e;
          return {
            scene,
            width,
            height,
            uniq_key:
              (t = {
                width,
                height,
                scene,
              }).scene === "normal" || t.scene === "loss"
                ? "".concat(t.width)
                : ""
                    .concat(t.scene, "-w:")
                    .concat(t.width, "-h:")
                    .concat(t.height),
            format,
          };
        }),
    };
  })();
export { u as l };

import i from "TK";
import r from "T7";
import a from "gu";
const o = {
  [r.s.DreaminaModelConfigPostV45]: {
    [a.Sk.ImageInPaintEraserButton]: (e) => {
      if (e.useV40Model) {
        return a.Sk.ImageInPaintEraserPiece;
      }
      return a.Sk.ImageInPaintEraserButton;
    },
    [a.Sk.ImageInPaintEraserTextArea]: (e) => {
      if (e.useV40Model) {
        return a.Sk.ImageInPaintEraserPiece;
      }
      return a.Sk.ImageInPaintEraserTextArea;
    },
    [a.Sk.ImageInPaintRepaintButton]: (e) => {
      if (e.useV40Model) {
        return a.Sk.ImageInPaintRepaintPiece;
      }
      return a.Sk.ImageInPaintRepaintButton;
    },
    [a.Sk.ImageInPaintRepaintTextArea]: (e) => {
      if (e.useV40Model) {
        return a.Sk.ImageInPaintRepaintPiece;
      }
      return a.Sk.ImageInPaintRepaintTextArea;
    },
  },
};
function l(e) {
  let t;
  const { containerService, abTestKey, defaultScene } = e;
  const l = containerService
    .invokeFunction((e) => e.get(i.a))
    .serverAbTestManager.getAbTestValueSync(abTestKey);
  if (l === undefined) {
    return defaultScene;
  }
  const u = (t = o[abTestKey]) == null ? undefined : t[defaultScene];
  const s = u == null ? undefined : u(l);
  if (s !== undefined) {
    return s;
  }
  return defaultScene;
}
export { l as r };

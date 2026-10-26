import a from "yMd";
export function S(e, t) {
  let i;
  let n;
  let r;
  let o;
  const l = {};
  const d = (n = t.originalInput) == null ? undefined : n.videoGenInputs[0];
  l.isFirstRelaxedGenerate = 0;
  l.isFromPreview = 0;
  l.isQuickPreview = 0;
  l.isPreset = 0;
  l.isRelaxedGenerate = 0;
  l.magicBoxCnt = 0;
  if (d) {
    l.generateMode = d.fps === a.Bg.Fluency ? "流畅模式" : "标准模式";
    l.magicBoxCnt =
      (i = (r = d.boximator) == null ? undefined : r.boxes.length) != null
        ? i
        : 0;
    l.magicBoxInfo = JSON.stringify(
      (o = d.boximator) == null
        ? undefined
        : o.boxes.map((e, t) => {
            var i;
            var is_path_added = +!!e.motionPath.length;
            var is_end_added = +(
              ((i = e.boundingBox) == null ? undefined : i.length) > 1
            );
            return {
              [`Box${t + 1}`]: {
                is_path_added,
                is_end_added,
              },
            };
          }),
    );
    if (d.lensMotionType) {
      l.movementType = {
        [a.KH.StillShot]: "still_shot",
        [a.KH.ZoomIn]: "zoom_in",
        [a.KH.ZoomOut]: "zoom_out",
        [a.KH.PanRight]: "pan_right",
        [a.KH.PanLeft]: "pan_left",
        [a.KH.TiltUp]: "tilt_up",
        [a.KH.TiltDown]: "tilt_down",
        [a.KH.RotateClockwise]: "rotate_clockwise",
        [a.KH.RotateAnticlockwise]: "rotate_anticlockwise",
        [a.KH.HorizontalLeft]: "horizontal_left",
        [a.KH.HorizontalRight]: "horizontal_right",
        [a.KH.VerticalUp]: "vertical_up",
        [a.KH.VerticalDown]: "vertical_down",
        [a.KH.Default]: "still_shot",
      }[d.lensMotionType];
    }
    if (d.cameraStrength) {
      l.movementStrength = {
        [a.$_.Low]: "小",
        [a.$_.Moderate]: "中",
        [a.$_.High]: "大",
      }[d.cameraStrength];
    }
    if (d.motionSpeed) {
      l.videoSpeed = {
        [a.nJ.Low]: "慢速",
        [a.nJ.Moderate]: "适中",
        [a.nJ.High]: "快速",
      }[d.motionSpeed];
    }
  }
  e.setParams(l);
}

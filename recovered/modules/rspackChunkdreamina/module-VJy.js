import r from "yMd";
export function S(e, t) {
  let i;
  let n;
  let a;
  let o;
  const l = {};
  const s = (n = t.originalInput) == null ? undefined : n.videoGenInputs[0];
  l.isFirstRelaxedGenerate = 0;
  l.isFromPreview = 0;
  l.isQuickPreview = 0;
  l.isPreset = 0;
  l.isRelaxedGenerate = 0;
  l.magicBoxCnt = 0;
  if (s) {
    l.generateMode = s.fps === r.Bg.Fluency ? "流畅模式" : "标准模式";
    l.magicBoxCnt =
      (i = (a = s.boximator) == null ? undefined : a.boxes.length) != null
        ? i
        : 0;
    l.magicBoxInfo = JSON.stringify(
      (o = s.boximator) == null
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
    if (s.lensMotionType) {
      l.movementType = {
        [r.KH.StillShot]: "still_shot",
        [r.KH.ZoomIn]: "zoom_in",
        [r.KH.ZoomOut]: "zoom_out",
        [r.KH.PanRight]: "pan_right",
        [r.KH.PanLeft]: "pan_left",
        [r.KH.TiltUp]: "tilt_up",
        [r.KH.TiltDown]: "tilt_down",
        [r.KH.RotateClockwise]: "rotate_clockwise",
        [r.KH.RotateAnticlockwise]: "rotate_anticlockwise",
        [r.KH.HorizontalLeft]: "horizontal_left",
        [r.KH.HorizontalRight]: "horizontal_right",
        [r.KH.VerticalUp]: "vertical_up",
        [r.KH.VerticalDown]: "vertical_down",
        [r.KH.Default]: "still_shot",
      }[s.lensMotionType];
    }
    if (s.cameraStrength) {
      l.movementStrength = {
        [r.$_.Low]: "小",
        [r.$_.Moderate]: "中",
        [r.$_.High]: "大",
      }[s.cameraStrength];
    }
    if (s.motionSpeed) {
      l.videoSpeed = {
        [r.nJ.Low]: "慢速",
        [r.nJ.Moderate]: "适中",
        [r.nJ.High]: "快速",
      }[s.motionSpeed];
    }
  }
  e.setParams(l);
}

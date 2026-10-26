import n from "Ut";
export function E(e) {
  const t = new n.DAImageFaceRecognize();
  t.keypoint = e == null ? undefined : e.keypoint;
  t.faceRect = e == null ? undefined : e.faceRect;
  t.isSelected = e == null ? undefined : e.isSelected;
  return t;
}
export function R(e) {
  let t;
  let i;
  return {
    keypoint: (t = e == null ? undefined : e.keypoint) != null ? t : [],
    faceRect: (i = e == null ? undefined : e.faceRect) != null ? i : [],
    isSelected: !!(e == null ? undefined : e.isSelected),
  };
}

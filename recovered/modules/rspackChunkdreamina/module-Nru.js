import i from "Qey";
import r from "K8";
export function ik(e) {
  const { blendImageCount, promptSubjectCount } = e;
  return blendImageCount + promptSubjectCount;
}
export function $e(e) {
  const { maxReferenceCount } = e;
  const usedSlotCount = ik(e);
  const availableReferenceUploadCount = Math.max(
    maxReferenceCount - usedSlotCount,
    0,
  );
  return {
    usedSlotCount,
    availableReferenceUploadCount,
    maxReferenceCount,
    atLimit: usedSlotCount >= maxReferenceCount,
  };
}
export function RF(e) {
  return $e(e).availableReferenceUploadCount;
}
export function Dd(e) {
  const { maxReferenceCount } = e;
  if (ik(e) > maxReferenceCount) {
    return r.xz(
      -1,
      i.Ay.t(
        "subject_panel_image_ref_limit_toast",
        {
          num: maxReferenceCount,
        },
        "最多使用 {num} 个参考图内容",
      ),
    );
  }
  return r.nj();
}

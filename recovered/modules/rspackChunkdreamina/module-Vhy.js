export function k(e, t) {
  let n;
  let i;
  let r;
  const a = {};
  const { originalInput } = t;
  if (
    originalInput == null ||
    (r = originalInput.videoGenInputs) == null ||
    (i = r[0]) == null ||
    (n = i.i2vOpt) == null
      ? undefined
      : n.realmanAvatar
  ) {
    const { beforeSilenceMillisecond, afterSilenceMillisecond, selectedFace } =
      originalInput.videoGenInputs[0].i2vOpt.realmanAvatar;
    const { detectedFaceCount } = t.taskExtra;
    a.beforeSilence = beforeSilenceMillisecond;
    a.afterSilence = afterSilenceMillisecond;
    a.useAllCharacter = +!selectedFace;
    a.detectedCharacterCnt = detectedFaceCount;
    e.setParams(a);
  }
}

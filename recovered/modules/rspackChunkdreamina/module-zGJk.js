export function H(e) {
  if (
    (e == null ? undefined : e.material) &&
    e.material.materialType === "subject" &&
    e.material.subjectData
  ) {
    return e.material.subjectData;
  }
}

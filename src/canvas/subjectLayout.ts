/** Canvas-space dimensions; zoom must not affect text wrapping or these limits. */
export const SUBJECT_BASE_HEIGHT = 320;
export const SUBJECT_DESCRIPTION_MIN_HEIGHT = 20;
export const SUBJECT_DESCRIPTION_MAX_HEIGHT = 112;
export const SUBJECT_MAX_HEIGHT =
  SUBJECT_BASE_HEIGHT +
  SUBJECT_DESCRIPTION_MAX_HEIGHT -
  SUBJECT_DESCRIPTION_MIN_HEIGHT;

export function subjectDescriptionLayout(contentHeight: number) {
  const descriptionHeight = Math.max(
    SUBJECT_DESCRIPTION_MIN_HEIGHT,
    Math.min(SUBJECT_DESCRIPTION_MAX_HEIGHT, Math.ceil(contentHeight)),
  );
  return {
    descriptionHeight,
    nodeHeight:
      SUBJECT_BASE_HEIGHT + descriptionHeight - SUBJECT_DESCRIPTION_MIN_HEIGHT,
  };
}

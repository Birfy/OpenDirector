/** Canvas-space dimensions; zoom must not affect text wrapping or these limits. */
export const SUBJECT_BASE_HEIGHT = 320;
export const SUBJECT_DESCRIPTION_MIN_HEIGHT = 20;
export const SUBJECT_DESCRIPTION_MAX_HEIGHT = 112;
export const SUBJECT_MAX_HEIGHT =
  SUBJECT_BASE_HEIGHT +
  SUBJECT_DESCRIPTION_MAX_HEIGHT -
  SUBJECT_DESCRIPTION_MIN_HEIGHT;

export function subjectDescriptionLayout(
  contentHeight: number,
  main?: { kind: string; width?: number; height?: number },
  nodeWidth = 320,
) {
  const descriptionHeight = Math.max(
    SUBJECT_DESCRIPTION_MIN_HEIGHT,
    Math.min(SUBJECT_DESCRIPTION_MAX_HEIGHT, Math.ceil(contentHeight)),
  );
  // Keep landscape videos snug around their frame instead of a square well.
  // Portrait media retains the existing maximum preview height.
  const chromeHeight = 24 + 8 + SUBJECT_DESCRIPTION_MIN_HEIGHT;
  const aspect =
    main?.width && main.height && main.width > 0 && main.height > 0
      ? main.width / main.height
      : 16 / 9;
  const baseHeight =
    main?.kind === "video"
      ? chromeHeight +
        Math.min(
          SUBJECT_BASE_HEIGHT - chromeHeight,
          Math.max(96, Math.round((nodeWidth - 24) / aspect)),
        )
      : SUBJECT_BASE_HEIGHT;
  return {
    descriptionHeight,
    nodeHeight: baseHeight + descriptionHeight - SUBJECT_DESCRIPTION_MIN_HEIGHT,
  };
}

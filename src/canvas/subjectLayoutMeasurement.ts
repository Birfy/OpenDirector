import type { SubjectData } from "./model.ts";
import { subjectDescriptionLayout } from "./subjectLayout.ts";

/** Include derived layout in the import transaction rather than a second undo step. */
export function measureSubjectNodeHeight(
  subject: SubjectData,
  width: number,
  family: string,
) {
  const input = document.createElement("textarea");
  input.setAttribute("aria-hidden", "true");
  input.tabIndex = -1;
  Object.assign(input.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    height: "0",
    minHeight: "0",
    width: `${width - 24 - (subject.main?.kind === "image" ? 26 : 0)}px`,
    fontFamily: family,
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "400",
    padding: "2px 0",
    border: "0",
    boxSizing: "border-box",
    overflow: "hidden",
    resize: "none",
  });
  input.value = subject.description;
  document.body.append(input);
  const contentHeight = input.scrollHeight;
  input.remove();
  return subjectDescriptionLayout(contentHeight, subject.main, width)
    .nodeHeight;
}

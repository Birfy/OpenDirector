export function F() {
  switch (true) {
    case location.pathname.includes("generate"):
      return "to-generate";
    case location.pathname.includes("image-edit"):
    case location.pathname.includes("canvas"):
      return "canvas";
    case location.pathname.includes("story-editor"):
      return "story";
    case location.pathname.includes("workflow"):
      return "aigc";
    default:
      return "makesame";
  }
}

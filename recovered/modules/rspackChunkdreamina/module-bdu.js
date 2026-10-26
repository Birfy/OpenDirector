export var J = {
  Brush: "brush",
  Eraser: "eraser",
  Move: "move",
  Select: "select",
  BoxSelect: "box_select",
};
export var C = (e) => {
  switch (e) {
    case "brush":
      return "brush";
    case "eraser":
      return "eraser";
    case "box_select":
      return "box_select";
    default:
      return;
  }
};

export var y = require("./module-dWj.js").bP.create({
  name: "doc",
  topNode: true,
  content: "block+",
  renderMarkdown: (e, t) => {
    if (e.content) {
      return t.renderChildren(e.content, "\n\n");
    }
    return "";
  },
});

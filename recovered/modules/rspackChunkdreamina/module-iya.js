export var A = require("./module-lgn.js").bP.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || "",
  }),
  renderMarkdown: (e) => e.text || "",
});
export { A as E };

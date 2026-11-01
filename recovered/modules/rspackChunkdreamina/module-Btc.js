import t from "lgn";
export var S = t.bP.create({
  name: "inline-tag",
  group: "inline",
  inline: true,
  atom: true,
  draggable: true,
  selectable: false,
  parseHTML() {
    return [
      {
        tag: 'span[data-type="'.concat(this.name, '"]'),
      },
    ];
  },
  renderHTML(e) {
    const { HTMLAttributes } = e;
    return [
      "span",
      t.KV(HTMLAttributes, {
        "data-type": this.name,
      }),
    ];
  },
});

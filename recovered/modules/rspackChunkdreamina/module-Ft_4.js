import r from "lgn";
import n from "Zr";
import i from "mV";
export var _ = r.YY.create({
  name: "richPlaceholder",
  addOptions: () => ({
    placeholder: "",
  }),
  addStorage() {
    const portalContainer = document.createElement("span");
    portalContainer.className = "rich-placeholder-widget";
    portalContainer.setAttribute("contenteditable", "false");
    return {
      portalContainer,
    };
  },
  addProseMirrorPlugins() {
    return [
      new n.k_({
        key: new n.hs("richPlaceholder"),
        props: {
          handleDOMEvents: {
            compositionend: (e) => {
              requestAnimationFrame(() => {
                var t;
                var { ownerDocument } = e.dom;
                if (ownerDocument.activeElement === e.dom) {
                  if (
                    !((t = ownerDocument.getSelection()) == null
                      ? undefined
                      : t.rangeCount)
                  ) {
                    e.focus();
                  }
                }
              });
            },
          },
          decorations: (e) => {
            var { doc } = e;
            if (doc.childCount > 1 || !r.Op(doc)) {
              this.storage.portalElement = undefined;
              return null;
            }
            var { placeholder } = this.options;
            var n = [];
            doc.descendants((e, t) => {
              if (e.isLeaf || !r.Op(e)) {
                return false;
              }
              var s =
                typeof placeholder === "function"
                  ? placeholder({
                      editor: this.editor,
                    })
                  : placeholder;
              var o = i.NZ.node(t, t + e.nodeSize, {
                class: "is-editor-empty",
                "data-rich-placeholder": "true",
              });
              var l = i.NZ.widget(t + 1, () => this.storage.portalContainer, {
                key: "richPlaceholder",
                ignoreEvents: () => true,
              });
              this.storage.portalElement = s;
              n.push(o, l);
              return false;
            });
            return i.zF.create(doc, n);
          },
        },
      }),
    ];
  },
});

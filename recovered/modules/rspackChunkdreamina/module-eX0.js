import t from "lgn";
import n from "edH";
import i from "Zr";
import r from "mV";
import o from "htj";
export var A = t.YY.create({
  name: o.t.ParagraphPlaceholder,
  addOptions: () => ({
    placeholder: "",
  }),
  addProseMirrorPlugins() {
    const { placeholder } = this.options;
    return [
      new i.k_({
        key: new i.hs("paragraph-placeholder"),
        props: {
          decorations: (u) => {
            var { doc } = u;
            var { leadingNode } = this.options;
            var i = [];
            doc.descendants((node, pos, o, l) => {
              if (
                node.type.name !== n.A.name ||
                ((s = node.content.firstChild) == null
                  ? undefined
                  : s.type.name) !==
                  (leadingNode == null ? undefined : leadingNode.name) ||
                node.childCount > 1
              ) {
                return false;
              }
              var s;
              var d;
              var c = o == null ? undefined : o.maybeChild(l + 1);
              if (
                c &&
                ((d = c.content.firstChild) == null
                  ? undefined
                  : d.type.name) !==
                  (leadingNode == null ? undefined : leadingNode.name)
              ) {
                return false;
              }
              var m = r.NZ.node(pos, pos + node.nodeSize, {
                "data-paragraph-placeholder":
                  typeof placeholder === "function"
                    ? placeholder({
                        editor: this.editor,
                        node,
                        pos,
                      })
                    : placeholder,
              });
              i.push(m);
              return false;
            });
            return r.zF.create(doc, i);
          },
        },
      }),
    ];
  },
});

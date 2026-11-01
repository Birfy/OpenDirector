import n from "lgn";
import o from "qy";
import i from "Zr";
const l = "[\0- \xa0\u1680\u180E\u2000-\u2029\u205F\u3000]";
const s = new RegExp(l);
const a = RegExp(`${l}$`);
const u = RegExp(l, "g");
function d(e, protocols) {
  let r = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp",
  ];
  if (protocols) {
    protocols.forEach((e) => {
      let t = typeof e === "string" ? e : e.scheme;
      if (t) {
        r.push(t);
      }
    });
  }
  return (
    !e ||
    e
      .replace(u, "")
      .match(
        RegExp(
          `^(?:(?:${r.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
          "i",
        ),
      )
  );
}
export var Ay = n.CU.create({
  name: "link",
  priority: 1000,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn(
        "The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.",
      );
    }
    this.options.protocols.forEach((e) => {
      if (typeof e === "string") {
        o.ZV(e);
      } else {
        o.ZV(e.scheme, e.optionalSlashes);
      }
    });
  },
  onDestroy() {
    o.cL();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions: () => ({
    openOnClick: true,
    enableClickSelection: false,
    linkOnPaste: true,
    autolink: true,
    protocols: [],
    defaultProtocol: "http",
    HTMLAttributes: {
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      class: null,
    },
    isAllowedUri: (e, t) => !!d(e, t.protocols),
    validate: (e) => !!e,
    shouldAutoLink: (e) => !!e,
  }),
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML: (e) => e.getAttribute("href"),
      },
      target: {
        default: this.options.HTMLAttributes.target,
      },
      rel: {
        default: this.options.HTMLAttributes.rel,
      },
      class: {
        default: this.options.HTMLAttributes.class,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (e) => {
          let t = e.getAttribute("href");
          return (
            !!t &&
            !!this.options.isAllowedUri(t, {
              defaultValidate: (e) => !!d(e, this.options.protocols),
              protocols: this.options.protocols,
              defaultProtocol: this.options.defaultProtocol,
            }) &&
            null
          );
        },
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    if (
      this.options.isAllowedUri(HTMLAttributes.href, {
        defaultValidate: (e) => !!d(e, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol,
      })
    ) {
      return ["a", n.KV(this.options.HTMLAttributes, HTMLAttributes), 0];
    }
    return [
      "a",
      n.KV(this.options.HTMLAttributes, {
        ...HTMLAttributes,
        href: "",
      }),
      0,
    ];
  },
  addCommands() {
    return {
      setLink:
        (e) =>
        ({ chain }) => {
          let { href } = e;
          return (
            !!this.options.isAllowedUri(href, {
              defaultValidate: (e) => !!d(e, this.options.protocols),
              protocols: this.options.protocols,
              defaultProtocol: this.options.defaultProtocol,
            }) &&
            chain().setMark(this.name, e).setMeta("preventAutolink", true).run()
          );
        },
      toggleLink:
        (e) =>
        ({ chain }) => {
          let { href } = e || {};
          return (
            (!href ||
              !!this.options.isAllowedUri(href, {
                defaultValidate: (e) => !!d(e, this.options.protocols),
                protocols: this.options.protocols,
                defaultProtocol: this.options.defaultProtocol,
              })) &&
            chain()
              .toggleMark(this.name, e, {
                extendEmptyMarkRange: true,
              })
              .setMeta("preventAutolink", true)
              .run()
          );
        },
      unsetLink:
        () =>
        ({ chain }) =>
          chain()
            .unsetMark(this.name, {
              extendEmptyMarkRange: true,
            })
            .setMeta("preventAutolink", true)
            .run(),
    };
  },
  addPasteRules() {
    return [
      n.Zc({
        find: (e) => {
          let t = [];
          if (e) {
            let { protocols, defaultProtocol } = this.options;
            let i = o.I6(e).filter(
              (e) =>
                e.isLink &&
                this.options.isAllowedUri(e.value, {
                  defaultValidate: (e) => !!d(e, protocols),
                  protocols,
                  defaultProtocol,
                }),
            );
            if (i.length) {
              i.forEach((e) =>
                t.push({
                  text: e.value,
                  data: {
                    href: e.href,
                  },
                  index: e.start,
                }),
              );
            }
          }
          return t;
        },
        type: this.type,
        getAttributes: (e) => {
          var t;
          return {
            href: (t = e.data) == null ? undefined : t.href,
          };
        },
      }),
    ];
  },
  addProseMirrorPlugins() {
    let e;
    let t;
    let r;
    let l = [];
    let { protocols, defaultProtocol } = this.options;
    if (this.options.autolink) {
      l.push(
        ((e = {
          type: this.type,
          defaultProtocol: this.options.defaultProtocol,
          validate: (e) =>
            this.options.isAllowedUri(e, {
              defaultValidate: (e) => !!d(e, protocols),
              protocols,
              defaultProtocol,
            }),
          shouldAutoLink: this.options.shouldAutoLink,
        }),
        new i.k_({
          key: new i.hs("autolink"),
          appendTransaction: (t, r, i) => {
            let l = t.some((e) => e.docChanged) && !r.doc.eq(i.doc);
            let u = t.some((e) => e.getMeta("preventAutolink"));
            if (!l || u) {
              return;
            }
            let { tr } = i;
            let c = n.T7(r.doc, [...t]);
            n.FF(c).forEach(({ newRange }) => {
              let r;
              let l;
              let u = n.Nx(i.doc, newRange, (e) => e.isTextblock);
              if (u.length > 1) {
                r = u[0];
                l = i.doc.textBetween(
                  r.pos,
                  r.pos + r.node.nodeSize,
                  undefined,
                  " ",
                );
              } else if (u.length) {
                let e = i.doc.textBetween(newRange.from, newRange.to, " ", " ");
                if (!a.test(e)) {
                  return;
                }
                r = u[0];
                l = i.doc.textBetween(r.pos, newRange.to, undefined, " ");
              }
              if (r && l) {
                let t = l.split(s).filter(Boolean);
                if (t.length <= 0) {
                  return false;
                }
                let a = t[t.length - 1];
                let u = r.pos + l.lastIndexOf(a);
                if (!a) {
                  return false;
                }
                let c = o.qw(a).map((t) => t.toObject(e.defaultProtocol));
                if (
                  !(c.length === 1
                    ? c[0].isLink
                    : c.length === 3 &&
                      !!c[1].isLink &&
                      ["()", "[]"].includes(c[0].value + c[2].value))
                ) {
                  return false;
                }
                c.filter((e) => e.isLink)
                  .map((e) => ({
                    ...e,
                    from: u + e.start + 1,
                    to: u + e.end + 1,
                  }))
                  .filter(
                    (e) =>
                      !i.schema.marks.code ||
                      !i.doc.rangeHasMark(e.from, e.to, i.schema.marks.code),
                  )
                  .filter((t) => e.validate(t.value))
                  .filter((t) => e.shouldAutoLink(t.value))
                  .forEach((t) => {
                    if (
                      !n
                        .hO(t.from, t.to, i.doc)
                        .some((t) => t.mark.type === e.type)
                    ) {
                      tr.addMark(
                        t.from,
                        t.to,
                        e.type.create({
                          href: t.href,
                        }),
                      );
                    }
                  });
              }
            });
            if (tr.steps.length) {
              return tr;
            }
          },
        })),
      );
    }
    if (this.options.openOnClick === true) {
      l.push(
        ((t = {
          type: this.type,
          editor: this.editor,
          enableClickSelection: this.options.enableClickSelection,
        }),
        new i.k_({
          key: new i.hs("handleClickLink"),
          props: {
            handleClick: (e, r, o) => {
              var i;
              var l;
              if (o.button !== 0 || !e.editable) {
                return false;
              }
              let s = null;
              if (o.target instanceof HTMLAnchorElement) {
                s = o.target;
              } else {
                let e = o.target;
                let t = [];
                while (e.nodeName !== "DIV") {
                  t.push(e);
                  e = e.parentNode;
                }
                s = t.find((e) => e.nodeName === "A");
              }
              if (!s) {
                return false;
              }
              let a = n.gu(e.state, t.type.name);
              let u = (i = s == null ? undefined : s.href) != null ? i : a.href;
              let d =
                (l = s == null ? undefined : s.target) != null ? l : a.target;
              if (t.enableClickSelection) {
                t.editor.commands.extendMarkRange(t.type.name);
              }
              return !!s && !!u && (window.open(u, d), true);
            },
          },
        })),
      );
    }
    if (this.options.linkOnPaste) {
      l.push(
        ((r = {
          editor: this.editor,
          defaultProtocol: this.options.defaultProtocol,
          type: this.type,
        }),
        new i.k_({
          key: new i.hs("handlePasteLink"),
          props: {
            handlePaste: (e, t, n) => {
              let { state } = e;
              let { selection } = state;
              let { empty } = selection;
              if (empty) {
                return false;
              }
              let a = "";
              n.content.forEach((e) => {
                a += e.textContent;
              });
              let u = o
                .I6(a, {
                  defaultProtocol: r.defaultProtocol,
                })
                .find((e) => e.isLink && e.value === a);
              return (
                !!a &&
                !!u &&
                r.editor.commands.setMark(r.type, {
                  href: u.href,
                })
              );
            },
          },
        })),
      );
    }
    return l;
  },
});

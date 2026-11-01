import n from "NY";
import r from "oa";
import a from "Zr";
import o from "mV";
import s from "lgn";
function l(e) {
  let t;
  const {
    char,
    allowSpaces,
    allowToIncludeChar,
    allowedPrefixes,
    startOfLine,
    $position,
  } = e;
  const c = allowSpaces && !allowToIncludeChar;
  const u = s.GG(char);
  const d = new RegExp("\\s".concat(u, "$"));
  const M = startOfLine ? "^" : "";
  const g = allowToIncludeChar ? "" : u;
  const N = c
    ? RegExp("".concat(M).concat(u, ".*?(?=\\s").concat(g, "|$)"), "gm")
    : RegExp("".concat(M, "(?:^)?").concat(u, "[^\\s").concat(g, "]*"), "gm");
  const p =
    ((t = $position.nodeBefore) == null ? undefined : t.isText) &&
    $position.nodeBefore.text;
  if (!p) {
    return null;
  }
  const m = $position.pos - p.length;
  const j = Array.from(p.matchAll(N)).pop();
  if (!j || j.input === undefined || j.index === undefined) {
    return null;
  }
  const y = j.input.slice(Math.max(0, j.index - 1), j.index);
  const v = new RegExp(
    "^[".concat(
      allowedPrefixes == null ? undefined : allowedPrefixes.join(""),
      "\0]?$",
    ),
  ).test(y);
  if (allowedPrefixes !== null && !v) {
    return null;
  }
  const from = m + j.index;
  let to = from + j[0].length;
  if (c && d.test(p.slice(to - 1, to + 1))) {
    j[0] += " ";
    to += 1;
  }
  if (from < $position.pos && to >= $position.pos) {
    return {
      range: {
        from,
        to,
      },
      query: j[0].slice(char.length),
      text: j[0],
    };
  }
  return null;
}
const c = new a.hs("suggestion");
export function Ay(e) {
  let t;
  const {
    pluginKey = c,
    editor,
    char = "@",
    allowSpaces = false,
    allowToIncludeChar = false,
    allowedPrefixes = [" "],
    startOfLine = false,
    decorationTag = "span",
    decorationClass = "suggestion",
    decorationContent = "",
    decorationEmptyClass = "is-empty",
    command = () => null,
    items = () => [],
    render = () => ({}),
    allow = () => true,
    findSuggestionMatch = l,
    shouldShow,
    shouldResetDismissed,
  } = e;
  const f = render == null ? undefined : render();
  const allowSpaces_1 = allowSpaces && !allowToIncludeChar;
  const A = () => {
    var pos = editor.state.selection.$anchor.pos;
    var { top, right, bottom, left } = editor.view.coordsAtPos(pos);
    try {
      return new DOMRect(left, top, right - left, bottom - top);
    } catch (e) {
      return null;
    }
  };
  const S = (e, t) => {
    if (t) {
      return () => {
        var t = pluginKey.getState(editor.state);
        var n = t == null ? undefined : t.decorationId;
        var r = e.dom.querySelector('[data-decoration-id="'.concat(n, '"]'));
        return (r == null ? undefined : r.getBoundingClientRect()) || null;
      };
    }
    return A;
  };
  var w = new a.k_({
    key: pluginKey,
    view() {
      return {
        update: (e, i) =>
          n
            ._(function* () {
              let n;
              let r;
              let a;
              let o;
              let l;
              let c;
              let u;
              const d = (n = this.key) == null ? undefined : n.getState(i);
              const M =
                (r = this.key) == null ? undefined : r.getState(e.state);
              const g = d.active && M.active && d.range.from !== M.range.from;
              const N = !d.active && M.active;
              const p = d.active && !M.active;
              const m = !N && !p && d.query !== M.query;
              const j = N || (g && m);
              const y = m || g;
              const h = p || (g && m);
              if (j || y || h) {
                const D = h && !j ? d : M;
                const T = e.dom.querySelector(
                  '[data-decoration-id="'.concat(D.decorationId, '"]'),
                );
                t = {
                  editor,
                  range: D.range,
                  query: D.query,
                  text: D.text,
                  items: [],
                  command: (e) =>
                    command({
                      editor,
                      range: D.range,
                      props: e,
                    }),
                  decorationNode: T,
                  clientRect: S(e, T),
                };
                if (j) {
                  if ((a = f == null ? undefined : f.onBeforeStart) != null) {
                    a.call(f, t);
                  }
                }
                if (y) {
                  if ((o = f == null ? undefined : f.onBeforeUpdate) != null) {
                    o.call(f, t);
                  }
                }
                if (y || j) {
                  t.items = yield items({
                    editor,
                    query: D.query,
                  });
                }
                if (h) {
                  if ((l = f == null ? undefined : f.onExit) != null) {
                    l.call(f, t);
                  }
                }
                if (y) {
                  if ((c = f == null ? undefined : f.onUpdate) != null) {
                    c.call(f, t);
                  }
                }
                if (j) {
                  if ((u = f == null ? undefined : f.onStart) != null) {
                    u.call(f, t);
                  }
                }
              }
            })
            .call(this),
        destroy: () => {
          var e;
          if (t) {
            if ((e = f == null ? undefined : f.onExit) != null) {
              e.call(f, t);
            }
          }
        },
      };
    },
    state: {
      init: () => ({
        active: false,
        range: {
          from: 0,
          to: 0,
        },
        query: null,
        text: null,
        composing: false,
        dismissedRange: null,
      }),
      apply(transaction, t, n, state) {
        const { isEditable } = editor;
        const { composing } = editor.view;
        const { selection } = transaction;
        const { empty, from } = selection;
        const j = r._({}, t);
        const y = transaction.getMeta(pluginKey);
        if (y && y.exit) {
          j.active = false;
          j.decorationId = null;
          j.range = {
            from: 0,
            to: 0,
          };
          j.query = null;
          j.text = null;
          j.dismissedRange = t.active ? r._({}, t.range) : t.dismissedRange;
          return j;
        }
        j.composing = composing;
        if (transaction.docChanged && j.dismissedRange !== null) {
          j.dismissedRange = {
            from: transaction.mapping.map(j.dismissedRange.from),
            to: transaction.mapping.map(j.dismissedRange.to),
          };
        }
        if (isEditable && (empty || editor.view.composing)) {
          if (
            (from < t.range.from || from > t.range.to) &&
            !composing &&
            !t.composing
          ) {
            j.active = false;
          }
          const match = findSuggestionMatch({
            char,
            allowSpaces,
            allowToIncludeChar,
            allowedPrefixes,
            startOfLine,
            $position: selection.$from,
          });
          const I = "id_".concat(Math.floor(4294967295 * Math.random()));
          if (
            match &&
            allow({
              editor,
              state,
              range: match.range,
              isActive: t.active,
            }) &&
            (!shouldShow ||
              shouldShow({
                editor,
                range: match.range,
                query: match.query,
                text: match.text,
                transaction,
              }))
          ) {
            if (
              !(
                j.dismissedRange === null ||
                ((e) => {
                  var { match, dismissedRange, state, transaction } = e;
                  return (
                    (shouldResetDismissed == null
                      ? !undefined
                      : !shouldResetDismissed({
                          editor,
                          state,
                          range: dismissedRange,
                          match,
                          transaction,
                          allowSpaces: allowSpaces_1,
                        })) &&
                    (allowSpaces_1
                      ? match.range.from === dismissedRange.from
                      : match.range.from === dismissedRange.from &&
                        !(
                          transaction.docChanged &&
                          transaction.steps.some((e) => {
                            var e_slice = e.slice;
                            if (
                              !(e_slice == null ? undefined : e_slice.content)
                            ) {
                              return false;
                            }
                            var i = e_slice.content.textBetween(
                              0,
                              e_slice.content.size,
                              "\n",
                            );
                            return /\s/.test(i);
                          })
                        ))
                  );
                })({
                  match,
                  dismissedRange: j.dismissedRange,
                  state,
                  transaction,
                })
              )
            ) {
              j.dismissedRange = null;
            }
            if (j.dismissedRange === null) {
              j.active = true;
              j.decorationId = t.decorationId ? t.decorationId : I;
              j.range = match.range;
              j.query = match.query;
              j.text = match.text;
            } else {
              j.active = false;
            }
          } else {
            if (!match) {
              j.dismissedRange = null;
            }
            j.active = false;
          }
        } else {
          j.active = false;
        }
        if (!j.active) {
          j.decorationId = null;
          j.range = {
            from: 0,
            to: 0,
          };
          j.query = null;
          j.text = null;
        }
        return j;
      },
    },
    props: {
      handleKeyDown(view, event) {
        let n;
        let r;
        const { active, range } = w.getState(view.state);
        if (!active) {
          return false;
        }
        if (event.key === "Escape" || event.key === "Esc") {
          const l = w.getState(view.state);
          if ((n = f == null ? undefined : f.onKeyDown) != null) {
            n.call(f, {
              view,
              event,
              range: l.range,
            });
          }
          ((e, t) => {
            try {
              let n;
              const r = pluginKey.getState(e.state);
              const a = (r == null ? undefined : r.decorationId)
                ? e.dom.querySelector(
                    '[data-decoration-id="'.concat(r.decorationId, '"]'),
                  )
                : null;
              const o = {
                editor,
                range: (r == null ? undefined : r.range) || {
                  from: 0,
                  to: 0,
                },
                query: (r == null ? undefined : r.query) || null,
                text: (r == null ? undefined : r.text) || null,
                items: [],
                command: (e) =>
                  command({
                    editor,
                    range: (r == null ? undefined : r.range) || {
                      from: 0,
                      to: 0,
                    },
                    props: e,
                  }),
                decorationNode: a,
                clientRect: S(e, a),
              };
              if ((n = f == null ? undefined : f.onExit) != null) {
                n.call(f, o);
              }
            } catch (e) {}
            const l = e.state.tr.setMeta(t, {
              exit: true,
            });
            e.dispatch(l);
          })(view, pluginKey);
          return true;
        }
        return (
          ((r = f == null ? undefined : f.onKeyDown) == null
            ? undefined
            : r.call(f, {
                view,
                event,
                range,
              })) || false
        );
      },
      decorations(e) {
        const { active, range, decorationId, query } = w.getState(e);
        if (!active) {
          return null;
        }
        const a = !(query == null ? undefined : query.length);
        const s = [decorationClass];
        if (a) {
          s.push(decorationEmptyClass);
        }
        return o.zF.create(e.doc, [
          o.NZ.inline(range.from, range.to, {
            nodeName: decorationTag,
            class: s.join(" "),
            "data-decoration-id": decorationId,
            "data-decoration-content": decorationContent,
          }),
        ]);
      },
    },
  });
  return w;
}
export { Ay as V0 };
export function Pn(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : c;
  const i = e.state.tr.setMeta(t, {
    exit: true,
  });
  e.dispatch(i);
}

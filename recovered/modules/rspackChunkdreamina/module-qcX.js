let e = true;
let n = false;
let r = false;
function i(t, e, n) {
  const r = t.attrIndex(e);
  const i = [e, n];
  if (r < 0) {
    t.attrPush(i);
  } else {
    t.attrs[r] = i;
  }
}
export default function (t, s) {
  if (s) {
    e = !s.enabled;
    n = !!s.label;
    r = !!s.labelAfter;
  }
  t.core.ruler.after("inline", "github-task-lists", function (t) {
    for (let s = t.tokens, o = 2; o < s.length; o++) {
      if (
        ((t, e) => {
          let n;
          return (
            t[e].type === "inline" &&
            t[e - 1].type === "paragraph_open" &&
            t[e - 2].type === "list_item_open" &&
            ((n = t[e]).content.indexOf("[ ] ") === 0 ||
              n.content.indexOf("[x] ") === 0 ||
              n.content.indexOf("[X] ") === 0)
          );
        })(s, o)
      ) {
        ((t, i) => {
          t.children.unshift(
            ((t, n) => {
              const r = new n("html_inline", "", 0);
              const i = e ? ' disabled="" ' : "";
              if (t.content.indexOf("[ ] ") === 0) {
                r.content =
                  '<input class="task-list-item-checkbox"' +
                  i +
                  'type="checkbox">';
              } else if (
                t.content.indexOf("[x] ") === 0 ||
                t.content.indexOf("[X] ") === 0
              ) {
                r.content =
                  '<input class="task-list-item-checkbox" checked=""' +
                  i +
                  'type="checkbox">';
              }
              return r;
            })(t, i),
          );
          t.children[1].content = t.children[1].content.slice(3);
          t.content = t.content.slice(3);
          if (n) {
            if (r) {
              t.children.pop();
              const s =
                "task-item-" + Math.ceil(10000000 * Math.random() - 1000);
              t.children[0].content =
                t.children[0].content.slice(0, -1) + ' id="' + s + '">';
              t.children.push(
                ((t, e, n) => {
                  const r = new n("html_inline", "", 0);
                  r.content =
                    '<label class="task-list-item-label" for="' +
                    e +
                    '">' +
                    t +
                    "</label>";
                  r.attrs = [
                    {
                      for: e,
                    },
                  ];
                  return r;
                })(t.content, s, i),
              );
            } else {
              t.children.unshift(
                ((t) => {
                  const e = new t("html_inline", "", 0);
                  e.content = "<label>";
                  return e;
                })(i),
              );
              t.children.push(
                ((t) => {
                  const e = new t("html_inline", "", 0);
                  e.content = "</label>";
                  return e;
                })(i),
              );
            }
          }
        })(s[o], t.Token);
        i(s[o - 2], "class", `task-list-item${e ? "" : " enabled"}`);
        i(
          s[
            ((t, e) => {
              const n = t[e].level - 1;
              for (let r = e - 1; r >= 0; r--) {
                if (t[r].level === n) {
                  return r;
                }
              }
              return -1;
            })(s, o - 2)
          ],
          "class",
          "contains-task-list",
        );
      }
    }
  });
}

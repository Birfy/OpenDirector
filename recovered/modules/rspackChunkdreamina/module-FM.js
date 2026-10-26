import t from "z8";
import n from "bT";
import i from "rS";
import r from "zP7";
const classNames = {
  enter: "item-enter-MuelrL",
  enterActive: "item-enter-active-Mu0mco",
  exit: "item-exit-ToKXow",
  exitActive: "item-exit-active-N0sWox",
};
const style = {
  "--placeholder-carousel-transition-duration": `${240}ms`,
};
export var p = n.memo(function (e) {
  let u;
  let a;
  const { editor, candidates } = e;
  const [c, setC] = n.useState(0);
  const p =
    (u = (a = candidates[c]) != null ? a : candidates[0]) != null ? u : null;
  const v = n.useMemo(() => n.createRef(), [p]);
  n.useEffect(() => {
    if (!editor.isDestroyed && editor.isEditable) {
      editor.commands.setAutocompleteCandidate(p);
      return () => {
        if (!editor.isDestroyed) {
          editor.commands.setAutocompleteCandidate(null);
        }
      };
    }
  }, [p, editor]);
  n.useEffect(() => {
    setC(0);
    if (!(candidates.length < 2)) {
      var e = setInterval(
        () => setC((e) => (e + 1) % candidates.length),
        10000,
      );
      return () => clearInterval(e);
    }
  }, [candidates]);
  if (p) {
    return t.jsx("span", {
      "aria-hidden": true,
      "data-placeholder-carousel": true,
      className: "carousel-KFcPQn",
      style,
      children: t.jsx(i.A, {
        component: "span",
        className: "viewport-iOqodD",
        children: t.jsx(
          r.A,
          {
            nodeRef: v,
            timeout: 240,
            classNames,
            children: t.jsxs("span", {
              ref: v,
              className: "item-HEpYOv",
              children: [
                p,
                editor.isEditable &&
                  t.jsx("span", {
                    className: "shortcut-mml3Dj",
                    children: "Tab",
                  }),
              ],
            }),
          },
          p,
        ),
      }),
    });
  }
  return null;
});

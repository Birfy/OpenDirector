import a from "bT";
export var U = a.memo(function (e) {
  const { children } = e;
  const r = a.Children.only(children);
  return a.cloneElement(r, {
    onContextMenu: (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
  });
});

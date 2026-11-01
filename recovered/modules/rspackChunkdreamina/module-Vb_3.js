import r from "bT";
import o from "PC";
export function A(e) {
  const t = r.useState();
  const n = t[0];
  const i = t[1];
  const e_children = e.children;
  const e_getContainer = e.getContainer;
  r.useEffect(
    function () {
      i(e_getContainer ? e_getContainer() : document.body);
    },
    [e_getContainer],
  );
  if (n) {
    return o.createPortal(e_children, n);
  }
  return null;
}

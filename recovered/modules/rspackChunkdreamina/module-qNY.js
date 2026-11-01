export function r(e) {
  const { from, to } = e.editor.state.selection;
  let a = false;
  e.editor.state.doc.nodesBetween(from, to, (e) => {
    if (e.type.name === "table") {
      a = true;
    }
    return !a;
  });
  return a;
}

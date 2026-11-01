export function L(e) {
  const { editor, submitOnModEnter, onSubmit, onPlainEnter } = e;
  const o = () =>
    !editor.view.composing &&
    editor.commands.first((e) => {
      var { commands } = e;
      return [
        () => commands.newlineInCode(),
        () => commands.createParagraphNear(),
        () => commands.liftEmptyBlock(),
        () => commands.splitBlock(),
      ];
    });
  const i = () =>
    !!submitOnModEnter() && !editor.view.composing && (onSubmit(), true);
  return {
    Enter: () =>
      !editor.view.composing &&
      (submitOnModEnter() ? (onPlainEnter(), o()) : (onSubmit(), true)),
    "Ctrl-Enter": i,
    "Meta-Enter": i,
    "Shift-Enter": o,
  };
}

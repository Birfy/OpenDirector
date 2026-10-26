export var o = (e) =>
  [...e.items]
    .filter((e) => e.kind === "file")
    .map((e) => e.getAsFile())
    .filter((e) => !!e);

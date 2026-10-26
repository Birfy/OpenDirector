export var f = (e) =>
  e !== null &&
  (e.files.length > 0 || Array.from(e.items).some((e) => e.kind === "file"));

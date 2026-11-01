const n = RegExp(`(\\s*##\\s*)|`, "g");
export var I = (e) => e.replace(n, "");

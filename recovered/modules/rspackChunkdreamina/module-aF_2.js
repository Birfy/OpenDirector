const i = new Set(require("./module-Foo.js").i);
export var z = (e) => e !== undefined && i.has(e);

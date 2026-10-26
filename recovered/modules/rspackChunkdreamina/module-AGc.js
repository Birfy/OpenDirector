import o from "./module-P5z.js";
export default function (t, e) {
  if (t) {
    if (typeof t === "string") {
      return o(t, e);
    }
    let r = {}.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor) {
      r = t.constructor.name;
    }
    if (r === "Map" || r === "Set") {
      return Array.from(t);
    }
    if (
      r === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
    ) {
      return o(t, e);
    }
    return undefined;
  }
}

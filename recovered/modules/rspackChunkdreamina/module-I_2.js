import n from "./module-o.js";
let o = 0;
const i = Math.random();
const a = n((1).toString);
export default function (e) {
  return "Symbol(" + (e === undefined ? "" : e) + ")_" + a(++o + i, 36);
}

export function configure() {
  util._configure();
  Writer._configure(BufferWriter);
  Reader._configure(BufferReader);
}
export const build = "minimal";
export var Writer = require("./module-zge.js");
export var BufferWriter = require("./module-hz6.js");
export var Reader = require("./module-XuH.js");
export var BufferReader = require("./module-M1y.js");
export var util = require("./module-sJv.js");
export const rpc = require("./module-Sll_2.js");
export const roots = require("./module-PAh.js");
configure();

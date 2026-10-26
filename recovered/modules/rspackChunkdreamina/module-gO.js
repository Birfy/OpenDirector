import r from "oa";
import n from "A7";
import { C } from "./module-gh_2.js";
export var y = new (class {
  constructor() {
    this._entries = [];
    this._maxSize = 100;
    this._onEntryAdded = new n.v();
    this.onEntryAdded = this._onEntryAdded.event;
    this.addEntry = (e) => {
      var t = this._entries.findIndex((t) => t.id === e.id);
      if (t !== -1) {
        this._entries.splice(t, 1);
      }
      this._entries.push(e);
      if (this._entries.length > this._maxSize) {
        this._entries.shift();
      }
      this._onEntryAdded.fire(this._entries);
    };
    this.getEntry = (e) => {
      var t = this._entries.findIndex((t) => t.id === e);
      if (t !== -1) {
        return this._entries[t];
      }
    };
  }
})();
export function e(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { currentTarget } = e;
  const { currentSrc, src, id } = currentTarget;
  let naturalWidth = 0;
  let naturalHeight = 0;
  if (currentTarget.tagName === "IMG") {
    naturalWidth = currentTarget.naturalWidth;
    naturalHeight = currentTarget.naturalHeight;
  } else if (currentTarget.tagName === "VIDEO") {
    naturalWidth = currentTarget.width;
    naturalHeight = currentTarget.height;
  }
  const d =
    currentTarget.tagName === "VIDEO"
      ? "video"
      : currentTarget.tagName === "IMG"
        ? "image"
        : "text";
  const u = r._(
    {
      duration: 0,
      entryType: "element",
      name: "".concat(d, "-paint"),
      inViewTime: 0,
      startTime: 0,
      id,
      identifier: "",
      renderTime: 0,
      loadTime: performance.now(),
      url: currentSrc != null ? currentSrc : src,
      naturalWidth,
      naturalHeight,
    },
    t,
  );
  return C(u, currentTarget);
}

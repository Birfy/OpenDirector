import i from "KI";
const time = 1 / 24;
export class Q {
  dispose() {
    this._disposed = true;
    for (const e of this._skillVideoCoverObjectUrlSet) {
      URL.revokeObjectURL(e);
    }
    this._skillVideoCoverObjectUrlSet.clear();
    this._skillVideoCoverPromiseMap.clear();
  }
  constructor(e) {
    this._getCoverUrl = e;
    this._skillVideoCoverPromiseMap = new Map();
    this._skillVideoCoverObjectUrlSet = new Set();
    this._disposed = false;
    this.resolve = (e) => {
      var t;
      var r = (t = e.showcaseMedia) == null ? undefined : t[0];
      if (!r || this._disposed) {
        return Promise.resolve(undefined);
      }
      var o = this._getCoverUrl(r);
      if (r.type === "image" || o) {
        return Promise.resolve(o);
      }
      var n = this._skillVideoCoverPromiseMap.get(r.url);
      if (n) {
        return n;
      }
      var s = i
        .$(r.url, {
          crossOrigin: "anonymous",
          time,
          timeoutMs: 10000,
        })
        .then((e) => {
          if (e && !this._disposed) {
            var t = URL.createObjectURL(e);
            this._skillVideoCoverObjectUrlSet.add(t);
            return t;
          }
        })
        .catch(() => undefined);
      this._skillVideoCoverPromiseMap.set(r.url, s);
      s.then((e) => {
        if (!(e || this._skillVideoCoverPromiseMap.get(r.url) !== s)) {
          this._skillVideoCoverPromiseMap.delete(r.url);
        }
      });
      return s;
    };
  }
}

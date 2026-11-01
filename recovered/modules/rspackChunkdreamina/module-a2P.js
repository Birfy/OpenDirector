"use strict";
let e;
let t;
class r {
  _sendSuccessToMainThread(e, data) {
    self.postMessage({
      pid: e.pid,
      code: 0,
      data,
    });
  }
  _sendFailToMainThread(e, code, msg) {
    self.postMessage({
      pid: e.pid,
      code,
      msg,
    });
  }
  _receiveMainThreadMsgHandler(e) {
    if (e && this._check(e)) {
      try {
        this._messageHandler(e);
      } catch (error) {
        let t;
        this._sendFailToMainThread(
          e,
          -1,
          (t = error.message) != null ? t : "unknown error.",
        );
      }
    }
  }
  _check(e) {
    return !["pid"].map((t) => t in e).includes(false);
  }
  constructor() {
    self.onmessage = (e) => {
      this._receiveMainThreadMsgHandler(e == null ? undefined : e.data);
    };
  }
}
e = t || (t = {});
e.Env = "env";
e.Average = "average";
class a {
  getAverageColor(e) {
    let t = 0;
    let r = 0;
    let a = 0;
    let o = 0;
    let data = this._source.data;
    let n = data.length / 4;
    let c = Math.round(n * Math.min(0.01, Math.max(1, e.quality)));
    let l = 0;
    let m = 0;
    while (l + 3 <= n) {
      t += data[4 * l];
      r += data[4 * l + 1];
      a += data[4 * l + 2];
      o += data[4 * l + 3];
      l += c;
      m++;
    }
    return [t / m, r / m, a / m, o / m];
  }
  constructor(e) {
    this._source = e;
  }
}
function o(e, t, r, a, o, i, n) {
  try {
    var c = e[i](n);
    var l = c.value;
  } catch (error) {
    r(error);
    return;
  }
  if (c.done) {
    t(l);
  } else {
    Promise.resolve(l).then(a, o);
  }
}
function i() {
  let e;
  e = function* (e) {
    let t = yield fetch(e, {
      referrer: location.origin,
    });
    let r = yield createImageBitmap(yield t.blob());
    let a = new OffscreenCanvas(r.width, r.height).getContext("2d");
    a.drawImage(r, 0, 0);
    return a.getImageData(0, 0, r.width, r.height);
  };
  return (i = function () {
    const t = this;
    const r = arguments;
    return new Promise((resolve, reject) => {
      const n = e.apply(t, r);
      function c(e) {
        o(n, resolve, reject, c, l, "next", e);
      }
      function l(e) {
        o(n, resolve, reject, c, l, "throw", e);
      }
      c(undefined);
    });
  }).apply(this, arguments);
}
function l() {
  return (l = async (e) => {
    if (e instanceof ImageData) {
      return new a(e);
    }
    return new a(
      await (function (e) {
        return i.apply(this, arguments);
      })(e),
    );
  }).apply(this, arguments);
}
new (class extends r {
  async _messageHandler(e) {
    const r = this;
    switch (e.data.event) {
      case t.Env:
        r._sendSuccessToMainThread(e, {
          offscreenCanvas: "OffscreenCanvas" in self,
        });
        break;
      case t.Average:
        try {
          let a;
          let t = await (function (e) {
            return l.apply(this, arguments);
          })(e.data.source);
          r._sendSuccessToMainThread(
            e,
            t.getAverageColor({
              quality: (a = e.data.quality) != null ? a : 1,
            }),
          );
        } catch (error) {
          r._sendFailToMainThread(e, -1, error.message);
        }
        break;
      default:
        throw Error("lvAssert(unreachable code flow)");
    }
  }
})();

import { u1 } from "./module-tvS.js";
import { jG } from "./module-o7_2.js";
import { P } from "./module-Ik.js";
import l from "oa";
import { uR } from "./module-JSz.js";
import { v6 } from "./module-jnc.js";
import { X3 } from "./module-Dm.js";
import { TZ, iX, nj, xz } from "./module-K8.js";
let a;
let o;
class p {
  sendTaskToWorker(e = {}) {
    let t = v6();
    let _worker = this._worker;
    let pid = uR();
    this._deferMap.set(pid, t);
    _worker.postMessage(
      l._(
        {
          pid,
        },
        e,
      ),
    );
    return t.promise;
  }
  _receiveWorkerMsgHandler(e) {
    if (!e || !this._check(e)) {
      return;
    }
    let { pid, code, msg, data } = e;
    let i = this._deferMap.get(pid);
    X3(i, `task-${pid} is not defined`);
    if (code === 0) {
      if (data) {
        i.resolve(TZ(data));
      } else {
        i.resolve(nj());
      }
    } else {
      i.resolve(xz(code, msg != null ? msg : "no message error."));
    }
    this._deferMap.delete(pid);
  }
  _check(e) {
    return !!e && !["pid"].map((t) => t in e).includes(false);
  }
  constructor(e) {
    var t;
    this._worker = e;
    this._deferMap = new Map();
    let r = (t = e.onmessage) == null ? undefined : t.bind(e);
    this._worker.onmessage = (e) => {
      if (r != null) {
        r(e);
      }
      this._receiveWorkerMsgHandler(e == null ? undefined : e.data);
    };
  }
}
export var A = u1("color-analyze");
function f() {
  return (f = async (e) => {
    let t = await fetch(e, {
      referrer: location.origin,
    });
    let r = await createImageBitmap(await t.blob());
    let a = document.createElement("canvas");
    a.width = r.width;
    a.height = r.height;
    let o = a.getContext("2d");
    o.drawImage(r, 0, 0);
    return o.getImageData(0, 0, r.width, r.height);
  }).apply(this, arguments);
}
a = o || (o = {});
a.Env = "env";
a.Average = "average";
var h = class extends jG {
  async getAverageColor(e, t) {
    const r = this;
    if (typeof e !== "string") {
      return r._getAverageColorByImageData(e, t);
    }
    await r._ensureEnv();
    if (r._canvasInWorker === false) {
      try {
        let a = await (function (e) {
          return f.apply(this, arguments);
        })(e);
        return r._getAverageColorByImageData(a, t);
      } catch (error) {
        return iX(-1, "getImageDataByUrl in main thread error", error);
      }
    }
    return r._getAverageColorByUrl(e, t);
  }
  _getAverageColorByUrl(e, t) {
    let r;
    return this._worker.sendTaskToWorker({
      data: {
        event: o.Average,
        source: e,
        quality: (r = t == null ? undefined : t.quality) != null ? r : 1,
      },
    });
  }
  _getAverageColorByImageData(e, t) {
    let r;
    return this._worker.sendTaskToWorker({
      data: {
        event: o.Average,
        source: e,
        quality: (r = t == null ? undefined : t.quality) != null ? r : 1,
      },
    });
  }
  async _ensureEnv() {
    const e = this;
    if (e._canvasInWorker !== undefined) {
      return;
    }
    if (!e._mutex.tryLock()) {
      await e._mutex.lockShared();
      e._mutex.unLockShared();
      return;
    }
    let t = await e._worker.sendTaskToWorker({
      data: {
        event: o.Env,
      },
    });
    if (t.ok) {
      e._canvasInWorker = t.value.offscreenCanvas;
    } else {
      e._canvasInWorker = false;
    }
  }
  constructor(e) {
    super();
    this._worker = new p(e);
    this._mutex = new P();
  }
};
export { h as f };

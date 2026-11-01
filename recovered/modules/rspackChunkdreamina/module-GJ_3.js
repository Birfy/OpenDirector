import a from "NY";
import r from "ks";
import i from "Gr9";
export class B {
  init(e, t, n) {
    return a
      ._(function* () {
        if (!this._clipCanvas) {
          throw Error("fail to init clip");
        }
        this._clipCanvas.clear();
        this._clipCanvas.width = t;
        this._clipCanvas.height = n;
        this._paintHeight = n;
        this._paintWidth = t;
        this._fileSrc = e;
        const a = yield r.y(this._fileSrc);
        this._imageElement = a;
      })
      .call(this);
  }
  clipRect(e, t, n, a) {
    this._clipCanvas.clear();
    if (!this._imageElement) {
      return "";
    }
    let r;
    let i;
    const { ctx } = this._clipCanvas;
    if (!ctx) {
      return "";
    }
    this._clipCanvas.width = this._paintWidth;
    this._clipCanvas.height = this._paintHeight;
    ctx.drawImage(
      this._imageElement,
      0,
      0,
      this._paintWidth,
      this._paintHeight,
    );
    const l = ctx.getImageData(e, t, n, a);
    this._clipCanvas.clear();
    this._clipCanvas.width = n;
    this._clipCanvas.height = a;
    ctx.putImageData(l, 0, 0);
    if (
      (r =
        (i = this._clipCanvas.element) == null ? undefined : i.toDataURL()) !=
      null
    ) {
      return r;
    }
    return "";
  }
  clear() {
    let e;
    if ((e = this._clipCanvas) != null) {
      e.clear();
    }
  }
  destroy() {
    this._clipCanvas.destroy();
  }
  constructor() {
    this._clipCanvas = new i.Y(0, 0);
    this._fileSrc = "";
    this._imageElement = null;
    this._paintHeight = 0;
    this._paintWidth = 0;
  }
}

if (require.j == "wl4") var a = require("Po");
if (require.j == "wl4") var o = require("dw4");
export class G {
  get namespace() {
    return this.observableData.namespace;
  }
  get debugMode() {
    return this.observableData.debugMode;
  }
  get visible() {
    return this.observableData.visible;
  }
  constructor(e) {
    this.observableData = o.sH(
      a.A(
        {
          namespace: "base",
          visible: true,
          debugMode: false,
        },
        e.setting,
      ),
    );
  }
}

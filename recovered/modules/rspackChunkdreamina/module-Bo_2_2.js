import a from "z8";
import o from "Po";
import i from "dw4";
import { F4 } from "./module-Dm.js";
import { d as d_1 } from "./module-B9_2.js";
import l from "bT";
import _m from "xb";
import d from "I0V";
import * as u from "./module-XeD.js";
import { F } from "./module-NE_3.js";
import { F as F_1 } from "./module-Tf.js";
import { d as d_2 } from "./module-C5.js";
import { e as e_1 } from "./module-wT_2.js";
import { I as I_1 } from "./module-Ma_2.js";
import { M } from "./module-oe_2.js";
import { J, z } from "./module-Fa6.js";
import { Mm } from "./module-f4.js";
let y = l.memo(() => {
  let { uiConfigurationService } = l.useContext(F_1);
  let t = F(uiConfigurationService.setting, (e) => e.sideDrawer.floatStrategy);
  let r = d_2(t == null ? undefined : t.floatLimitWidth);
  let { visible, activeId, configs } = F(
    uiConfigurationService.uiManager[e_1],
    (e) => e.observableData,
  );
  let uiConfig = configs.find((e) => e.id === activeId);
  l.useEffect(() => {
    let t;
    if (!visible && (uiConfig == null ? undefined : uiConfig.onAfterClose)) {
      t = setTimeout(() => {
        I_1({
          middleware: uiConfigurationService.middleware,
          trigger: e_1,
          method: "onAfterClose",
          handler: uiConfig.onAfterClose,
          uiConfig,
        })();
      }, 300);
    }
    return () => {
      if (t) {
        clearTimeout(t);
      }
    };
  }, [visible, uiConfig, uiConfigurationService.middleware]);
  let m = F(
    uiConfigurationService.uiManager[M],
    (e) => e.observableData.currentRoute,
  );
  let y = l.useMemo(() => {
    var t;
    var r;
    var a;
    if (
      (a =
        (t = (r = uiConfigurationService.setting.sideDrawer)
          .getSideDrawerCollapseBehavior) == null
          ? undefined
          : t.call(r)) != null
    ) {
      return a;
    }
    return "legacy";
  }, [
    m,
    uiConfigurationService.setting.sideDrawer.getSideDrawerCollapseBehavior,
  ]);
  let w = Mm({
    symbol: e_1,
    active: visible,
    interval: 200,
    enable: !r,
  });
  let I = d.A(() => {
    uiConfigurationService.uiManager[e_1].close();
  });
  d.A((e) => {
    if (e.target === e.currentTarget) {
      I();
    }
  });
  let b = l.useMemo(() => {
    let e = uiConfig ? z(uiConfig) : "";
    if (r) {
      return _m("float-mode");
    }
    return _m("normal-mode", e, w, y);
  }, [r, uiConfig, w, y]);
  if (!uiConfig || J(uiConfig)) {
    return a.jsx("div", {
      className: _m("platform-ui-service-side-drawer-container", b),
      children: a.jsx("div", {
        className: _m("side-drawer-panel"),
      }),
    });
  }
  return a.jsx("div", {
    className: _m("platform-ui-service-side-drawer-container", "float-mode", {
      visible,
    }),
    children: a.jsx("div", {
      className: _m("side-drawer-panel", {
        visible,
      }),
      children: a.jsx(u.tH, {
        fallback: null,
        children:
          typeof uiConfig.content === "function"
            ? uiConfig.content(uiConfig)
            : uiConfig.content,
      }),
    }),
  });
});
class w extends d_1 {
  registerConfig(e) {
    i.h5(() => {
      e.forEach((e) => {
        let t = this.observableData.configs.findIndex((t) => t.id === e.id);
        if (t !== -1) {
          this.observableData.configs[t] = o.A(
            this.observableData.configs[t],
            e,
          );
        } else {
          F4(
            e.id,
            'The "id" attribute is required when registering "UiManagerName.SideDrawer"',
          );
          this.observableData.configs.push(e);
        }
      });
    });
  }
  open(e) {
    if (this.observableData.configs.find((t) => t.id === e)) {
      i.h5(() => {
        this.observableData.activeId = e;
        this.observableData.visible = true;
      });
    }
  }
  close() {
    i.h5(() => {
      this.observableData.visible = false;
    });
  }
  toggle(e) {
    if (this.observableData.activeId === e && this.observableData.visible) {
      this.close();
    } else {
      this.open(e);
    }
  }
  getActiveId() {
    return this.observableData.activeId;
  }
  isVisible() {
    return this.observableData.visible;
  }
  render() {
    return a.jsx(y, {});
  }
  _middlewareChange() {
    i.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = i.sH({
      activeId: null,
      visible: false,
      forceUpdate: 0,
      configs: [],
    });
  }
}
export { w as u };

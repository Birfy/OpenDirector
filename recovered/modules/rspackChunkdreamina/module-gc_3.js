import a from "z8";
import o from "Po";
import i from "dw4";
import { F4 } from "./module-Dm.js";
import { d as d_1 } from "./module-B9_2.js";
import l from "bT";
import * as m from "./module-XeD.js";
import { F } from "./module-NE_3.js";
import d from "xb";
import { o as o_1 } from "./module-ZG_2.js";
import { F as F_1 } from "./module-Tf.js";
import { I } from "./module-Ma_2.js";
import { _ } from "./module-ld_3.js";
import { A } from "./module-n9_2.js";
let useH = ({ data }) => {
  let { uiConfigurationService } = l.useContext(F_1);
  let r =
    F(uiConfigurationService.uiManager[o_1], (t) =>
      t.observableData.slotPositionMap.get(data.id),
    ) || {};
  return a.jsx("div", {
    className: d(A.container, _(data.className, "")),
    style: {
      top: r.top,
      bottom: r.bottom,
      left: r.left,
      right: r.right,
    },
    children: _(data.content, null),
  });
};
let S = l.memo(() => {
  let { uiConfigurationService } = l.useContext(F_1);
  let t = F(uiConfigurationService.uiManager[o_1], (t) => {
    let { visibleGroup, configs } = t.observableData;
    return configs
      .filter((e) => {
        var t;
        return (
          (t = e.visibleGroups) == null ||
          !t.length ||
          e.visibleGroups.includes(visibleGroup || "")
        );
      })
      .filter(
        (uiConfig) =>
          !I({
            middleware: uiConfigurationService.middleware,
            trigger: o_1,
            method: "shouldHidden",
            handler: uiConfig.shouldHidden,
            uiConfig,
          })(),
      );
  });
  return a.jsx(a.Fragment, {
    children: t.map((e) => {
      var t;
      return a.jsx(
        m.tH,
        {
          fallback: (t = e.errorElement) != null ? t : a.jsx("div", {}),
          onError: e.onError,
          children: a.jsx(
            useH,
            {
              data: e,
            },
            e.id,
          ),
        },
        e.id,
      );
    }),
  });
});
export class O extends d_1 {
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
            'The "id" attribute is required when registering "UiManagerName.AbsolutePositionSlot"',
          );
          this.observableData.configs.push(e);
        }
        if (
          !this.observableData.slotPositionMap.get(e.id) &&
          e.defaultPosition
        ) {
          this.observableData.slotPositionMap.set(e.id, e.defaultPosition);
        }
      });
    });
  }
  changeVisibleGroup(e) {
    i.h5(() => {
      this.observableData.visibleGroup = e;
    });
  }
  updateSlotPosition(e, t) {
    i.h5(() => {
      if (this.observableData.configs.find((t) => t.id === e)) {
        this.observableData.slotPositionMap.set(e, t);
      }
    });
  }
  render() {
    return a.jsx(S, {});
  }
  _middlewareChange() {
    i.h5(() => {
      this.observableData.forceUpdate++;
    });
  }
  constructor(...e) {
    super(...e);
    this.observableData = i.sH({
      forceUpdate: 0,
      visibleGroup: undefined,
      configs: [],
      slotPositionMap: new Map(),
    });
  }
}

import n from "NY";
import i from "oa";
import a from "bk";
import s from "zF1";
import o from "z8";
import "WJ";
import c from "gei";
import _l from "xb";
import u from "M8X";
import p from "wF";
import m from "bo";
import { N } from "./module-ekP.js";
import g from "JZn";
import v from "CFa";
import b from "fGo";
import { t as t_1 } from "./module-zP9.js";
import y from "pHz";
import { t as t_2 } from "./module-ldK.js";
import { lR } from "./module-DVK.js";
const A = (e) =>
  n._(function* () {
    let r;
    const { productId, payManager, price, containerService, forceTheme } = e;
    const x = m.p3();
    payManager.setCurrentProduct(x, productId);
    const w = g.c(containerService, v.u.VIP_MODAL);
    yield payManager.purchase(x);
    if (!payManager.orderError) {
      let R = false;
      return (r = c.A.confirm({
        wrapClassName: _l(
          "pipoModal-W6yP4H",
          forceTheme === "light" && "lv-theme-force_light",
          forceTheme === "light" && "standaloneLightTheme-u0npfA",
          forceTheme === "dark" && "lv-theme-force_dark",
          forceTheme === "dark" && "standaloneDarkTheme-ky89sa",
        ),
        className: "pipoModalInner-Dw2vUa",
        maskStyle: b.S(10),
        title: null,
        footer: null,
        simple: false,
        escToExit: false,
        afterClose: () => {
          var resourcePositionService;
          var t;
          var n;
          var a =
            R && !((t = payManager.orderResult) == null ? undefined : t.ok);
          R = false;
          payManager.disposeCurrentTask();
          if ((n = payManager.orderResult) == null ? undefined : n.ok) {
            if (w != null) {
              w.unmount();
            }
          }
          if (a) {
            (resourcePositionService = u.cQ(containerService, y.w$))
              .getMaterialForShow()
              .then((material) => {
                var n;
                if (
                  material &&
                  ((n = payManager.orderResult) == null || !n.ok)
                ) {
                  t_1({
                    containerService,
                    material,
                    onShow: () => {
                      if (resourcePositionService.markShownInSession()) {
                        resourcePositionService.reportAction(y.Ty.Show);
                        t_2({
                          containerService,
                          resourcePositionService,
                          action: "show",
                        });
                      }
                    },
                    onClick: (clickButton) => {
                      resourcePositionService.reportAction(y.Ty.Click, {
                        clickButton,
                      });
                      t_2({
                        containerService,
                        resourcePositionService,
                        action:
                          clickButton === "main"
                            ? "click_to_vip_page"
                            : "close_button",
                      });
                    },
                  }).then((r) => {
                    if (r === "continuePay") {
                      A(e);
                    }
                  });
                }
              });
          }
        },
        icon: null,
        closable: false,
        maskClosable: false,
        content: o.jsx(p.Z, {
          instantiationService: containerService,
          children: o.jsx(N, {
            paymentPrice: price,
            containerService,
            payManager,
            onClose: () => {
              if (r != null) {
                r.close();
              }
            },
            onCloseIconClick: () => {
              if (!R) {
                R = true;
                if (r != null) {
                  r.close();
                }
              }
            },
            onPayAgain: () =>
              n._(function* () {
                yield payManager.purchase(x);
              })(),
          }),
        }),
      }));
    }
  })();
var w = (e) =>
  n._(function* () {
    const { payManager } = e;
    if (s.m(payManager)) {
      yield A(
        a._(i._({}, e), {
          payManager,
        }),
      );
    } else if (s.X(payManager)) {
      lR(
        a._(i._({}, e), {
          payManager,
        }),
      );
    }
  })();
export { w as p };

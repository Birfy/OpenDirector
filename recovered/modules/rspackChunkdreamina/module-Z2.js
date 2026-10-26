import i from "oa";
import n from "qa";
import a from "z8";
import o from "SJ";
import s from "VPK";
import "eu";
import c from "wF";
import l from "gwv";
export function j(e) {
  const { containerService, orderId, source, onClose } = e;
  const p = n._(e, ["containerService", "orderId", "source", "onClose"]);
  const orderId_1 = orderId.trim();
  if (!orderId_1 || orderId_1 === "-") {
    throw Error("A valid corporate order ID is required");
  }
  const h = document.createElement("div");
  document.body.appendChild(h);
  const v = o.H(h);
  let _ = false;
  const y = () => {
    if (!_) {
      _ = true;
      queueMicrotask(() => {
        v.unmount();
        h.remove();
      });
    }
  };
  v.render(
    a.jsx(c.Z, {
      instantiationService: containerService,
      children: a.jsx(s.zr, {
        visible: true,
        orderId: orderId_1,
        tracking: {
          source,
        },
        onEvent: (e) =>
          l.ZH(
            containerService,
            i._(
              {
                source,
              },
              p,
            ),
            e,
          ),
        onClose: () => {
          if (!_) {
            y();
            if (onClose != null) {
              onClose();
            }
          }
        },
      }),
    }),
  );
  return y;
}

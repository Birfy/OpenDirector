import n from "NY";
import i from "oa";
import a from "bk";
import s from "CgK";
import o from "bT";
import c from "dm";
import l from "wF";
import d from "Kt";
import u from "oh";
import p from "Iv";
import { k as k_1 } from "./module-er_2.js";
export function f(e) {
  const r = l.h(d._);
  const { vipPriceList } = l.h(u.$);
  const h = l.h(p.sG);
  const gRef = o.useRef(false);
  const vRef = o.useRef(null);
  const [b, setB] = o.useState();
  const [y, setY] = o.useState(false);
  const [ccpcPopupVisible, setCcpcPopupVisible] = o.useState(false);
  const w = o.useCallback((content) => {
    setB((r) => {
      if (r) {
        return a._(i._({}, r), {
          content,
        });
      }
    });
    setCcpcPopupVisible(true);
    setY(true);
    setTimeout(() => {
      setB(undefined);
      setY(false);
      setCcpcPopupVisible(false);
      h.syncRemoteCreditHistory();
    }, 3000);
  }, []);
  const onCCPCVisibleChange = o.useCallback(
    (e) => {
      var r;
      var t;
      setCcpcPopupVisible(e);
      if (e) {
        if (!(b == null || (r = b.afterOpen) == null)) {
          r.call(b);
        }
      } else if (!(b == null || (t = b.afterClose) == null)) {
        t.call(b);
      }
    },
    [b],
  );
  o.useEffect(() => {
    if (!gRef.current) {
      var t = r.createInstance(k_1);
      vRef.current = t;
      t.getCCPCModal(e, w, () => onCCPCVisibleChange(false)).then((e) =>
        setB(e),
      );
      gRef.current = true;
    }
  }, [r, e, vipPriceList]);
  s.A(
    () =>
      n._(function* () {
        if (b == null ? undefined : b.isFirstShow) {
          let e;
          setCcpcPopupVisible(true);
          if (!(b == null || (e = b.afterOpen) == null)) {
            e.call(b);
          }
          yield c.u(86400000);
          setCcpcPopupVisible(false);
        }
      })(),
    [b],
  );
  const ccpcTooltipClassName = o.useMemo(() => {
    if (!y) {
      if (b == null) {
        return undefined;
      }
      return b.className;
    }
  }, [b, y]);
  return {
    ccpcCommerceLandingModalContent: b == null ? undefined : b.content,
    ccpcPopupVisible,
    onCCPCVisibleChange,
    ccpcTooltipClassName,
  };
}

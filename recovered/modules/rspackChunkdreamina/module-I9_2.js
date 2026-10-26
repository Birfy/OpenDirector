import r from "bT";
import n from "rL";
import { R } from "./module-Du8_2.js";
import o from "Oo";
import { o as o_1 } from "./module-z6W_2.js";
import c from "mo6";
import l from "Fw";
import d from "nss";
import u from "wF";
n.zt.BETA_AVAILABLE;
n.zt.RELEASED;
export var w = (e, t) => {
  var { contentGeneratorTypes, typeOptions, appearance } = r.useContext(R);
  var appearance_1 = t != null ? t : appearance;
  var [, m] = o_1({
    featureKey: n.bp.GENERATE_VIDEO,
  });
  var [, g] = o_1({
    featureKey: n.bp.DREAMINA_LIP_SYNC,
  });
  var [, f] = o_1({
    featureKey: n.bp.GENERATE_AUDIO,
  });
  var y = e != null ? e : contentGeneratorTypes;
  var _ = (() => {
    const e = u.h(d.Y);
    const [t, setT] = r.useState(false);
    r.useEffect(() => {
      var t;
      var r = false;
      var n = (e) => {
        if (!r) {
          var n = () => {
            if (!r) {
              setT(
                ((e) => {
                  let t;
                  let i;
                  const { audioModelConfigData } = e;
                  return (
                    !audioModelConfigData.loading &&
                    !!((t = audioModelConfigData.data) == null
                      ? undefined
                      : t.ok) &&
                    !((i = audioModelConfigData.data.value[l.n1.Song]) == null
                      ? undefined
                      : i.defaultModelKey.trim())
                  );
                })(e),
              );
            }
          };
          t = e.onAudioConfigUpdated(n);
          n();
        }
      };
      var a = e.getInstanceSync();
      if (a) {
        n(a);
      } else {
        e.getInstance()
          .then(n)
          .catch(() => undefined);
      }
      return () => {
        r = true;
        if (t != null) {
          t.dispose();
        }
      };
    }, [e]);
    return t;
  })();
  var b = r.useMemo(() => new Set(y), [y]);
  var w = r.useMemo(
    () =>
      c
        .hK({
          appearance: appearance_1,
          isAudioGeneratorDisabled: (n.bp.GENERATE_AUDIO, false),
          isDigitalHumanGeneratorDisabled: (n.bp.DREAMINA_LIP_SYNC, false),
          isAgenticEnabled: o.Q,
          isVideoGeneratorDisabled: (n.bp.GENERATE_VIDEO, false),
        })
        .filter(
          (e) =>
            (y === undefined || b.has(e.value)) && !(e.value === "music" && _),
        ),
    [f, b, g, appearance_1, y, _, m],
  );
  if (typeOptions != null) {
    return typeOptions;
  }
  return w;
};

import a from "bT";
import r from "rL";
import { R } from "./module-Du8.js";
import l from "Oo";
import { o } from "./module-z6W.js";
import c from "mo6";
import s from "Fw";
import u from "nss";
import d from "wF";
r.zt.BETA_AVAILABLE;
r.zt.RELEASED;
export var w = (e, t) => {
  var { contentGeneratorTypes, typeOptions, appearance } = a.useContext(R);
  var appearance_1 = t != null ? t : appearance;
  var [, b] = o({
    featureKey: r.bp.GENERATE_VIDEO,
  });
  var [, h] = o({
    featureKey: r.bp.DREAMINA_LIP_SYNC,
  });
  var [, p] = o({
    featureKey: r.bp.GENERATE_AUDIO,
  });
  var g = e != null ? e : contentGeneratorTypes;
  var x = (() => {
    const e = d.h(u.Y);
    const [t, setT] = a.useState(false);
    a.useEffect(() => {
      var t;
      var a = false;
      var r = (e) => {
        if (!a) {
          var r = () => {
            if (!a) {
              setT(
                ((e) => {
                  let t;
                  let n;
                  const { audioModelConfigData } = e;
                  return (
                    !audioModelConfigData.loading &&
                    !!((t = audioModelConfigData.data) == null
                      ? undefined
                      : t.ok) &&
                    !((n = audioModelConfigData.data.value[s.n1.Song]) == null
                      ? undefined
                      : n.defaultModelKey.trim())
                  );
                })(e),
              );
            }
          };
          t = e.onAudioConfigUpdated(r);
          r();
        }
      };
      var o = e.getInstanceSync();
      if (o) {
        r(o);
      } else {
        e.getInstance()
          .then(r)
          .catch(() => undefined);
      }
      return () => {
        a = true;
        if (t != null) {
          t.dispose();
        }
      };
    }, [e]);
    return t;
  })();
  var y = a.useMemo(() => new Set(g), [g]);
  var k = a.useMemo(
    () =>
      c
        .hK({
          appearance: appearance_1,
          isAudioGeneratorDisabled: (r.bp.GENERATE_AUDIO, false),
          isDigitalHumanGeneratorDisabled: (r.bp.DREAMINA_LIP_SYNC, false),
          isAgenticEnabled: l.Q,
          isVideoGeneratorDisabled: (r.bp.GENERATE_VIDEO, false),
        })
        .filter(
          (e) =>
            (g === undefined || y.has(e.value)) && !(e.value === "music" && x),
        ),
    [p, y, h, appearance_1, g, x, b],
  );
  if (typeOptions != null) {
    return typeOptions;
  }
  return k;
};

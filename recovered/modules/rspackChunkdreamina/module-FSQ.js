import r from "bT";
import n from "NTt";
import i from "QS6";
import { n as n_1 } from "./module-IfdP.js";
export function $(e) {
  const { component, enabled = true, getRendererContainer, onQueryChange } = e;
  const c = n_1();
  const dRef = r.useRef(c && enabled);
  const uRef = r.useRef(null);
  dRef.current = c && enabled;
  const allow = r.useCallback((e) => {
    var { editor } = e;
    uRef.current = editor;
    return dRef.current;
  }, []);
  const p = r.useMemo(
    () =>
      i.y({
        char: "@",
        component,
        allow,
        allowCompositionWhitespace: true,
        getRendererContainer,
        onQueryChange,
      }),
    [allow, component, getRendererContainer, onQueryChange],
  );
  r.useEffect(() => {
    var uRef_current = uRef.current;
    if (!(dRef.current || !uRef_current || uRef_current.isDestroyed)) {
      n.Pn(uRef_current.view, p.pluginKey);
    }
  }, [enabled, c, p.pluginKey]);
  return p;
}

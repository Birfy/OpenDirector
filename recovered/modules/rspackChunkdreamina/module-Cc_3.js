import a from "bT";
import r from "wF";
import i from "YR";
export function D() {
  const e = r.h(i.B);
  const [t, setT] = a.useState(e.getTheme());
  a.useEffect(() => {
    var t = e.onDidThemeChange((e) => {
      setT(e);
    });
    return () => {
      t.dispose();
    };
  }, [e]);
  return t;
}

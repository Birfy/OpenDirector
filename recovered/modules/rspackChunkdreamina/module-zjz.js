import n from "bT";
import r from "wF";
import a from "Lx";
export function N() {
  const e = r.h(a.C);
  const [t, setT] = n.useState(null);
  n.useEffect(() => {
    var t = false;
    e.getInstance().then((e) => {
      if (!t) {
        setT(e.subjectSearchManager.data);
      }
    });
    return () => {
      t = true;
    };
  }, [e]);
  return t;
}

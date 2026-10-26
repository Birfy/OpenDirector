import a from "NY";
import n from "bT";
import o from "H1i";
import l from "wF";
import i from "H1f";
export function N(e) {
  const t = l.h(o.A);
  const [backgroundColor, setBackgroundColor] = n.useState(undefined);
  const [isLoading, setIsLoading] = n.useState(false);
  n.useEffect(() => {
    if (!e) {
      setBackgroundColor(undefined);
      setIsLoading(false);
      return;
    }
    var r = false;
    setIsLoading(true);
    a._(function* () {
      const a = yield t.getAverageColor(e, {
        quality: 0.5,
      });
      if (!r) {
        if (a.ok) {
          const [n, o, l] = a.value;
          setBackgroundColor(i.c(n, o, l));
        } else {
          setBackgroundColor(undefined);
        }
        setIsLoading(false);
      }
    })();
    return () => {
      r = true;
    };
  }, [e, t]);
  return {
    backgroundColor,
    isLoading,
  };
}

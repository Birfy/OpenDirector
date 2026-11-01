import i from "bT";
const NContext = i.createContext(undefined);
export function B(e) {
  const { children, theme } = e;
  return i.createElement(
    NContext.Provider,
    {
      value: theme,
    },
    children,
  );
}
export var v = (e) => {
  var t;
  var r = i.useContext(NContext);
  var [a, setA] = i.useState(
    () => document.body.getAttribute("lv-theme") || "light",
  );
  i.useEffect(() => {
    var e = new MutationObserver(() => {
      setA(document.body.getAttribute("lv-theme") || "light");
    });
    e.observe(document.body, {
      attributes: true,
      attributeFilter: ["lv-theme"],
    });
    return () => {
      e.disconnect();
    };
  }, []);
  if ((t = e != null ? e : r) != null) {
    return t;
  }
  return a;
};

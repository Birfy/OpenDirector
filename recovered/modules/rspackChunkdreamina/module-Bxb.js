import a from "bT";
import { R } from "./module-Du8.js";
import { E } from "./module-G4.js";
export var N = () => {
  var { collapsed } = a.useContext(R);
  var tRef = a.useRef(collapsed);
  a.useEffect(() => {
    if (collapsed !== tRef.current) {
      tRef.current = collapsed;
    }
  }, [collapsed]);
  var [, setN] = a.useState(false);
  E(() => {
    setN(true);
    return () => {
      setN(false);
    };
  }, []);
  var l = a.useMemo(() => tRef.current !== collapsed, [collapsed]);
  var collapseTransitionStart = a.useMemo(() => collapsed && l, [collapsed, l]);
  var expandTransitionStart = a.useMemo(() => !collapsed && l, [collapsed, l]);
  return {
    collapsed,
    collapseTransitionStart,
    expandTransitionStart,
  };
};

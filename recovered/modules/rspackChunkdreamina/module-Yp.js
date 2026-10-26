import r from "z8";
import o from "bT";
import { QO } from "./module-tMn.js";
export var A = o.forwardRef((e, t) => {
  let n = o.useContext(QO);
  let [l, setL] = o.useState([]);
  function addInstance(e) {
    setL((t) => [...t, e]);
  }
  function removeInstance(e) {
    setL((t) => t.filter((t) => e !== t));
  }
  function getContextConfig() {
    return n;
  }
  o.useImperativeHandle(t, () => ({
    addInstance,
    removeInstance,
    getContextConfig,
  }));
  return r.jsx(r.Fragment, {
    children: o.Children.map(l, (e, key) =>
      o.cloneElement(e, {
        key,
      }),
    ),
  });
});

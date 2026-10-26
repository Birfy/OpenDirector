import i from "z8";
import n from "bT";
export var T = (e) => {
  var { text } = e;
  var rRef = n.useRef(null);
  var [isTextOverflow, setIsTextOverflow] = n.useState(false);
  n.useEffect(() => {
    var rRef_current = rRef.current;
    if (rRef_current) {
      var t = () => {
        setIsTextOverflow(rRef_current.scrollWidth > rRef_current.offsetWidth);
      };
      t();
      rRef_current.addEventListener("resize", t);
      return () => {
        rRef_current.removeEventListener("resize", t);
      };
    }
  }, [text]);
  return {
    isTextOverflow,
    textComp: i.jsx("div", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ref: rRef,
      children: text,
    }),
  };
};

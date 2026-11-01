import i from "M8X";
import n from "ij";
export var c = (e, t) => i.cQ(e, n.l).getContextViewById(t);
export var Y = (e, id) => {
  var r = i.cQ(e, n.l);
  var a = document.createElement("div");
  a.id = "#modal_context_".concat(id);
  return r.createContextView(
    {
      id,
      component: null,
    },
    a,
  );
};

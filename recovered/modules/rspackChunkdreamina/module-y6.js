import n from "Ut";
export var b = (e) => {
  var t;
  var i;
  if (e) {
    return {
      id: (t = e.audioResourceId) != null ? t : "",
      itemPlatform:
        (i = e.audioItemPlatform) != null ? i : n.CommonItemPlatform.Loki,
    };
  }
};

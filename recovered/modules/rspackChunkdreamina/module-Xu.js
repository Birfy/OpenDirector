import i from "Ut";
export var r = (e) => {
  var { id, itemPlatform } = e;
  var a = new i.DAIdInfo();
  a.id = id;
  a.itemPlatform = itemPlatform;
  return a;
};

import i from "Ut";
export var PZ = (e) => {
  var t = new i.ImageInputResource();
  var r = new i.ResourceContent();
  var a = new i.TextContent();
  t.resource_type = i.ResourceType.TEXT;
  t.purpose = e.resourcePurpose;
  a.text_content = e.text;
  r.text = a;
  t.content = r;
  return t;
};
export var lM = (e) => {
  var t = new i.ImageInputResource();
  var r = new i.ResourceContent();
  var a = new i.ImageContent();
  var n = new i.DAImageResource();
  t.resource_type = i.ResourceType.IMAGE;
  t.purpose = e.resourcePurpose;
  n.uri = e.imageResource.uri;
  if (e.imageResource.sourceFrom) {
    n.sourceFrom = e.imageResource.sourceFrom;
  }
  if (e.imageResource.platformType) {
    n.platformType = e.imageResource.platformType;
  }
  if (e.imageResource.name) {
    n.name = e.imageResource.name;
  }
  if (e.imageResource.everPhoto) {
    n.everPhoto = e.imageResource.everPhoto;
  }
  if (e.imageResource.aigcImage) {
    n.aigcImage = e.imageResource.aigcImage;
  }
  if (e.imageResource.width) {
    n.width = e.imageResource.width;
  }
  if (e.imageResource.height) {
    n.height = e.imageResource.height;
  }
  if (e.imageResource.format) {
    n.format = e.imageResource.format;
  }
  if (e.imageResource.algoExtra) {
    n.algoExtra = e.imageResource.algoExtra;
  }
  a.image_content = n;
  r.image = a;
  t.content = r;
  return t;
};
export var Dd = (e) => {
  var t = new i.ImageInputResource();
  var r = new i.ResourceContent();
  var a = new i.ReferenceContent();
  a.history_id = e.historyId;
  a.item_id = e.itemId;
  r.ref = a;
  t.content = r;
  t.resource_type = i.ResourceType.REFERENCE;
  t.purpose = e.resourcePurpose;
  return t;
};

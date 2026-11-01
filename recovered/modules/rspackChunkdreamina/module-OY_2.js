import n from "Ut";
export var i = (e) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => {
      var t = new n.DAIdIpMeta();
      t.metaType = ((e) => {
        switch (e) {
          case "text":
          default:
            return n.DAIdIpMetaType.Text;
          case "idip_frame":
            return n.DAIdIpMetaType.IdIpFrame;
        }
      })(e.metaType);
      t.text = e.text || "";
      t.frameInfo = ((e) => {
        if (e) {
          var t = new n.DAIdIpFrame();
          t.imageIdx = e.imageIdx;
          return t;
        }
      })(e.frameInfo);
      return t;
    });
  }
  return [];
};
export var J = (e) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => ({
      metaType: ((e) => {
        switch (e) {
          case n.DAIdIpMetaType.Text:
            return "text";
          case n.DAIdIpMetaType.IdIpFrame:
            return "idip_frame";
          default:
            return "text";
        }
      })(e.metaType),
      text: e.text,
      frameInfo: ((e) => {
        if (e) {
          return {
            imageIdx: e.imageIdx || 0,
          };
        }
      })(e.frameInfo),
    }));
  }
};

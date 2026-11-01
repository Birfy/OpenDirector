export function j(e, t) {
  e.forEach((e) => {
    if (e.type === "image" || e.type === "video" || e.type === "audio") {
      var i;
      var r;
      var o;
      var n;
      var a = (i = e.remoteExtraInfo) == null ? undefined : i.aigcItemId;
      if (a) {
        if (e.type === "image") {
          if ((o = t.reportAddImage) != null) {
            o.call(t, {
              imageId: a,
            });
          }
          return;
        }
        if (e.type === "video") {
          if ((n = t.reportAddVideo) != null) {
            n.call(t, {
              videoId: a,
            });
          }
          return;
        }
        if ((r = t.reportAddAudio) != null) {
          r.call(t, {
            audioId: a,
          });
        }
      }
    }
  });
}

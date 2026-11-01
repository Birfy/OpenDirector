import i from "NY";
import n from "M8X";
import a from "hag";
export var J = (e) =>
  i._(function* () {
    let t;
    const r = n.cQ(e, a.F);
    yield (t = r.requireLogin) == null
      ? undefined
      : t.call(r, {
          source: "capcut_pc_embed",
          closable: true,
          showLoginDialog: true,
        });
  })();

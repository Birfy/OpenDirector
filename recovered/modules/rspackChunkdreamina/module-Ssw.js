import a from "Hr";
import r from "Qey";
export function v(t, e) {
  return (
    (t == null || !t.ok) &&
    (t == null ? undefined : t.code) === 1019 &&
    (!((t, e) => {
      const { silent = false, customMessage } = e || {};
      if (!silent) {
        if (t === 1019) {
          a.l.error(
            customMessage ||
              r.Ay.t(
                "web_new_dreamina_web_user_violate_operation",
                {},
                "您涉及违规操作，暂时无法使用该功能",
              ),
          );
        }
      }
    })(t == null ? undefined : t.code, {
      silent: e == null ? undefined : e.silent,
      customMessage: e == null ? undefined : e.customMessage,
    }),
    true)
  );
}

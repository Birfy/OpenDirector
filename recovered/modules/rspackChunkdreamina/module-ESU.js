import r from "NY";
import a from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import c from "qO";
import { I } from "./module-QBg.js";
import * as d from "./module-ET_3.js";
var m = s.forwardRef(function (e, n) {
  const { pluginKey, suggestionProps, onInsertOption, onChange } = e;
  const g = i._(e, [
    "pluginKey",
    "suggestionProps",
    "onInsertOption",
    "onChange",
  ]);
  const { editor, range } = suggestionProps;
  const { promptEditorRef } = s.useContext(c.b);
  const y = I(e, n);
  const xRef = s.useRef(null);
  const onVisibleChange = s.useCallback(
    (e) => {
      var n;
      var t;
      if ((n = y.onVisibleChange) != null) {
        n.call(y, e);
      }
      if (e) {
        xRef.current = Promise.withResolvers();
        return;
      }
      if ((t = xRef.current) != null) {
        t.resolve();
      }
      xRef.current = null;
    },
    [y],
  );
  const onChange_1 = s.useCallback(
    (e, n, t) =>
      r._(function* () {
        if (onChange != null) {
          onChange(e, n, t);
        }
        if (onInsertOption) {
          yield (a = xRef.current) == null ? undefined : a.promise;
          let r;
          var a;
          const editor_1 =
            (r =
              promptEditorRef == null ? undefined : promptEditorRef.current) !=
            null
              ? r
              : editor;
          if (!editor_1.isDestroyed) {
            onInsertOption({
              editor: editor_1,
              selection: [e, n, t],
              range,
            });
          }
        }
      })(),
    [onInsertOption, onChange, promptEditorRef, range, editor],
  );
  return l.jsx(
    d.o,
    o._(a._({}, g, y), {
      onChange: onChange_1,
      onVisibleChange,
    }),
  );
});
export { m as a };

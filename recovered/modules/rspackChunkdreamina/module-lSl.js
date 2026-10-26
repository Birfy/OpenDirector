import a from "bT";
import r from "eVT";
import o from "rAb";
import i from "n3";
export var b = (e) => {
  var { onDrop, onPaste } = e;
  var s = r.L({
    source: i.HH.Upload,
  });
  return {
    onDrop: a.useCallback(
      (e) => {
        if (o.f(e.dataTransfer) && s()) {
          e.preventDefault();
        } else if (onDrop != null) {
          onDrop(e);
        }
      },
      [onDrop, s],
    ),
    onPaste: a.useCallback(
      (e) => {
        if (o.f(e.clipboardData) && s()) {
          e.preventDefault();
        } else if (onPaste != null) {
          onPaste(e);
        }
      },
      [onPaste, s],
    ),
  };
};

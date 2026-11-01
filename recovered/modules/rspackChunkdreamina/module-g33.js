import _r from "fyk";
import a from "bT";
export var q = function (e, t) {
  const n = a.useContext(t);
  const n_disabled = n.disabled;
  const n_shape = n.shape;
  const n_layout = n.layout;
  const n_icons = n.icons;
  const n_value = n.value;
  const n_onChange = n.onChange;
  if (n.isGroup) {
    return _r(
      {
        disabled: n_disabled,
        shape: n_shape,
        layout: n_layout,
        icons: n_icons,
      },
      e,
      {
        checked: n_value.indexOf(e.value) > -1,
        onChange: function (t, n, r) {
          n_onChange(t, n, r);
          if (e.onChange) {
            e.onChange(t, n, r);
          }
        },
      },
    );
  }
  return e;
};

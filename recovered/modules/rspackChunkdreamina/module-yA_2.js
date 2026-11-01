import n from "g";
import i from "FW";
if (i) {
  n(
    {
      target: "ArrayBuffer",
      proto: true,
    },
    {
      transferToFixedLength: function () {
        return i(this, arguments.length ? arguments[0] : undefined, false);
      },
    },
  );
}

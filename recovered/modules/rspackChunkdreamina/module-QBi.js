export let C =
  require.j == "wl4"
    ? {
        name: "resource-meta",
        key: "key",
        index: [
          {
            name: "updateTime",
            unique: false,
          },
        ],
      }
    : null;
export let I =
  require.j == "wl4"
    ? {
        name: "resource",
        key: "uniqueIdWithDecryptHash",
        index: [
          {
            name: "updateTime",
            unique: false,
          },
        ],
      }
    : null;

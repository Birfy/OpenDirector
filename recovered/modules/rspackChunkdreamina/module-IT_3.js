export let S =
  require.j == "wl4"
    ? {
        name: "resource-request",
        key: "id",
        index: [
          {
            name: "createTime",
            unique: false,
          },
          {
            name: "updateTime",
            unique: false,
          },
        ],
      }
    : null;

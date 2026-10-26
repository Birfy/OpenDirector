export default !require("./module-X_4.js")(function () {
  return (
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1] !== 7
  );
});

export default !require("./module-X.js")(function () {
  return (
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1] !== 7
  );
});

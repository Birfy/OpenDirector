export default !require("./module-VV_4.js")(function () {
  return (
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1] !== 7
  );
});

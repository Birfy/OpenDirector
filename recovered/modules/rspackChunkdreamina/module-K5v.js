function r(e) {
  const { largeImageInfo, rawImageSize, scale } = e;
  return ((e, t) => {
    const { width, height } = e;
    const { width: width_1, height: height_1 } = t;
    let o = 0;
    let s = 0;
    if (width > height) {
      o = Math.min(width_1, width);
      s = Math.floor((height / width) * o);
    } else {
      s = Math.min(height_1, height);
      o = Math.floor((width / height) * s);
    }
    return {
      width: o,
      height: s,
    };
  })(
    (function (e, t) {
      const i =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      const r = t.width / t.height;
      const a = e.width / e.height;
      if (r < a) {
        const n = Math.floor(t.height / i);
        return {
          width: Math.floor(a * n),
          height: n,
        };
      }
      const o = Math.floor(t.width / i);
      return {
        width: o,
        height: Math.floor(o / a),
      };
    })(largeImageInfo, rawImageSize, scale),
    {
      width: 1920,
      height: 1920,
    },
  );
}
export { r };

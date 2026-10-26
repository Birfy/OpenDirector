export var T = (e) => {
  if (e) {
    var t = Object.keys(e)
      .filter((e) => isFinite(Number(e)) && !e.includes("smart_crop"))
      .sort((e, t) => Number(e) - Number(t));
    return e[t[0]];
  }
};

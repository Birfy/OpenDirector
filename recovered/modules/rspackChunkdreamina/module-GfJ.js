export var a = (e) => {
  if (e && typeof e === "object") {
    return JSON.stringify(e);
  }
};

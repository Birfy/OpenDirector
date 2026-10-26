export var i = (e, t) => {
  var r = e;
  var i = new Date(t);
  if (r === undefined || r === "") {
    r = "yyyy-MM-dd hh:mm:ss";
  }
  var n = {
    "M+": i.getMonth() + 1,
    "d+": i.getDate(),
    "h+": i.getHours(),
    "m+": i.getMinutes(),
    "s+": i.getSeconds(),
    "q+": Math.floor((i.getMonth() + 3) / 3),
    "S{3}": i.getMilliseconds(),
    "S{2}": Math.round(i.getMilliseconds() / 10),
    S: Math.round(i.getMilliseconds() / 100),
  };
  if (/(y+)/.test(r)) {
    r = r.replace(
      RegExp.$1,
      "".concat(i.getFullYear()).substr(4 - RegExp.$1.length),
    );
  }
  for (var a of Object.keys(n)) {
    if (new RegExp("(".concat(a, ")")).test(r)) {
      r = r.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? n[a]
          : "00".concat(n[a]).substr("".concat(n[a]).length),
      );
    }
  }
  return r;
};

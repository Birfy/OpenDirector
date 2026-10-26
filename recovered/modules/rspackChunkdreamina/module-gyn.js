export function P(e) {
  return new Promise((resolve, reject) => {
    var i = new XMLHttpRequest();
    i.onreadystatechange = function () {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200) {
          const e = i.getResponseHeader("Content-Type");
          resolve(e != null ? e : "");
        } else {
          reject(Error("Failed to get image file type"));
        }
      }
    };
    i.open("GET", e);
    i.send();
  });
}

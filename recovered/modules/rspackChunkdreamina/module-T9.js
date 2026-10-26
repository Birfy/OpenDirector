export var w = (e) => {
  var { request } = e;
  return new Promise((resolve) => {
    resolve({
      lang: "",
      i18nData: {},
    });
  });
};

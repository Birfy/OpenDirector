import i from "JSz";
export var b = function (amount) {
  const historyType =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  const tradeSource =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  const submitId =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : i.bz();
  return {
    amount,
    createTime: Date.now() / 1000,
    title: "MOCK_DATA",
    historyType,
    submitId,
    extraContent: "MOCK_DATA",
    tradeSource,
  };
};

export var N = (e) => {
  if (!e.ok) {
    var { errorInfo } = e;
    if (errorInfo && typeof errorInfo === "object") {
      if ("logid" in errorInfo && typeof errorInfo.logid === "string") {
        return errorInfo.logid;
      }
      if ("log_id" in errorInfo && typeof errorInfo.log_id === "string") {
        return errorInfo.log_id;
      }
    }
  }
};

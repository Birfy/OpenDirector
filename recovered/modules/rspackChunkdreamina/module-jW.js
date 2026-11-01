export function c(e) {
  const t = !((e) => {
    if (!e || typeof e !== "object" || !("ret" in e) || !("errmsg" in e)) {
      return false;
    }
    const t = "log_id" in e ? e.log_id : undefined;
    const r = "logid" in e ? e.logid : undefined;
    return (
      typeof e.ret === "string" &&
      typeof e.errmsg === "string" &&
      (t === undefined || typeof t === "string") &&
      (r === undefined || typeof r === "string")
    );
  })(e.errorInfo)
    ? undefined
    : e.errorInfo;
  return {
    code: e.code,
    errMsg: e.msg,
    backendRet: t == null ? undefined : t.ret,
    backendErrmsg: t == null ? undefined : t.errmsg,
    logId:
      (t == null ? undefined : t.log_id) ||
      (t == null ? undefined : t.logid) ||
      ((e) => {
        if (e && typeof e === "object" && "log_id" in e) {
          const t = e.log_id;
          if (typeof t === "string") {
            return t;
          }
          return undefined;
        }
      })(e.cause),
  };
}

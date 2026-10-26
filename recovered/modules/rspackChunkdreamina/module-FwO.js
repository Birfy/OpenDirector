import r from "NY";
export function j(e, t) {
  return r._(function* () {
    if (t.signal.aborted) {
      return {
        status: "cancelled",
      };
    }
    if (e.hasLogin) {
      return {
        status: "authenticated",
      };
    }
    if (!e.requestLoginAttempt) {
      return {
        status: "failed",
        error: Error("当前账号服务不支持等待登录结果"),
      };
    }
    let i;
    const r = () => {
      if (i == null) {
        return undefined;
      }
      return i.dispose();
    };
    t.signal.addEventListener("abort", r, {
      once: true,
    });
    try {
      i = e.requestLoginAttempt({
        source: t.source,
      });
      if (t.signal.aborted) {
        i.dispose();
        return {
          status: "cancelled",
        };
      }
      const n = yield i.result;
      if (t.signal.aborted || (n.status === "authenticated" && !e.hasLogin)) {
        return {
          status: "cancelled",
        };
      }
      return n;
    } catch (error) {
      if (t.signal.aborted) {
        return {
          status: "cancelled",
        };
      }
      return {
        status: "failed",
        error,
      };
    } finally {
      t.signal.removeEventListener("abort", r);
      if (i != null) {
        i.dispose();
      }
    }
  })();
}

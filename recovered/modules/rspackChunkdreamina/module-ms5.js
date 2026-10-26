import i from "NY";
import a from "oa";
import n from "bk";
export function p(e) {
  const t = new Date(e);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    key: ""
      .concat(timeZone, ":")
      .concat(t.getFullYear(), "-")
      .concat(t.getMonth(), "-")
      .concat(t.getDate()),
    timeZone,
    nextCheckAt: new Date(
      t.getFullYear(),
      t.getMonth(),
      t.getDate() + 1,
    ).getTime(),
  };
}
const SYMBOL_DREAMINA_DAILY_CREDIT_COORDINATION_V1 = Symbol.for(
  "dreamina.daily-credit.coordination.v1",
);
export class N {
  receive(e) {
    return i
      ._(function* () {
        let t;
        const r = "dreamina.daily-credit.v1:"
          .concat(e.region, ":")
          .concat(encodeURIComponent(e.identity));
        const s = () =>
          i
            ._(function* () {
              if (e.signal.aborted) {
                return {
                  status: "skipped",
                  reason: "not_needed",
                };
              }
              let t;
              let i;
              let s;
              let c = p(e.now());
              const u = this.read(r, e.now());
              const _ = {
                nextCheckAt: c.nextCheckAt,
              };
              if ((u == null ? undefined : u.day) === c.key) {
                if (u.state === "completed") {
                  return a._(
                    {
                      status: "success",
                      value: {
                        kind: "already_received",
                      },
                    },
                    _,
                  );
                }
                if (
                  u.state !== "cooldown" ||
                  e.now() < ((t = u.retryAt) != null ? t : 0)
                ) {
                  return a._(
                    {
                      status: "skipped",
                      reason: "cooldown",
                      retryAt: u.retryAt,
                    },
                    _,
                  );
                }
              }
              let d = false;
              const l = () => {
                d = true;
                c = p(e.now());
                this.write(r, {
                  day: c.key,
                  state: "pending",
                  expiresAt: c.nextCheckAt,
                });
              };
              try {
                i = yield e.execute(l);
              } catch (cause) {
                i = a._(
                  {
                    status: "error",
                    effect: d ? "unknown" : "not_applied",
                    error: {
                      code: "operation_failed",
                      message: "Daily credits could not be confirmed",
                      retryable: !d,
                      cause,
                    },
                    retryAt: e.now() + 60000,
                  },
                  _,
                );
              }
              if (i.status === "success") {
                this.write(r, {
                  day: c.key,
                  state: "completed",
                  expiresAt: c.nextCheckAt,
                });
              } else if (i.status === "error") {
                this.write(r, {
                  day: c.key,
                  state: i.effect === "unknown" ? "unknown" : "cooldown",
                  expiresAt: c.nextCheckAt,
                  retryAt: (s = i.retryAt) != null ? s : e.now() + 60000,
                });
              } else if (d) {
                this.write(r, {
                  day: c.key,
                  state: "unknown",
                  expiresAt: c.nextCheckAt,
                });
              }
              return n._(a._({}, i), {
                nextCheckAt: c.nextCheckAt,
              });
            })
            .call(this);
        if (this.environment.locks) {
          try {
            return yield this.environment.locks.request(
              r,
              {
                signal: e.signal,
              },
              s,
            );
          } catch (error) {
            if (e.signal.aborted) {
              return {
                status: "skipped",
                reason: "not_needed",
              };
            }
            if (
              !(error instanceof DOMException && error.name === "SecurityError")
            ) {
              return {
                status: "error",
                effect: "not_applied",
                error: {
                  code: "operation_failed",
                  message: "Daily credit coordination is unavailable",
                  retryable: true,
                  cause: error,
                },
                retryAt: e.now() + 60000,
              };
            }
          }
        }
        const tails = this.environment.registry.tails;
        const u = ((t = tails.get(r)) != null ? t : Promise.resolve()).then(
          s,
          s,
        );
        tails.set(r, u);
        try {
          return yield u;
        } finally {
          if (tails.get(r) === u) {
            tails.delete(r);
          }
        }
      })
      .call(this);
  }
  read(e, t) {
    const records = this.environment.registry.records;
    for (const [i, a] of records) {
      if (a.expiresAt <= t) {
        records.delete(i);
      }
    }
    try {
      const n = JSON.parse(
        (o =
          (s = this.environment.storage) == null ? undefined : s.getItem(e)) !=
          null
          ? o
          : "null",
      );
      if (
        n &&
        typeof n === "object" &&
        "day" in n &&
        typeof n.day === "string" &&
        "state" in n &&
        ["pending", "completed", "unknown", "cooldown"].includes(
          String(n.state),
        ) &&
        "expiresAt" in n &&
        typeof n.expiresAt === "number" &&
        Number.isFinite(n.expiresAt) &&
        n.expiresAt > t &&
        (!("retryAt" in n) ||
          (typeof n.retryAt === "number" && Number.isFinite(n.retryAt)))
      ) {
        var o;
        var s;
        let c;
        const u = records.get(e);
        if (
          (u == null ? undefined : u.day) === n.day &&
          (u.state === "completed" ||
            (u.state !== "cooldown" && n.state === "cooldown") ||
            (u.state === "cooldown" &&
              n.state === "cooldown" &&
              ((c = u.retryAt) != null ? c : 0) >
                ("retryAt" in n ? n.retryAt : 0)))
        ) {
          return u;
        }
        return n;
      }
    } catch (e) {}
    return records.get(e);
  }
  write(e, t) {
    let r;
    const records = this.environment.registry.records;
    for (records.set(e, t); records.size > 64;) {
      records.delete(records.keys().next().value);
    }
    try {
      if ((r = this.environment.storage) != null) {
        r.setItem(e, JSON.stringify(t));
      }
    } catch (e) {}
  }
  constructor(e = {}) {
    var t;
    var r;
    var i = globalThis;
    this.environment = n._(a._({}, e), {
      registry:
        (t = e.registry) != null
          ? t
          : (r = i[SYMBOL_DREAMINA_DAILY_CREDIT_COORDINATION_V1]) != null
            ? r
            : (i[SYMBOL_DREAMINA_DAILY_CREDIT_COORDINATION_V1] = {
                tails: new Map(),
                records: new Map(),
              }),
    });
  }
}

import { xL } from "./module-gi5.js";
import {
  EV,
  LW,
  Mg,
  Nh,
  O4,
  Ql,
  Sc,
  Sq,
  _r,
  a5,
  bZ,
  gH,
  gd,
  ig,
  ki,
  lg,
  oQ,
  tC,
  vo,
  zR,
} from "./module-Eiz.js";
import { EQ, v$ } from "./module-lGp.js";
function i(status) {
  return (
    status === "completed" || status === "failed" || status === "cancelled"
  );
}
export class Zs {
  constructor(e) {
    this._options = e;
    this._requestMessageId = 0;
    this._requestHandlers = new Map();
    this._requestHandlerAbortControllers = new Map();
    this._notificationHandlers = new Map();
    this._responseHandlers = new Map();
    this._progressHandlers = new Map();
    this._timeoutInfo = new Map();
    this._pendingDebouncedNotifications = new Set();
    this._taskProgressTokens = new Map();
    this._requestResolvers = new Map();
    this.setNotificationHandler(Sq, (e) => {
      this._oncancel(e);
    });
    this.setNotificationHandler(_r, (e) => {
      this._onprogress(e);
    });
    this.setRequestHandler(tC, (e) => ({}));
    this._taskStore = e?.taskStore;
    this._taskMessageQueue = e?.taskMessageQueue;
    if (this._taskStore) {
      this.setRequestHandler(Ql, async (e, t) => {
        let r = await this._taskStore.getTask(e.params.taskId, t.sessionId);
        if (!r) {
          throw new Nh(
            O4.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        }
        return {
          ...r,
        };
      });
      this.setRequestHandler(oQ, async (e, t) => {
        let r = async () => {
          let taskId = e.params.taskId;
          if (this._taskMessageQueue) {
            let e;
            while (
              (e = await this._taskMessageQueue.dequeue(taskId, t.sessionId))
            ) {
              if (e.type === "response" || e.type === "error") {
                let t = e.message;
                let r = t.id;
                let a = this._requestResolvers.get(r);
                if (a) {
                  this._requestResolvers.delete(r);
                  a(
                    e.type === "response"
                      ? t
                      : new Nh(t.error.code, t.error.message, t.error.data),
                  );
                } else {
                  let t = e.type === "response" ? "Response" : "Error";
                  this._onerror(Error(`${t} handler missing for request ${r}`));
                }
                continue;
              }
              await this._transport?.send(e.message, {
                relatedRequestId: t.requestId,
              });
            }
          }
          let o = await this._taskStore.getTask(taskId, t.sessionId);
          if (!o) {
            throw new Nh(O4.InvalidParams, `Task not found: ${taskId}`);
          }
          if (!i(o.status)) {
            await this._waitForTaskUpdate(taskId, t.signal);
            return await r();
          }
          if (i(o.status)) {
            let e = await this._taskStore.getTaskResult(taskId, t.sessionId);
            this._clearTaskQueue(taskId);
            return {
              ...e,
              _meta: {
                ...e._meta,
                [EV]: {
                  taskId,
                },
              },
            };
          }
          return await r();
        };
        return await r();
      });
      this.setRequestHandler(zR, async (e, t) => {
        try {
          let { tasks, nextCursor } = await this._taskStore.listTasks(
            e.params?.cursor,
            t.sessionId,
          );
          return {
            tasks,
            nextCursor,
            _meta: {},
          };
        } catch (error) {
          throw new Nh(
            O4.InvalidParams,
            `Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      });
      this.setRequestHandler(gd, async (e, t) => {
        try {
          let r = await this._taskStore.getTask(e.params.taskId, t.sessionId);
          if (!r) {
            throw new Nh(
              O4.InvalidParams,
              `Task not found: ${e.params.taskId}`,
            );
          }
          if (i(r.status)) {
            throw new Nh(
              O4.InvalidParams,
              `Cannot cancel task in terminal status: ${r.status}`,
            );
          }
          await this._taskStore.updateTaskStatus(
            e.params.taskId,
            "cancelled",
            "Client cancelled task execution.",
            t.sessionId,
          );
          this._clearTaskQueue(e.params.taskId);
          let a = await this._taskStore.getTask(e.params.taskId, t.sessionId);
          if (!a) {
            throw new Nh(
              O4.InvalidParams,
              `Task not found after cancellation: ${e.params.taskId}`,
            );
          }
          return {
            _meta: {},
            ...a,
          };
        } catch (error) {
          if (error instanceof Nh) {
            throw error;
          }
          throw new Nh(
            O4.InvalidRequest,
            `Failed to cancel task: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      });
    }
  }
  async _oncancel(e) {
    if (!e.params.requestId) {
      return;
    }
    let t = this._requestHandlerAbortControllers.get(e.params.requestId);
    t?.abort(e.params.reason);
  }
  _setupTimeout(
    e,
    t,
    maxTotalTimeout,
    onTimeout,
    resetTimeoutOnProgress = false,
  ) {
    this._timeoutInfo.set(e, {
      timeoutId: setTimeout(onTimeout, t),
      startTime: Date.now(),
      timeout: t,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout,
    });
  }
  _resetTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (!t) {
      return false;
    }
    let totalElapsed = Date.now() - t.startTime;
    if (t.maxTotalTimeout && totalElapsed >= t.maxTotalTimeout) {
      this._timeoutInfo.delete(e);
      throw Nh.fromError(O4.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: t.maxTotalTimeout,
        totalElapsed,
      });
    }
    clearTimeout(t.timeoutId);
    t.timeoutId = setTimeout(t.onTimeout, t.timeout);
    return true;
  }
  _cleanupTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (t) {
      clearTimeout(t.timeoutId);
      this._timeoutInfo.delete(e);
    }
  }
  async connect(e) {
    if (this._transport) {
      throw Error(
        "Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.",
      );
    }
    this._transport = e;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      t?.();
      this._onclose();
    };
    let r = this.transport?.onerror;
    this._transport.onerror = (e) => {
      r?.(e);
      this._onerror(e);
    };
    let a = this._transport?.onmessage;
    this._transport.onmessage = (e, t) => {
      a?.(e, t);
      if (ig(e) || LW(e)) {
        this._onresponse(e);
      } else if (vo(e)) {
        this._onrequest(e, t);
      } else if (lg(e)) {
        this._onnotification(e);
      } else {
        this._onerror(Error(`Unknown message type: ${JSON.stringify(e)}`));
      }
    };
    await this._transport.start();
  }
  _onclose() {
    let _responseHandlers = this._responseHandlers;
    for (let e of ((this._responseHandlers = new Map()),
    this._progressHandlers.clear(),
    this._taskProgressTokens.clear(),
    this._pendingDebouncedNotifications.clear(),
    this._requestHandlerAbortControllers.values())) {
      e.abort();
    }
    this._requestHandlerAbortControllers.clear();
    let t = Nh.fromError(O4.ConnectionClosed, "Connection closed");
    for (let r of ((this._transport = undefined),
    this.onclose?.(),
    _responseHandlers.values())) {
      r(t);
    }
  }
  _onerror(e) {
    this.onerror?.(e);
  }
  _onnotification(e) {
    let t =
      this._notificationHandlers.get(e.method) ??
      this.fallbackNotificationHandler;
    if (t !== undefined) {
      Promise.resolve()
        .then(() => t(e))
        .catch((e) =>
          this._onerror(Error(`Uncaught error in notification handler: ${e}`)),
        );
    }
  }
  _onrequest(e, t) {
    let r = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler;
    let _transport = this._transport;
    let i = e.params?._meta?.[EV]?.taskId;
    if (r === undefined) {
      let t = {
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: O4.MethodNotFound,
          message: "Method not found",
        },
      };
      if (i && this._taskMessageQueue) {
        this._enqueueTaskMessage(
          i,
          {
            type: "error",
            message: t,
            timestamp: Date.now(),
          },
          _transport?.sessionId,
        ).catch((e) =>
          this._onerror(Error(`Failed to enqueue error response: ${e}`)),
        );
      } else {
        _transport
          ?.send(t)
          .catch((e) =>
            this._onerror(Error(`Failed to send an error response: ${e}`)),
          );
      }
      return;
    }
    let o = new AbortController();
    this._requestHandlerAbortControllers.set(e.id, o);
    let n = bZ(e.params) ? e.params.task : undefined;
    let taskStore = this._taskStore
      ? this.requestTaskStore(e, _transport?.sessionId)
      : undefined;
    let d = {
      signal: o.signal,
      sessionId: _transport?.sessionId,
      _meta: e.params?._meta,
      sendNotification: async (t) => {
        if (o.signal.aborted) {
          return;
        }
        let r = {
          relatedRequestId: e.id,
        };
        if (i) {
          r.relatedTask = {
            taskId: i,
          };
        }
        await this.notification(t, r);
      },
      sendRequest: async (t, r, a) => {
        if (o.signal.aborted) {
          throw new Nh(O4.ConnectionClosed, "Request was cancelled");
        }
        let n = {
          ...a,
          relatedRequestId: e.id,
        };
        if (i && !n.relatedTask) {
          n.relatedTask = {
            taskId: i,
          };
        }
        let d = n.relatedTask?.taskId ?? i;
        if (d && taskStore) {
          await taskStore.updateTaskStatus(d, "input_required");
        }
        return await this.request(t, r, n);
      },
      authInfo: t?.authInfo,
      requestId: e.id,
      requestInfo: t?.requestInfo,
      taskId: i,
      taskStore,
      taskRequestedTtl: n?.ttl,
      closeSSEStream: t?.closeSSEStream,
      closeStandaloneSSEStream: t?.closeStandaloneSSEStream,
    };
    Promise.resolve()
      .then(() => {
        if (n) {
          this.assertTaskHandlerCapability(e.method);
        }
      })
      .then(() => r(e, d))
      .then(
        async (t) => {
          if (o.signal.aborted) {
            return;
          }
          let r = {
            result: t,
            jsonrpc: "2.0",
            id: e.id,
          };
          if (i && this._taskMessageQueue) {
            await this._enqueueTaskMessage(
              i,
              {
                type: "response",
                message: r,
                timestamp: Date.now(),
              },
              _transport?.sessionId,
            );
          } else {
            await _transport?.send(r);
          }
        },
        async (t) => {
          if (o.signal.aborted) {
            return;
          }
          let r = {
            jsonrpc: "2.0",
            id: e.id,
            error: {
              code: Number.isSafeInteger(t.code) ? t.code : O4.InternalError,
              message: t.message ?? "Internal error",
              ...(t.data !== undefined && {
                data: t.data,
              }),
            },
          };
          if (i && this._taskMessageQueue) {
            await this._enqueueTaskMessage(
              i,
              {
                type: "error",
                message: r,
                timestamp: Date.now(),
              },
              _transport?.sessionId,
            );
          } else {
            await _transport?.send(r);
          }
        },
      )
      .catch((e) => this._onerror(Error(`Failed to send response: ${e}`)))
      .finally(() => {
        this._requestHandlerAbortControllers.delete(e.id);
      });
  }
  _onprogress(e) {
    let { progressToken, ...rest } = e.params;
    let a = Number(progressToken);
    let s = this._progressHandlers.get(a);
    if (!s) {
      return void this._onerror(
        Error(
          `Received a progress notification for an unknown token: ${JSON.stringify(e)}`,
        ),
      );
    }
    let i = this._responseHandlers.get(a);
    let o = this._timeoutInfo.get(a);
    if (o && i && o.resetTimeoutOnProgress) {
      try {
        this._resetTimeout(a);
      } catch (error) {
        this._responseHandlers.delete(a);
        this._progressHandlers.delete(a);
        this._cleanupTimeout(a);
        i(error);
        return;
      }
    }
    s(rest);
  }
  _onresponse(e) {
    let t = Number(e.id);
    let r = this._requestResolvers.get(t);
    if (r) {
      this._requestResolvers.delete(t);
      r(ig(e) ? e : new Nh(e.error.code, e.error.message, e.error.data));
      return;
    }
    let a = this._responseHandlers.get(t);
    if (a === undefined) {
      return void this._onerror(
        Error(
          `Received a response for an unknown message ID: ${JSON.stringify(e)}`,
        ),
      );
    }
    this._responseHandlers.delete(t);
    this._cleanupTimeout(t);
    let i = false;
    if (ig(e) && e.result && typeof e.result === "object") {
      let r = e.result;
      if (r.task && typeof r.task === "object") {
        let e = r.task;
        if (typeof e.taskId === "string") {
          i = true;
          this._taskProgressTokens.set(e.taskId, t);
        }
      }
    }
    if (!i) {
      this._progressHandlers.delete(t);
    }
    a(ig(e) ? e : Nh.fromError(e.error.code, e.error.message, e.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(e, t, r) {
    let a;
    let { task } = r ?? {};
    if (!task) {
      try {
        let a = await this.request(e, t, r);
        yield {
          type: "result",
          result: a,
        };
      } catch (error) {
        yield {
          type: "error",
          error:
            error instanceof Nh
              ? error
              : new Nh(O4.InternalError, String(error)),
        };
      }
      return;
    }
    try {
      let o = await this.request(e, Mg, r);
      if (o.task) {
        a = o.task.taskId;
        yield {
          type: "taskCreated",
          task: o.task,
        };
      } else {
        throw new Nh(O4.InternalError, "Task creation did not return a task");
      }
      while (true) {
        let task_1 = await this.getTask(
          {
            taskId: a,
          },
          r,
        );
        yield {
          type: "taskStatus",
          task: task_1,
        };
        if (i(task_1.status)) {
          if (task_1.status === "completed") {
            let e = await this.getTaskResult(
              {
                taskId: a,
              },
              t,
              r,
            );
            yield {
              type: "result",
              result: e,
            };
          } else {
            if (task_1.status === "failed") {
              yield {
                type: "error",
                error: new Nh(O4.InternalError, `Task ${a} failed`),
              };
            } else if (task_1.status === "cancelled") {
              yield {
                type: "error",
                error: new Nh(O4.InternalError, `Task ${a} was cancelled`),
              };
            }
          }
          return;
        }
        if (task_1.status === "input_required") {
          let e = await this.getTaskResult(
            {
              taskId: a,
            },
            t,
            r,
          );
          yield {
            type: "result",
            result: e,
          };
          return;
        }
        let o =
          task_1.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1000;
        await new Promise((resolve) => setTimeout(resolve, o));
        r?.signal?.throwIfAborted();
      }
    } catch (error) {
      yield {
        type: "error",
        error:
          error instanceof Nh ? error : new Nh(O4.InternalError, String(error)),
      };
    }
  }
  request(e, t, r) {
    let {
      relatedRequestId,
      resumptionToken,
      onresumptiontoken,
      task,
      relatedTask,
    } = r ?? {};
    return new Promise((resolve, reject) => {
      let f = (e) => {
        reject(e);
      };
      if (!this._transport) {
        return void f(Error("Not connected"));
      }
      if (this._options?.enforceStrictCapabilities === true) {
        try {
          this.assertCapabilityForMethod(e.method);
          if (task) {
            this.assertTaskCapability(e.method);
          }
        } catch (error) {
          f(error);
          return;
        }
      }
      r?.signal?.throwIfAborted();
      let p = this._requestMessageId++;
      let h = {
        ...e,
        jsonrpc: "2.0",
        id: p,
      };
      if (r?.onprogress) {
        this._progressHandlers.set(p, r.onprogress);
        h.params = {
          ...e.params,
          _meta: {
            ...(e.params?._meta || {}),
            progressToken: p,
          },
        };
      }
      if (task) {
        h.params = {
          ...h.params,
          task,
        };
      }
      if (relatedTask) {
        h.params = {
          ...h.params,
          _meta: {
            ...(h.params?._meta || {}),
            [EV]: relatedTask,
          },
        };
      }
      let m = (e) => {
        this._responseHandlers.delete(p);
        this._progressHandlers.delete(p);
        this._cleanupTimeout(p);
        this._transport
          ?.send(
            {
              jsonrpc: "2.0",
              method: "notifications/cancelled",
              params: {
                requestId: p,
                reason: String(e),
              },
            },
            {
              relatedRequestId,
              resumptionToken,
              onresumptiontoken,
            },
          )
          .catch((e) =>
            this._onerror(Error(`Failed to send cancellation: ${e}`)),
          );
        reject(e instanceof Nh ? e : new Nh(O4.RequestTimeout, String(e)));
      };
      this._responseHandlers.set(p, (e) => {
        if (!r?.signal?.aborted) {
          if (e instanceof Error) {
            return reject(e);
          }
          try {
            let r = xL(t, e.result);
            if (r.success) {
              resolve(r.data);
            } else {
              reject(r.error);
            }
          } catch (error) {
            reject(error);
          }
        }
      });
      r?.signal?.addEventListener("abort", () => {
        m(r?.signal?.reason);
      });
      let g = r?.timeout ?? 60000;
      this._setupTimeout(
        p,
        g,
        r?.maxTotalTimeout,
        () =>
          m(
            Nh.fromError(O4.RequestTimeout, "Request timed out", {
              timeout: g,
            }),
          ),
        r?.resetTimeoutOnProgress ?? false,
      );
      let y = relatedTask?.taskId;
      if (y) {
        let e = (e) => {
          let t = this._responseHandlers.get(p);
          if (t) {
            t(e);
          } else {
            this._onerror(
              Error(`Response handler missing for side-channeled request ${p}`),
            );
          }
        };
        this._requestResolvers.set(p, e);
        this._enqueueTaskMessage(y, {
          type: "request",
          message: h,
          timestamp: Date.now(),
        }).catch((e) => {
          this._cleanupTimeout(p);
          reject(e);
        });
      } else {
        this._transport
          .send(h, {
            relatedRequestId,
            resumptionToken,
            onresumptiontoken,
          })
          .catch((e) => {
            this._cleanupTimeout(p);
            reject(e);
          });
      }
    });
  }
  async getTask(e, t) {
    return this.request(
      {
        method: "tasks/get",
        params: e,
      },
      Sc,
      t,
    );
  }
  async getTaskResult(e, t, r) {
    return this.request(
      {
        method: "tasks/result",
        params: e,
      },
      t,
      r,
    );
  }
  async listTasks(e, t) {
    return this.request(
      {
        method: "tasks/list",
        params: e,
      },
      a5,
      t,
    );
  }
  async cancelTask(e, t) {
    return this.request(
      {
        method: "tasks/cancel",
        params: e,
      },
      gH,
      t,
    );
  }
  async notification(e, t) {
    if (!this._transport) {
      throw Error("Not connected");
    }
    this.assertNotificationCapability(e.method);
    let r = t?.relatedTask?.taskId;
    if (r) {
      let message = {
        ...e,
        jsonrpc: "2.0",
        params: {
          ...e.params,
          _meta: {
            ...(e.params?._meta || {}),
            [EV]: t.relatedTask,
          },
        },
      };
      await this._enqueueTaskMessage(r, {
        type: "notification",
        message,
        timestamp: Date.now(),
      });
      return;
    }
    if (
      (this._options?.debouncedNotificationMethods ?? []).includes(e.method) &&
      !e.params &&
      !t?.relatedRequestId &&
      !t?.relatedTask
    ) {
      if (this._pendingDebouncedNotifications.has(e.method)) {
        return;
      }
      this._pendingDebouncedNotifications.add(e.method);
      Promise.resolve().then(() => {
        this._pendingDebouncedNotifications.delete(e.method);
        if (!this._transport) {
          return;
        }
        let r = {
          ...e,
          jsonrpc: "2.0",
        };
        if (t?.relatedTask) {
          r = {
            ...r,
            params: {
              ...r.params,
              _meta: {
                ...(r.params?._meta || {}),
                [EV]: t.relatedTask,
              },
            },
          };
        }
        this._transport?.send(r, t).catch((e) => this._onerror(e));
      });
      return;
    }
    let a = {
      ...e,
      jsonrpc: "2.0",
    };
    if (t?.relatedTask) {
      a = {
        ...a,
        params: {
          ...a.params,
          _meta: {
            ...(a.params?._meta || {}),
            [EV]: t.relatedTask,
          },
        },
      };
    }
    await this._transport.send(a, t);
  }
  setRequestHandler(e, t) {
    let r = v$(e);
    this.assertRequestHandlerCapability(r);
    this._requestHandlers.set(r, (r, a) => Promise.resolve(t(EQ(e, r), a)));
  }
  removeRequestHandler(e) {
    this._requestHandlers.delete(e);
  }
  assertCanSetRequestHandler(e) {
    if (this._requestHandlers.has(e)) {
      throw Error(
        `A request handler for ${e} already exists, which would be overridden`,
      );
    }
  }
  setNotificationHandler(e, t) {
    let r = v$(e);
    this._notificationHandlers.set(r, (r) => Promise.resolve(t(EQ(e, r))));
  }
  removeNotificationHandler(e) {
    this._notificationHandlers.delete(e);
  }
  _cleanupTaskProgressHandler(e) {
    let t = this._taskProgressTokens.get(e);
    if (t !== undefined) {
      this._progressHandlers.delete(t);
      this._taskProgressTokens.delete(e);
    }
  }
  async _enqueueTaskMessage(e, t, r) {
    if (!this._taskStore || !this._taskMessageQueue) {
      throw Error(
        "Cannot enqueue task message: taskStore and taskMessageQueue are not configured",
      );
    }
    let a = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(e, t, r, a);
  }
  async _clearTaskQueue(e, t) {
    if (this._taskMessageQueue) {
      for (let r of await this._taskMessageQueue.dequeueAll(e, t)) {
        if (r.type === "request" && vo(r.message)) {
          let t = r.message.id;
          let a = this._requestResolvers.get(t);
          if (a) {
            a(new Nh(O4.InternalError, "Task cancelled or completed"));
            this._requestResolvers.delete(t);
          } else {
            this._onerror(
              Error(
                `Resolver missing for request ${t} during task ${e} cleanup`,
              ),
            );
          }
        }
      }
    }
  }
  async _waitForTaskUpdate(e, t) {
    let r = this._options?.defaultTaskPollInterval ?? 1000;
    try {
      let t = await this._taskStore?.getTask(e);
      if (t?.pollInterval) {
        r = t.pollInterval;
      }
    } catch {}
    return new Promise((resolve, reject) => {
      if (t.aborted) {
        return void reject(new Nh(O4.InvalidRequest, "Request cancelled"));
      }
      let i = setTimeout(resolve, r);
      t.addEventListener(
        "abort",
        () => {
          clearTimeout(i);
          reject(new Nh(O4.InvalidRequest, "Request cancelled"));
        },
        {
          once: true,
        },
      );
    });
  }
  requestTaskStore(e, t) {
    let _taskStore = this._taskStore;
    if (!_taskStore) {
      throw Error("No task store configured");
    }
    return {
      createTask: async (a) => {
        if (!e) {
          throw Error("No request provided");
        }
        return await _taskStore.createTask(
          a,
          e.id,
          {
            method: e.method,
            params: e.params,
          },
          t,
        );
      },
      getTask: async (e) => {
        let a = await _taskStore.getTask(e, t);
        if (!a) {
          throw new Nh(
            O4.InvalidParams,
            "Failed to retrieve task: Task not found",
          );
        }
        return a;
      },
      storeTaskResult: async (e, a, o) => {
        await _taskStore.storeTaskResult(e, a, o, t);
        let n = await _taskStore.getTask(e, t);
        if (n) {
          let t = ki.parse({
            method: "notifications/tasks/status",
            params: n,
          });
          await this.notification(t);
          if (i(n.status)) {
            this._cleanupTaskProgressHandler(e);
          }
        }
      },
      getTaskResult: (e) => _taskStore.getTaskResult(e, t),
      updateTaskStatus: async (e, a, o) => {
        let n = await _taskStore.getTask(e, t);
        if (!n) {
          throw new Nh(
            O4.InvalidParams,
            `Task "${e}" not found - it may have been cleaned up`,
          );
        }
        if (i(n.status)) {
          throw new Nh(
            O4.InvalidParams,
            `Cannot update task "${e}" from terminal status "${n.status}" to "${a}". Terminal states (completed, failed, cancelled) cannot transition to other states.`,
          );
        }
        await _taskStore.updateTaskStatus(e, a, o, t);
        let l = await _taskStore.getTask(e, t);
        if (l) {
          let t = ki.parse({
            method: "notifications/tasks/status",
            params: l,
          });
          await this.notification(t);
          if (i(l.status)) {
            this._cleanupTaskProgressHandler(e);
          }
        }
      },
      listTasks: (e) => _taskStore.listTasks(e, t),
    };
  }
}
function l(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
export function hG(e, t) {
  let r = {
    ...e,
  };
  for (let e in t) {
    let a = t[e];
    if (a === undefined) {
      continue;
    }
    let s = r[e];
    if (l(s) && l(a)) {
      r[e] = {
        ...s,
        ...a,
      };
    } else {
      r[e] = a;
    }
  }
  return r;
}

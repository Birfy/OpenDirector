import { Zs, hG } from "./module-uVh.js";
import {
  $9,
  GU,
  HM,
  Iu,
  K1,
  Mg,
  Nh,
  O$,
  O4,
  Rk,
  TF,
  TI,
  WT,
  Yu,
  aE as protocolVersion,
  br,
  cv,
  fH,
  hh,
  n_,
  u9,
  ve,
  wR,
  xI,
} from "./module-Eiz.js";
import { p } from "./module-LyhF.js";
import { BW, KW, xL } from "./module-gi5.js";
import { s, z } from "./module-EYc.js";
class n {
  constructor(e) {
    this._client = e;
  }
  async *callToolStream(e, t = TF, r) {
    let _client = this._client;
    let i = {
      ...r,
      task: r?.task ?? (_client.isToolTask(e.name) ? {} : undefined),
    };
    let o = _client.requestStream(
      {
        method: "tools/call",
        params: e,
      },
      t,
      i,
    );
    let n = _client.getToolOutputValidator(e.name);
    for await (let t of o) {
      if (t.type === "result" && n) {
        let r = t.result;
        if (!r.structuredContent && !r.isError) {
          return void (yield {
            type: "error",
            error: new Nh(
              O4.InvalidRequest,
              `Tool ${e.name} has an output schema but did not return structured content`,
            ),
          });
        }
        if (r.structuredContent) {
          try {
            let e = n(r.structuredContent);
            if (!e.valid) {
              return void (yield {
                type: "error",
                error: new Nh(
                  O4.InvalidParams,
                  `Structured content does not match the tool's output schema: ${e.errorMessage}`,
                ),
              });
            }
          } catch (error) {
            if (error instanceof Nh) {
              return void (yield {
                type: "error",
                error,
              });
            }
            yield {
              type: "error",
              error: new Nh(
                O4.InvalidParams,
                `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`,
              ),
            };
            return;
          }
        }
      }
      yield t;
    }
  }
  async getTask(e, t) {
    return this._client.getTask(
      {
        taskId: e,
      },
      t,
    );
  }
  async getTaskResult(e, t, r) {
    return this._client.getTaskResult(
      {
        taskId: e,
      },
      t,
      r,
    );
  }
  async listTasks(cursor, t) {
    return this._client.listTasks(
      cursor
        ? {
            cursor,
          }
        : undefined,
      t,
    );
  }
  async cancelTask(e, t) {
    return this._client.cancelTask(
      {
        taskId: e,
      },
      t,
    );
  }
  requestStream(e, t, r) {
    return this._client.requestStream(e, t, r);
  }
}
export class K extends Zs {
  constructor(e, t) {
    super(t);
    this._clientInfo = e;
    this._cachedToolOutputValidators = new Map();
    this._cachedKnownTaskTools = new Set();
    this._cachedRequiredTaskTools = new Set();
    this._listChangedDebounceTimers = new Map();
    this._capabilities = t?.capabilities ?? {};
    this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new p();
    if (t?.listChanged) {
      this._pendingListChangedConfig = t.listChanged;
    }
  }
  _setupListChangedHandlers(e) {
    if (e.tools && this._serverCapabilities?.tools?.listChanged) {
      this._setupListChangedHandler(
        "tools",
        fH,
        e.tools,
        async () => (await this.listTools()).tools,
      );
    }
    if (e.prompts && this._serverCapabilities?.prompts?.listChanged) {
      this._setupListChangedHandler(
        "prompts",
        br,
        e.prompts,
        async () => (await this.listPrompts()).prompts,
      );
    }
    if (e.resources && this._serverCapabilities?.resources?.listChanged) {
      this._setupListChangedHandler(
        "resources",
        hh,
        e.resources,
        async () => (await this.listResources()).resources,
      );
    }
  }
  get experimental() {
    if (!this._experimental) {
      this._experimental = {
        tasks: new n(this),
      };
    }
    return this._experimental;
  }
  registerCapabilities(e) {
    if (this.transport) {
      throw Error("Cannot register capabilities after connecting to transport");
    }
    this._capabilities = hG(this._capabilities, e);
  }
  setRequestHandler(e, t) {
    let r;
    let a = BW(e);
    let i = a?.method;
    if (!i) {
      throw Error("Schema is missing a method literal");
    }
    if (KW(i)) {
      let e = i._zod?.def;
      r = e?.value ?? i.value;
    } else {
      let e = i._def;
      r = e?.value ?? i.value;
    }
    if (typeof r !== "string") {
      throw Error("Schema method literal must be a string");
    }
    let n = r;
    if (n === "elicitation/create") {
      let r = async (e, r) => {
        let a = xL($9, e);
        if (!a.success) {
          let e = a.error instanceof Error ? a.error.message : String(a.error);
          throw new Nh(O4.InvalidParams, `Invalid elicitation request: ${e}`);
        }
        let { params } = a.data;
        params.mode = params.mode ?? "form";
        let { supportsFormMode, supportsUrlMode } = ((e) => {
          if (!e) {
            return {
              supportsFormMode: false,
              supportsUrlMode: false,
            };
          }
          let t = e.form !== undefined;
          let supportsUrlMode_1 = e.url !== undefined;
          return {
            supportsFormMode: t || (!t && !supportsUrlMode_1),
            supportsUrlMode: supportsUrlMode_1,
          };
        })(this._capabilities.elicitation);
        if (params.mode === "form" && !supportsFormMode) {
          throw new Nh(
            O4.InvalidParams,
            "Client does not support form-mode elicitation requests",
          );
        }
        if (params.mode === "url" && !supportsUrlMode) {
          throw new Nh(
            O4.InvalidParams,
            "Client does not support URL-mode elicitation requests",
          );
        }
        let d = await Promise.resolve(t(e, r));
        if (params.task) {
          let e = xL(Mg, d);
          if (!e.success) {
            let t =
              e.error instanceof Error ? e.error.message : String(e.error);
            throw new Nh(
              O4.InvalidParams,
              `Invalid task creation result: ${t}`,
            );
          }
          return e.data;
        }
        let c = xL(n_, d);
        if (!c.success) {
          let e = c.error instanceof Error ? c.error.message : String(c.error);
          throw new Nh(O4.InvalidParams, `Invalid elicitation result: ${e}`);
        }
        let c_data = c.data;
        let f = params.mode === "form" ? params.requestedSchema : undefined;
        if (
          params.mode === "form" &&
          c_data.action === "accept" &&
          c_data.content &&
          f &&
          this._capabilities.elicitation?.form?.applyDefaults
        ) {
          try {
            (function e(t, r) {
              if (t && r !== null && typeof r === "object") {
                if (
                  t.type === "object" &&
                  t.properties &&
                  typeof t.properties === "object"
                ) {
                  let a = t.properties;
                  for (let t of Object.keys(a)) {
                    let s = a[t];
                    if (
                      r[t] === undefined &&
                      Object.prototype.hasOwnProperty.call(s, "default")
                    ) {
                      r[t] = s.default;
                    }
                    if (r[t] !== undefined) {
                      e(s, r[t]);
                    }
                  }
                }
                if (Array.isArray(t.anyOf)) {
                  for (let a of t.anyOf) {
                    if (typeof a !== "boolean") {
                      e(a, r);
                    }
                  }
                }
                if (Array.isArray(t.oneOf)) {
                  for (let a of t.oneOf) {
                    if (typeof a !== "boolean") {
                      e(a, r);
                    }
                  }
                }
              }
            })(f, c_data.content);
          } catch {}
        }
        return c_data;
      };
      return super.setRequestHandler(e, r);
    }
    if (n === "sampling/createMessage") {
      let r = async (e, r) => {
        let a = xL(u9, e);
        if (!a.success) {
          let e = a.error instanceof Error ? a.error.message : String(a.error);
          throw new Nh(O4.InvalidParams, `Invalid sampling request: ${e}`);
        }
        let { params } = a.data;
        let n = await Promise.resolve(t(e, r));
        if (params.task) {
          let e = xL(Mg, n);
          if (!e.success) {
            let t =
              e.error instanceof Error ? e.error.message : String(e.error);
            throw new Nh(
              O4.InvalidParams,
              `Invalid task creation result: ${t}`,
            );
          }
          return e.data;
        }
        let l = params.tools || params.toolChoice ? TI : K1;
        let d = xL(l, n);
        if (!d.success) {
          let e = d.error instanceof Error ? d.error.message : String(d.error);
          throw new Nh(O4.InvalidParams, `Invalid sampling result: ${e}`);
        }
        return d.data;
      };
      return super.setRequestHandler(e, r);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapability(e, t) {
    if (!this._serverCapabilities?.[e]) {
      throw Error(`Server does not support ${e} (required for ${t})`);
    }
  }
  async connect(e, t) {
    await super.connect(e);
    if (e.sessionId === undefined) {
      try {
        let r = await this.request(
          {
            method: "initialize",
            params: {
              protocolVersion,
              capabilities: this._capabilities,
              clientInfo: this._clientInfo,
            },
          },
          Rk,
          t,
        );
        if (r === undefined) {
          throw Error(`Server sent invalid initialize result: ${r}`);
        }
        if (!Iu.includes(r.protocolVersion)) {
          throw Error(
            `Server's protocol version is not supported: ${r.protocolVersion}`,
          );
        }
        this._serverCapabilities = r.capabilities;
        this._serverVersion = r.serverInfo;
        if (e.setProtocolVersion) {
          e.setProtocolVersion(r.protocolVersion);
        }
        this._instructions = r.instructions;
        await this.notification({
          method: "notifications/initialized",
        });
        if (this._pendingListChangedConfig) {
          this._setupListChangedHandlers(this._pendingListChangedConfig);
          this._pendingListChangedConfig = undefined;
        }
      } catch (error) {
        this.close();
        throw error;
      }
    }
  }
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  getServerVersion() {
    return this._serverVersion;
  }
  getInstructions() {
    return this._instructions;
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "logging/setLevel":
        if (!this._serverCapabilities?.logging) {
          throw Error(`Server does not support logging (required for ${e})`);
        }
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._serverCapabilities?.prompts) {
          throw Error(`Server does not support prompts (required for ${e})`);
        }
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!this._serverCapabilities?.resources) {
          throw Error(`Server does not support resources (required for ${e})`);
        }
        if (
          e === "resources/subscribe" &&
          !this._serverCapabilities.resources.subscribe
        ) {
          throw Error(
            `Server does not support resource subscriptions (required for ${e})`,
          );
        }
        break;
      case "tools/call":
      case "tools/list":
        if (!this._serverCapabilities?.tools) {
          throw Error(`Server does not support tools (required for ${e})`);
        }
        break;
      case "completion/complete":
        if (!this._serverCapabilities?.completions) {
          throw Error(
            `Server does not support completions (required for ${e})`,
          );
        }
    }
  }
  assertNotificationCapability(e) {
    if (
      e === "notifications/roots/list_changed" &&
      !this._capabilities.roots?.listChanged
    ) {
      throw Error(
        `Client does not support roots list changed notifications (required for ${e})`,
      );
    }
  }
  assertRequestHandlerCapability(e) {
    if (this._capabilities) {
      switch (e) {
        case "sampling/createMessage":
          if (!this._capabilities.sampling) {
            throw Error(
              `Client does not support sampling capability (required for ${e})`,
            );
          }
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation) {
            throw Error(
              `Client does not support elicitation capability (required for ${e})`,
            );
          }
          break;
        case "roots/list":
          if (!this._capabilities.roots) {
            throw Error(
              `Client does not support roots capability (required for ${e})`,
            );
          }
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks) {
            throw Error(
              `Client does not support tasks capability (required for ${e})`,
            );
          }
      }
    }
  }
  assertTaskCapability(e) {
    z(this._serverCapabilities?.tasks?.requests, e, "Server");
  }
  assertTaskHandlerCapability(e) {
    if (this._capabilities) {
      s(this._capabilities.tasks?.requests, e, "Client");
    }
  }
  async ping(e) {
    return this.request(
      {
        method: "ping",
      },
      wR,
      e,
    );
  }
  async complete(e, t) {
    return this.request(
      {
        method: "completion/complete",
        params: e,
      },
      GU,
      t,
    );
  }
  async setLoggingLevel(level, t) {
    return this.request(
      {
        method: "logging/setLevel",
        params: {
          level,
        },
      },
      wR,
      t,
    );
  }
  async getPrompt(e, t) {
    return this.request(
      {
        method: "prompts/get",
        params: e,
      },
      HM,
      t,
    );
  }
  async listPrompts(e, t) {
    return this.request(
      {
        method: "prompts/list",
        params: e,
      },
      Yu,
      t,
    );
  }
  async listResources(e, t) {
    return this.request(
      {
        method: "resources/list",
        params: e,
      },
      cv,
      t,
    );
  }
  async listResourceTemplates(e, t) {
    return this.request(
      {
        method: "resources/templates/list",
        params: e,
      },
      O$,
      t,
    );
  }
  async readResource(e, t) {
    return this.request(
      {
        method: "resources/read",
        params: e,
      },
      ve,
      t,
    );
  }
  async subscribeResource(e, t) {
    return this.request(
      {
        method: "resources/subscribe",
        params: e,
      },
      wR,
      t,
    );
  }
  async unsubscribeResource(e, t) {
    return this.request(
      {
        method: "resources/unsubscribe",
        params: e,
      },
      wR,
      t,
    );
  }
  async callTool(e, t = TF, r) {
    if (this.isToolTaskRequired(e.name)) {
      throw new Nh(
        O4.InvalidRequest,
        `Tool "${e.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`,
      );
    }
    let a = await this.request(
      {
        method: "tools/call",
        params: e,
      },
      t,
      r,
    );
    let i = this.getToolOutputValidator(e.name);
    if (i) {
      if (!a.structuredContent && !a.isError) {
        throw new Nh(
          O4.InvalidRequest,
          `Tool ${e.name} has an output schema but did not return structured content`,
        );
      }
      if (a.structuredContent) {
        try {
          let e = i(a.structuredContent);
          if (!e.valid) {
            throw new Nh(
              O4.InvalidParams,
              `Structured content does not match the tool's output schema: ${e.errorMessage}`,
            );
          }
        } catch (error) {
          if (error instanceof Nh) {
            throw error;
          }
          throw new Nh(
            O4.InvalidParams,
            `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }
    }
    return a;
  }
  isToolTask(e) {
    return (
      !!this._serverCapabilities?.tasks?.requests?.tools?.call &&
      this._cachedKnownTaskTools.has(e)
    );
  }
  isToolTaskRequired(e) {
    return this._cachedRequiredTaskTools.has(e);
  }
  cacheToolMetadata(e) {
    for (let t of (this._cachedToolOutputValidators.clear(),
    this._cachedKnownTaskTools.clear(),
    this._cachedRequiredTaskTools.clear(),
    e)) {
      if (t.outputSchema) {
        let e = this._jsonSchemaValidator.getValidator(t.outputSchema);
        this._cachedToolOutputValidators.set(t.name, e);
      }
      let e = t.execution?.taskSupport;
      if (e === "required" || e === "optional") {
        this._cachedKnownTaskTools.add(t.name);
      }
      if (e === "required") {
        this._cachedRequiredTaskTools.add(t.name);
      }
    }
  }
  getToolOutputValidator(e) {
    return this._cachedToolOutputValidators.get(e);
  }
  async listTools(e, t) {
    let r = await this.request(
      {
        method: "tools/list",
        params: e,
      },
      WT,
      t,
    );
    this.cacheToolMetadata(r.tools);
    return r;
  }
  _setupListChangedHandler(e, t, r, a) {
    let i = xI.safeParse(r);
    if (!i.success) {
      throw Error(`Invalid ${e} listChanged options: ${i.error.message}`);
    }
    if (typeof r.onChanged !== "function") {
      throw Error(
        `Invalid ${e} listChanged options: onChanged must be a function`,
      );
    }
    let { autoRefresh, debounceMs } = i.data;
    let { onChanged } = r;
    let d = async () => {
      if (!autoRefresh) {
        return void onChanged(null, null);
      }
      try {
        let e = await a();
        onChanged(null, e);
      } catch (error) {
        onChanged(error instanceof Error ? error : Error(String(error)), null);
      }
    };
    let c = () => {
      if (debounceMs) {
        let t = this._listChangedDebounceTimers.get(e);
        if (t) {
          clearTimeout(t);
        }
        let r = setTimeout(d, debounceMs);
        this._listChangedDebounceTimers.set(e, r);
      } else {
        d();
      }
    };
    this.setNotificationHandler(t, c);
  }
  async sendRootsListChanged() {
    return this.notification({
      method: "notifications/roots/list_changed",
    });
  }
}

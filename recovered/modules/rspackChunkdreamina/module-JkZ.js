import { Zs, hG } from "./module-uVh.js";
import {
  $p,
  Cs,
  FP,
  FT,
  Iu,
  K1,
  Mg,
  Nh,
  O4,
  OI,
  Qq,
  R6,
  TF,
  TI,
  X6,
  ZC,
  aE,
  b_,
  gW,
  iK,
  n_,
  rk,
  s,
  uv,
  wR,
} from "./module-Eiz.js";
import { p as p_1 } from "./module-LyhF.js";
import { BW, KW, Lm, _G, bp, cg, t1, t9, wA, xL } from "./module-gi5.js";
import { s as s_1, z } from "./module-EYc.js";
import { Dk } from "./module-lGp.js";
import y from "EkZ";
let a;
class l {
  constructor(e) {
    this._server = e;
  }
  requestStream(e, t, r) {
    return this._server.requestStream(e, t, r);
  }
  async getTask(e, t) {
    return this._server.getTask(
      {
        taskId: e,
      },
      t,
    );
  }
  async getTaskResult(e, t, r) {
    return this._server.getTaskResult(
      {
        taskId: e,
      },
      t,
      r,
    );
  }
  async listTasks(cursor, t) {
    return this._server.listTasks(
      cursor
        ? {
            cursor,
          }
        : undefined,
      t,
    );
  }
  async cancelTask(e, t) {
    return this._server.cancelTask(
      {
        taskId: e,
      },
      t,
    );
  }
}
class c extends Zs {
  constructor(e, t) {
    super(t);
    this._serverInfo = e;
    this._loggingLevels = new Map();
    this.LOG_LEVEL_SEVERITY = new Map(FP.options.map((e, t) => [e, t]));
    this.isMessageIgnored = (e, t) => {
      let r = this._loggingLevels.get(t);
      return (
        !!r && this.LOG_LEVEL_SEVERITY.get(e) < this.LOG_LEVEL_SEVERITY.get(r)
      );
    };
    this._capabilities = t?.capabilities ?? {};
    this._instructions = t?.instructions;
    this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new p_1();
    this.setRequestHandler(rk, (e) => this._oninitialize(e));
    this.setNotificationHandler(ZC, () => this.oninitialized?.());
    if (this._capabilities.logging) {
      this.setRequestHandler(b_, async (e, t) => {
        let r =
          t.sessionId || t.requestInfo?.headers["mcp-session-id"] || undefined;
        let { level } = e.params;
        let s = FP.safeParse(level);
        if (s.success) {
          this._loggingLevels.set(r, s.data);
        }
        return {};
      });
    }
  }
  get experimental() {
    if (!this._experimental) {
      this._experimental = {
        tasks: new l(this),
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
    let s = a?.method;
    if (!s) {
      throw Error("Schema is missing a method literal");
    }
    if (KW(s)) {
      let e = s._zod?.def;
      r = e?.value ?? s.value;
    } else {
      let e = s._def;
      r = e?.value ?? s.value;
    }
    if (typeof r !== "string") {
      throw Error("Schema method literal must be a string");
    }
    if (r === "tools/call") {
      let r = async (e, r) => {
        let a = xL(FT, e);
        if (!a.success) {
          let e = a.error instanceof Error ? a.error.message : String(a.error);
          throw new Nh(O4.InvalidParams, `Invalid tools/call request: ${e}`);
        }
        let { params } = a.data;
        let o = await Promise.resolve(t(e, r));
        if (params.task) {
          let e = xL(Mg, o);
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
        let l = xL(TF, o);
        if (!l.success) {
          let e = l.error instanceof Error ? l.error.message : String(l.error);
          throw new Nh(O4.InvalidParams, `Invalid tools/call result: ${e}`);
        }
        return l.data;
      };
      return super.setRequestHandler(e, r);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling) {
          throw Error(`Client does not support sampling (required for ${e})`);
        }
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation) {
          throw Error(
            `Client does not support elicitation (required for ${e})`,
          );
        }
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots) {
          throw Error(
            `Client does not support listing roots (required for ${e})`,
          );
        }
    }
  }
  assertNotificationCapability(e) {
    switch (e) {
      case "notifications/message":
        if (!this._capabilities.logging) {
          throw Error(`Server does not support logging (required for ${e})`);
        }
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) {
          throw Error(
            `Server does not support notifying about resources (required for ${e})`,
          );
        }
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) {
          throw Error(
            `Server does not support notifying of tool list changes (required for ${e})`,
          );
        }
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) {
          throw Error(
            `Server does not support notifying of prompt list changes (required for ${e})`,
          );
        }
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url) {
          throw Error(
            `Client does not support URL elicitation (required for ${e})`,
          );
        }
    }
  }
  assertRequestHandlerCapability(e) {
    if (this._capabilities) {
      switch (e) {
        case "completion/complete":
          if (!this._capabilities.completions) {
            throw Error(
              `Server does not support completions (required for ${e})`,
            );
          }
          break;
        case "logging/setLevel":
          if (!this._capabilities.logging) {
            throw Error(`Server does not support logging (required for ${e})`);
          }
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._capabilities.prompts) {
            throw Error(`Server does not support prompts (required for ${e})`);
          }
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
          if (!this._capabilities.resources) {
            throw Error(
              `Server does not support resources (required for ${e})`,
            );
          }
          break;
        case "tools/call":
        case "tools/list":
          if (!this._capabilities.tools) {
            throw Error(`Server does not support tools (required for ${e})`);
          }
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks) {
            throw Error(
              `Server does not support tasks capability (required for ${e})`,
            );
          }
      }
    }
  }
  assertTaskCapability(e) {
    s_1(this._clientCapabilities?.tasks?.requests, e, "Client");
  }
  assertTaskHandlerCapability(e) {
    if (this._capabilities) {
      z(this._capabilities.tasks?.requests, e, "Server");
    }
  }
  async _oninitialize(e) {
    let protocolVersion = e.params.protocolVersion;
    this._clientCapabilities = e.params.capabilities;
    this._clientVersion = e.params.clientInfo;
    return {
      protocolVersion: Iu.includes(protocolVersion) ? protocolVersion : aE,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...(this._instructions && {
        instructions: this._instructions,
      }),
    };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request(
      {
        method: "ping",
      },
      wR,
    );
  }
  async createMessage(e, t) {
    if (
      (e.tools || e.toolChoice) &&
      !this._clientCapabilities?.sampling?.tools
    ) {
      throw Error("Client does not support sampling tools capability.");
    }
    if (e.messages.length > 0) {
      let t = e.messages[e.messages.length - 1];
      let r = Array.isArray(t.content) ? t.content : [t.content];
      let a = r.some((e) => e.type === "tool_result");
      let s =
        e.messages.length > 1 ? e.messages[e.messages.length - 2] : undefined;
      let i = s ? (Array.isArray(s.content) ? s.content : [s.content]) : [];
      let o = i.some((e) => e.type === "tool_use");
      if (a) {
        if (r.some((e) => e.type !== "tool_result")) {
          throw Error(
            "The last message must contain only tool_result content if any is present",
          );
        }
        if (!o) {
          throw Error(
            "tool_result blocks are not matching any tool_use from the previous message",
          );
        }
      }
      if (o) {
        let e = new Set(
          i.filter((e) => e.type === "tool_use").map((e) => e.id),
        );
        let t = new Set(
          r.filter((e) => e.type === "tool_result").map((e) => e.toolUseId),
        );
        if (e.size !== t.size || ![...e].every((e) => t.has(e))) {
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match",
          );
        }
      }
    }
    if (e.tools) {
      return this.request(
        {
          method: "sampling/createMessage",
          params: e,
        },
        TI,
        t,
      );
    }
    return this.request(
      {
        method: "sampling/createMessage",
        params: e,
      },
      K1,
      t,
    );
  }
  async elicitInput(e, t) {
    switch (e.mode ?? "form") {
      case "url":
        if (!this._clientCapabilities?.elicitation?.url) {
          throw Error("Client does not support url elicitation.");
        }
        return this.request(
          {
            method: "elicitation/create",
            params: e,
          },
          n_,
          t,
        );
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form) {
          throw Error("Client does not support form elicitation.");
        }
        let r =
          e.mode === "form"
            ? e
            : {
                ...e,
                mode: "form",
              };
        let a = await this.request(
          {
            method: "elicitation/create",
            params: r,
          },
          n_,
          t,
        );
        if (a.action === "accept" && a.content && r.requestedSchema) {
          try {
            let e = this._jsonSchemaValidator.getValidator(r.requestedSchema)(
              a.content,
            );
            if (!e.valid) {
              throw new Nh(
                O4.InvalidParams,
                `Elicitation response content does not match requested schema: ${e.errorMessage}`,
              );
            }
          } catch (error) {
            if (error instanceof Nh) {
              throw error;
            }
            throw new Nh(
              O4.InternalError,
              `Error validating elicitation response: ${error instanceof Error ? error.message : String(error)}`,
            );
          }
        }
        return a;
      }
    }
  }
  createElicitationCompletionNotifier(elicitationId, t) {
    if (!this._clientCapabilities?.elicitation?.url) {
      throw Error(
        "Client does not support URL elicitation (required for notifications/elicitation/complete)",
      );
    }
    return () =>
      this.notification(
        {
          method: "notifications/elicitation/complete",
          params: {
            elicitationId,
          },
        },
        t,
      );
  }
  async listRoots(e, t) {
    return this.request(
      {
        method: "roots/list",
        params: e,
      },
      Cs,
      t,
    );
  }
  async sendLoggingMessage(e, t) {
    if (this._capabilities.logging && !this.isMessageIgnored(e.level, t)) {
      return this.notification({
        method: "notifications/message",
        params: e,
      });
    }
  }
  async sendResourceUpdated(e) {
    return this.notification({
      method: "notifications/resources/updated",
      params: e,
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed",
    });
  }
  async sendToolListChanged() {
    return this.notification({
      method: "notifications/tools/list_changed",
    });
  }
  async sendPromptListChanged() {
    return this.notification({
      method: "notifications/prompts/list_changed",
    });
  }
}
let SYMBOL_MCP_COMPLETABLE = Symbol.for("mcp.completable");
function p(e) {
  return !!e && typeof e === "object" && SYMBOL_MCP_COMPLETABLE in e;
}
(a || (a = {})).Completable = "McpCompletable";
let h = /^[A-Za-z0-9._-]{1,128}$/;
function m(e) {
  let t = ((e) => {
    let warnings = [];
    if (e.length === 0) {
      return {
        isValid: false,
        warnings: ["Tool name cannot be empty"],
      };
    }
    if (e.length > 128) {
      return {
        isValid: false,
        warnings: [
          `Tool name exceeds maximum length of 128 characters (current: ${e.length})`,
        ],
      };
    }
    if (e.includes(" ")) {
      warnings.push(
        "Tool name contains spaces, which may cause parsing issues",
      );
    }
    if (e.includes(",")) {
      warnings.push(
        "Tool name contains commas, which may cause parsing issues",
      );
    }
    if (e.startsWith("-") || e.endsWith("-")) {
      warnings.push(
        "Tool name starts or ends with a dash, which may cause parsing issues in some contexts",
      );
    }
    if (e.startsWith(".") || e.endsWith(".")) {
      warnings.push(
        "Tool name starts or ends with a dot, which may cause parsing issues in some contexts",
      );
    }
    if (!h.test(e)) {
      let r = e
        .split("")
        .filter((e) => !/[A-Za-z0-9._-]/.test(e))
        .filter((e, t, r) => r.indexOf(e) === t);
      warnings.push(
        `Tool name contains invalid characters: ${r.map((e) => `"${e}"`).join(", ")}`,
        "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)",
      );
      return {
        isValid: false,
        warnings,
      };
    }
    return {
      isValid: true,
      warnings,
    };
  })(e);
  const t_warnings = t.warnings;
  if (t_warnings.length > 0) {
    for (let t of (console.warn(`Tool name validation warning for "${e}":`),
    t_warnings)) {
      console.warn(`  - ${t}`);
    }
    console.warn(
      "Tool registration will proceed, but this may cause compatibility issues.",
    );
    console.warn(
      "Consider updating the tool name to conform to the MCP tool naming standard.",
    );
    console.warn(
      "See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.",
    );
  }
  return t.isValid;
}
class g {
  constructor(e) {
    this._mcpServer = e;
  }
  registerToolTask(e, t, r) {
    let a = {
      taskSupport: "required",
      ...t.execution,
    };
    if (a.taskSupport === "forbidden") {
      throw Error(
        `Cannot register task-based tool '${e}' with taskSupport 'forbidden'. Use registerTool() instead.`,
      );
    }
    return this._mcpServer._createRegisteredTool(
      e,
      t.title,
      t.description,
      t.inputSchema,
      t.outputSchema,
      t.annotations,
      a,
      t._meta,
      r,
    );
  }
}
class v {
  constructor(e, t) {
    this._registeredResources = {};
    this._registeredResourceTemplates = {};
    this._registeredTools = {};
    this._registeredPrompts = {};
    this._toolHandlersInitialized = false;
    this._completionHandlerInitialized = false;
    this._resourceHandlersInitialized = false;
    this._promptHandlersInitialized = false;
    this.server = new c(e, t);
  }
  get experimental() {
    if (!this._experimental) {
      this._experimental = {
        tasks: new g(this),
      };
    }
    return this._experimental;
  }
  async connect(e) {
    return await this.server.connect(e);
  }
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    if (!this._toolHandlersInitialized) {
      this.server.assertCanSetRequestHandler(k(gW));
      this.server.assertCanSetRequestHandler(k(FT));
      this.server.registerCapabilities({
        tools: {
          listChanged: true,
        },
      });
      this.server.setRequestHandler(gW, () => ({
        tools: Object.entries(this._registeredTools)
          .filter(([, e]) => e.enabled)
          .map(([e, t]) => {
            let r;
            let a = {
              name: e,
              title: t.title,
              description: t.description,
              inputSchema: (r = _G(t.inputSchema))
                ? Dk(r, {
                    strictUnions: true,
                    pipeStrategy: "input",
                  })
                : _,
              annotations: t.annotations,
              execution: t.execution,
              _meta: t._meta,
            };
            if (t.outputSchema) {
              let e = _G(t.outputSchema);
              if (e) {
                a.outputSchema = Dk(e, {
                  strictUnions: true,
                  pipeStrategy: "output",
                });
              }
            }
            return a;
          }),
      }));
      this.server.setRequestHandler(FT, async (e, t) => {
        try {
          let r = this._registeredTools[e.params.name];
          if (!r) {
            throw new Nh(O4.InvalidParams, `Tool ${e.params.name} not found`);
          }
          if (!r.enabled) {
            throw new Nh(O4.InvalidParams, `Tool ${e.params.name} disabled`);
          }
          let a = !!e.params.task;
          let s = r.execution?.taskSupport;
          let o = "createTask" in r.handler;
          if ((s === "required" || s === "optional") && !o) {
            throw new Nh(
              O4.InternalError,
              `Tool ${e.params.name} has taskSupport '${s}' but was not registered with registerToolTask`,
            );
          }
          if (s === "required" && !a) {
            throw new Nh(
              O4.MethodNotFound,
              `Tool ${e.params.name} requires task augmentation (taskSupport: 'required')`,
            );
          }
          if (s === "optional" && !a && o) {
            return await this.handleAutomaticTaskPolling(r, e, t);
          }
          let n = await this.validateToolInput(
            r,
            e.params.arguments,
            e.params.name,
          );
          let l = await this.executeToolHandler(r, n, t);
          if (a) {
            return l;
          }
          await this.validateToolOutput(r, l, e.params.name);
          return l;
        } catch (error) {
          if (error instanceof Nh && error.code === O4.UrlElicitationRequired) {
            throw error;
          }
          return this.createToolError(
            error instanceof Error ? error.message : String(error),
          );
        }
      });
      this._toolHandlersInitialized = true;
    }
  }
  createToolError(text) {
    return {
      content: [
        {
          type: "text",
          text,
        },
      ],
      isError: true,
    };
  }
  async validateToolInput(e, t, r) {
    if (!e.inputSchema) {
      return;
    }
    let a = _G(e.inputSchema) ?? e.inputSchema;
    let s = await bp(a, t);
    if (!s.success) {
      let e = "error" in s ? s.error : "Unknown error";
      let t = t1(e);
      throw new Nh(
        O4.InvalidParams,
        `Input validation error: Invalid arguments for tool ${r}: ${t}`,
      );
    }
    return s.data;
  }
  async validateToolOutput(e, t, r) {
    if (!e.outputSchema || !("content" in t) || t.isError) {
      return;
    }
    if (!t.structuredContent) {
      throw new Nh(
        O4.InvalidParams,
        `Output validation error: Tool ${r} has an output schema but no structured content was provided`,
      );
    }
    let a = _G(e.outputSchema);
    let s = await bp(a, t.structuredContent);
    if (!s.success) {
      let e = "error" in s ? s.error : "Unknown error";
      let t = t1(e);
      throw new Nh(
        O4.InvalidParams,
        `Output validation error: Invalid structured content for tool ${r}: ${t}`,
      );
    }
  }
  async executeToolHandler(e, t, r) {
    let e_handler = e.handler;
    if ("createTask" in e_handler) {
      if (!r.taskStore) {
        throw Error("No task store provided.");
      }
      let s = {
        ...r,
        taskStore: r.taskStore,
      };
      if (e.inputSchema) {
        return await Promise.resolve(e_handler.createTask(t, s));
      }
      return await Promise.resolve(e_handler.createTask(s));
    }
    if (e.inputSchema) {
      return await Promise.resolve(e_handler(t, r));
    }
    return await Promise.resolve(e_handler(r));
  }
  async handleAutomaticTaskPolling(e, t, r) {
    if (!r.taskStore) {
      throw Error("No task store provided for task-capable tool.");
    }
    let a = await this.validateToolInput(e, t.params.arguments, t.params.name);
    let e_handler = e.handler;
    let o = {
      ...r,
      taskStore: r.taskStore,
    };
    let n = a
      ? await Promise.resolve(e_handler.createTask(a, o))
      : await Promise.resolve(e_handler.createTask(o));
    let taskId = n.task.taskId;
    let n_task = n.task;
    let c = n_task.pollInterval ?? 5000;
    while (
      n_task.status !== "completed" &&
      n_task.status !== "failed" &&
      n_task.status !== "cancelled"
    ) {
      await new Promise((resolve) => setTimeout(resolve, c));
      let e = await r.taskStore.getTask(taskId);
      if (!e) {
        throw new Nh(
          O4.InternalError,
          `Task ${taskId} not found during polling`,
        );
      }
      n_task = e;
    }
    return await r.taskStore.getTaskResult(taskId);
  }
  setCompletionRequestHandler() {
    if (!this._completionHandlerInitialized) {
      this.server.assertCanSetRequestHandler(k(iK));
      this.server.registerCapabilities({
        completions: {},
      });
      this.server.setRequestHandler(iK, async (e) => {
        switch (e.params.ref.type) {
          case "ref/prompt":
            uv(e);
            return this.handlePromptCompletion(e, e.params.ref);
          case "ref/resource":
            X6(e);
            return this.handleResourceCompletion(e, e.params.ref);
          default:
            throw new Nh(
              O4.InvalidParams,
              `Invalid completion reference: ${e.params.ref}`,
            );
        }
      });
      this._completionHandlerInitialized = true;
    }
  }
  async handlePromptCompletion(e, t) {
    let r;
    let a = this._registeredPrompts[t.name];
    if (!a) {
      throw new Nh(O4.InvalidParams, `Prompt ${t.name} not found`);
    }
    if (!a.enabled) {
      throw new Nh(O4.InvalidParams, `Prompt ${t.name} disabled`);
    }
    if (!a.argsSchema) {
      return S;
    }
    let s = BW(a.argsSchema);
    let o = s?.[e.params.argument.name];
    if (!p(o)) {
      return S;
    }
    r = o[SYMBOL_MCP_COMPLETABLE];
    let l = r?.complete;
    if (l) {
      return E(await l(e.params.argument.value, e.params.context));
    }
    return S;
  }
  async handleResourceCompletion(e, t) {
    let r = Object.values(this._registeredResourceTemplates).find(
      (e) => e.resourceTemplate.uriTemplate.toString() === t.uri,
    );
    if (!r) {
      if (this._registeredResources[t.uri]) {
        return S;
      }
      throw new Nh(
        O4.InvalidParams,
        `Resource template ${e.params.ref.uri} not found`,
      );
    }
    let a = r.resourceTemplate.completeCallback(e.params.argument.name);
    if (a) {
      return E(await a(e.params.argument.value, e.params.context));
    }
    return S;
  }
  setResourceRequestHandlers() {
    if (!this._resourceHandlersInitialized) {
      this.server.assertCanSetRequestHandler(k(OI));
      this.server.assertCanSetRequestHandler(k(s));
      this.server.assertCanSetRequestHandler(k(R6));
      this.server.registerCapabilities({
        resources: {
          listChanged: true,
        },
      });
      this.server.setRequestHandler(OI, async (e, t) => {
        let r = Object.entries(this._registeredResources)
          .filter(([e, t]) => t.enabled)
          .map(([uri, t]) => ({
            uri,
            name: t.name,
            ...t.metadata,
          }));
        let a = [];
        for (let e of Object.values(this._registeredResourceTemplates)) {
          if (e.resourceTemplate.listCallback) {
            for (let r of (await e.resourceTemplate.listCallback(t))
              .resources) {
              a.push({
                ...e.metadata,
                ...r,
              });
            }
          }
        }
        return {
          resources: [...r, ...a],
        };
      });
      this.server.setRequestHandler(s, async () => ({
        resourceTemplates: Object.entries(
          this._registeredResourceTemplates,
        ).map(([e, t]) => ({
          name: e,
          uriTemplate: t.resourceTemplate.uriTemplate.toString(),
          ...t.metadata,
        })),
      }));
      this.server.setRequestHandler(R6, async (e, t) => {
        let r = new URL(e.params.uri);
        let a = this._registeredResources[r.toString()];
        if (a) {
          if (!a.enabled) {
            throw new Nh(O4.InvalidParams, `Resource ${r} disabled`);
          }
          return a.readCallback(r, t);
        }
        for (let e of Object.values(this._registeredResourceTemplates)) {
          let a = e.resourceTemplate.uriTemplate.match(r.toString());
          if (a) {
            return e.readCallback(r, a, t);
          }
        }
        throw new Nh(O4.InvalidParams, `Resource ${r} not found`);
      });
      this._resourceHandlersInitialized = true;
    }
  }
  setPromptRequestHandlers() {
    if (!this._promptHandlersInitialized) {
      this.server.assertCanSetRequestHandler(k(Qq));
      this.server.assertCanSetRequestHandler(k($p));
      this.server.registerCapabilities({
        prompts: {
          listChanged: true,
        },
      });
      this.server.setRequestHandler(Qq, () => ({
        prompts: Object.entries(this._registeredPrompts)
          .filter(([, e]) => e.enabled)
          .map(([e, t]) => {
            var r;
            let a;
            return {
              name: e,
              title: t.title,
              description: t.description,
              arguments: t.argsSchema
                ? ((r = t.argsSchema),
                  (a = BW(r))
                    ? Object.entries(a).map(([e, t]) => ({
                        name: e,
                        description: cg(t),
                        required: !wA(t),
                      }))
                    : [])
                : undefined,
            };
          }),
      }));
      this.server.setRequestHandler($p, async (e, t) => {
        let r = this._registeredPrompts[e.params.name];
        if (!r) {
          throw new Nh(O4.InvalidParams, `Prompt ${e.params.name} not found`);
        }
        if (!r.enabled) {
          throw new Nh(O4.InvalidParams, `Prompt ${e.params.name} disabled`);
        }
        if (r.argsSchema) {
          let a = _G(r.argsSchema);
          let s = await bp(a, e.params.arguments);
          if (!s.success) {
            let t = "error" in s ? s.error : "Unknown error";
            let r = t1(t);
            throw new Nh(
              O4.InvalidParams,
              `Invalid arguments for prompt ${e.params.name}: ${r}`,
            );
          }
          let o = s.data;
          let l = r.callback;
          return await Promise.resolve(l(o, t));
        }
        {
          let e = r.callback;
          return await Promise.resolve(e(t));
        }
      });
      this._promptHandlersInitialized = true;
    }
  }
  resource(e, t, ...r) {
    let a;
    if (typeof r[0] === "object") {
      a = r.shift();
    }
    let s = r[0];
    if (typeof t === "string") {
      if (this._registeredResources[t]) {
        throw Error(`Resource ${t} is already registered`);
      }
      let r = this._createRegisteredResource(e, undefined, t, a, s);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return r;
    }
    {
      if (this._registeredResourceTemplates[e]) {
        throw Error(`Resource template ${e} is already registered`);
      }
      let r = this._createRegisteredResourceTemplate(e, undefined, t, a, s);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return r;
    }
  }
  registerResource(e, t, r, a) {
    if (typeof t === "string") {
      if (this._registeredResources[t]) {
        throw Error(`Resource ${t} is already registered`);
      }
      let s = this._createRegisteredResource(e, r.title, t, r, a);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return s;
    }
    {
      if (this._registeredResourceTemplates[e]) {
        throw Error(`Resource template ${e} is already registered`);
      }
      let s = this._createRegisteredResourceTemplate(e, r.title, t, r, a);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return s;
    }
  }
  _createRegisteredResource(e, t, r, a, s) {
    let i = {
      name: e,
      title: t,
      metadata: a,
      readCallback: s,
      enabled: true,
      disable: () =>
        i.update({
          enabled: false,
        }),
      enable: () =>
        i.update({
          enabled: true,
        }),
      remove: () =>
        i.update({
          uri: null,
        }),
      update: (e) => {
        if (e.uri !== undefined && e.uri !== r) {
          delete this._registeredResources[r];
          if (e.uri) {
            this._registeredResources[e.uri] = i;
          }
        }
        if (e.name !== undefined) {
          i.name = e.name;
        }
        if (e.title !== undefined) {
          i.title = e.title;
        }
        if (e.metadata !== undefined) {
          i.metadata = e.metadata;
        }
        if (e.callback !== undefined) {
          i.readCallback = e.callback;
        }
        if (e.enabled !== undefined) {
          i.enabled = e.enabled;
        }
        this.sendResourceListChanged();
      },
    };
    this._registeredResources[r] = i;
    return i;
  }
  _createRegisteredResourceTemplate(e, t, resourceTemplate, a, s) {
    let i = {
      resourceTemplate,
      title: t,
      metadata: a,
      readCallback: s,
      enabled: true,
      disable: () =>
        i.update({
          enabled: false,
        }),
      enable: () =>
        i.update({
          enabled: true,
        }),
      remove: () =>
        i.update({
          name: null,
        }),
      update: (t) => {
        if (t.name !== undefined && t.name !== e) {
          delete this._registeredResourceTemplates[e];
          if (t.name) {
            this._registeredResourceTemplates[t.name] = i;
          }
        }
        if (t.title !== undefined) {
          i.title = t.title;
        }
        if (t.template !== undefined) {
          i.resourceTemplate = t.template;
        }
        if (t.metadata !== undefined) {
          i.metadata = t.metadata;
        }
        if (t.callback !== undefined) {
          i.readCallback = t.callback;
        }
        if (t.enabled !== undefined) {
          i.enabled = t.enabled;
        }
        this.sendResourceListChanged();
      },
    };
    this._registeredResourceTemplates[e] = i;
    let variableNames = resourceTemplate.uriTemplate.variableNames;
    if (
      Array.isArray(variableNames) &&
      variableNames.some((e) => !!resourceTemplate.completeCallback(e))
    ) {
      this.setCompletionRequestHandler();
    }
    return i;
  }
  _createRegisteredPrompt(e, t, r, a, callback) {
    let i = {
      title: t,
      description: r,
      argsSchema: a === undefined ? undefined : t9(a),
      callback,
      enabled: true,
      disable: () =>
        i.update({
          enabled: false,
        }),
      enable: () =>
        i.update({
          enabled: true,
        }),
      remove: () =>
        i.update({
          name: null,
        }),
      update: (t) => {
        if (t.name !== undefined && t.name !== e) {
          delete this._registeredPrompts[e];
          if (t.name) {
            this._registeredPrompts[t.name] = i;
          }
        }
        if (t.title !== undefined) {
          i.title = t.title;
        }
        if (t.description !== undefined) {
          i.description = t.description;
        }
        if (t.argsSchema !== undefined) {
          i.argsSchema = t9(t.argsSchema);
        }
        if (t.callback !== undefined) {
          i.callback = t.callback;
        }
        if (t.enabled !== undefined) {
          i.enabled = t.enabled;
        }
        this.sendPromptListChanged();
      },
    };
    this._registeredPrompts[e] = i;
    if (
      a &&
      Object.values(a).some((e) => p(e instanceof y.Ii ? e._def?.innerType : e))
    ) {
      this.setCompletionRequestHandler();
    }
    return i;
  }
  _createRegisteredTool(e, t, r, a, s, annotations, execution, _meta, handler) {
    m(e);
    let c = {
      title: t,
      description: r,
      inputSchema: b(a),
      outputSchema: b(s),
      annotations,
      execution,
      _meta,
      handler,
      enabled: true,
      disable: () =>
        c.update({
          enabled: false,
        }),
      enable: () =>
        c.update({
          enabled: true,
        }),
      remove: () =>
        c.update({
          name: null,
        }),
      update: (t) => {
        if (t.name !== undefined && t.name !== e) {
          if (typeof t.name === "string") {
            m(t.name);
          }
          delete this._registeredTools[e];
          if (t.name) {
            this._registeredTools[t.name] = c;
          }
        }
        if (t.title !== undefined) {
          c.title = t.title;
        }
        if (t.description !== undefined) {
          c.description = t.description;
        }
        if (t.paramsSchema !== undefined) {
          c.inputSchema = t9(t.paramsSchema);
        }
        if (t.outputSchema !== undefined) {
          c.outputSchema = t9(t.outputSchema);
        }
        if (t.callback !== undefined) {
          c.handler = t.callback;
        }
        if (t.annotations !== undefined) {
          c.annotations = t.annotations;
        }
        if (t._meta !== undefined) {
          c._meta = t._meta;
        }
        if (t.enabled !== undefined) {
          c.enabled = t.enabled;
        }
        this.sendToolListChanged();
      },
    };
    this._registeredTools[e] = c;
    this.setToolRequestHandlers();
    this.sendToolListChanged();
    return c;
  }
  tool(e, ...t) {
    let r;
    let a;
    let s;
    let i;
    if (this._registeredTools[e]) {
      throw Error(`Tool ${e} is already registered`);
    }
    if (typeof t[0] === "string") {
      r = t.shift();
    }
    if (t.length > 1) {
      let e = t[0];
      if (w(e)) {
        a = t.shift();
        if (
          t.length > 1 &&
          typeof t[0] === "object" &&
          t[0] !== null &&
          !w(t[0])
        ) {
          i = t.shift();
        }
      } else if (typeof e === "object" && e !== null) {
        i = t.shift();
      }
    }
    let o = t[0];
    return this._createRegisteredTool(
      e,
      undefined,
      r,
      a,
      s,
      i,
      {
        taskSupport: "forbidden",
      },
      undefined,
      o,
    );
  }
  registerTool(e, t, r) {
    if (this._registeredTools[e]) {
      throw Error(`Tool ${e} is already registered`);
    }
    let { title, description, inputSchema, outputSchema, annotations, _meta } =
      t;
    return this._createRegisteredTool(
      e,
      title,
      description,
      inputSchema,
      outputSchema,
      annotations,
      {
        taskSupport: "forbidden",
      },
      _meta,
      r,
    );
  }
  prompt(e, ...t) {
    let r;
    let a;
    if (this._registeredPrompts[e]) {
      throw Error(`Prompt ${e} is already registered`);
    }
    if (typeof t[0] === "string") {
      r = t.shift();
    }
    if (t.length > 1) {
      a = t.shift();
    }
    let s = t[0];
    let i = this._createRegisteredPrompt(e, undefined, r, a, s);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return i;
  }
  registerPrompt(e, t, r) {
    if (this._registeredPrompts[e]) {
      throw Error(`Prompt ${e} is already registered`);
    }
    let { title, description, argsSchema } = t;
    let o = this._createRegisteredPrompt(e, title, description, argsSchema, r);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return o;
  }
  isConnected() {
    return this.server.transport !== undefined;
  }
  async sendLoggingMessage(e, t) {
    return this.server.sendLoggingMessage(e, t);
  }
  sendResourceListChanged() {
    if (this.isConnected()) {
      this.server.sendResourceListChanged();
    }
  }
  sendToolListChanged() {
    if (this.isConnected()) {
      this.server.sendToolListChanged();
    }
  }
  sendPromptListChanged() {
    if (this.isConnected()) {
      this.server.sendPromptListChanged();
    }
  }
}
export { v as _ };
let _ = {
  type: "object",
  properties: {},
};
function $(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "parse" in e &&
    typeof e.parse === "function" &&
    "safeParse" in e &&
    typeof e.safeParse === "function"
  );
}
function w(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    !("_def" in e || "_zod" in e || $(e)) &&
    (Object.keys(e).length === 0 || Object.values(e).some($))
  );
}
function b(e) {
  if (e) {
    if (w(e)) {
      return t9(e);
    }
    return e;
  }
}
function k(e) {
  let t = BW(e);
  let r = t?.method;
  if (!r) {
    throw Error("Schema is missing a method literal");
  }
  let a = Lm(r);
  if (typeof a === "string") {
    return a;
  }
  throw Error("Schema method literal must be a string");
}
function E(e) {
  return {
    completion: {
      values: e.slice(0, 100),
      total: e.length,
      hasMore: e.length > 100,
    },
  };
}
let S = {
  completion: {
    values: [],
    hasMore: false,
  },
};

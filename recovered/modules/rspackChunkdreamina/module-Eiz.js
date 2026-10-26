import i from "vTT";
import o from "rIo";
let a;
export var O4;
export let aE = "2025-11-25";
export let Iu = [aE, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"];
export let EV = "io.modelcontextprotocol/related-task";
let c = i.Ie(
  (e) => e !== null && (typeof e === "object" || typeof e === "function"),
);
let progressToken = i.KC([i.Yj(), i.ai().int()]);
let f = i.Yj();
i._H({
  ttl: i.KC([i.ai(), i.ch()]).optional(),
  pollInterval: i.ai().optional(),
});
let p = i.Ik({
  ttl: i.ai().optional(),
});
let h = i.Ik({
  taskId: i.Yj(),
});
let m = i._H({
  progressToken: progressToken.optional(),
  [EV]: h.optional(),
});
let g = i.Ik({
  _meta: m.optional(),
});
let y = g.extend({
  task: p.optional(),
});
let v = i.Ik({
  method: i.Yj(),
  params: g.loose().optional(),
});
let _ = i.Ik({
  _meta: m.optional(),
});
let $ = i.Ik({
  method: i.Yj(),
  params: _.loose().optional(),
});
let result = i._H({
  _meta: m.optional(),
});
let id = i.KC([i.Yj(), i.ai().int()]);
let k = i
  .Ik({
    jsonrpc: i.eu("2.0"),
    id,
    ...v.shape,
  })
  .strict();
let E = i
  .Ik({
    jsonrpc: i.eu("2.0"),
    ...$.shape,
  })
  .strict();
let S = i
  .Ik({
    jsonrpc: i.eu("2.0"),
    id,
    result,
  })
  .strict();
a = O4 || (O4 = {});
a[(a.ConnectionClosed = -32000)] = "ConnectionClosed";
a[(a.RequestTimeout = -32001)] = "RequestTimeout";
a[(a.ParseError = -32700)] = "ParseError";
a[(a.InvalidRequest = -32600)] = "InvalidRequest";
a[(a.MethodNotFound = -32601)] = "MethodNotFound";
a[(a.InvalidParams = -32602)] = "InvalidParams";
a[(a.InternalError = -32603)] = "InternalError";
a[(a.UrlElicitationRequired = -32042)] = "UrlElicitationRequired";
let T = i
  .Ik({
    jsonrpc: i.eu("2.0"),
    id: id.optional(),
    error: i.Ik({
      code: i.ai().int(),
      message: i.Yj(),
      data: i.L5().optional(),
    }),
  })
  .strict();
i.KC([k, E, S, T]);
i.KC([S, T]);
export let wR = result.strict();
let I = _.extend({
  requestId: id.optional(),
  reason: i.Yj().optional(),
});
export let Sq = $.extend({
  method: i.eu("notifications/cancelled"),
  params: I,
});
let j = i.Ik({
  src: i.Yj(),
  mimeType: i.Yj().optional(),
  sizes: i.YO(i.Yj()).optional(),
  theme: i.k5(["light", "dark"]).optional(),
});
let R = i.Ik({
  icons: i.YO(j).optional(),
});
let N = i.Ik({
  name: i.Yj(),
  title: i.Yj().optional(),
});
let C = N.extend({
  ...N.shape,
  ...R.shape,
  version: i.Yj(),
  websiteUrl: i.Yj().optional(),
  description: i.Yj().optional(),
});
let O = i.E$(
  i.Ik({
    applyDefaults: i.zM().optional(),
  }),
  i.g1(i.Yj(), i.L5()),
);
let q = i.vk(
  (e) => {
    if (
      e &&
      typeof e === "object" &&
      !Array.isArray(e) &&
      Object.keys(e).length === 0
    ) {
      return {
        form: {},
      };
    }
    return e;
  },
  i.E$(
    i.Ik({
      form: O.optional(),
      url: c.optional(),
    }),
    i.g1(i.Yj(), i.L5()).optional(),
  ),
);
let A = i._H({
  list: c.optional(),
  cancel: c.optional(),
  requests: i
    ._H({
      sampling: i
        ._H({
          createMessage: c.optional(),
        })
        .optional(),
      elicitation: i
        ._H({
          create: c.optional(),
        })
        .optional(),
    })
    .optional(),
});
let z = i._H({
  list: c.optional(),
  cancel: c.optional(),
  requests: i
    ._H({
      tools: i
        ._H({
          call: c.optional(),
        })
        .optional(),
    })
    .optional(),
});
let M = i.Ik({
  experimental: i.g1(i.Yj(), c).optional(),
  sampling: i
    .Ik({
      context: c.optional(),
      tools: c.optional(),
    })
    .optional(),
  elicitation: q.optional(),
  roots: i
    .Ik({
      listChanged: i.zM().optional(),
    })
    .optional(),
  tasks: A.optional(),
});
let L = g.extend({
  protocolVersion: i.Yj(),
  capabilities: M,
  clientInfo: C,
});
export let rk = v.extend({
  method: i.eu("initialize"),
  params: L,
});
let H = i.Ik({
  experimental: i.g1(i.Yj(), c).optional(),
  logging: c.optional(),
  completions: c.optional(),
  prompts: i
    .Ik({
      listChanged: i.zM().optional(),
    })
    .optional(),
  resources: i
    .Ik({
      subscribe: i.zM().optional(),
      listChanged: i.zM().optional(),
    })
    .optional(),
  tools: i
    .Ik({
      listChanged: i.zM().optional(),
    })
    .optional(),
  tasks: z.optional(),
});
export let Rk = result.extend({
  protocolVersion: i.Yj(),
  capabilities: H,
  serverInfo: C,
  instructions: i.Yj().optional(),
});
export let ZC = $.extend({
  method: i.eu("notifications/initialized"),
  params: _.optional(),
});
let F = v.extend({
  method: i.eu("ping"),
  params: g.optional(),
});
let U = i.Ik({
  progress: i.ai(),
  total: i.lq(i.ai()),
  message: i.lq(i.Yj()),
});
let K = i.Ik({
  ..._.shape,
  ...U.shape,
  progressToken,
});
export let _r = $.extend({
  method: i.eu("notifications/progress"),
  params: K,
});
let B = g.extend({
  cursor: f.optional(),
});
let G = v.extend({
  params: B.optional(),
});
let W = result.extend({
  nextCursor: f.optional(),
});
let status = i.k5([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled",
]);
let task = i.Ik({
  taskId: i.Yj(),
  status,
  ttl: i.KC([i.ai(), i.ch()]),
  createdAt: i.Yj(),
  lastUpdatedAt: i.Yj(),
  pollInterval: i.lq(i.ai()),
  statusMessage: i.lq(i.Yj()),
});
export let Mg = result.extend({
  task,
});
let ee = _.merge(task);
export let ki = $.extend({
  method: i.eu("notifications/tasks/status"),
  params: ee,
});
export let Ql = v.extend({
  method: i.eu("tasks/get"),
  params: g.extend({
    taskId: i.Yj(),
  }),
});
export let Sc = result.merge(task);
export let oQ = v.extend({
  method: i.eu("tasks/result"),
  params: g.extend({
    taskId: i.Yj(),
  }),
});
result.loose();
export let zR = G.extend({
  method: i.eu("tasks/list"),
});
export let a5 = W.extend({
  tasks: i.YO(task),
});
export let gd = v.extend({
  method: i.eu("tasks/cancel"),
  params: g.extend({
    taskId: i.Yj(),
  }),
});
export let gH = result.merge(task);
let ed = i.Ik({
  uri: i.Yj(),
  mimeType: i.lq(i.Yj()),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let ec = ed.extend({
  text: i.Yj(),
});
let eu = i.Yj().refine(
  (e) => {
    try {
      atob(e);
      return true;
    } catch {
      return false;
    }
  },
  {
    message: "Invalid Base64 string",
  },
);
let ef = ed.extend({
  blob: eu,
});
let role = i.k5(["user", "assistant"]);
let eh = i.Ik({
  audience: i.YO(role).optional(),
  priority: i.ai().min(0).max(1).optional(),
  lastModified: o
    .w$({
      offset: true,
    })
    .optional(),
});
let em = i.Ik({
  ...N.shape,
  ...R.shape,
  uri: i.Yj(),
  description: i.lq(i.Yj()),
  mimeType: i.lq(i.Yj()),
  annotations: eh.optional(),
  _meta: i.lq(i._H({})),
});
let eg = i.Ik({
  ...N.shape,
  ...R.shape,
  uriTemplate: i.Yj(),
  description: i.lq(i.Yj()),
  mimeType: i.lq(i.Yj()),
  annotations: eh.optional(),
  _meta: i.lq(i._H({})),
});
export let OI = G.extend({
  method: i.eu("resources/list"),
});
export let cv = W.extend({
  resources: i.YO(em),
});
let e_ = G.extend({
  method: i.eu("resources/templates/list"),
});
export let O$ = W.extend({
  resourceTemplates: i.YO(eg),
});
let ew = g.extend({
  uri: i.Yj(),
});
export let R6 = v.extend({
  method: i.eu("resources/read"),
  params: ew,
});
export let ve = result.extend({
  contents: i.YO(i.KC([ec, ef])),
});
export let hh = $.extend({
  method: i.eu("notifications/resources/list_changed"),
  params: _.optional(),
});
let eS = v.extend({
  method: i.eu("resources/subscribe"),
  params: ew,
});
let eT = v.extend({
  method: i.eu("resources/unsubscribe"),
  params: ew,
});
let eP = _.extend({
  uri: i.Yj(),
});
let eI = $.extend({
  method: i.eu("notifications/resources/updated"),
  params: eP,
});
let ex = i.Ik({
  name: i.Yj(),
  description: i.lq(i.Yj()),
  required: i.lq(i.zM()),
});
let ej = i.Ik({
  ...N.shape,
  ...R.shape,
  description: i.lq(i.Yj()),
  arguments: i.lq(i.YO(ex)),
  _meta: i.lq(i._H({})),
});
export let Qq = G.extend({
  method: i.eu("prompts/list"),
});
export let Yu = W.extend({
  prompts: i.YO(ej),
});
let eC = g.extend({
  name: i.Yj(),
  arguments: i.g1(i.Yj(), i.Yj()).optional(),
});
export let $p = v.extend({
  method: i.eu("prompts/get"),
  params: eC,
});
let eq = i.Ik({
  type: i.eu("text"),
  text: i.Yj(),
  annotations: eh.optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let eA = i.Ik({
  type: i.eu("image"),
  data: eu,
  mimeType: i.Yj(),
  annotations: eh.optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let ez = i.Ik({
  type: i.eu("audio"),
  data: eu,
  mimeType: i.Yj(),
  annotations: eh.optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let eM = i.Ik({
  type: i.eu("tool_use"),
  name: i.Yj(),
  id: i.Yj(),
  input: i.g1(i.Yj(), i.L5()),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let eL = i.Ik({
  type: i.eu("resource"),
  resource: i.KC([ec, ef]),
  annotations: eh.optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let eY = em.extend({
  type: i.eu("resource_link"),
});
let eH = i.KC([eq, eA, ez, eY, eL]);
let eV = i.Ik({
  role,
  content: eH,
});
export let HM = result.extend({
  description: i.Yj().optional(),
  messages: i.YO(eV),
});
export let br = $.extend({
  method: i.eu("notifications/prompts/list_changed"),
  params: _.optional(),
});
let eU = i.Ik({
  title: i.Yj().optional(),
  readOnlyHint: i.zM().optional(),
  destructiveHint: i.zM().optional(),
  idempotentHint: i.zM().optional(),
  openWorldHint: i.zM().optional(),
});
let eK = i.Ik({
  taskSupport: i.k5(["required", "optional", "forbidden"]).optional(),
});
let eZ = i.Ik({
  ...N.shape,
  ...R.shape,
  description: i.Yj().optional(),
  inputSchema: i
    .Ik({
      type: i.eu("object"),
      properties: i.g1(i.Yj(), c).optional(),
      required: i.YO(i.Yj()).optional(),
    })
    .catchall(i.L5()),
  outputSchema: i
    .Ik({
      type: i.eu("object"),
      properties: i.g1(i.Yj(), c).optional(),
      required: i.YO(i.Yj()).optional(),
    })
    .catchall(i.L5())
    .optional(),
  annotations: eU.optional(),
  execution: eK.optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
export let gW = G.extend({
  method: i.eu("tools/list"),
});
export let WT = W.extend({
  tools: i.YO(eZ),
});
export let TF = result.extend({
  content: i.YO(eH).default([]),
  structuredContent: i.g1(i.Yj(), i.L5()).optional(),
  isError: i.zM().optional(),
});
TF.or(
  result.extend({
    toolResult: i.L5(),
  }),
);
let eQ = y.extend({
  name: i.Yj(),
  arguments: i.g1(i.Yj(), i.L5()).optional(),
});
export let FT = v.extend({
  method: i.eu("tools/call"),
  params: eQ,
});
export let fH = $.extend({
  method: i.eu("notifications/tools/list_changed"),
  params: _.optional(),
});
export let xI = i.Ik({
  autoRefresh: i.zM().default(true),
  debounceMs: i.ai().int().nonnegative().default(300),
});
export let FP = i.k5([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency",
]);
let e2 = g.extend({
  level: FP,
});
export let b_ = v.extend({
  method: i.eu("logging/setLevel"),
  params: e2,
});
let e9 = _.extend({
  level: FP,
  logger: i.Yj().optional(),
  data: i.L5(),
});
let e4 = $.extend({
  method: i.eu("notifications/message"),
  params: e9,
});
let e3 = i.Ik({
  name: i.Yj().optional(),
});
let e6 = i.Ik({
  hints: i.YO(e3).optional(),
  costPriority: i.ai().min(0).max(1).optional(),
  speedPriority: i.ai().min(0).max(1).optional(),
  intelligencePriority: i.ai().min(0).max(1).optional(),
});
let e8 = i.Ik({
  mode: i.k5(["auto", "required", "none"]).optional(),
});
let e7 = i.Ik({
  type: i.eu("tool_result"),
  toolUseId: i
    .Yj()
    .describe("The unique identifier for the corresponding tool call."),
  content: i.YO(eH).default([]),
  structuredContent: i.Ik({}).loose().optional(),
  isError: i.zM().optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let content = i.gM("type", [eq, eA, ez]);
let tt = i.gM("type", [eq, eA, ez, eM, e7]);
let tr = i.Ik({
  role,
  content: i.KC([tt, i.YO(tt)]),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let ta = y.extend({
  messages: i.YO(tr),
  modelPreferences: e6.optional(),
  systemPrompt: i.Yj().optional(),
  includeContext: i.k5(["none", "thisServer", "allServers"]).optional(),
  temperature: i.ai().optional(),
  maxTokens: i.ai().int(),
  stopSequences: i.YO(i.Yj()).optional(),
  metadata: c.optional(),
  tools: i.YO(eZ).optional(),
  toolChoice: e8.optional(),
});
export let u9 = v.extend({
  method: i.eu("sampling/createMessage"),
  params: ta,
});
export let K1 = result.extend({
  model: i.Yj(),
  stopReason: i.lq(i.k5(["endTurn", "stopSequence", "maxTokens"]).or(i.Yj())),
  role,
  content,
});
export let TI = result.extend({
  model: i.Yj(),
  stopReason: i.lq(
    i.k5(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(i.Yj()),
  ),
  role,
  content: i.KC([tt, i.YO(tt)]),
});
let tn = i.Ik({
  type: i.eu("boolean"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  default: i.zM().optional(),
});
let tl = i.Ik({
  type: i.eu("string"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  minLength: i.ai().optional(),
  maxLength: i.ai().optional(),
  format: i.k5(["email", "uri", "date", "date-time"]).optional(),
  default: i.Yj().optional(),
});
let td = i.Ik({
  type: i.k5(["number", "integer"]),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  minimum: i.ai().optional(),
  maximum: i.ai().optional(),
  default: i.ai().optional(),
});
let tc = i.Ik({
  type: i.eu("string"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  enum: i.YO(i.Yj()),
  default: i.Yj().optional(),
});
let tu = i.Ik({
  type: i.eu("string"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  oneOf: i.YO(
    i.Ik({
      const: i.Yj(),
      title: i.Yj(),
    }),
  ),
  default: i.Yj().optional(),
});
let tf = i.Ik({
  type: i.eu("string"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  enum: i.YO(i.Yj()),
  enumNames: i.YO(i.Yj()).optional(),
  default: i.Yj().optional(),
});
let tp = i.KC([tc, tu]);
let th = i.Ik({
  type: i.eu("array"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  minItems: i.ai().optional(),
  maxItems: i.ai().optional(),
  items: i.Ik({
    type: i.eu("string"),
    enum: i.YO(i.Yj()),
  }),
  default: i.YO(i.Yj()).optional(),
});
let tm = i.Ik({
  type: i.eu("array"),
  title: i.Yj().optional(),
  description: i.Yj().optional(),
  minItems: i.ai().optional(),
  maxItems: i.ai().optional(),
  items: i.Ik({
    anyOf: i.YO(
      i.Ik({
        const: i.Yj(),
        title: i.Yj(),
      }),
    ),
  }),
  default: i.YO(i.Yj()).optional(),
});
let tg = i.KC([th, tm]);
let ty = i.KC([tf, tp, tg]);
let tv = i.KC([ty, tn, tl, td]);
let t_ = y.extend({
  mode: i.eu("form").optional(),
  message: i.Yj(),
  requestedSchema: i.Ik({
    type: i.eu("object"),
    properties: i.g1(i.Yj(), tv),
    required: i.YO(i.Yj()).optional(),
  }),
});
let t$ = y.extend({
  mode: i.eu("url"),
  message: i.Yj(),
  elicitationId: i.Yj(),
  url: i.Yj().url(),
});
let tw = i.KC([t_, t$]);
export let $9 = v.extend({
  method: i.eu("elicitation/create"),
  params: tw,
});
let tk = _.extend({
  elicitationId: i.Yj(),
});
let tE = $.extend({
  method: i.eu("notifications/elicitation/complete"),
  params: tk,
});
export let n_ = result.extend({
  action: i.k5(["accept", "decline", "cancel"]),
  content: i.vk(
    (e) => {
      if (e === null) {
        return undefined;
      }
      return e;
    },
    i.g1(i.Yj(), i.KC([i.Yj(), i.ai(), i.zM(), i.YO(i.Yj())])).optional(),
  ),
});
let tT = i.Ik({
  type: i.eu("ref/resource"),
  uri: i.Yj(),
});
let tP = i.Ik({
  type: i.eu("ref/prompt"),
  name: i.Yj(),
});
let tI = g.extend({
  ref: i.KC([tP, tT]),
  argument: i.Ik({
    name: i.Yj(),
    value: i.Yj(),
  }),
  context: i
    .Ik({
      arguments: i.g1(i.Yj(), i.Yj()).optional(),
    })
    .optional(),
});
export let iK = v.extend({
  method: i.eu("completion/complete"),
  params: tI,
});
export function uv(e) {
  if (e.params.ref.type !== "ref/prompt") {
    throw TypeError(
      `Expected CompleteRequestPrompt, but got ${e.params.ref.type}`,
    );
  }
}
export function X6(e) {
  if (e.params.ref.type !== "ref/resource") {
    throw TypeError(
      `Expected CompleteRequestResourceTemplate, but got ${e.params.ref.type}`,
    );
  }
}
export let GU = result.extend({
  completion: i._H({
    values: i.YO(i.Yj()).max(100),
    total: i.lq(i.ai().int()),
    hasMore: i.lq(i.zM()),
  }),
});
let tC = i.Ik({
  uri: i.Yj().startsWith("file://"),
  name: i.Yj().optional(),
  _meta: i.g1(i.Yj(), i.L5()).optional(),
});
let tO = v.extend({
  method: i.eu("roots/list"),
  params: g.optional(),
});
export let Cs = result.extend({
  roots: i.YO(tC),
});
let tA = $.extend({
  method: i.eu("notifications/roots/list_changed"),
  params: _.optional(),
});
i.KC([F, rk, iK, b_, $p, Qq, OI, e_, R6, eS, eT, FT, gW, Ql, oQ, zR, gd]);
i.KC([Sq, _r, ZC, tA, ki]);
i.KC([wR, K1, TI, n_, Cs, Sc, a5, Mg]);
i.KC([F, u9, $9, tO, Ql, oQ, zR, gd]);
i.KC([Sq, _r, e4, eI, hh, fH, br, ki, tE]);
i.KC([wR, Rk, GU, HM, Yu, cv, O$, ve, TF, WT, Sc, a5, Mg]);
export class Nh extends Error {
  constructor(e, t, r) {
    super(`MCP error ${e}: ${t}`);
    this.code = e;
    this.data = r;
    this.name = "McpError";
  }
  static fromError(e, t, r) {
    if (e === O4.UrlElicitationRequired && r && r.elicitations) {
      return new tM(r.elicitations, t);
    }
    return new Nh(e, t, r);
  }
}
class tM extends Nh {
  constructor(
    elicitations,
    t = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`,
  ) {
    super(O4.UrlElicitationRequired, t, {
      elicitations,
    });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
export const LW = (e) => T.safeParse(e).success;
export const bZ = (e) => y.safeParse(e).success;
export const ig = (e) => S.safeParse(e).success;
export const lg = (e) => E.safeParse(e).success;
export { e_ as s };
export { F as tC };
export const vo = (e) => k.safeParse(e).success;

import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import {
  mkdir,
  readFile,
  writeFile,
  rename,
  rm,
  mkdtemp,
  stat,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import { inspectRecovery } from "./recovery-check.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sha256 = (data) => createHash("sha256").update(data).digest("hex");
const posix = (value) => value.split(path.sep).join("/");
const json = async (filename, value) => {
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, JSON.stringify(value, null, 2) + "\n");
};
const manifest = JSON.parse(
  await readFile(path.join(root, "research/capture/manifest.json"), "utf8"),
);
const preparedRoot = path.join(root, "research/prepared");
const groups = new Map();
const prepared = [];
const sourceFacts = [];
const factories = [];

// Recognize the registration expression structurally; a prefixed UMD guard causes
// Wakaru 1.14.0 to keep some otherwise ordinary Rspack chunks unsplit.
function memberName(node) {
  if (
    node?.type !== "MemberExpression" ||
    node.object.type !== "Identifier" ||
    !["self", "window", "globalThis"].includes(node.object.name)
  )
    return null;
  return node.computed
    ? node.property.type === "StringLiteral"
      ? node.property.value
      : null
    : node.property.name;
}
function chunkRegistration(call) {
  if (
    call?.type !== "CallExpression" ||
    call.callee.type !== "MemberExpression" ||
    call.callee.computed ||
    call.callee.property.name !== "push"
  )
    return null;
  const assignment = call.callee.object;
  if (assignment.type !== "AssignmentExpression" || assignment.operator !== "=")
    return null;
  const name = memberName(assignment.left);
  const value = assignment.right;
  if (
    !name ||
    value.type !== "LogicalExpression" ||
    value.operator !== "||" ||
    memberName(value.left) !== name ||
    value.right.type !== "ArrayExpression" ||
    value.right.elements.length
  )
    return null;
  const registration = call.arguments[0];
  if (
    call.arguments.length !== 1 ||
    registration?.type !== "ArrayExpression" ||
    registration.elements[0]?.type !== "ArrayExpression" ||
    registration.elements[1]?.type !== "ObjectExpression"
  )
    return null;
  return {
    name,
    moduleCount: registration.elements[1].properties.length,
    factories: registration.elements[1].properties,
  };
}

function topLevelUnits(statement) {
  const expression =
    statement.type === "ExpressionStatement" ? statement.expression : statement;
  return expression.type === "SequenceExpression"
    ? expression.expressions.flatMap(topLevelUnits)
    : [expression];
}

await mkdir(preparedRoot, { recursive: true });
for (const resource of manifest.resources) {
  const originalInput = "research/capture/" + resource.path;
  const bytes = await readFile(path.join(root, originalInput));
  if (bytes.length !== resource.bytes || sha256(bytes) !== resource.sha256)
    throw new Error(`Capture integrity mismatch: ${originalInput}`);
  if (resource.kind !== "javascript") continue;
  const source = bytes.toString("utf8");
  const ast = parse(source, {
    sourceType: "unambiguous",
    createImportExpressions: true,
  });
  const units = ast.program.body.flatMap(topLevelUnits);
  const registrations = units
    .map((statement) => ({
      statement,
      registration: chunkRegistration(statement),
    }))
    .filter((item) => item.registration);
  const facts = {
    input: originalInput,
    registeredChunks: registrations.length,
    factoryCount: registrations.reduce(
      (sum, item) => sum + item.registration.moduleCount,
      0,
    ),
    unselectedStatementRanges: [],
  };
  for (const { registration } of registrations) {
    for (const property of registration.factories) {
      const body =
        property.type === "ObjectMethod" ? property.body : property.value?.body;
      const id =
        !property.computed && property.key?.type === "Identifier"
          ? property.key.name
          : ["StringLiteral", "NumericLiteral"].includes(property.key?.type)
            ? String(property.key.value)
            : null;
      if (id === null || body?.type !== "BlockStatement") continue;
      const range = [
        Buffer.byteLength(source.slice(0, body.start)),
        Buffer.byteLength(source.slice(0, body.end)),
      ];
      factories.push({
        runtimeNamespace: registration.name,
        id,
        input: originalInput,
        bodyRange: range,
        bodyContentRange: [range[0] + 1, range[1] - 1],
        bodySha256: sha256(bytes.subarray(...range)),
      });
    }
  }
  const selections = registrations.length
    ? registrations.map(({ statement, registration }, index) => ({
        start: statement.start,
        end: statement.end,
        group: registration.name,
        name: `${index}-${path.basename(resource.path)}`,
        kind: "exact-top-level-rspack-registration",
      }))
    : [
        {
          start: 0,
          end: source.length,
          group: "standalone-" + path.basename(resource.path, ".js"),
          name: path.basename(resource.path),
          kind: "whole-script",
        },
      ];
  if (registrations.length) {
    const selected = new Set(registrations.map((item) => item.statement));
    for (const statement of units)
      if (!selected.has(statement))
        facts.unselectedStatementRanges.push([
          Buffer.byteLength(source.slice(0, statement.start)),
          Buffer.byteLength(source.slice(0, statement.end)),
        ]);
  }
  sourceFacts.push(facts);
  for (const selection of selections) {
    const start = Buffer.byteLength(source.slice(0, selection.start));
    const end = Buffer.byteLength(source.slice(0, selection.end));
    const snapshot = bytes.subarray(start, end);
    const input = `research/prepared/${selection.group}/${selection.name}`;
    const record = {
      input,
      originalInput,
      originalSha256: resource.sha256,
      originalByteRange: [start, end],
      sha256: sha256(snapshot),
      bytes: snapshot.length,
      kind: selection.kind,
      runtimeNamespace:
        selection.kind === "whole-script" ? null : selection.group,
    };
    await mkdir(path.dirname(path.join(root, input)), { recursive: true });
    await writeFile(path.join(root, input), snapshot);
    prepared.push(record);
    if (!groups.has(selection.group)) groups.set(selection.group, []);
    groups.get(selection.group).push(input);
  }
}
await json(path.join(preparedRoot, "manifest.json"), {
  schemaVersion: 1,
  producer:
    "Babel AST selection of exact source bytes; application code is never executed",
  rationale:
    "Keep separate chunk registration namespaces isolated; expose top-level Rspack registrations behind UMD instrumentation to Wakaru. Unselected statements remain in the complete raw capture and are not silently presented as recovered application modules.",
  inputs: prepared,
  sources: sourceFacts,
  factories,
});

if (process.argv.includes("--inventory-only")) {
  const inventory = await inspectRecovery({ root, write: true });
  console.log(JSON.stringify(inventory.summary, null, 2));
  process.exit(0);
}

const stage = await mkdtemp(path.join(root, ".recovery-stage-"));
const preparedByInput = new Map(prepared.map((item) => [item.input, item]));
const modules = [];
const runs = [];
try {
  const bin = path.join(
    root,
    "node_modules/.bin",
    process.platform === "win32" ? "wakaru.cmd" : "wakaru",
  );
  const version = spawnSync(bin, ["--version"], {
    cwd: root,
    encoding: "utf8",
    timeout: 10000,
  });
  if (version.status !== 0 || version.stdout.trim() !== "wakaru 1.14.0")
    throw new Error("npm ci must install pinned Wakaru 1.14.0 before recovery");
  for (const [group, inputs] of groups) {
    const output = posix(
      path.relative(root, path.join(stage, "modules", group)),
    );
    const args = [
      ...inputs,
      "--unpack=strict",
      "--level",
      "minimal",
      "--diagnostics",
      "--formatter",
      "--emit-source-map",
      "--provenance",
      "--json",
      "-o",
      output,
    ];
    console.log(`Recovering ${group}: ${inputs.length} source fragments`);
    const result = spawnSync(bin, args, {
      cwd: root,
      encoding: "utf8",
      timeout: 120000,
      maxBuffer: 16 * 1024 * 1024,
      env: { ...process.env, RAYON_NUM_THREADS: "1" },
    });
    if (result.error) throw result.error;
    let report;
    try {
      report = JSON.parse(result.stdout);
    } catch {
      throw new Error(
        `Wakaru did not produce a usable report for ${group}: ${result.stderr.slice(0, 500)}`,
      );
    }
    if (!Array.isArray(report.modules))
      throw new Error(`No emitted module list for ${group}`);
    const provenance = JSON.parse(
      await readFile(path.join(root, output, "provenance.json"), "utf8"),
    );
    await json(path.join(stage, "reports", group + ".json"), report);
    await writeFile(
      path.join(stage, "reports", group + ".stderr.txt"),
      result.stderr,
    );
    runs.push({
      group,
      inputs,
      exitCode: result.status,
      detectedFormats: report.detected_formats,
      modules: report.total,
      failed: report.failed,
      warnings: report.warnings?.length ?? 0,
    });
    for (const module of report.modules) {
      const origin = provenance.modules[module.filename];
      const input = preparedByInput.get(origin?.input);
      const unattributed =
        origin?.input === "" &&
        Array.isArray(origin.ranges) &&
        origin.ranges.length === 0;
      if (!input && !unattributed)
        throw new Error(
          `Unknown provenance input for ${group}/${module.filename}`,
        );
      const emittedPath = `modules/${group}/${module.filename}`;
      const absolute = path.resolve(stage, emittedPath);
      if (!absolute.startsWith(stage + path.sep))
        throw new Error("Module path escaped recovery output");
      const data = await readFile(absolute);
      for (const [start, end] of origin.ranges)
        if (
          !Number.isSafeInteger(start) ||
          !Number.isSafeInteger(end) ||
          start < 0 ||
          start > end ||
          end > input.bytes
        )
          throw new Error(`Invalid extraction range for ${emittedPath}`);
      const mapPath = emittedPath + ".map";
      const map = await readFile(path.join(stage, mapPath)).catch((error) => {
        if (error.code === "ENOENT") return null;
        throw error;
      });
      modules.push({
        path: emittedPath,
        bytes: data.length,
        sha256: sha256(data),
        status: module.status,
        kind: module.kind,
        input: input?.originalInput ?? null,
        preparedInput: input?.input ?? null,
        sourceRanges: origin.ranges.map(([start, end]) => [
          start + input.originalByteRange[0],
          end + input.originalByteRange[0],
        ]),
        extraction: origin.extraction,
        ...(unattributed
          ? {
              provenanceLimitation:
                "Wakaru emitted this artifact with empty input and extraction ranges. Its original source attribution is unknown; source-map headers alone do not establish provenance.",
            }
          : {}),
        ...(map
          ? {
              sourceMap: {
                path: mapPath,
                bytes: map.length,
                sha256: sha256(map),
              },
            }
          : {}),
      });
    }
  }
  await json(path.join(stage, "manifest.json"), {
    schemaVersion: 1,
    producer: {
      name: "Wakaru",
      version: "1.14.0",
      integration: "Direct official CLI on macOS; this is not REA Evidence",
      arguments: [
        "<prepared group inputs>",
        "--unpack=strict",
        "--level",
        "minimal",
        "--diagnostics",
        "--formatter",
        "--emit-source-map",
        "--provenance",
        "--json",
        "-o",
        "<output group>",
      ],
      workerThreads: 1,
      timeoutMsPerGroup: 120000,
    },
    sourceDate: "2026-10-26",
    interpretation:
      "Derived learning artifacts, not original source files or a verified executable application. Raw capture, exact AST-selected input spans, producer provenance, maps, diagnostics and unresolved imports remain available.",
    runs,
    modules,
  });
  const inventory = await inspectRecovery({
    root,
    outputRoot: stage,
    write: true,
  });
  await writeFile(
    path.join(stage, ".generated-by-recovery"),
    "scripts/recovery.mjs\n",
  );
  const destination = path.join(root, "recovered");
  const existing = await stat(destination).catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (existing) {
    const marker = await readFile(
      path.join(destination, ".generated-by-recovery"),
      "utf8",
    ).catch(() => null);
    if (marker !== "scripts/recovery.mjs\n")
      throw new Error(
        "Refusing to replace an output not owned by scripts/recovery.mjs",
      );
    const backup = destination + ".previous";
    if (await stat(backup).catch(() => null))
      throw new Error(
        "recovered.previous exists; preserve or remove it before regenerating",
      );
    await rename(destination, backup);
    try {
      await rename(stage, destination);
    } catch (error) {
      await rename(backup, destination);
      throw error;
    }
    await rm(backup, { recursive: true });
  } else await rename(stage, destination);
  console.log(JSON.stringify(inventory.summary, null, 2));
} catch (error) {
  console.error(
    `Recovery failed. Previous output remains available; staging retained at ${path.basename(stage)} for inspection.`,
  );
  throw error;
}

import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";

const sha256 = (data) => createHash("sha256").update(data).digest("hex");
const readJson = async (filename) =>
  JSON.parse(await readFile(filename, "utf8"));

// This examines syntax and import representations. It never imports or runs the
// captured application. An unresolved name is not evidence that a module is absent.
export async function inspectRecovery({
  root,
  outputRoot = path.join(root, "recovered"),
  write = false,
}) {
  const capture = await readJson(
    path.join(root, "research/capture/manifest.json"),
  );
  const prepared = await readJson(
    path.join(root, "research/prepared/manifest.json"),
  );
  const manifest = await readJson(path.join(outputRoot, "manifest.json"));
  const sourceBytes = new Map();
  const emitted = new Map(
    manifest.modules.map((module) => [module.path, module]),
  );
  const preparedPaths = new Set(
    prepared.inputs.map((input) => path.resolve(root, input.input)),
  );
  const inventory = {
    schemaVersion: 1,
    scope:
      "Static syntax, exact relative import resolution, source-map targets, byte ranges and artifact hashes. No target execution, runtime validation or network access.",
    summary: {},
    syntaxFailures: [],
    unresolved: [],
    nonliteralLoads: [],
    warnings: [],
  };
  for (const resource of capture.resources) {
    const filename = "research/capture/" + resource.path;
    const bytes = await readFile(path.join(root, filename));
    if (bytes.length !== resource.bytes || sha256(bytes) !== resource.sha256)
      throw new Error(`Capture integrity mismatch: ${filename}`);
    sourceBytes.set(filename, bytes);
  }
  for (const input of prepared.inputs) {
    const actual = await readFile(path.join(root, input.input));
    const original = sourceBytes.get(input.originalInput);
    const [start, end] = input.originalByteRange;
    if (
      !original ||
      !actual.equals(original.subarray(start, end)) ||
      actual.length !== input.bytes ||
      sha256(actual) !== input.sha256
    )
      throw new Error(`Prepared span mismatch: ${input.input}`);
  }
  const modulesByRange = new Map();
  for (const module of manifest.modules) {
    if (module.input && module.sourceRanges.length === 1) {
      const key = module.input + ":" + module.sourceRanges[0].join(":");
      if (!modulesByRange.has(key)) modulesByRange.set(key, []);
      modulesByRange.get(key).push(module.path);
    }
  }
  const identities = new Map();
  for (const factory of prepared.factories) {
    const bytes = sourceBytes
      .get(factory.input)
      ?.subarray(...factory.bodyRange);
    if (!bytes || sha256(bytes) !== factory.bodySha256)
      throw new Error(
        `Factory identity differs from capture: ${factory.input}:${factory.id}`,
      );
    const key = factory.runtimeNamespace + ":" + factory.id;
    if (!identities.has(key))
      identities.set(key, {
        runtimeNamespace: factory.runtimeNamespace,
        id: factory.id,
        occurrences: 0,
        bodyDigests: new Set(),
        emittedModules: new Set(),
      });
    const identity = identities.get(key);
    identity.occurrences++;
    identity.bodyDigests.add(factory.bodySha256);
    for (const filename of modulesByRange.get(
      factory.input + ":" + factory.bodyContentRange.join(":"),
    ) ?? [])
      identity.emittedModules.add(filename);
  }
  const moduleIdIndex = {
    schemaVersion: 1,
    scope:
      "Original Rspack factory IDs within each runtime namespace. An emitted module is linked only when its full extraction range exactly equals the original factory body interior, excluding its two structural braces. Editor paths do not assert runtime equivalence.",
    identities: [...identities.values()].map((identity) => ({
      runtimeNamespace: identity.runtimeNamespace,
      id: identity.id,
      factoryOccurrences: identity.occurrences,
      distinctFactoryBodies: identity.bodyDigests.size,
      emittedModules: [...identity.emittedModules].sort(),
      classification:
        identity.bodyDigests.size > 1
          ? "different-body-bytes-for-same-id"
          : identity.occurrences > 1
            ? "same-body-bytes-repeated"
            : "single-factory-occurrence",
    })),
  };
  const navigationById = new Map(
    moduleIdIndex.identities.map((identity) => [
      identity.runtimeNamespace + ":" + identity.id,
      identity,
    ]),
  );
  const unresolved = new Map();
  let resolvedReferences = 0;
  let totalReferences = 0;
  let sourceMapCount = 0;
  const addReference = (module, kind, specifier) => {
    totalReferences++;
    const resolved = specifier.startsWith(".")
      ? path.posix.normalize(
          path.posix.join(path.posix.dirname(module.path), specifier),
        )
      : null;
    if (resolved && emitted.has(resolved)) {
      resolvedReferences++;
      return;
    }
    const group = module.path.split("/")[1];
    const key = group + "\u0000" + kind + "\u0000" + specifier;
    if (!unresolved.has(key))
      unresolved.set(key, {
        kind,
        specifier,
        runtimeGroup: group,
        ...(navigationById.has(group + ":" + specifier)
          ? {
              moduleIdentity: group + ":" + specifier,
              emittedCandidates: navigationById.get(group + ":" + specifier)
                .emittedModules,
            }
          : {}),
        classification: specifier.startsWith(".")
          ? "relative-target-not-emitted"
          : "unresolved-external-or-bundler-id",
        consumers: [],
      });
    unresolved.get(key).consumers.push(module.path);
  };
  for (const module of manifest.modules) {
    const filename = path.resolve(outputRoot, module.path);
    if (!filename.startsWith(outputRoot + path.sep))
      throw new Error("Module path escaped output");
    const bytes = await readFile(filename);
    if (bytes.length !== module.bytes || sha256(bytes) !== module.sha256)
      throw new Error(`Derived artifact integrity mismatch: ${module.path}`);
    const source = sourceBytes.get(module.input);
    for (const [start, end] of module.sourceRanges)
      if (
        !source ||
        !Number.isSafeInteger(start) ||
        !Number.isSafeInteger(end) ||
        start < 0 ||
        start > end ||
        end > source.length
      )
        throw new Error(`Invalid original source range: ${module.path}`);
    if (module.sourceMap) {
      const mapBytes = await readFile(
        path.join(outputRoot, module.sourceMap.path),
      );
      if (
        mapBytes.length !== module.sourceMap.bytes ||
        sha256(mapBytes) !== module.sourceMap.sha256
      )
        throw new Error(`Source-map hash mismatch: ${module.path}`);
      const map = JSON.parse(mapBytes);
      if (map.version !== 3)
        throw new Error(`Unexpected source-map version: ${module.path}`);
      for (const target of map.sources) {
        const absolute = path.resolve(
          path.dirname(filename),
          map.sourceRoot ?? "",
          target,
        );
        const expected = module.preparedInput
          ? path.resolve(root, module.preparedInput)
          : null;
        if (expected ? absolute !== expected : !preparedPaths.has(absolute))
          throw new Error(
            `Source-map target differs from prepared input: ${module.path}`,
          );
      }
      sourceMapCount++;
    }
    if (module.kind !== "javascript") continue;
    let ast;
    try {
      ast = parse(bytes.toString("utf8"), {
        sourceType: "unambiguous",
        createImportExpressions: true,
        allowReturnOutsideFunction: true,
      });
    } catch (error) {
      inventory.syntaxFailures.push({
        module: module.path,
        message: error.message,
      });
      continue;
    }
    const stack = [ast.program];
    while (stack.length) {
      const node = stack.pop();
      if (!node || typeof node !== "object") continue;
      if (
        [
          "ImportDeclaration",
          "ExportNamedDeclaration",
          "ExportAllDeclaration",
        ].includes(node.type) &&
        node.source?.type === "StringLiteral"
      )
        addReference(module, node.type, node.source.value);
      if (node.type === "ImportExpression") {
        if (node.source.type === "StringLiteral")
          addReference(module, "dynamic-import", node.source.value);
        else
          inventory.nonliteralLoads.push({
            module: module.path,
            kind: "dynamic-import",
            line: node.loc.start.line,
          });
      }
      if (
        node.type === "CallExpression" &&
        node.callee.type === "Identifier" &&
        ["require", "__webpack_require__", "__require"].includes(
          node.callee.name,
        )
      ) {
        const argument = node.arguments[0];
        if (
          node.arguments.length === 1 &&
          ["StringLiteral", "NumericLiteral"].includes(argument?.type)
        )
          addReference(module, node.callee.name, String(argument.value));
        else
          inventory.nonliteralLoads.push({
            module: module.path,
            kind: node.callee.name,
            line: node.loc.start.line,
          });
      }
      for (const [key, value] of Object.entries(node)) {
        if (
          [
            "loc",
            "start",
            "end",
            "extra",
            "comments",
            "leadingComments",
            "trailingComments",
            "innerComments",
            "tokens",
          ].includes(key)
        )
          continue;
        if (Array.isArray(value)) {
          for (const item of value) if (item?.type) stack.push(item);
        } else if (value?.type) stack.push(value);
      }
    }
  }
  for (const run of manifest.runs) {
    const report = await readJson(
      path.join(outputRoot, "reports", run.group + ".json"),
    );
    for (const warning of report.warnings ?? [])
      inventory.warnings.push({ group: run.group, ...warning });
  }
  inventory.unresolved = [...unresolved.values()]
    .map((record) => ({
      ...record,
      occurrences: record.consumers.length,
      consumers: [...new Set(record.consumers)],
    }))
    .sort(
      (a, b) =>
        b.occurrences - a.occurrences || a.specifier.localeCompare(b.specifier),
    );
  inventory.summary = {
    captureJavaScriptFiles: capture.resources.filter(
      (r) => r.kind === "javascript",
    ).length,
    captureCssFiles: capture.resources.filter((r) => r.kind === "css").length,
    preparedInputs: prepared.inputs.length,
    runtimeGroups: manifest.runs.length,
    derivedModules: manifest.modules.length,
    observedFactoryOccurrences: prepared.factories.length,
    distinctRuntimeScopedModuleIds: moduleIdIndex.identities.length,
    repeatedModuleIds: moduleIdIndex.identities.filter(
      (identity) => identity.factoryOccurrences > 1,
    ).length,
    moduleIdsWithDifferentBodyBytes: moduleIdIndex.identities.filter(
      (identity) => identity.distinctFactoryBodies > 1,
    ).length,
    unattributedDerivedModules: manifest.modules.filter(
      (module) => module.input === null,
    ).length,
    sourceMaps: sourceMapCount,
    syntaxFailures: inventory.syntaxFailures.length,
    literalDependencyReferences: totalReferences,
    resolvedRelativeReferences: resolvedReferences,
    unresolvedReferences: totalReferences - resolvedReferences,
    distinctUnresolvedRequests: inventory.unresolved.length,
    nonliteralLoads: inventory.nonliteralLoads.length,
    toolWarnings: inventory.warnings.length,
    errorClassWarnings: inventory.warnings.filter((warning) => warning.is_error)
      .length,
    integrity:
      "All capture hashes, exact selected spans, emitted hashes, attributed extraction bounds and emitted source-map targets verified; unattributed modules remain explicitly unknown.",
  };
  if (write)
    await writeFile(
      path.join(outputRoot, "inventory.json"),
      JSON.stringify(inventory, null, 2) + "\n",
    );
  if (write) {
    await writeFile(
      path.join(outputRoot, "module-id-index.json"),
      JSON.stringify(moduleIdIndex, null, 2) + "\n",
    );
    for (const namespace of new Set(
      moduleIdIndex.identities.map((identity) => identity.runtimeNamespace),
    )) {
      const paths = Object.fromEntries(
        moduleIdIndex.identities
          .filter(
            (identity) =>
              identity.runtimeNamespace === namespace &&
              identity.emittedModules.length === 1,
          )
          .map((identity) => [
            identity.id,
            ["./" + path.posix.basename(identity.emittedModules[0])],
          ]),
      );
      await writeFile(
        path.join(outputRoot, "modules", namespace, "jsconfig.json"),
        JSON.stringify(
          {
            compilerOptions: {
              allowJs: true,
              checkJs: false,
              baseUrl: ".",
              paths,
            },
            include: ["*.js"],
          },
          null,
          2,
        ) + "\n",
      );
    }
    const summary = inventory.summary;
    const template = await readFile(
      path.join(root, "research/RECOVERY.template.md"),
      "utf8",
    );
    const readme = template.replace(/\{\{([a-zA-Z]+)\}\}/g, (_, key) => {
      if (typeof summary[key] !== "number")
        throw new Error(`Unknown README summary key: ${key}`);
      return summary[key].toLocaleString("en-US");
    });
    await writeFile(path.join(outputRoot, "README.md"), readme);
  }
  return inventory;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const result = await inspectRecovery({ root });
  const saved = await readJson(path.join(root, "recovered/inventory.json"));
  if (JSON.stringify(result) !== JSON.stringify(saved))
    throw new Error(
      "Dependency inventory differs; regenerate with npm run recover and review changes.",
    );
  console.log(JSON.stringify(result.summary, null, 2));
  if (result.syntaxFailures.length || result.summary.errorClassWarnings)
    process.exitCode = 1;
}

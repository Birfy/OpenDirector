/** Retain successful reads in selection order. Cancellation never yields a partial commit. */
import { tNow } from "../i18n/messages.ts";
export async function readImportBatch<T>(
  files: readonly File[],
  read: (file: File, signal: AbortSignal) => Promise<T>,
  signal: AbortSignal,
): Promise<{
  successes: { index: number; file: File; value: T }[];
  failures: { name: string; message: string }[];
}> {
  const successes: { index: number; file: File; value: T }[] = [];
  const failures: { name: string; message: string }[] = [];
  for (const [index, file] of files.entries()) {
    signal.throwIfAborted();
    try {
      successes.push({ index, file, value: await read(file, signal) });
    } catch (error) {
      signal.throwIfAborted();
      failures.push({
        name: file.name,
        message: error instanceof Error ? error.message : tNow("errors.import.readFailed"),
      });
    }
  }
  signal.throwIfAborted();
  return { successes, failures };
}

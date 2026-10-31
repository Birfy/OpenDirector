/** Prefer a consistent AAC implementation over platform-specific native encoders. */
export async function prepareSoftwareAac(): Promise<void> {
  const { registerAacEncoder } = await import("@mediabunny/aac-encoder");
  registerAacEncoder();
}

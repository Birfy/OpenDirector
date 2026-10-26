import { createDocument, createNode } from "./model";
import type { CanvasDocument } from "./model";

/** Original vector study assets; these are illustrations, not AI results or remote media. */
export function studyImage(seed = 0, title = "光与山之间"): string {
  const palettes = [
    ["#b0c8be", "#446e64", "#1b413e", "#e5cdb0"],
    ["#c7b5ab", "#876d78", "#393545", "#edb497"],
    ["#b7c6ce", "#607d90", "#253c53", "#eee7c8"],
  ];
  const p =
    palettes[((seed % palettes.length) + palettes.length) % palettes.length]!;
  const escaped = title.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1000" viewBox="0 0 1200 1000"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${p[0]}"/><stop offset="1" stop-color="${p[3]}"/></linearGradient><linearGradient id="lake" x2="0" y2="1"><stop stop-color="${p[1]}"/><stop offset="1" stop-color="${p[2]}"/></linearGradient><filter id="soft"><feGaussianBlur stdDeviation="24"/></filter></defs><rect width="1200" height="1000" fill="url(#sky)"/><circle cx="840" cy="245" r="78" fill="${p[3]}" opacity=".9"/><path d="M0 640 240 230 430 500 675 170 1080 620 1200 470V1000H0" fill="${p[1]}" opacity=".44"/><path d="m0 560 170-170 260 300 260-210 240 190 270-290v620H0" fill="${p[1]}"/><path d="M0 720Q260 660 600 705T1200 690V1000H0" fill="url(#lake)"/><ellipse cx="650" cy="706" rx="500" ry="22" fill="${p[3]}" opacity=".65" filter="url(#soft)"/><g fill="${p[2]}"><path d="m0 710 180-25 115 315H0"/><path d="m1200 640-220 110-65 250h285"/></g><g stroke="${p[3]}" opacity=".2"><path d="M480 785h290M370 845h420M570 904h180"/></g><path d="m670 795 90 0-18 13h-52z" fill="${p[2]}"/><path d="M712 795v-47" stroke="${p[2]}" stroke-width="5"/><text x="56" y="900" fill="${p[3]}" font-family="sans-serif" font-size="28" letter-spacing="6">${escaped.slice(0, 32)}</text><text x="56" y="946" fill="${p[3]}" opacity=".6" font-family="sans-serif" font-size="12" letter-spacing="4">MUSESHOW / ORIGINAL VECTOR STUDY</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function exampleDocument(): CanvasDocument {
  const doc = createDocument("光与山之间 · 镜头研究");
  const notes = createNode(
    "text",
    { x: 80, y: 150 },
    {
      title: "创作方向",
      text: "光与山之间\n\n清晨的薄雾，远山与一叶小舟。\n克制的色彩，留白的构图。\n\n① 环境与情绪\n② 角色进入画面\n③ 镜头缓慢推进",
      prompt: "",
    },
  );
  notes.width = 260;
  notes.height = 310;
  const a = createNode(
    "image",
    { x: 460, y: 130 },
    {
      title: "场景 · 清晨",
      src: studyImage(0),
      assetState: "ready",
      mimeType: "image/svg+xml",
      prompt: "清晨，远山与湖泊，薄雾，低饱和青绿色，电影感广角构图",
    },
  );
  a.width = 320;
  a.height = 320;
  const b = createNode(
    "image",
    { x: 930, y: 130 },
    {
      title: "色彩 · 暖调",
      src: studyImage(1, "暮色抵达之前"),
      assetState: "ready",
      mimeType: "image/svg+xml",
      prompt: "参考场景结构，转为暮色暖调，保留静谧的氛围",
    },
  );
  b.width = 320;
  b.height = 320;
  const video = createNode(
    "video",
    { x: 1400, y: 130 },
    {
      title: "镜头 01 · 缓慢推进",
      prompt: "以参考图为首帧，镜头缓慢向前推进，小船轻轻划过湖面。",
      settings: {
        mode: "video",
        model: "Seedance 2.0",
        aspectRatio: "16:9",
        durationSeconds: 5,
        resolution: "720p",
        prompt: "",
      },
    },
  );
  video.width = 360;
  video.height = 240;
  doc.nodes = [notes, a, b, video];
  doc.edges = [
    { id: crypto.randomUUID(), source: notes.id, target: a.id },
    { id: crypto.randomUUID(), source: a.id, target: b.id },
    { id: crypto.randomUUID(), source: b.id, target: video.id },
  ];
  return doc;
}

export function fileDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error(`无法读取 ${file.name}`));
    reader.readAsDataURL(file);
  });
}

export function downloadFile(contents: Blob | string, filename: string): void {
  const url =
    typeof contents === "string" ? contents : URL.createObjectURL(contents);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  if (typeof contents !== "string")
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

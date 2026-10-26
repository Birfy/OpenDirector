import { useEffect, useRef, useState } from "react";
import { createJob, runLocalGeneration } from "./domain/generation";
import type {
  GenerationJob,
  GenerationMode,
  Preset,
  Skill,
} from "./domain/types";
import { CATEGORIES, PRESETS, SKILLS } from "./data/presets";
import { Sidebar, type View } from "./components/Sidebar";
import { Composer, type ReferenceFile } from "./components/Composer";
import { Gallery } from "./components/Gallery";
import { CanvasBoard } from "./components/CanvasBoard";
import { Jobs } from "./components/Jobs";
import { StudyNotes } from "./components/StudyNotes";
import { Icon } from "./components/Icon";
import { Artwork } from "./components/Artwork";
import "./styles/app.css";

export default function App() {
  const [view, setView] = useState<View>("create");
  const [tab, setTab] = useState<"generate" | "canvas">("generate");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<GenerationMode>("agent");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [references, setReferences] = useState<ReferenceFile[]>([]);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const [notice, setNotice] = useState("");
  const activeTask = useRef<{ controller: AbortController; id: string } | null>(
    null,
  );
  const objectUrls = useRef(new Map<string, string>());
  const mounted = useRef(false);
  const running = jobs.some((job) => job.status === "running");

  useEffect(() => {
    mounted.current = true;
    const urls = objectUrls.current;
    return () => {
      mounted.current = false;
      activeTask.current?.controller.abort();
      urls.forEach((url) => URL.revokeObjectURL(url));
      urls.clear();
    };
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [sidebarOpen]);

  const focusComposer = () =>
    requestAnimationFrame(() =>
      document.getElementById("creative-prompt")?.focus(),
    );
  const goToComposer = () => {
    setView("create");
    setTab("generate");
    setSidebarOpen(false);
    focusComposer();
  };
  const newCreation = () => {
    setPrompt("");
    setNotice("新的创作已经准备好。");
    goToComposer();
  };
  const usePreset = (preset: Preset) => {
    setPrompt(preset.prompt);
    setMode(preset.mode);
    setNotice(`已填入「${preset.title}」，你可以继续修改。`);
    goToComposer();
  };
  const useSkill = (skill: Skill) => {
    setPrompt((current) =>
      current.trim() ? `${current}\n${skill.prompt}` : skill.prompt,
    );
    setNotice(`已加入「${skill.label}」提示。`);
    focusComposer();
  };
  const reuseJob = (job: GenerationJob) => {
    setPrompt(job.prompt);
    setMode(job.mode);
    setAspectRatio(job.aspectRatio);
    setNotice("已恢复任务的描述与模式。参考素材保持当前选择。");
    goToComposer();
  };
  const addFiles = (files: FileList) => {
    const selected = [...files];
    const next = selected.map((file) => {
      const id = crypto.randomUUID();
      const url = file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined;
      if (url) objectUrls.current.set(id, url);
      return { id, name: file.name, size: file.size, ...(url ? { url } : {}) };
    });
    setReferences((current) => [...current, ...next]);
    setNotice(
      `已添加 ${next.length} 个本地参考素材，仅在此页面展示，不会上传。`,
    );
  };
  const removeFile = (id: string) => {
    const url = objectUrls.current.get(id);
    if (url) {
      URL.revokeObjectURL(url);
      objectUrls.current.delete(id);
    }
    setReferences((current) => current.filter((file) => file.id !== id));
    setNotice("已移除参考素材。");
  };
  const generate = async () => {
    if (activeTask.current) return;
    let job: GenerationJob;
    try {
      job = createJob({
        prompt,
        mode,
        aspectRatio,
        referenceNames: references.map((file) => file.name),
      });
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "请检查创作描述。");
      return;
    }
    const controller = new AbortController();
    activeTask.current = { controller, id: job.id };
    setJobs((current) => [job, ...current]);
    setNotice("正在演示本地任务状态。可以再次点击按钮中止。");
    try {
      const result = await runLocalGeneration(job, controller.signal);
      if (mounted.current) {
        setJobs((current) =>
          current.map((item) => (item.id === result.id ? result : item)),
        );
        setNotice(
          "本地模拟已完成。下方为预置插图，用于演示结果卡片，不是模型生成内容。",
        );
      }
    } catch (error) {
      if (mounted.current) {
        setJobs((current) =>
          current.map((item) =>
            item.id === job.id ? { ...item, status: "aborted" } : item,
          ),
        );
        setNotice(
          controller.signal.aborted
            ? "本地任务已中止，可以修改描述后重新开始。"
            : error instanceof Error
              ? error.message
              : "本地模拟未完成。",
        );
      }
    } finally {
      if (activeTask.current?.id === job.id) activeTask.current = null;
    }
  };
  const showStudyNotes = () => {
    const notes = document.getElementById(
      "study-notes",
    ) as HTMLDetailsElement | null;
    if (notes) {
      notes.open = true;
      notes.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        view={view}
        onNavigate={setView}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNew={newCreation}
        jobs={jobs}
        onJob={reuseJob}
        onCanvas={() => {
          setView("create");
          setTab("canvas");
          setSidebarOpen(false);
        }}
      />
      <div className="main-shell">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="icon-button mobile-only"
              onClick={() => setSidebarOpen(true)}
              aria-label="打开导航"
              aria-expanded={sidebarOpen}
            >
              <Icon name="menu" />
            </button>
            <span className="topbar-crumb">
              {
                {
                  create: "创作空间",
                  explore: "灵感探索",
                  assets: "我的资产",
                  subjects: "主体研究",
                  studio: "短剧工作室",
                }[view]
              }
            </span>
          </div>
          <div className="topbar-right">
            <span className="local-status">
              <span />
              本地运行
            </span>
            <button className="source-button" onClick={showStudyNotes}>
              <Icon name="code" size={15} />
              源码说明
            </button>
          </div>
        </header>
        <main
          className={`main-content ${view !== "create" ? "secondary-view" : ""}`}
        >
          {view === "create" && (
            <>
              <section className="hero">
                <div className="hero-sparkle">✦</div>
                <p className="hero-eyebrow">把想象，变成眼前的可能</p>
                <h1>
                  你好，今天想要<span>创作什么？</span>
                </h1>
                <div className="creation-tabs" aria-label="创作工作区">
                  <button
                    className={tab === "generate" ? "selected" : ""}
                    onClick={() => setTab("generate")}
                    aria-pressed={tab === "generate"}
                  >
                    <Icon name="sparkles" size={17} />
                    生成
                  </button>
                  <button
                    className={tab === "canvas" ? "selected" : ""}
                    onClick={() => setTab("canvas")}
                    aria-pressed={tab === "canvas"}
                  >
                    <Icon name="canvas" size={17} />
                    画布
                  </button>
                </div>
              </section>
              {tab === "generate" ? (
                <>
                  <Composer
                    prompt={prompt}
                    onPrompt={setPrompt}
                    mode={mode}
                    onMode={setMode}
                    aspectRatio={aspectRatio}
                    onAspectRatio={setAspectRatio}
                    references={references}
                    onFiles={addFiles}
                    onRemoveFile={removeFile}
                    running={running}
                    onGenerate={() => {
                      void generate();
                    }}
                    onAbort={() => activeTask.current?.controller.abort()}
                    skills={SKILLS}
                    onSkill={useSkill}
                    notice={notice}
                  />
                  <Jobs jobs={jobs.slice(0, 3)} onReuse={reuseJob} />
                  <Gallery
                    presets={PRESETS}
                    categories={CATEGORIES}
                    onSelect={usePreset}
                  />
                </>
              ) : (
                <CanvasBoard />
              )}
            </>
          )}
          {view === "explore" && (
            <>
              <div className="page-intro">
                <span className="eyebrow">EXPLORE YOUR NEXT IDEA</span>
                <h1>好奇心，是创作的起点。</h1>
                <p>从画面、声音和故事里，找到下一个值得尝试的想法。</p>
              </div>
              <Gallery
                presets={PRESETS}
                categories={CATEGORIES}
                onSelect={usePreset}
                expanded
              />
            </>
          )}
          {view === "assets" && (
            <>
              <div className="page-intro">
                <span className="eyebrow">YOUR LOCAL COLLECTION</span>
                <h1>每一个想法，都值得留下一笔。</h1>
                <p>这里展示当前会话的本地模拟记录，刷新页面后清空。</p>
              </div>
              <Jobs jobs={jobs} onReuse={reuseJob} full />
              <button className="secondary-button" onClick={newCreation}>
                <Icon name="plus" size={16} />
                开始新的创作
              </button>
            </>
          )}
          {(view === "subjects" || view === "studio") && (
            <div className="concept-view">
              <div className="concept-art">
                <Artwork
                  kind={view === "subjects" ? "portrait" : "landscape"}
                />
              </div>
              <div>
                <span className="eyebrow">交互研究 · 本地概念示例</span>
                <h1>
                  {view === "subjects"
                    ? "让角色，有自己的故事。"
                    : "从一个镜头，开始讲故事。"}
                </h1>
                <p>
                  {view === "subjects"
                    ? "练习用外形、服装、性格和场景描述一个主体。此页面仅用于提示词编写，不包含原站主体建模功能。"
                    : "把一个场景拆成景别、运动、光线与节奏。本地工程演示镜头提示词，不包含原站短剧生产或视频生成能力。"}
                </p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setMode(view === "subjects" ? "image" : "video");
                    setPrompt(
                      view === "subjects"
                        ? "角色设定：一位好奇的城市探索者，浅绿色夹克，帆布背包，温和的表情。以正面、侧面与背面展示同一角色。"
                        : "镜头一：清晨薄雾中的湖边，广角远景。镜头缓慢向前推进，晨光穿过松树，一只小船驶入画面。安静、克制的叙事氛围。",
                    );
                    goToComposer();
                  }}
                >
                  <Icon name="sparkles" size={17} />
                  {view === "subjects" ? "编写角色描述" : "编写镜头描述"}
                </button>
              </div>
            </div>
          )}
          <StudyNotes />
          <footer className="page-footer">
            <span>灵感属于你。探索发生在本地。</span>
            <span>React + TypeScript · 学习重建</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

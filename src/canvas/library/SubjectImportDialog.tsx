import { useEffect, useState } from "react";
import { request, errorMessage } from "../../backend/api";
import { canvasSources, type CanvasSource } from "../../backend/canvasSources";
import {
  listLibrarySubjects,
  type SubjectLibraryItem,
} from "../../backend/subjectLibrary";
import { type LibraryItem } from "./libraryClient";
import { MediaCard } from "./MediaCard";
import { CanvasSourceCard } from "./CanvasSourceCard";
import { CanvasIcon } from "../CanvasIcon";
import { subjectChoiceIssue, type SubjectMediaSlot } from "../subjectMedia";
import { useT } from "../../i18n/I18nProvider";
import type { MessageKey } from "../../i18n/messages";

export type SubjectImportTab = "assets" | "subjects" | "canvas";
export type SubjectImportChoice =
  | { tab: "assets" | "subjects"; item: LibraryItem }
  | { tab: "canvas"; item: CanvasSource };
const tabs: readonly { key: SubjectImportTab; labelKey: MessageKey }[] = [
  { key: "assets", labelKey: "library.source.assets" },
  { key: "subjects", labelKey: "library.tab.subjects" },
  { key: "canvas", labelKey: "library.canvases.current" },
];

export function SubjectImportDialog({
  projectId,
  targetId,
  initialTab,
  slot = "main",
  targetIssue,
  busy = false,
  onClose,
  onConfirm,
}: {
  projectId: string;
  targetId: string;
  initialTab: SubjectImportTab;
  slot?: SubjectMediaSlot;
  targetIssue: string | null;
  busy?: boolean;
  onClose: () => void;
  onConfirm: (choice: SubjectImportChoice) => Promise<void>;
}) {
  const t = useT();
  const [tab, setTab] = useState(initialTab),
    [query, setQuery] = useState("");
  const [items, setItems] = useState<(LibraryItem | CanvasSource)[]>([]),
    [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true),
    [working, setWorking] = useState(false),
    [notice, setNotice] = useState("");
  const blocked = busy || working;
  useEffect(() => {
    let active = true;
    setLoading(true);
    setItems([]);
    setSelected(null);
    setNotice("");
    const pending =
      tab === "assets"
        ? request<SubjectLibraryItem[]>(
            `/library/subject-media?slot=${slot}&query=${encodeURIComponent(query)}`,
          )
        : tab === "subjects"
          ? listLibrarySubjects(query)
          : canvasSources(projectId);
    pending
      .then((rows) => {
        if (active)
          setItems(
            rows.filter((row) => !("nodeId" in row) || row.nodeId !== targetId),
          );
      })
      .catch((error) => {
        if (active) setNotice(errorMessage(error));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [tab, query, projectId, targetId, slot]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (!blocked) onClose();
      }
    };
    window.addEventListener("keydown", key, true);
    return () => window.removeEventListener("keydown", key, true);
  }, [blocked, onClose]);
  const identify = (item: LibraryItem | CanvasSource) =>
    "nodeId" in item ? item.nodeId : item.id;
  const issue = (item: LibraryItem | CanvasSource) => {
    if ("nodeId" in item)
      return subjectChoiceIssue(
        item.kind === "subject" ? "subject" : item.main.kind,
        item.main.durationSeconds,
        slot,
        t,
      );
    if (!(item as SubjectLibraryItem).available)
      return (
        (item as SubjectLibraryItem).issue || t("library.subjects.unavailable")
      );
    return subjectChoiceIssue(
      item.kind === "subject" ? "subject" : (item.mediaKind ?? "file"),
      item.metadata?.durationSeconds,
      slot,
      t,
    );
  };
  const visible = items.filter((item) =>
    ("nodeId" in item ? item.title : item.name)
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const chosen = visible.find((item) => identify(item) === selected);
  const rejection =
    targetIssue ??
    (loading
      ? t("library.loading")
      : !chosen
        ? t("library.issue.selectSource")
        : issue(chosen));
  const confirm = async () => {
    if (blocked || rejection || !chosen) return;
    setWorking(true);
    setNotice("");
    try {
      await onConfirm(
        tab === "canvas"
          ? { tab, item: chosen as CanvasSource }
          : { tab, item: chosen as LibraryItem },
      );
      onClose();
    } catch (error) {
      setNotice(errorMessage(error));
    } finally {
      setWorking(false);
    }
  };
  return (
    <div
      className="cw-lib-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t("library.import.title")}
      onClick={(event) => {
        if (event.target === event.currentTarget && !blocked) onClose();
      }}
    >
      <div className="cw-lib-dialog">
        <header className="cw-lib-header">
          <nav
            className="cw-lib-top"
            role="tablist"
            aria-label={t("library.import.sources")}
          >
            {tabs.map((entry) => (
              <button
                key={entry.key}
                type="button"
                role="tab"
                aria-selected={tab === entry.key}
                disabled={blocked}
                className={tab === entry.key ? "cw-lib-top-on" : undefined}
                onClick={() => {
                  if (tab === entry.key) return;
                  setSelected(null);
                  setItems([]);
                  setLoading(true);
                  setTab(entry.key);
                }}
              >
                {t(entry.labelKey)}
              </button>
            ))}
          </nav>
          <div className="cw-lib-search">
            <CanvasIcon name="search" size={16} />
            <input
              type="search"
              aria-label={t("library.import.search")}
              placeholder={t("library.search.placeholder")}
              value={query}
              disabled={blocked}
              onChange={(event) => {
                setSelected(null);
                setItems([]);
                setLoading(true);
                setQuery(event.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="cw-lib-close"
            aria-label={t("library.import.close")}
            disabled={blocked}
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <div className="cw-lib-body">
          <div className="cw-lib-panel">
            <p className="cw-lib-note">
              {slot === "voice"
                ? t("library.import.hint.voice")
                : slot === "auxiliary"
                  ? t("library.import.hint.auxiliary")
                  : t("library.import.hint.main")}{" "}
              · {t("library.import.oneOnly")}
            </p>
            {loading && <p role="status">{t("library.reading")}</p>}
            {!loading && !visible.length && (
              <p className="cw-lib-empty">{t("library.import.empty")}</p>
            )}
            <div className="cw-lib-grid">
              {visible.map((item) => {
                const reason = issue(item),
                  id = identify(item),
                  toggle = () => setSelected(selected === id ? null : id);
                return (
                  <div key={id} title={reason ?? undefined}>
                    {"nodeId" in item ? (
                      <CanvasSourceCard
                        item={item}
                        projectId={projectId}
                        selected={selected === id}
                        disabled={blocked || Boolean(reason)}
                        onSelect={toggle}
                      />
                    ) : (
                      <MediaCard
                        title={item.name}
                        subtitle={reason ?? undefined}
                        item={item.kind === "asset" ? item : undefined}
                        icon={
                          item.kind === "subject"
                            ? "subject"
                            : item.mediaKind === "audio"
                              ? "audio"
                              : item.mediaKind === "video"
                                ? "video"
                                : "image"
                        }
                        selected={selected === id}
                        disabled={blocked || Boolean(reason)}
                        onSelect={toggle}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <footer className="cw-lib-footer">
          <span role="status">
            {notice ||
              targetIssue ||
              (blocked
                ? t("library.import.importing")
                : t("library.selected", { count: chosen ? 1 : 0 }))}
          </span>
          <div>
            <button
              type="button"
              disabled={blocked || Boolean(rejection)}
              title={rejection ?? t("library.import.submitHint")}
              onClick={() => void confirm()}
            >
              {t("library.import.submit")}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

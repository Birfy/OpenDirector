import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

/** Display scale and model-supported seconds are independent. */
export function DurationControl({
  values,
  value,
  disabled,
  onChange,
  scale,
}: {
  values: readonly number[];
  value: number;
  disabled: boolean;
  onChange: (seconds: number) => void;
  scale?: { min: number; max: number; step: number };
}) {
  const minimum = values[0] ?? 0;
  const maximum = values.at(-1) ?? minimum;
  const { min, max, step } = scale ?? {
    min: minimum,
    max: maximum,
    step: maximum - minimum <= 30 ? 5 : 20,
  };
  const span = max - min;
  const ticks = [
    ...new Set([
      ...Array.from(
        { length: Math.floor(span / step) + 1 },
        (_, i) => min + i * step,
      ),
      max,
    ]),
  ];
  const [draft, setDraft] = useState(String(value));
  const [notice, setNotice] = useState("");
  const noticeId = useId();
  const choicesKey = values.join(",");
  useEffect(() => setDraft(String(value)), [value]);
  useEffect(() => setNotice(""), [choicesKey]);
  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 2500);
    return () => window.clearTimeout(timeout);
  }, [notice]);
  const limit =
    minimum === maximum
      ? `当前模型仅支持${minimum}s`
      : `当前模型支持的时长在${minimum}到${maximum}秒之间`;
  const hint = (seconds: number) =>
    seconds <= minimum || seconds >= maximum
      ? limit
      : !values.includes(seconds)
        ? `该时长不受支持，可选：${values.join("、")}s`
        : "";
  const choose = (seconds: number) => {
    if (!Number.isFinite(seconds) || !values.length || disabled) return;
    const allowed = values.reduce((nearest, candidate) =>
      Math.abs(candidate - seconds) < Math.abs(nearest - seconds)
        ? candidate
        : nearest,
    );
    setNotice(hint(seconds));
    setDraft(String(allowed));
    if (allowed !== value) onChange(allowed);
  };
  const pointerHint = (event: PointerEvent<HTMLInputElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const fraction = Math.max(
      0,
      Math.min(
        1,
        (event.clientX - rect.left - 3) / Math.max(1, rect.width - 6),
      ),
    );
    setNotice(hint(Math.round(min + fraction * span)));
  };
  const commit = () => {
    if (!draft.trim() || !Number.isFinite(Number(draft))) {
      setDraft(String(value));
      setNotice("请输入有效的时长");
    } else choose(Number(draft));
  };
  return (
    <div className="cw-duration-controls">
      {notice && (
        <span id={noticeId} className="cw-duration-notice" role="status">
          {notice}
        </span>
      )}
      <div className="cw-duration-slider">
        <input
          type="range"
          aria-label="创作时长"
          min={min}
          max={max}
          step={1}
          disabled={disabled || values.length <= 1}
          value={Math.max(min, Math.min(max, value))}
          aria-valuetext={`${value} 秒`}
          aria-description={limit}
          aria-describedby={notice ? noticeId : undefined}
          style={
            {
              "--duration-progress": `${span > 0 ? Math.max(0, Math.min(100, ((value - min) / span) * 100)) : 0}%`,
            } as CSSProperties
          }
          onChange={(event) => choose(Number(event.target.value))}
          onPointerDown={pointerHint}
          onPointerMove={(event) => {
            if (event.buttons === 1) pointerHint(event);
          }}
          onKeyDown={(event) => {
            const index = Math.max(0, values.indexOf(value));
            const next =
              event.key === "Home"
                ? minimum
                : event.key === "End"
                  ? maximum
                  : ["ArrowLeft", "ArrowDown"].includes(event.key)
                    ? values[Math.max(0, index - 1)]
                    : ["ArrowRight", "ArrowUp"].includes(event.key)
                      ? values[Math.min(values.length - 1, index + 1)]
                      : undefined;
            if (next !== undefined) {
              event.preventDefault();
              choose(next);
            }
          }}
        />
        <div className="cw-duration-scale" aria-hidden="true">
          {ticks.map((tick) => (
            <span
              key={tick}
              className={`cw-duration-tick${tick === value ? " is-selected" : ""}`}
              style={{ left: `${span > 0 ? ((tick - min) / span) * 100 : 0}%` }}
            >
              {tick}
            </span>
          ))}
        </div>
      </div>
      <label className="cw-duration-number">
        <input
          type="number"
          aria-label="精确创作时长"
          min={minimum}
          max={maximum}
          step={1}
          aria-description={limit}
          aria-describedby={notice ? noticeId : undefined}
          value={draft}
          disabled={disabled || values.length <= 1}
          onChange={(event) => {
            const next = event.target.value;
            setDraft(next);
            // Persist a complete valid number immediately, so dismissing the
            // popover cannot discard it before a native blur is delivered.
            if (next.trim() && values.includes(Number(next)))
              choose(Number(next));
          }}
          onBlur={commit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              commit();
            }
          }}
        />
        <span aria-hidden="true">s</span>
      </label>
    </div>
  );
}

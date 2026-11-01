import type { ComponentProps, CSSProperties } from "react";
import "./control-slider.css";

/** Shared duration and playback slider; callers retain native input events. */
export function ControlSlider({
  min,
  max,
  value,
  className = "",
  style,
  ...props
}: Omit<
  ComponentProps<"input">,
  "type" | "min" | "max" | "value" | "defaultValue"
> & {
  min: number;
  max: number;
  value: number;
}) {
  const progress = max > min ? ((value - min) / (max - min)) * 100 : 0;
  return (
    <input
      {...props}
      type="range"
      min={min}
      max={max}
      value={value}
      className={`cw-control-slider ${className}`.trim()}
      style={
        {
          ...style,
          "--control-progress": `${Math.max(0, Math.min(100, progress))}%`,
        } as CSSProperties
      }
    />
  );
}

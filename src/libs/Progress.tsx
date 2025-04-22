type SizingUnit = string | number;
type Size = { width: SizingUnit; height: SizingUnit };

interface ProgressProps {
  value: number;
  max: number;
  size: Size;
  barColor?: string;
  progressColor?: string;
}

export function Progress({
  value,
  max,
  barColor = "#eee",
  progressColor = "#111",
  size,
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div style={{ position: "relative", background: barColor, ...size }}>
      <div
        className="progress-bar"
        style={{
          width: `${percentage}%`,
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          background: progressColor,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
}

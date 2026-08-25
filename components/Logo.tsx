export function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const textSize = size === "small" ? "text-base" : "text-lg";

  return (
    <div className="flex flex-col leading-none">
      <span className="logo-swoosh" aria-hidden="true" />
      <span
        className={`${textSize} font-bold uppercase tracking-tight`}
        style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
      >
        <span style={{ color: "var(--color-parchment)" }}>LUXURY </span>
        <span style={{ color: "var(--color-gold)" }}>CAR CARE</span>
      </span>
    </div>
  );
}

import { cn } from "@/lib/utils";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-[780px] mb-14 sm:mb-20",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest mb-4 shadow-xs",
            isCenter ? "mx-auto" : ""
          )}
        >
          <span className="text-[9px]">✦</span>
          <span>{badge}</span>
          <span className="text-[9px]">✦</span>
        </div>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-[1.18] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[var(--color-text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "flex items-center gap-3 mt-6",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)]/60" />
        <span className="text-[var(--color-accent)] text-xs font-serif opacity-70">✦</span>
        <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)]/60" />
      </div>
    </div>
  );
}

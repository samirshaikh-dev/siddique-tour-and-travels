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
        "max-w-[760px] mb-12 sm:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-primary)] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-16 h-0.5 bg-[var(--color-accent)] mt-6 rounded-full",
          isCenter ? "mx-auto" : ""
        )}
      />
    </div>
  );
}

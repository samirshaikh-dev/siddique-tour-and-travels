import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
  variant = "default",
  hover = false,
  ...props
}) {
  const variants = {
    default:
      "bg-[var(--color-surface)] border border-[var(--color-sage)]/70 shadow-[0_4px_20px_rgba(23,33,31,0.05)]",
    ivory:
      "bg-[var(--color-background)] border border-[var(--color-sand)]/70 shadow-[0_4px_16px_rgba(23,33,31,0.04)]",
    emerald:
      "bg-gradient-to-br from-[var(--color-primary)] to-[#04332e] text-white border border-emerald-600/30 shadow-[0_8px_32px_rgba(6,74,67,0.25)]",
    featured:
      "bg-[var(--color-surface)] border border-[var(--color-accent)] shadow-[0_8px_30px_rgba(184,135,45,0.14)] relative",
    glass:
      "bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
  };

  const hoverStyle = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(6,74,67,0.12)] hover:border-[var(--color-accent)]/60"
    : "transition-shadow duration-300";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        variants[variant] || variants.default,
        hoverStyle,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

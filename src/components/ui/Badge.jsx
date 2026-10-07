import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "emerald",
  className,
  ...props
}) {
  const variants = {
    emerald:
      "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20",
    gold:
      "bg-[var(--color-accent)]/15 text-[#8c631a] border border-[var(--color-accent)]/30",
    sage:
      "bg-[var(--color-sage)] text-[var(--color-text)] border border-[var(--color-sage)]",
    navy:
      "bg-[var(--color-secondary-dark)] text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider",
        variants[variant] || variants.emerald,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

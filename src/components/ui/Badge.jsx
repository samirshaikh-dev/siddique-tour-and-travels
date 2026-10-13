import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "emerald",
  className,
  ...props
}) {
  const variants = {
    emerald:
      "bg-emerald-600/12 text-[#064A43] border border-emerald-600/25",
    gold:
      "bg-amber-500/15 text-[#8c631a] border border-amber-500/30",
    sage:
      "bg-[var(--color-sage)]/70 text-[var(--color-text)] border border-[var(--color-sage)]",
    navy:
      "bg-[var(--color-secondary-dark)] text-white border border-white/10",
    glass:
      "bg-black/40 backdrop-blur-md text-white border border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-2xs",
        variants[variant] || variants.emerald,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

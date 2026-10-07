import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
  variant = "default",
  ...props
}) {
  const variants = {
    default:
      "bg-[var(--color-surface)] border border-[var(--color-sage)]/60 shadow-sm",
    ivory:
      "bg-[var(--color-background)] border border-[var(--color-sand)] shadow-sm",
    emerald:
      "bg-[var(--color-primary)] text-white border border-[var(--color-primary)]",
    featured:
      "bg-[var(--color-surface)] border-2 border-[var(--color-accent)] shadow-md",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8 transition-shadow duration-200",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

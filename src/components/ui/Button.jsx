import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-xl text-center select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm min-h-[40px] gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base min-h-[44px] gap-2", // 44px touch target standard
    lg: "px-7 py-3.5 text-base sm:text-lg min-h-[50px] gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#064A43] via-[#08554D] to-[#0B6258] text-white shadow-[0_4px_16px_rgba(6,74,67,0.25)] hover:shadow-[0_8px_24px_rgba(6,74,67,0.35)] hover:-translate-y-0.5 border border-emerald-600/30",
    secondary:
      "bg-[var(--color-surface)] text-[var(--color-primary)] border border-[var(--color-accent)]/60 hover:border-[var(--color-accent)] hover:bg-[#FAF7F0] shadow-xs hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)]/80 hover:bg-[var(--color-primary)] hover:text-white shadow-xs hover:shadow-md hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-sage)]/40 hover:text-[var(--color-primary)]",
    gold:
      "bg-gradient-to-r from-[#B8872D] to-[#9D7224] text-white shadow-[0_4px_16px_rgba(184,135,45,0.3)] hover:shadow-[0_8px_24px_rgba(184,135,45,0.4)] hover:-translate-y-0.5 border border-amber-300/30 font-semibold",
    whatsapp:
      "bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-white shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 border border-emerald-400/30 font-semibold",
    glass:
      "bg-white/12 backdrop-blur-md text-white border border-white/30 hover:bg-white/22 hover:border-white/50 shadow-lg hover:-translate-y-0.5 font-medium",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

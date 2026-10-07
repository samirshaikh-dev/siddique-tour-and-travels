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
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-lg text-center";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-sm min-h-[40px]",
    md: "px-5 py-2.5 text-base min-h-[44px]", // 44px minimum touch target for mobile/seniors
    lg: "px-7 py-3 text-lg min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm",
    secondary:
      "bg-[var(--color-surface)] text-[var(--color-primary)] border border-[var(--color-accent)] hover:bg-[var(--color-sage)]/30",
    outline:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    ghost:
      "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-sage)]/40 hover:text-[var(--color-primary)]",
    gold:
      "bg-[var(--color-accent)] text-white hover:bg-[#9d7224] shadow-sm",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-sm font-semibold",
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

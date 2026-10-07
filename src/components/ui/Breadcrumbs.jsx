import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Breadcrumbs({ items = [] }) {
  const crumbs = [{ name: "Home", url: "/" }, ...items];
  if (crumbs.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[var(--color-surface)]/60 border-b border-[var(--color-sage)]/40 py-2.5"
    >
      <Container>
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-[var(--color-text-muted)]"
        >
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <li
                key={`${crumb.name}-${idx}`}
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {!isLast && crumb.url ? (
                  <Link
                    itemProp="item"
                    href={crumb.url}
                    className="hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </Link>
                ) : (
                  <span
                    itemProp="name"
                    aria-current={isLast ? "page" : undefined}
                    className={`${
                      isLast
                        ? "text-[var(--color-primary)] font-semibold"
                        : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {crumb.name}
                  </span>
                )}
                {!isLast && (
                  <span
                    className="mx-1.5 text-[var(--color-accent)] opacity-70"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                )}
                <meta itemProp="position" content={String(idx + 1)} />
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}

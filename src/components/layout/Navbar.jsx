"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  }

  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      role="banner"
      className="sticky top-0 z-40 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-sage)]/60"
    >
      {/* Top micro-bar for phone & office support */}
      <div
        itemType="https://schema.org/ContactPoint"
        itemScope
        aria-label="Quick contact bar"
        className="bg-[var(--color-primary)] text-white text-xs py-1.5 hidden md:block"
      >
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>
              Call Us:{" "}
              <a
                itemProp="telephone"
                href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
                className="hover:underline font-medium"
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phoneDisplay}`}
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
            <span className="hidden lg:inline">{siteConfig.contact.openingHours}</span>
            <span className="hidden xl:inline">
              Email:{" "}
              <a
                itemProp="email"
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100">
            <span itemProp="addressRegion">{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</span>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between h-20">
        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md"
          aria-label={`${siteConfig.name} — Go to homepage`}
          itemScope
          itemType="https://schema.org/Brand"
        >
          <meta itemProp="name" content={siteConfig.name} />
          <meta itemProp="logo" content={`${siteConfig.url}/logo.png`} />
          <meta itemProp="url" content={siteConfig.url} />
          <span
            itemProp="name"
            className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight"
          >
            Siddique
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] -mt-1">
            Tours & Travels
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          role="navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          className="hidden lg:flex items-center gap-8"
        >
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                itemProp="name"
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors py-1 border-b-2 ${
                  active
                    ? "text-[var(--color-primary)] border-[var(--color-accent)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)] border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={whatsappUrl}
            variant="secondary"
            size="sm"
            className="text-xs"
            aria-label={`WhatsApp ${siteConfig.name} for pilgrimage inquiries`}
          >
            WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="text-xs"
            aria-label="Request a free pilgrimage package quote"
          >
            Request a Quote
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-nav"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-primary-nav"
          className="lg:hidden border-t border-[var(--color-sage)] bg-[var(--color-surface)] px-4 pt-4 pb-6 space-y-4 shadow-lg"
        >
          <nav
            aria-label="Mobile navigation"
            role="navigation"
            className="flex flex-col space-y-3"
          >
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`text-base font-medium py-2 border-b border-[var(--color-sage)]/30 ${
                    active
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Button>
            <Button
              href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
              variant="outline"
              size="md"
              className="w-full"
              aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
            >
              Call {siteConfig.contact.phoneDisplay}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

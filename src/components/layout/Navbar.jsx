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
      className="sticky top-0 z-40 bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-sage)]/60 shadow-[0_2px_12px_rgba(23,33,31,0.03)]"
    >
      {/* Top micro-bar for phone & office support */}
      <div
        itemType="https://schema.org/ContactPoint"
        itemScope
        aria-label="Quick contact bar"
        className="bg-gradient-to-r from-[#064A43] via-[#08554D] to-[#102A43] text-white text-xs py-2 hidden md:block border-b border-emerald-800/40"
      >
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-emerald-100/90 font-light">Direct Helpline:</span>
              <a
                itemProp="telephone"
                href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
                className="hover:text-[var(--color-accent-soft)] font-medium transition-colors"
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phoneDisplay}`}
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
            <span className="text-white/20" aria-hidden="true">|</span>
            <span className="hidden lg:inline text-emerald-100/80 font-light text-[11px]">
              {siteConfig.contact.openingHours}
            </span>
            <span className="hidden xl:inline text-white/20" aria-hidden="true">|</span>
            <span className="hidden xl:inline text-emerald-100/80 font-light text-[11px]">
              <a
                itemProp="email"
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[var(--color-accent-soft)] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3 text-emerald-100 text-[11px] font-medium">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[var(--color-accent-soft)] border border-white/10 text-[10px] uppercase tracking-wider">
              Authorised Organiser
            </span>
            <span itemProp="addressRegion" className="text-white/80">
              {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
            </span>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between h-20">
        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-lg py-1"
          aria-label={`${siteConfig.name} — Go to homepage`}
          itemScope
          itemType="https://schema.org/Brand"
        >
          <meta itemProp="name" content={siteConfig.name} />
          <meta itemProp="logo" content={`${siteConfig.url}/logo.png`} />
          <meta itemProp="url" content={siteConfig.url} />

          {/* Elegant Sacred Emblem Icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#102A43] text-[var(--color-accent-soft)] flex items-center justify-center font-serif text-lg font-bold shadow-md border border-[var(--color-accent)]/30 group-hover:scale-105 transition-transform">
            <span>✦</span>
          </div>

          <div className="flex flex-col">
            <span
              itemProp="name"
              className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight leading-none group-hover:text-[var(--color-primary-hover)] transition-colors"
            >
              {siteConfig.shortName || "Al-Safwa"}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[var(--color-accent)] mt-0.5">
              Tours & Travels
            </span>
          </div>
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
                className={`text-sm font-medium transition-all py-1.5 relative ${
                  active
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="sm"
            className="text-xs px-4"
            aria-label={`WhatsApp ${siteConfig.name} for pilgrimage inquiries`}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="text-xs px-4"
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
            className="p-2.5 text-[var(--color-primary)] hover:bg-[var(--color-sage)]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xl transition-colors cursor-pointer"
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
          className="lg:hidden border-t border-[var(--color-sage)]/60 bg-[var(--color-surface)]/98 backdrop-blur-2xl px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav
            aria-label="Mobile navigation"
            role="navigation"
            className="flex flex-col space-y-2"
          >
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    active
                      ? "text-[var(--color-primary)] font-semibold bg-[var(--color-sage)]/40"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-sage)]/20"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white font-bold">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 flex flex-col gap-3">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              className="w-full shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chat on WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

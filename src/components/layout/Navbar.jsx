"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-sage)]/60">
      {/* Top micro-bar for phone & office support */}
      <div className="bg-[var(--color-primary)] text-white text-xs py-1.5 hidden md:block">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Call Us: <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline font-medium">{siteConfig.contact.phoneDisplay}</a></span>
            <span>{siteConfig.contact.openingHours}</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100">
            <span>{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</span>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between h-20">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex flex-col group focus-visible:outline-none">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight">
            Siddique
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] -mt-1">
            Tours & Travels
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={whatsappUrl}
            variant="secondary"
            size="sm"
            className="text-xs"
          >
            WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="text-xs"
          >
            Request a Quote
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="sm"
            className="text-xs py-1.5 px-3 min-h-[36px]"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        <div className="lg:hidden border-t border-[var(--color-sage)] bg-[var(--color-surface)] px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] py-2 border-b border-[var(--color-sage)]/30"
              >
                {item.label}
              </Link>
            ))}
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
              href={`tel:${siteConfig.contact.phone}`}
              variant="outline"
              size="md"
              className="w-full"
            >
              Call {siteConfig.contact.phoneDisplay}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

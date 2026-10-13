"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { siteConfig } from "@/data/site-config";

export default function HeroParallax({ whatsappUrl }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(imageRef.current, {
        yPercent: 18,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Sacred pilgrimage introduction"
      className="relative min-h-[94vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Full-bleed high-res background photography with GSAP ScrollTrigger parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="/images/hero-makkah.jpg"
            alt={`The Holy Kaaba at dawn - Sacred Makkah Haram courtyard view for pilgrimage packages by ${siteConfig.name}`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Serene multi-stage gradient overlay: deep emerald base, soft twilight vignette, and golden ambient dawn aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062c26] via-black/45 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(216,188,120,0.18)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/75" />
      </div>

      <Container className="relative z-10 py-20 sm:py-28 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle luminous gold badge with Motion entrance */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-[var(--color-accent-soft)]/40 text-[var(--color-accent-soft)] text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        >
          <span className="text-[10px]">✦</span>
          <span>Bespoke Hajj • Umrah • Ziyarat</span>
          <span className="text-[10px]">✦</span>
        </motion.div>

        {/* Grand Editorial Headline with Luminous Gold Highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
        >
          Your Journey to Faith,{" "}
          <span className="italic font-normal text-[var(--color-accent-soft)] block sm:inline drop-shadow-[0_2px_12px_rgba(216,188,120,0.3)]">
            Elevated in Serenity.
          </span>
        </motion.h1>

        {/* Minimalist, evocative subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl text-emerald-50/95 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md"
        >
          Handcrafted sacred pilgrimages featuring verified courtyard sanctuaries near the Haramain, private VIP transfers, and devoted on-ground scholar care.
        </motion.p>

        {/* Visually Prominent Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button
            href="#journeys"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-4 shadow-[0_8px_30px_rgba(184,135,45,0.4)] hover:shadow-[0_12px_40px_rgba(184,135,45,0.55)] font-semibold"
          >
            Explore Sacred Packages
          </Button>
          <Button
            href={whatsappUrl}
            variant="glass"
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-4 font-medium flex items-center justify-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            Instant WhatsApp Concierge
          </Button>
        </motion.div>

        {/* Floating Luxury Trip Planner Bar */}
        <motion.nav
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Pilgrimage categories"
          className="w-full max-w-3xl bg-[#0c1e30]/85 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/umrah"
              aria-label="Browse Umrah packages year-round"
              className="group p-3.5 rounded-xl bg-white/5 hover:bg-white/12 border border-white/10 hover:border-[var(--color-accent-soft)]/50 transition-all text-white flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block tracking-wider">
                  Year-Round
                </span>
                <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                  Umrah Packages
                </span>
              </div>
              <span className="text-base text-[var(--color-accent-soft)] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>

            <Link
              href="/hajj"
              aria-label="Hajj registration and 5th pillar guidance"
              className="group p-3.5 rounded-xl bg-white/5 hover:bg-white/12 border border-white/10 hover:border-[var(--color-accent-soft)]/50 transition-all text-white flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block tracking-wider">
                  The 5th Pillar
                </span>
                <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                  Hajj Registration
                </span>
              </div>
              <span className="text-base text-[var(--color-accent-soft)] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>

            <Link
              href="/ziyarat"
              aria-label="Sacred Ziyarat heritage tours in Hejaz"
              className="group p-3.5 rounded-xl bg-white/5 hover:bg-white/12 border border-white/10 hover:border-[var(--color-accent-soft)]/50 transition-all text-white flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold text-[var(--color-accent-soft)] block tracking-wider">
                  Historic Hejaz
                </span>
                <span className="font-display text-base font-bold group-hover:text-[var(--color-accent-soft)] transition-colors">
                  Sacred Ziyarat
                </span>
              </div>
              <span className="text-base text-[var(--color-accent-soft)] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </div>
        </motion.nav>
      </Container>
    </section>
  );
}

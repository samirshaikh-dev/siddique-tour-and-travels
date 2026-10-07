"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  imageSrc,
  imageAlt,
  breadcrumbs = [],
}) {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!imageWrapperRef.current) return;

      gsap.to(imageWrapperRef.current, {
        yPercent: 15,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[46vh] sm:min-h-[52vh] flex items-center justify-center text-white overflow-hidden"
      aria-label={title}
    >
      {/* Background Image with GSAP ScrollTrigger Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageWrapperRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Cinematic Multi-tier Gradient for AAA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#064A43] via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />
      </div>

      <Container className="relative z-10 py-16 sm:py-24 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Embedded Breadcrumb Trail */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Breadcrumb navigation"
            className="mb-6 flex items-center gap-2 text-xs text-white/70 tracking-wide font-light"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-white/40">/</span>
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[var(--color-accent-soft)] font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.url} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Sacred Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-accent-soft)] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-md"
          >
            <span>✦</span>
            <span>{badge}</span>
            <span>✦</span>
          </motion.div>
        )}

        {/* Grand Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5 drop-shadow-md"
        >
          {title}{" "}
          {titleHighlight && (
            <span className="italic font-normal text-[var(--color-accent-soft)] block sm:inline">
              {titleHighlight}
            </span>
          )}
        </motion.h1>

        {/* Evocative Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-emerald-50/90 max-w-xl font-light leading-relaxed drop-shadow"
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}

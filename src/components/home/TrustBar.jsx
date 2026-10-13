"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";

const trustItems = [
  {
    title: "0 Metres",
    desc: "Courtyard Haram Hotel Access",
    badge: "Guaranteed Walk",
  },
  {
    title: "100% Verified",
    desc: "Transparent Itineraries & Visas",
    badge: "Official Quotas",
  },
  {
    title: "24/7 Muallim",
    desc: "Dedicated On-Ground Scholar Care",
    badge: "Spiritual Guidance",
  },
  {
    title: "Direct Flights",
    desc: "Full-Service Airline Connections",
    badge: "BOM & STV Transit",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust signals and guarantees"
      className="bg-[var(--color-surface)] border-b border-[var(--color-sage)]/60 py-8 sm:py-10 relative overflow-hidden shadow-[0_4px_16px_rgba(23,33,31,0.02)]"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[var(--color-background)]/80 transition-colors group relative"
            >
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-1 px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                {item.badge}
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-1">
                {item.title}
              </span>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light mt-1 max-w-[200px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

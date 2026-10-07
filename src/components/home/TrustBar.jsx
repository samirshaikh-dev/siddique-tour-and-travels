"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";

const trustItems = [
  {
    title: "0 Metres",
    desc: "Courtyard Haram Hotel Access",
  },
  {
    title: "100% Verified",
    desc: "Transparent Itineraries & Visas",
  },
  {
    title: "24/7 Muallim",
    desc: "Dedicated On-Ground Scholar Care",
  },
  {
    title: "Direct Flights",
    desc: "Full-Service Airline Connections",
  },
];

export default function TrustBar() {
  return (
    <div
      aria-label="Trust signals and guarantees"
      className="bg-[var(--color-surface)] border-b border-[var(--color-sage)]/50 py-7 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-1 group"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block group-hover:text-[var(--color-accent)] transition-colors">
                {item.title}
              </span>
              <p className="text-xs text-[var(--color-text-muted)] font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

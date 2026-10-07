"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqAccordion({ items = [], title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items || items.length === 0) return null;

  function toggle(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section aria-label={title} className="w-full max-w-3xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
            Clarity & Guidance
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `faq-content-${idx}`;
          const headerId = `faq-header-${idx}`;

          return (
            <div
              key={idx}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-sage)]/70 hover:border-[var(--color-accent)]/60 transition-colors overflow-hidden shadow-sm"
            >
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-semibold text-[var(--color-primary)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] transition-colors"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-7 h-7 rounded-full bg-[var(--color-background)] text-[var(--color-accent)] flex items-center justify-center shrink-0 border border-[var(--color-sand)] text-xs font-bold"
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed border-t border-[var(--color-sage)]/30 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

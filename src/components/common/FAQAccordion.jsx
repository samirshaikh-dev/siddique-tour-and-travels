"use client";

import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[var(--color-sage)] rounded-xl bg-[var(--color-surface)] overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-sm sm:text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-background)]/50 focus-visible:outline-none focus-visible:bg-[var(--color-background)]"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="ml-4 shrink-0 text-[var(--color-accent)] font-bold text-lg">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-sage)]/40 bg-[var(--color-background)]/30">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

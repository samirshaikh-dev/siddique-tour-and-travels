"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { siteConfig } from "@/data/site-config";
import { getWhatsAppUrl } from "@/lib/utils";

export default function StickyContactBar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Only hide if scrolling down past initial 80px buffer
    if (latest > 100 && diff > 8) {
      setIsHidden(true);
    } else if (diff < -6) {
      setIsHidden(false);
    }
  });

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isHidden ? 100 : 0,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed z-50 md:hidden pointer-events-none"
      style={{
        bottom: "16px",
        left: "12px",
        right: "12px",
      }}
      aria-hidden={isHidden}
    >
      {/* Floating Island / Glassmorphic Concierge Dock */}
      <div
        className="mx-auto bg-[#0a1b2b]/95 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.55)] pointer-events-auto"
        style={{ maxWidth: "440px" }}
      >
        <div className="grid grid-cols-2 gap-2">
          {/* Action 1: Call Agency */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors min-h-[44px]"
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white">Call Office</span>
          </motion.a>

          {/* Action 2: WhatsApp Concierge */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white transition-shadow shadow-md min-h-[44px] relative overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 relative">
              <span className="animate-ping absolute inset-0 rounded-full bg-white opacity-25" />
              <svg className="w-3.5 h-3.5 fill-white relative z-10" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-white">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

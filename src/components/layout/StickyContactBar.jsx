"use client";

import { siteConfig } from "@/data/site-config";
import { getWhatsAppUrl } from "@/lib/utils";

export default function StickyContactBar() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    siteConfig.contact.whatsappDefaultMessage
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-surface)] border-t border-[var(--color-sage)] p-2.5 shadow-lg md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[var(--color-primary)] text-white rounded-lg text-sm font-semibold active:opacity-90 min-h-[44px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Agency
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white rounded-lg text-sm font-semibold active:opacity-90 min-h-[44px]"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.995.544 1.767.817 2.796.817 3.18 0 5.766-2.586 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.374 8.167c-.145.407-.738.775-1.021.823-.277.046-.639.066-1.034-.061-.252-.08-.577-.188-1.002-.372-1.782-.774-2.935-2.593-3.024-2.711-.089-.119-.724-.963-.724-1.836 0-.874.459-1.303.622-1.481.163-.178.356-.222.474-.222.119 0 .237.001.341.006.109.005.253-.041.396.301.148.356.504 1.23.548 1.32.044.089.074.193.015.311-.059.119-.089.193-.178.297-.089.104-.188.232-.268.311-.089.089-.182.186-.078.364.104.178.462.763.992 1.236.682.608 1.258.796 1.436.885.178.089.282.074.386-.044.104-.119.445-.519.564-.697.119-.178.237-.148.396-.089.159.059 1.008.475 1.181.564.173.089.287.133.331.207.044.074.044.43-.101.837z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Contact & Head Office",
  description:
    "Get in touch with Siddique Tours and Travels. Visit our head office, call our helpline, or send an inquiry.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          badge="Direct Communication"
          title="Contact Our Team"
          subtitle="We are here to assist with your package inquiries, visa formalities, and customized travel requests."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--color-surface)] p-8 rounded-xl border border-[var(--color-sage)]/70 shadow-sm space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-primary)]">
                  Head Office
                </h3>
                <address className="not-italic text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}<br />
                  {siteConfig.contact.address.country}
                </address>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Office Phone
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-base font-bold text-[var(--color-primary)] hover:underline block mt-0.5"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  WhatsApp Support
                </span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#25D366] hover:underline block mt-0.5"
                >
                  Direct WhatsApp Chat
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-medium text-[var(--color-primary)] hover:underline block mt-0.5"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="border-t border-[var(--color-sage)]/50 pt-4">
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider block">
                  Working Hours
                </span>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {siteConfig.contact.openingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuickQuoteForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary-dark)] text-gray-200 pt-16 pb-24 md:pb-12 border-t border-[var(--color-primary)]/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700/60">
          {/* Brand Info */}
          <div>
            <span className="font-display text-2xl font-bold text-white tracking-tight">
              Siddique
            </span>
            <span className="block text-xs font-semibold tracking-widest uppercase text-[var(--color-accent-soft)] mt-0.5">
              Tours & Travels
            </span>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Guiding pilgrims on their sacred Hajj, Umrah, and Ziyarat journeys with devotion, transparency, and personal care.
            </p>
            <div className="mt-4 text-xs text-gray-400">
              <p className="font-medium text-[var(--color-accent-soft)]">Haj & Umrah Authorized Services</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Pilgrimage Packages
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/umrah" className="hover:text-white transition-colors">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/hajj" className="hover:text-white transition-colors">
                  Hajj Guidance & Registration
                </Link>
              </li>
              <li>
                <Link href="/ziyarat" className="hover:text-white transition-colors">
                  Historical Ziyarat Tours
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Visa & Logistics Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Agency & Support
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Siddique Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Branch Office & Contact
                </Link>
              </li>
              <li>
                <Link href="/services#visa" className="hover:text-white transition-colors">
                  Visa Requirements
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400"
                >
                  Direct WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Head Office
            </h4>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>
                {siteConfig.contact.address.street},<br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
              </p>
              <p className="pt-2">
                <span className="text-gray-400 block text-xs">Phone:</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-white hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-gray-400 block text-xs">Email:</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Providing reliable pilgrimage solutions with dignity and devotion.
          </p>
        </div>
      </Container>
    </footer>
  );
}

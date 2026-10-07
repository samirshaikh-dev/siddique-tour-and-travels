import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      className="relative bg-[#0c1e30] text-gray-200 border-t border-[var(--color-primary)]/40"
    >
      {/* Top Accreditation & Trust Banner */}
      <div
        className="border-b border-white/10 bg-black/25 py-3.5"
        aria-label="Accreditation and trust banner"
      >
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-accent-soft)]" aria-hidden="true">✦</span>
              <span className="font-medium tracking-wide">
                Hajj & Umrah Authorised Organiser • Vapi, Gujarat, India
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-400 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                  aria-hidden="true"
                />
                <span>24/7 Pilgrim Support Line — {siteConfig.contact.phoneDisplay}</span>
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="hidden sm:inline">Makkah & Madinah On-Ground Coordinators</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="pt-14 pb-36 md:pb-16">
        <Container>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Commitment */}
            <div className="space-y-4" aria-label="About Siddique Tours">
              <div itemScope itemType="https://schema.org/Organization" className="space-y-2">
                <link itemProp="url" href={siteConfig.url} />
                <meta itemProp="name" content={siteConfig.name} />
                <meta itemProp="logo" content={`${siteConfig.url}/logo.png`} />
                <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Siddique
                </span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-[var(--color-accent-soft)] mt-0.5">
                  Tours & Travels
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Guiding pilgrims on their sacred Hajj, Umrah, and Ziyarat journeys with sincere devotion, transparent pricing, and dignified personal care since {siteConfig.foundingDate || "2010"}.
              </p>

              {/* Social Links */}
              <div className="pt-2" aria-label="Social media profiles">
                <h5 className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2.5">
                  Follow Us
                </h5>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.socials.facebook && (
                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]/60 transition-all"
                      aria-label={`${siteConfig.name} on Facebook`}
                      title="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.instagram && (
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent transition-all"
                      aria-label={`${siteConfig.name} on Instagram`}
                      title="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.youtube && (
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]/60 transition-all"
                      aria-label={`${siteConfig.name} on YouTube`}
                      title="YouTube"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.whatsapp && (
                    <a
                      href={siteConfig.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]/60 transition-all"
                      aria-label={`${siteConfig.name} on WhatsApp`}
                      title="WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Sacred Journeys */}
            <div className="space-y-4" aria-label="Sacred pilgrimage journeys">
              <h4 className="font-semibold text-white text-xs uppercase tracking-widest text-[var(--color-accent-soft)]">
                Sacred Journeys
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light">
                <li>
                  <Link href="/umrah" className="hover:text-white transition-colors" aria-label="Umrah packages from India">
                    Umrah Packages
                  </Link>
                </li>
                <li>
                  <Link href="/hajj" className="hover:text-white transition-colors" aria-label="Hajj packages 2026 registration">
                    Hajj 2026 Registration
                  </Link>
                </li>
                <li>
                  <Link href="/ziyarat" className="hover:text-white transition-colors" aria-label="Ziyarat and historical tours">
                    Historical Ziyarat Tours
                  </Link>
                </li>
                <li>
                  <Link href="/umrah" className="hover:text-white transition-colors" aria-label="5-star executive courtyard Umrah packages">
                    Executive 5★ Courtyard Umrah
                  </Link>
                </li>
                <li>
                  <Link href="/umrah#classic-umrah-package" className="hover:text-white transition-colors" aria-label="Classic budget group Umrah package">
                    Classic Group Umrah ₹85,000
                  </Link>
                </li>
                <li>
                  <Link href="/hajj#hajj-guided-comfort" className="hover:text-white transition-colors" aria-label="Shariat guided comprehensive Hajj package">
                    Shariat-Guided Comprehensive Hajj
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Pilgrim Care & Support */}
            <div className="space-y-4" aria-label="Pilgrim support and services">
              <h4 className="font-semibold text-white text-xs uppercase tracking-widest text-[var(--color-accent-soft)]">
                Pilgrim Care
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors" aria-label="Umrah and Hajj visa documentation service">
                    Umrah / Hajj Visa & Docs
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors" aria-label="Verified hotels near Haram courtyards">
                    Courtyard Hotel Booking
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors" aria-label="AC buses and private VIP ground transport">
                    AC Ground & VIP Transport
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors" aria-label="Elderly wheelchair and senior pilgrim care">
                    Elderly & Wheelchair Support
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors" aria-label="About Siddique Tours founding and credentials">
                    Siddique Tours — Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors" aria-label="Siddique Tours Vapi head office address and contact">
                    Head Office Vapi — Visit Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Head Office Card */}
            <div className="space-y-4" aria-label="Head office contact information">
              <div
                itemScope
                itemType="https://schema.org/LocalBusiness"
                className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3.5"
              >
                <link itemProp="url" href={siteConfig.url} />
                <link itemProp="image" href={`${siteConfig.url}/logo.png`} />
                <meta itemProp="name" content={siteConfig.name} />
                <meta itemProp="priceRange" content="$$" />
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <h4 className="font-semibold text-white text-xs uppercase tracking-widest text-[var(--color-accent-soft)]">
                    Head Office • Vapi
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                    Visit Us
                  </span>
                </div>

                <address
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  className="text-xs text-gray-300 font-light leading-relaxed not-italic space-y-0.5"
                >
                  <span className="font-normal text-white" itemProp="streetAddress">
                    {siteConfig.contact.address.street},
                  </span>
                  <span itemProp="addressLocality">{siteConfig.contact.address.city}, </span>
                  <span itemProp="addressRegion">{siteConfig.contact.address.state} – </span>
                  <span itemProp="postalCode">{siteConfig.contact.address.pincode}</span>
                  <meta itemProp="addressCountry" content={siteConfig.contact.address.countryCode || "IN"} />
                </address>

                <div
                  itemScope
                  itemProp="geo"
                  itemType="https://schema.org/GeoCoordinates"
                  className="hidden"
                >
                  <meta itemProp="latitude" content={String(siteConfig.contact.address.geo.lat)} />
                  <meta itemProp="longitude" content={String(siteConfig.contact.address.geo.lng)} />
                </div>

                <div className="space-y-1.5 border-t border-white/10 pt-3 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px]">Phone / Helpline:</span>
                    <a
                      itemProp="telephone"
                      href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.phone}`}
                      className="text-white hover:text-emerald-400 font-semibold transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px]">Email:</span>
                    <a
                      itemProp="email"
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px]">Hours:</span>
                    <span itemProp="openingHours" className="text-gray-300">
                      {siteConfig.contact.openingHours}
                    </span>
                  </div>
                </div>

                <div className="pt-1 border-t border-white/10">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${siteConfig.name} ${siteConfig.contact.address.street} ${siteConfig.contact.address.city} ${siteConfig.contact.address.state}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                    aria-label={`View ${siteConfig.name} Vapi head office on Google Maps`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col xl:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            {/* Left: Copyright & Designer Credit */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2.5 gap-y-1 text-center xl:text-left">
              <span>
                &copy; {year} <strong className="text-gray-300 font-medium">{siteConfig.name}</strong>.{" "}
                <span className="whitespace-nowrap">All rights reserved.</span>
              </span>
              <span className="hidden sm:inline text-gray-600" aria-hidden="true">•</span>
              <span className="whitespace-nowrap text-gray-400">
                Design and Built by{" "}
                <a
                  href="https://samir-portfolio-dev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent-soft)] hover:text-white transition-colors underline-offset-4 hover:underline font-medium"
                >
                  Samir Shaikh
                </a>
              </span>
            </div>

            {/* Right: Regulatory Reassurance */}
            <div className="flex flex-wrap items-center justify-center xl:justify-end gap-x-3 gap-y-1 font-light text-gray-400 text-[11px] text-center xl:text-right">
              <span className="whitespace-nowrap">Ministry-Compliant • IATA-Recognised Agents</span>
              <span className="hidden sm:inline text-gray-600" aria-hidden="true">•</span>
              <span>Devoted to transparent pricing and verified inclusions for every pilgrim.</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

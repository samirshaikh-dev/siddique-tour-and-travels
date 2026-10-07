import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import { getPackagesByCategory } from "@/data/packages";

export const metadata = {
  title: "Umrah Packages",
  description:
    "Explore year-round Umrah packages with verified hotels near Haram in Makkah and Madinah, direct flights, and complete visa facilitation.",
};

export default function UmrahPage() {
  const umrahPackages = getPackagesByCategory("Umrah");

  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          badge="Sacred Umrah Journeys"
          title="Curated Umrah Packages"
          subtitle="From budget-friendly group departures to VIP 5-star executive experiences facing the Kaaba courtyard."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Container>
    </div>
  );
}

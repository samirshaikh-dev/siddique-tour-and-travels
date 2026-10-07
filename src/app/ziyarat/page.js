import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCard from "@/components/packages/PackageCard";
import { getPackagesByCategory } from "@/data/packages";

export const metadata = {
  title: "Historical Ziyarat Tours",
  description:
    "Guided educational and spiritual Ziyarat tours in Makkah, Madinah, and surrounding Islamic heritage sites.",
};

export default function ZiyaratPage() {
  const ziyaratPackages = getPackagesByCategory("Ziyarat");

  return (
    <div className="py-16 sm:py-20 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          badge="Islamic Heritage & History"
          title="Sacred Sanctuaries & Ziyarat"
          subtitle="Walk where the Prophet (PBUH) and the Sahaba walked. Enriching historical narrations with comfortable AC transport."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ziyaratPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Container>
    </div>
  );
}

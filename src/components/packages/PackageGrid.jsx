"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";

export default function PackageGrid({ packages, initialCategory = "All" }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = ["All", "Umrah", "Hajj", "Ziyarat"];

  const filteredPackages =
    selectedCategory === "All"
      ? packages
      : packages.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] ${
                isActive
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-sage)] hover:border-[var(--color-accent)] hover:text-[var(--color-primary)]"
              }`}
            >
              {cat === "All" ? "All Packages" : `${cat} Packages`}
            </button>
          );
        })}
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

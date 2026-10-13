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
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer min-h-[42px] active:scale-[0.98] ${
                isActive
                  ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white shadow-[0_4px_16px_rgba(6,74,67,0.25)] border border-emerald-600/30"
                  : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-sage)]/80 hover:border-[var(--color-accent)] hover:text-[var(--color-primary)] shadow-2xs hover:shadow-xs"
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

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const SimpleHero = ({
  title = "pageTitleDefault",
  breadcrumbs = [{ name: "home", href: "/" }],
  children,
}) => {
  const t = useTranslations('SimpleHero');
  const displayTitle = t(title, { defaultValue: title });

  // Translate breadcrumbs dynamically
  const translatedBreadcrumbs = breadcrumbs.map((crumb) => ({
    ...crumb,
    name: t(crumb.name, { defaultValue: crumb.name }),
  }));

  return (
    <section className="relative h-30 sm:h-60 flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/simple-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative flex gap-5 items-center justify-between z-10 w-7xl mx-auto px-3 md:px-0">
        <div className="md:max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-2 md:mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-white text-sm">
              {translatedBreadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />}
                  {index === translatedBreadcrumbs.length - 1 ? (
                    <span className="text-gray-300">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-gray-300 transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-sm sm:text-3xl lg:text-4xl font-bold text-white">{displayTitle}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
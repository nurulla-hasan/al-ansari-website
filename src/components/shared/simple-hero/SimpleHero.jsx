import Link from "next/link"
import { ChevronRight } from "lucide-react"

const SimpleHero = ({
  title = "Page Title",
  breadcrumbs = [{ name: "Home", href: "/" }],
  children
}) => {
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
      <div className="relative flex flex-col md:flex-row items-center justify-between z-10 container 2xl:w-5/6 mx-auto px-5 md:px-0">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-2 md:mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-white text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />}
                  {index === breadcrumbs.length - 1 ? (
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {children}
        </div>
      </div>
    </section>
  )
}

export default SimpleHero

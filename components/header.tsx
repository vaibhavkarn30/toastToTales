"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Bookshelf", href: "/bookshelf" },
    { name: "Contact Us", href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gradient-to-r from-[#F9F4EF] via-[#F5F0EB] to-[#F9F4EF] shadow-md sticky top-0 z-50 border-b border-[#E27970]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="https://res.cloudinary.com/da5aqufzj/image/upload/v1753290609/WhatsApp_Image_2025-07-23_at_22.39.25_n3nx1k.jpg"
                alt="Toast To Tales Logo"
                width={200}
                height={80}
                className="h-12 w-auto max-w-[200px] md:h-16 md:max-w-[250px] object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm lg:text-base relative overflow-hidden group",
                  pathname === item.href 
                    ? "bg-[#E27970] text-white shadow-lg" 
                    : "bg-white/90 text-[#2E2E2E] hover:bg-[#E27970] hover:text-white shadow-md hover:shadow-lg"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E27970] to-[#D26960] rounded-lg" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#E27970]/0 to-[#E27970]/0 group-hover:from-[#E27970] group-hover:to-[#D26960] transition-all duration-300 rounded-lg" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-lg text-[#2E2E2E] hover:bg-[#E27970] hover:text-white transition-all duration-200 bg-white/80 shadow-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-[#E27970]/20 mt-2 mb-4">
            <nav className="flex flex-col gap-2 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-semibold text-center transition-all duration-200 text-base",
                    pathname === item.href 
                      ? "bg-[#E27970] text-white shadow-md" 
                      : "bg-[#F9F4EF] text-[#2E2E2E] hover:bg-[#E27970] hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

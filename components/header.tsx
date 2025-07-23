"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Bookshelf", href: "/bookshelf" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="bg-[#F9F4EF] shadow-md border-b border-[#C2B9B0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-24 md:h-20 py-2">
          {/* More Noticeable Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto mb-3 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="https://res.cloudinary.com/da5aqufzj/image/upload/v1753290609/WhatsApp_Image_2025-07-23_at_22.39.25_n3nx1k.jpg"
                alt="Toast To Tales Logo"
                width={300}
                height={120}
                className="h-30 w-[300px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Toasted Neutrals Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-5 py-2 rounded-md font-semibold text-[#2E2E2E] bg-[#C2B9B0] hover:bg-[#E27970] hover:text-white border border-[#C2B9B0] transition-colors duration-200 text-base shadow-sm",
                  pathname === item.href ? "bg-[#E27970] text-white border-[#E27970]" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

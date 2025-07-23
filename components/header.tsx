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
    <header className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 shadow-md">
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

          {/* Minimal Vibrant Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 rounded-lg font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200 text-base bg-white/60 hover:bg-white/80 border border-transparent hover:border-pink-200 underline-offset-4 hover:underline",
                  pathname === item.href ? "text-pink-600 underline bg-white/80 border-pink-200" : ""
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

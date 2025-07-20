"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Book } from "lucide-react"

export function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Bookshelf", href: "/bookshelf" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">Literary Haven</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <nav className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-gray-600",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

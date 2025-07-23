import Image from "next/image"
import { Mail, Phone, MapPin, Home, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F9F4EF] text-[#2E2E2E] rounded-t-3xl shadow-inner mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <Image
              src="https://res.cloudinary.com/da5aqufzj/image/upload/v1753293798/WhatsApp_Image_2025-07-23_at_23.32.41_qatzzy.jpg"
              alt="Toast To Tales Logo"
              width={32}
              height={32}
              className="mr-2 rounded object-contain"
            />
            <span className="text-2xl font-bold tracking-wide">Toast To Tales</span>
          </div>
          <p className="text-base text-[#3A3D42] max-w-xs md:max-w-none mt-1 md:mt-2">
            Where every story finds its voice. Publishing stories that matter.
          </p>
        </div>

        {/* Links Row */}
        <div className="flex flex-row items-center justify-center w-full md:w-1/3 gap-6 py-2 mb-8 md:mb-0">
          <a href="/" className="flex items-center gap-2 text-[#2E2E2E] hover:text-[#E27970] font-medium transition-colors text-base px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E27970]">
            <Home className="h-5 w-5" /> Home
          </a>
          <a href="/bookshelf" className="flex items-center gap-2 text-[#2E2E2E] hover:text-[#E27970] font-medium transition-colors text-base px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E27970]">
            <BookOpen className="h-5 w-5" /> Bookshelf
          </a>
          <a href="/contact" className="flex items-center gap-2 text-[#2E2E2E] hover:text-[#E27970] font-medium transition-colors text-base px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E27970] whitespace-nowrap">
            <Mail className="h-5 w-5" /> Contact
          </a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col items-start text-left w-full md:w-1/3 gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-[#E27970]" />
            <span>info@toasttotales.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-[#E27970]" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-[#E27970]" />
            <span>123 Book Street, Reading City</span>
          </div>
        </div>

      </div>
      <div className="w-full border-t border-[#E8E8E8] pt-6 text-center">
        <p className="text-xs text-[#6C87A6]">© 2024 Toast To Tales. All rights reserved.</p>
      </div>
    </footer>
  )
}

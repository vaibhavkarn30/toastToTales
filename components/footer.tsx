import Image from "next/image"
import { Mail, Phone, MapPin, Home, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2E2E2E] to-[#1A1A1A] text-white rounded-t-3xl shadow-2xl mt-16 border-t-4 border-[#E27970]">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-3">
            <div className="bg-[#E27970] p-2 rounded-lg mr-3">
              <Image
                src="https://res.cloudinary.com/da5aqufzj/image/upload/v1753293798/WhatsApp_Image_2025-07-23_at_23.32.41_qatzzy.jpg"
                alt="Toast To Tales Logo"
                width={32}
                height={32}
                className="rounded object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-wide text-white">Toast To Tales</span>
          </div>
          <p className="text-base text-gray-300 max-w-xs md:max-w-none mt-1 md:mt-2 leading-relaxed">
            Where every story finds its voice. Publishing stories that matter and inspire generations.
          </p>
        </div>

        {/* Links Row */}
        <div className="flex flex-row items-center justify-center w-full md:w-1/3 gap-4 py-2 mb-8 md:mb-0">
          <a href="/" className="flex items-center gap-2 text-gray-300 hover:text-[#E27970] font-medium transition-all duration-300 text-base px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E27970] focus:ring-offset-2 focus:ring-offset-[#2E2E2E]">
            <Home className="h-5 w-5" /> Home
          </a>
          <a href="/bookshelf" className="flex items-center gap-2 text-gray-300 hover:text-[#E27970] font-medium transition-all duration-300 text-base px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E27970] focus:ring-offset-2 focus:ring-offset-[#2E2E2E]">
            <BookOpen className="h-5 w-5" /> Bookshelf
          </a>
          <a href="/contact" className="flex items-center gap-2 text-gray-300 hover:text-[#E27970] font-medium transition-all duration-300 text-base px-3 py-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E27970] focus:ring-offset-2 focus:ring-offset-[#2E2E2E] whitespace-nowrap">
            <Mail className="h-5 w-5" /> Contact
          </a>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col items-start text-left w-full md:w-1/3 gap-3 text-sm">
          <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
            <div className="bg-[#E27970] p-1.5 rounded-md">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-300">info@toasttotales.com</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
            <div className="bg-[#E27970] p-1.5 rounded-md">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-300">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
            <div className="bg-[#E27970] p-1.5 rounded-md">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-300">123 Book Street, Reading City</span>
          </div>
        </div>

      </div>
      <div className="w-full border-t border-gray-700 pt-6 text-center">
        <p className="text-xs text-gray-400">© 2024 Toast To Tales. All rights reserved.</p>
      </div>
    </footer>
  )
}

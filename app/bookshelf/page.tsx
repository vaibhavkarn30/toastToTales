"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Download, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const genres = [
  "All Genres",
  "Fiction",
  "Mystery & Thriller",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Non-Fiction",
  "Biography",
  "History",
  "Self-Help",
  "Business",
  "Academic",
  "Poetry",
  "Children's Books",
]

const catalogYears = [
  { year: "2025", label: "2025 Catalogue", available: true },
  { year: "2024", label: "2024 Catalogue", available: true },
  { year: "2023", label: "2023 Catalogue", available: true },
  { year: "2022", label: "2022 Catalogue", available: false },
]

const books = [
  {
    id: 1,
    title: "The Midnight Garden",
    author: "Sarah Johnson",
    genre: "Fiction",
    rating: 4.8,
    year: 2024,
    description: "A captivating tale of mystery and magic set in Victorian England.",
    price: "$24.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
  {
    id: 2,
    title: "Digital Revolution",
    author: "Mark Thompson",
    genre: "Non-Fiction",
    rating: 4.6,
    year: 2023,
    description: "An insightful look into how technology is reshaping our world.",
    price: "$29.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
  {
    id: 3,
    title: "Shadows of Tomorrow",
    author: "Elena Rodriguez",
    genre: "Science Fiction",
    rating: 4.9,
    year: 2024,
    description: "A thrilling journey through time and space in the year 2150.",
    price: "$26.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
  {
    id: 4,
    title: "The Art of Leadership",
    author: "David Chen",
    genre: "Business",
    rating: 4.7,
    year: 2023,
    description: "Essential strategies for modern leadership in the digital age.",
    price: "$32.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
  {
    id: 5,
    title: "Whispers in the Wind",
    author: "Amanda Foster",
    genre: "Romance",
    rating: 4.5,
    year: 2024,
    description: "A heartwarming love story set against the backdrop of rural Ireland.",
    price: "$22.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
  {
    id: 6,
    title: "The Detective's Dilemma",
    author: "Robert Blake",
    genre: "Mystery & Thriller",
    rating: 4.8,
    year: 2023,
    description: "A gripping murder mystery that will keep you guessing until the end.",
    price: "$25.99",
    image: "https://res.cloudinary.com/da5aqufzj/image/upload/v1753724882/WhatsApp_Image_2025-07-28_at_23.17.16_nd1qpl.jpg",
  },
]

export default function BookshelfPage() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres")
  const [selectedBook, setSelectedBook] = useState<(typeof books)[0] | null>(null)
  const [selectedCatalogYear, setSelectedCatalogYear] = useState("")

  const filteredBooks = selectedGenre === "All Genres" ? books : books.filter((book) => book.genre === selectedGenre)

  const handleCatalogDownload = (year: string) => {
    // Using the actual Cloudinary PDF URL
    const catalogUrl = "https://res.cloudinary.com/da5aqufzj/image/upload/v1753726369/1336443563_I0129P2607059403_Jul_25_os4le2.pdf"
    window.open(catalogUrl, '_blank')
  }

  const handleCatalogView = (year: string) => {
    // Using the actual Cloudinary PDF URL
    const catalogUrl = "https://res.cloudinary.com/da5aqufzj/image/upload/v1753726369/1336443563_I0129P2607059403_Jul_25_os4le2.pdf"
    window.open(catalogUrl, '_blank')
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Bookshelf</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our extensive collection of books across various genres. Use the dropdowns below to filter by your
          favorite genre or access our catalogues.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select value={selectedCatalogYear} onValueChange={setSelectedCatalogYear}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a catalogue year" />
              </SelectTrigger>
              <SelectContent>
                {catalogYears.map((catalog) => (
                  <SelectItem 
                    key={catalog.year} 
                    value={catalog.year}
                    disabled={!catalog.available}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{catalog.label}</span>
                      {!catalog.available && (
                        <Badge variant="secondary" className="ml-2">Coming Soon</Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Catalog Action Buttons - Only under catalog dropdown */}
            {selectedCatalogYear && (
              <div className="flex gap-2 mt-2">
                <Button
                  onClick={() => handleCatalogView(selectedCatalogYear)}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button
                  onClick={() => handleCatalogDownload(selectedCatalogYear)}
                  size="sm"
                  className="flex-1"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}
          {selectedGenre !== "All Genres" && ` in ${selectedGenre}`}
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="hover:shadow-lg transition-shadow">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg">
              <img
                src={book.image || "/placeholder.svg"}
                alt={`Cover of ${book.title}`}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2 px-3 pt-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="text-xs">{book.genre}</Badge>
              </div>
              <CardTitle className="text-sm line-clamp-2 leading-tight">{book.title}</CardTitle>
              <CardDescription className="text-xs text-gray-600">by {book.author}</CardDescription>
            </CardHeader>
            <CardContent className="px-3 pb-3">
              <p className="text-gray-600 mb-3 text-xs line-clamp-2 leading-tight">{book.description}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{book.year}</span>
                </div>
                <span className="text-sm font-bold text-primary">{book.price}</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full text-xs py-1" onClick={() => setSelectedBook(book)}>
                    <BookOpen className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{book.title}</DialogTitle>
                    <DialogDescription className="text-lg">by {book.author}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={`Cover of ${book.title}`}
                          className="w-32 h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-sm">
                            {book.genre}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Publication Year</h4>
                            <p className="text-gray-600">{book.year}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Price</h4>
                            <p className="text-2xl font-bold text-primary">{book.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed">{book.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Book Details</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Pages:</span>
                          <span className="ml-2 text-gray-900">324</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Language:</span>
                          <span className="ml-2 text-gray-900">English</span>
                        </div>
                        <div>
                          <span className="text-gray-500">ISBN:</span>
                          <span className="ml-2 text-gray-900">978-0-123456-78-9</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Format:</span>
                          <span className="ml-2 text-gray-900">Hardcover, Paperback, eBook</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
          <p className="text-gray-500">Try selecting a different genre to see more books.</p>
        </div>
      )}
    </div>
  )
}

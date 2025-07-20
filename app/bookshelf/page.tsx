"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Calendar } from "lucide-react"
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
    image: "https://dummyimage.com/600x400/000/fff&text=Hello",
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
    image: "/placeholder.svg?height=300&width=200",
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
    image: "/placeholder.svg?height=300&width=200",
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
    image: "/placeholder.svg?height=300&width=200",
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
    image: "/placeholder.svg?height=300&width=200",
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
    image: "/placeholder.svg?height=300&width=200",
  },
]

export default function BookshelfPage() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres")
  const [selectedBook, setSelectedBook] = useState<(typeof books)[0] | null>(null)

  const filteredBooks = selectedGenre === "All Genres" ? books : books.filter((book) => book.genre === selectedGenre)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Bookshelf</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our extensive collection of books across various genres. Use the dropdown below to filter by your
          favorite genre.
        </p>

        <div className="max-w-xs mx-auto">
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
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}
          {selectedGenre !== "All Genres" && ` in ${selectedGenre}`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="hover:shadow-lg transition-shadow">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg">
              <img
                src={book.image || "/placeholder.svg"}
                alt={`Cover of ${book.title}`}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{book.genre}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{book.rating}</span>
                </div>
              </div>
              <CardTitle className="text-xl line-clamp-2">{book.title}</CardTitle>
              <CardDescription className="text-gray-600">by {book.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{book.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{book.year}</span>
                </div>
                <span className="text-lg font-bold text-primary">{book.price}</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" onClick={() => setSelectedBook(book)}>
                    <BookOpen className="h-4 w-4 mr-2" />
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
                          <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-lg font-medium">{book.rating}</span>
                            <span className="text-gray-500">/ 5.0</span>
                          </div>
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

                    <div className="flex space-x-3 pt-4">
                      <Button className="flex-1">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Preview Sample
                      </Button>
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

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const bookTypes = [
    {
      title: "Fiction",
      description: "Immerse yourself in captivating stories and imaginative worlds",
      icon: BookOpen,
    },
    {
      title: "Non-Fiction",
      description: "Expand your knowledge with factual and educational content",
      icon: Users,
    },
    {
      title: "Academic",
      description: "Comprehensive textbooks and scholarly publications",
      icon: Award,
    },
    {
      title: "International",
      description: "Diverse voices and stories from around the globe",
      icon: Globe,
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Welcome to Literary Haven</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your premier destination for quality books across all genres. Discover, explore, and immerse yourself in
              the world of literature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/bookshelf">Explore Our Collection</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Literary Haven Publishing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with a passion for literature, Literary Haven Publishing has been connecting readers with
              exceptional books for over two decades. We believe in the power of stories to inspire, educate, and
              transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+ Titles</h3>
              <p className="text-gray-600">Extensive collection across all genres</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Authors</h3>
              <p className="text-gray-600">Partnering with talented writers worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Awards</h3>
              <p className="text-gray-600">Recognition for publishing excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Books We Publish</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From gripping fiction to insightful non-fiction, we cover every genre to satisfy every reader's appetite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{type.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

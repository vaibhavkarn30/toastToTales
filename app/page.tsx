import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe } from "lucide-react"

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
    // Repeat the same four for now
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
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#F9F4EF] py-24 flex flex-col items-center text-center overflow-hidden">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight font-serif text-[#2E2E2E]">
            Welcome to <span className="text-[#E27970]">Toast To Tales</span>
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-black max-w-2xl mx-auto mb-10 font-sans leading-relaxed" style={{letterSpacing: '0.01em'}}>
          Empowering emerging authors. Publishing stories that matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/bookshelf"
            className="inline-block px-8 py-3 bg-[#E27970] text-white rounded-md shadow-lg hover:bg-[#C2B9B0] hover:text-[#2E2E2E] hover:-translate-y-1 hover:shadow-2xl transition text-lg font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-[#E27970]"
          >
            Explore Our Books
          </a>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#EFD9A7] text-[#2E2E2E] border border-[#C2B9B0] rounded-md shadow hover:bg-[#C2B9B0] hover:-translate-y-1 hover:shadow-2xl transition text-lg font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-[#EFD9A7]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#C2B9B0] rounded-3xl shadow-md mx-4 md:mx-0 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">About Toast To Tales</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Founded with a passion for literature, Toast To Tales has been connecting readers with exceptional books for over two decades. We believe in the power of stories to inspire, educate, and transform lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-[#F9F4EF] rounded-2xl shadow p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer border-2 border-transparent hover:border-[#E27970] focus-within:border-[#E27970]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#C2B9B0] bg-transparent">
                <BookOpen className="h-8 w-8 text-[#E27970]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+ Titles</h3>
              <p className="text-gray-600">Extensive collection across all genres</p>
            </div>
            <div className="text-center bg-[#F9F4EF] rounded-2xl shadow p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer border-2 border-transparent hover:border-[#E27970] focus-within:border-[#E27970]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#C2B9B0] bg-transparent">
                <Users className="h-8 w-8 text-[#E27970]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Authors</h3>
              <p className="text-gray-600">Partnering with talented writers worldwide</p>
            </div>
            <div className="text-center bg-[#F9F4EF] rounded-2xl shadow p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer border-2 border-transparent hover:border-[#E27970] focus-within:border-[#E27970]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#C2B9B0] bg-transparent">
                <Award className="h-8 w-8 text-[#E27970]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Awards</h3>
              <p className="text-gray-600">Recognition for publishing excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Types Section */}
      <section className="py-16 bg-[#F9F4EF] mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Types of Books We Publish</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From gripping fiction to insightful non-fiction, we cover every genre to satisfy every reader's appetite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookTypes.map((type, index) => (
              <Card key={index} className="text-center bg-white rounded-2xl shadow hover:shadow-lg transition-shadow border border-[#C2B9B0]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#C2B9B0] bg-transparent">
                    <type.icon className="h-6 w-6 text-[#E27970]" />
                  </div>
                  <CardTitle className="text-xl font-serif">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{type.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

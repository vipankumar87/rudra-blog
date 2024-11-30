// app/about/page.js
import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section with enhanced styling */}
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
          About Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <Image
              src="/about-image.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
              priority
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10 opacity-70"></div>
          </div>
          
          <div className="space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Values Section with enhanced cards */}
        <div className="space-y-12 px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 relative">
            Our Values
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Innovation', 
                description: 'Pushing boundaries in technology',
                icon: '🚀'
              },
              { 
                title: 'Quality', 
                description: 'Delivering excellence in every project',
                icon: '⭐'
              },
              { 
                title: 'Integrity', 
                description: 'Building trust through transparency',
                icon: '🤝'
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with enhanced button */}
        <div className="mt-16 text-center relative">
          <button className="group relative inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white overflow-hidden transition-all duration-300 hover:bg-blue-700">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute right-4 group-hover:translate-x-1 transition-transform duration-200">
              →
            </div>
          </button>
          {/* Decorative circles */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-50 rounded-full -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-50 rounded-full -z-10"></div>
        </div>
      </div>
    </main>
  )
}
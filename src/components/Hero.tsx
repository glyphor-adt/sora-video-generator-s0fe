import React from 'react'
import { Button } from './ui/button'
import { Zap } from 'lucide-react'

function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">Generate Stunning Videos with AI</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up">Unleash your creativity with Sora 2, the AI-powered video generator that transforms your text prompts into captivating visual stories.</p>
        <div className="flex justify-center mt-12 space-x-4">
          <Button className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 hover:scale-105">
            Start Generating <Zap className="ml-2" />
          </Button>
          <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>
      {/* Mesh Background -  Requires more advanced Tailwind setup */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Replace with actual mesh or gradient as needed */}
      </div>
    </section>
  )
}

export default Hero

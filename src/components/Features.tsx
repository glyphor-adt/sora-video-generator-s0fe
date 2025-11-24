import React from 'react'
import { Shield, TrendingUp, Clock, Lightbulb } from 'lucide-react'
import { cn } from '../lib/utils'

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Unbreakable Security',
    description: 'Your data is protected with enterprise-grade encryption and compliance certifications.',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Rapid Video Generation',
    description: 'Generate high-quality videos in minutes, not hours, thanks to our optimized AI models.',
  },
  {
    id: 3,
    icon: Clock,
    title: 'Save Time and Resources',
    description: 'Reduce video production costs by up to 80% with automated AI video creation.',
  },
  {
    id: 4,
    icon: Lightbulb,
    title: 'Unlock Limitless Creativity',
    description: 'Explore new visual storytelling possibilities with AI-generated video variations.',
  },
]

function Features() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Power Up Your Video Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-card p-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

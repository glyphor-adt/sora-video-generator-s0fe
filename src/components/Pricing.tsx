import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Limited video generations',
      'Basic AI models',
      'Community support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/month',
    features: [
      'Unlimited video generations',
      'Advanced AI models',
      'Priority support',
      'Commercial license',
    ],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom AI models',
      'Dedicated support team',
      'Advanced analytics',
      'Unlimited storage',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

function Pricing() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Perfect Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="bg-card rounded-xl shadow-xl p-6 relative">
              {tier.highlight && (
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <div className="text-5xl font-bold mb-6">{tier.price}</div>
              <ul className="mb-8 space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

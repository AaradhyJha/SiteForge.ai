import React from 'react'
const plans = [
  {
    key: "free",
    name: "Free",
    price: "₹0",
    credits: 100,
    description: "Perfect to explore SiteForge.ai",
    features: [
      "100 credits on signup",
      "AI website generation",
      "Responsive HTML output",
      "Basic animations",
      "Deploy & share websites",
    ],
    popular: false,
    button: "Get Started",
  },
  {
    key: "pro",
    name: "Pro",
    price: "₹849",
    credits: 500,
    description: "For creators who build regularly",
    features: [
      "500 credits per month",
      "AI website generation",
      "Responsive HTML output",
      "Advanced animations",
      "Unlimited edits per website",
      "Priority generation speed",
      "Deploy & share websites",
      "Email support",
    ],
    popular: true,
    button: "Upgrade to Pro",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "₹4199",
    credits: 1000,
    description: "For agencies and teams at scale",
    features: [
      "1000 credits per month",
      "AI website generation",
      "Responsive HTML output",
      "Premium animations",
      "Unlimited edits per website",
      "Fastest generation speed",
      "Deploy & share websites",
      "Custom slug/domain support",
      "Dedicated support",
      "Early access to new features",
    ],
    popular: false,
    button: "Contact Us",
  },
]

function Pricing() {

  return (
    <div className='relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 pt-16 pb-24'>

    </div>
  )
}

export default Pricing
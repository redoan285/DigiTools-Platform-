import React from 'react';

const PricingCards = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for getting started",
      price: 0,
      period: "month",
      tag: null,
      tagType: null,
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline"
    },
    {
      id: 2,
      name: "Pro",
      description: "Best for professionals",
      price: 29,
      period: "month",
      tag: "Most Popular",
      tagType: "popular",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "solid"
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For teams and businesses",
      price: 99,
      period: "month",
      tag: null,
      tagType: null,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl transition-all duration-300 hover:-translate-y-2
                ${plan.tag === "Most Popular" 
                  ? "bg-gradient-to-br from-purple-600 to-purple-700 shadow-2xl" 
                  : "bg-white border border-gray-200 hover:shadow-xl"
                }
              `}
            >
              {/* Popular Tag */}
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-orange-900 text-xs font-bold px-6 py-1.5 rounded-full shadow-lg">
                    🔥 {plan.tag}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Plan Name & Description */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold ${plan.tag === "Most Popular" ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-1 ${plan.tag === "Most Popular" ? "text-purple-200" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mt-8 mb-8">
                  <span className={`text-5xl font-bold ${plan.tag === "Most Popular" ? "text-white" : "text-gray-900"}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-base ${plan.tag === "Most Popular" ? "text-purple-200" : "text-gray-500"}`}>
                    /{plan.period}
                  </span>
                  {plan.price === 0 && (
                    <p className="text-xs text-green-500 mt-1 font-medium">Free forever</p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 ${plan.tag === "Most Popular" ? "text-purple-200" : "text-purple-600"}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.tag === "Most Popular" ? "text-purple-100" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`
                    w-full py-3.5 rounded-xl font-semibold transition-all duration-200
                    ${plan.buttonVariant === "solid" 
                      ? "bg-white text-purple-700 hover:bg-gray-100 shadow-lg hover:shadow-xl" 
                      : plan.tag === "Most Popular"
                        ? "bg-white text-purple-700 hover:bg-gray-100"
                        : "bg-purple-600 text-white hover:bg-purple-700 border-2 border-purple-600 hover:border-purple-700"
                    }
                  `}
                >
                  {plan.buttonText}
                </button>

                {/* Extra Note for Free Plan */}
                {plan.price === 0 && (
                  <p className="text-center text-xs text-gray-400 mt-4">
                    No credit card required
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        
       
      </div>
    </div>
  );
};

export default PricingCards;
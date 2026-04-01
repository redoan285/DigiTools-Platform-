import React from 'react';

const PricingCards = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-600 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Starter</h3>
              <p className="text-neutral-500 text-sm">Perfect for getting started</p>
            </div>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-neutral-500">/Month</span>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Basic templates
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Community support
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                1 project per month
              </li>
            </ul>

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="relative bg-gradient-to-b from-purple-600 to-purple-700 text-white rounded-3xl p-8 shadow-2xl scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
              Most Popular
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1">Pro</h3>
              <p className="text-purple-200 text-sm">Best for professionals</p>
            </div>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-purple-200">/Month</span>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Access to all premium tools
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Unlimited templates
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Priority support
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Cloud sync
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-white text-xl">✓</span>
                Advanced analytics
              </li>
            </ul>

            <button className="w-full py-4 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-100 transition-all">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Enterprise</h3>
              <p className="text-neutral-500 text-sm">For teams and businesses</p>
            </div>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-neutral-500">/Month</span>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Team collaboration
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500 text-xl">✓</span>
                Custom branding
              </li>
            </ul>

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-2xl transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-24 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-lg mb-10">
          Join thousands of professionals who are already using DigiTools to work smarter.<br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-100 transition-all">
            Explore Products
          </button>
          <button className="px-8 py-4 border-2 border-white/80 font-semibold rounded-2xl hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-sm mt-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTASection;

import React from 'react';

const States = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          
          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="mt-2 text-sm opacity-80">Active Users</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="mt-2 text-sm opacity-80">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.9</h2>
            <p className="mt-2 text-sm opacity-80">Rating</p>
          </div>

        </div>
      </section>

        </div>
    );
};

export default States;
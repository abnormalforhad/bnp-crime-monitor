import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BNP Crime Monitor
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tracking and documenting incidents involving BNP across Bangladesh. Stay informed with real-time updates and geographical visualization of reported events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
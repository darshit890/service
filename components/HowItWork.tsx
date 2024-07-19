import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <span className="inline-block bg-lime-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-300">
            Top-notch designs,
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-300">
            delivered at your doorstep
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '📦',
              title: 'Tell us your vision',
              description: 'Choose a plan and share your design project details with us: we\'re here to listen.',
            },
            {
              icon: '🎨',
              title: 'Receive the magic',
              description: 'Sit back and relax: our expert designers will turn your vision into reality.',
            },
            {
              icon: '👍',
              title: 'Get ongoing support',
              description: 'Your subscription ensures you have continuous access to our design team.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
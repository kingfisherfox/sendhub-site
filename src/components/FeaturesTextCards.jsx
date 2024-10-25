import React from 'react';

const HEADING = "Our Features";
const SUBHEADING = "Explore our exclusive features";
const FEATURES = [
  {
    name: 'Feature 1',
    description: 'Here are the details about Feature 1.',
  },
  {
    name: 'Feature 2',
    description: 'Here are the details about Feature 2.',
  },
  {
    name: 'Feature 3',
    description: 'Here are the details about Feature 3.',
  },
];
const BG_IMAGE_URL = "https://images.stockcake.com/public/0/9/5/095583dc-a49c-4c91-ad82-063ddcdd6a67/colorful-smoke-art-stockcake.jpg";

const HEADING_ALIGNMENT = "text-center";
const SUBHEADING_ALIGNMENT = "text-center";

const FeaturesTextCards = () => {
  return (
    <section id="features" className="...">
        <div className="relative py-40 sm:py-24 pt-16 bg-cover bg-center" style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
            <h1 className={`mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl ${HEADING_ALIGNMENT}`}>
                {HEADING}
            </h1>
            <p className={`mt-6 text-lg leading-8 text-gray-300 ${SUBHEADING_ALIGNMENT}`}>
                {SUBHEADING}
            </p>
            </div>
            <div className="relative mx-auto mt-16 mb-8 flex flex-wrap justify-center gap-6">
            {FEATURES.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 w-full max-w-xs">
                <div className="p-4 md:p-7">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-900 dark:text-neutral-400">
                    {feature.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
};

export default FeaturesTextCards;
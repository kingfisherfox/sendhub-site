import React from 'react';

const HEADING = "What Can Sendhub Do?";
const SUBHEADING = "Sendhub is a chrome extention for power-users or Make, Zapier and other no code automation tools";
const FEATURES = [
  {
    name: 'Trigger workflows',
    description: 'Create a form that will post to any webhook directly from your browser that will trigger unlimied workflows in your no code tools',
  },
  {
    name: 'Unlimied forms ',
    description: 'Text, numbers, multiple fields, whatever type of form you need to create, that will post the JSON content to your designatied webhook',
  },
  {
    name: 'No accounts',
    description: 'Everything is stored locally on your browser so its safe and basically unhackable',
  },
];

const HEADING_ALIGNMENT = "text-center";
const SUBHEADING_ALIGNMENT = "text-center";

const FeaturesTextCards = () => {
  return (
    <section id="features" className="relative py-64 sm:py-48 pt-24">
      {/* Centered Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 h-[50%] w-full overflow-hidden transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${HEADING_ALIGNMENT}`}>
            {HEADING}
          </h1>
          <p className={`mt-6 text-lg leading-8 text-gray-500 ${SUBHEADING_ALIGNMENT}`}>
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
    </section>
  );
};

export default FeaturesTextCards;
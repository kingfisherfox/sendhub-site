import React from 'react';

const PRICING_PLANS = [
  {
    name: 'Basic Plan',
    price: '$19.99/month',
    description: "Ideal for individuals just starting out.",
    features: [
      'Feature A',
      'Feature B',
      'Feature C',
    ],
    cta: 'Get Started',
    href: '#',
    featured: false,
  },
  {
    name: 'Premium Plan',
    price: '$49.99/month',
    description: "Perfect for growing businesses with more advanced needs.",
    features: [
      'Feature D',
      'Feature E',
      'Feature F',
    ],
    cta: 'Get Started',
    href: '#',
    featured: true,
  },
];

const TwoCardPricing = () => {
  return (
    <section id="pricing" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold leading-7 text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Choose the right plan for you</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl/8 text-center">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {PRICING_PLANS.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 ${plan.featured ? 'bg-white shadow-2xl' : 'bg-gray-50'} `}
          >
            <h3 className="text-base font-semibold leading-7 text-indigo-600">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">{plan.price}</span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">{plan.description}</p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.href} className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10 ${plan.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoCardPricing;
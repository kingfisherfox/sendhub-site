import React from 'react';

const HEADING_TEXT = "As seen on ";
const COMPANIES = [
  'reddit.com',
  'hackernews.com',
  'producthunt.com',
  'linkedin.com',

];
const TOKEN = 'pk_QfIQ3ZO4R4uEwiy2f1Zq3A';
const IMAGE_BASE_URL = 'https://img.logo.dev/';

const SocialProofCarousel = () => {
  return (
    
      <div className="bg-white rounded-md p-8 overflow-visible mb-24">
        <h2 className="text-3xl leading-9 font-semibold text-center mb-8">{HEADING_TEXT}</h2>
        <div className="w-full flex justify-center md:justify-center flex-wrap gap-8">
          {COMPANIES.map((company, index) => (
            <div key={`${company}-${index}`} className="relative">
              <img
                src={`${IMAGE_BASE_URL}${company}?format=png&token=${TOKEN}`}
                alt={`${company} logo`}
                className="h-24 rounded-md transition-transform transform hover:scale-125 duration-500 hover:shadow-lg z-10"
              />
            </div>
          ))}
        </div>
      </div>

  );
};

export default SocialProofCarousel;
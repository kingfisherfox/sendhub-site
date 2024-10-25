import React from 'react';
import banner from '../img/banner.png'

const HEADLINE_TEXT = "Centered Title";
const SUBTITLE_TEXT = "Subtitle text goes here.";

const HeroImageSplitScreen = ({ bgImage = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" }) => {
  return (
    <div className="relative bg-white">
      {/* Custom dotted pattern background */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-20"></div>
      <div className="relative py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {HEADLINE_TEXT}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              {SUBTITLE_TEXT}
            </p>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src={banner}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 max-h-[500px] object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroImageSplitScreen;
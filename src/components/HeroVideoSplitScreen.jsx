import React from 'react';

// Constants for video URL and text content
const videoUrl = "https://www.youtube.com/embed/1dmqH640_1Q?si=JNNKc6zQgVAx4-rU";

const HeroVideoSplitScreen = () => {
  return (
    <section id="video-section">
      <div className="relative bg-white">
        <div className="absolute inset-0 pattern-isometric pattern-gray-500 pattern-bg-white pattern-size-6 pattern-opacity-10"></div>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <iframe
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full max-h-[650px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px]"
                  src={videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube Video"
                  style={{ aspectRatio: '16/9' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSplitScreen;

"use client";

import React, { useState, useEffect } from 'react';

function Sec3() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const gifs: string[] = [
    'https://miro.medium.com/v2/resize:fit:1400/1*xHIWMbzPsZnU3eQtTCnYog.gif',  
    'https://cdn.mos.cms.futurecdn.net/VY7vvFVvZevNZkng9EHRSL-320-80.gif',
    'https://miro.medium.com/v2/resize:fit:1196/1*FKoiTFcSDqXzvvEqBUQlhQ.gif',
  ];

  const gifDuration: number = 4000;  

  const handleGifEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length); 
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gifs.length) % gifs.length); // Go to the previous gif, wrap around if needed
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length); // Go to the next gif
  };

  useEffect(() => {
    const timer = setTimeout(handleGifEnd, gifDuration);  

    return () => clearTimeout(timer);  
  }, [currentIndex]);  

  return (
    <div className='min-h-[90vh] border bg-[#161616] text-[#f4f4f4] px-10'>
      <h1 className='mt-[3rem] text-3xl font-semibold mb-5'>
        All Tools Designed to Enhance and Simplify <br /> Your Creative Workflow.
      </h1>

      <div className="min-h-[60vh] flex items-center px-4 gap-5 overflow-x-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-10"
          style={{
            transform: `translateX(-${currentIndex * 55}vw)`,  
          }}
        >
          {gifs.map((gif, index) => (
            <div key={index} className="border h-[55vh] w-[65vw] rounded-3xl shrink-0 5">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={gif}
                alt={`Creative Workflow ${index + 1}`}
                onLoad={handleGifEnd}  
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-end gap-4 mt-5 mr-5">
        <button onClick={handlePrevious} className="px-4 py-2 border text-[#f4f4f4] rounded-lg">Previous</button>
        <button onClick={handleNext} className="px-4 py-2 border text-[#f4f4f4]  rounded-lg">Next</button>
      </div>
    </div>
  );
}

export default Sec3;

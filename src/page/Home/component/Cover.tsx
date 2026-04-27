import { useState, useEffect, useCallback } from "react";
import { texts } from "../../../constants/texts";
import { Coverimage } from "../../../constants/images";
import covertext from "../../../constants/data/covertext.json";

interface covertext {
  descrpition: string;
}

const CoverSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Coverimage.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateIndex, 3000);
    return () => clearInterval(interval);
  }, [updateIndex]);

  return (
    <div className="relative">
      {/* Slideshow Image */}
      <img
        src={Coverimage[currentIndex]}
        alt="cover slide"
        className="w-screen h-screen object-cover"
        aria-live="polite"
      />
      {/* Overlay Content */}
      <div className="flex flex-col absolute top-0 left-0 w-screen h-screen items-center justify-center p-4 md:p-0">
        {/* Welcome Text */}
        <div className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-4 md:mb-6">
          <h4>Welcome To</h4>
        </div>
        {/* Project Name */}
        <div className="text-white text-4xl md:text-8xl font-bold drop-shadow-lg">
          <h1>Project FireFly</h1>
        </div>
        {/* Gradient Text */}
        <div className="drop-shadow-2xl mt-8 md:mt-12 bg-opacity-40 bg-black px-5 md:px-48 py-8 rounded-md">
          <div className="gradient-text text-xl md:text-2xl font-semibold inline-block">
            <p className="text-center">
              {texts[currentIndex % Object.keys(covertext).length]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;

import React, { useState } from 'react';

const ProductCard = ({ title, image, details, position }) => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
      {/* Small Screens */}
      <div className="lg:hidden">
        <div className="justify-center items-center text-center py-10 px-2">
          <p className="text-4xl mb-4 text-white">{title}</p>
          <div className="flex flex-row justify-center">
            <img src={image} alt={title} className="w-64 mt-8 mb-8" />
          </div>
          <p className="text-xl">{details}</p>
        </div>
      </div>

      {/* Large Screens */}
      <div className="hidden lg:flex z-30">
        {/* // Large Screens - Position: left */}
        {position === 'left' && (
          <div className="hidden flex lg:block h-screen">
            <div className="relative top-[30vh] left-10 xl:left-20 text-left w-[30vw] pe-10">
            <p className="text-5xl xl:text-6xl mb-4 py-4">{title}</p>
              <p className="text-xl">{details}</p>
            </div>
            <div className="flex flex-row justify-center w-1/3 xl:w-[59rem] 2xl:w-[180rem]">
              <img
                src={image}
                alt={title}
                className="relative bottom-[100px] left-[600px] xl:left-[500px] w-[80vw] xl:w-[70vh]  hover:scale-110 transform transition duration-500 ease-in-out rotate-[-20deg]"
                
              />
            </div>
          </div>
        )}

        {/* // Large Screens - Position: right */}
        {position === 'right' && (
          <div className="hidden flex lg:block h-screen">
            <div className="flex">
              <div className="flex flex-row justify-center h-full w-1/3">
                <img
                  src={image}
                  alt={title}
                  className="relative top-[90px] left-[40px] xl:left-[80px]  w-[65vh] h-[65vh] hover:scale-110 transform transition duration-500 ease-in-out shadow-inner  drop-shadow-2xl"
                />
              </div>
              <div className="relative text-left top-[170px] left-[160px] xl:left-[230px] 2xl:left-[250px] w-1/2 pe-16">
                <p className="text-4xl xl:text-6xl mb-4 py-4 ">{title}</p>
                <p className="text-xl">{details}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';

import home_bg from '../../assets/home_bg.jpg';
import home1 from '../../assets/home1.svg';
import home1new from '../../assets/home1new.svg';
import home2 from '../../assets/home2.svg';

const Home = () => {
  const vectorImage1 = {
    backgroundImage: `url(${home1})`,
    backgroundSize: 'cover',
    width: '30vh',
    height: '40vh',
    position: 'absolute',
    left: '15vh',
    top: '50vh',
  };
  const vectorImage2 = {
    backgroundImage: `url(${home1new})`,
    backgroundSize: '100% 100%'
  };

  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="text-white text-center items-center h-screen flex flex-col p-10 md:p-40 w-full">
      <div
        className="absolute top-[55vh] sm:top-[55vh] md:top-[59vh] lg:top-[53vh] flex justify-center items-center left-[2vw] md:left-[2vw] lg:left-[-5vw] h-[30vh] md:h-[34vh] lg:h-[45vh] w-[91vw] md:w-[44vw] lg:w-[55vw"
        // style={{
        //   backgroundImage: `url(${home_bg})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        {/* <div style={vectorImage1} className="md:block "></div> */}
        <div style={vectorImage2} className="relative w-full h-full p-3"></div>
      </div>

      <h1 className="uppercase mt-[80px] md:text-4xl xl:text-6xl font-bold z-10">
        Multi-Orbital Optical Communication Payloads in Space
      </h1>
      <div className="z-10 w-full text-right">
      <button
        className="relative top-[20vh] md:top-[40vh] w-[70px] height-[80px] bg-blue-700 hover:bg-blue-500 hover:scale-105 transition duration-200 text-white text-3xl lg:text-6xl font-bold rounded z-10 opacity-80"
        onClick={toggleCard}
      >
        <h2 className="relative top-[-10px]">+</h2>
      </button>
      </div>
    

      {isCardVisible && (
        <div>
          <div className='hidden md:block'>
            <div className="fixed top-0 left-0 w-screen md:w-screen lg:w-[70vw] lg:left-[15vw] h-screen flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
              <div className="flex p-4 rounded-lg bg-gray-900 h-[90vh] w-full">
                <div className="flex flex-col justify-center items-center h-full p-20 m-0">
                  <p className="text-xl mt-20 mb-2">Multilayer constellations involve deploying multiple layers or tiers of satellites in various orbits to provide global coverage and improved connectivity. These layers include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary Orbit (GEO) satellites. Each layer serves a specific purpose, with LEO satellites providing low latency and high-speed communication, MEO satellites covering broader regions, and GEO satellites offering wide-area coverage. The objective of the multilayer based satellite network operation scheme is to minimize the latency of transmitting telecommand (TC) messages while maintaining high levels of resilience and reliability. The combined use of LEO, MEO, and GEO constellations enhances resilience, taking advantage of GEO satellites’ fixed positions above the equator.</p>
                  <button className="bg-purple-500 text-white px-4 py-2 relative bottom-[5vh] m-20"
                    onClick={toggleCard}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='md:hidden'>
            <div className="fixed top-14 left-0 w-screen h-[80vh] flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
              <div className="p-0 bg-gray-900">
              <p className=" mt-9 mb-4">Multilayer constellations involve deploying multiple layers or tiers of satellites in various orbits to provide global coverage and improved connectivity. These layers include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary Orbit (GEO) satellites. Each layer serves a specific purpose, with LEO satellites providing low latency and high-speed communication, MEO satellites covering broader regions, and GEO satellites offering wide-area coverage. The objective of the multilayer based satellite network operation scheme is to minimize the latency of transmitting telecommand (TC) messages while maintaining high levels of resilience and reliability. The combined use of LEO, MEO, and GEO constellations enhances resilience, taking advantage of GEO satellites’ fixed positions above the equator.</p>
                <button className="bg-purple-500 text-black px-4 py-2 mb-2" onClick={toggleCard}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

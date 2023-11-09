import React, { useState, useEffect } from 'react';
import  Satellites from '../../assets/Satellites.svg';

const Satellite = () => {
  return (
    <div
      className="p-4 w-full -z-30"
    >

      {/* Planet */}
      <div
        className="md:h-screen flex flex-col w-full h-full text-white items-center justify-center z-10"
      >
      </div>

      <div className="h-0">
        <div className="absolute top-[-90vh] md:top-[120vh]  bottom-[90vh] md:left-[20vw] lg:w-[70vw] lg:h[70vh] md:w-[70vh] md:h-[70vh] w-[70vw] h-[70vh] items-center justify-center flex z-0 ">
              <div
                className="relative md:top-0 w-full h-full md:w-full md:h-full">
                <img className='absolute lg:w-[110vw] lg:h[110vh] md:w-[110vh] md:h-[110vh] lg:left-[-5vw] md:left-[10vw] w-[90vw] h-[90vh] items-center justify-center z-0 ' src={Satellites} />
              </div>
        </div>
      </div>
    </div>
  );
};

export default Satellite;

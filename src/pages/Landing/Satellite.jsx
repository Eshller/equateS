import React, { useState, useEffect } from 'react';
import  Satellites from '../../assets/Satellites.svg';

const Satellite = () => {
  return (
    <div
      className="p-4 w-full flex-col block -z-30"
    >

      {/* Planet */}
      <div
        className="md:h-[100vh] flex flex-col w-full h-[70vh] text-white items-center justify-center z-10"
      >
      </div>

      <div className="h-0">
        <div className="absolute top-[110vh] left-[9vh]  md:top-[120vh]  md:left-[13vw] lg:left-[30vw] md:w-[70vh] md:h-[70vh] w-[90vw] h-[90vh] items-center justify-center flex z-0 ">
              <div
                className="absolute top-[0vh] left-[-10vw] md:top-0 h-[56vh] w-[86vw] sm:h-[80vh] sm:w-[86vw] md:w-[100vh] md:h-[110vh] md:left-[-5vw]"
                style={{
                  backgroundImage: `url(${Satellites})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                {/* <img className='absolute  md:w-[110vh] md:h-[110vh] md:left-[10vw] w-[70vw] h-[90vh] items-center justify-center z-0 ' src={Satellites} /> */}
              </div>
        </div>
      </div>
    </div>
  );
};

export default Satellite;

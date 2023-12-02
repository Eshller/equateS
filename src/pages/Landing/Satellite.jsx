import React, { useState, useEffect } from 'react';
import  Satellites from '../../assets/Satellites.svg';

const Satellite = () => {
  return (
    <div
      className="p-4 w-full flex-col block -z-30"
    >

      {/* Planet */}
      <div
        className="md:h-[140vh] flex flex-col w-full h-[100vh] text-white items-center justify-center z-10"
      >
      </div>

      <div className="h-0">
        <div className="absolute top-[120vh] left-[0vh]  md:top-[169vh]  md:w-[100vw] md:h-[70vh] w-[100vw] h-[90vh] items-center justify-center flex z-0 ">
              <div
                className="relative top-[-10vh] md:top-[10vh] h-[53vh] w-[90vw] sm:h-[80vh] sm:w-[100vw] md:w-[100vh] md:h-[110vh] "
                style={{
                  backgroundImage: `url(${Satellites})`,
                  backgroundSize: '100% 100%',
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

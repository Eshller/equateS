import React, { useState, useEffect } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import satellite from '../../assets/satellite.png';
import PurplePlanet from '../../assets/PurplePlanet.svg';

const Satellite = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Rotate the satellites by 1 degree every 100 milliseconds
      setRotationDegree((prevRotation) => (prevRotation + 1) % 360);
    }, 100);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  const satellites = [
    {
      name: 'Satellite 1',
      info: 'Information for Satellite 1.',
      position: {
        x: '42%',
        y: '28%',
      },
    },
    {
      name: 'Satellite 2',
      info: 'Information for Satellite 2.',
      position: {
        x: '80%',
        y: '50%',
      },
    },
    {
      name: 'Satellite 3',
      info: 'Information for Satellite 3.',
      position: {
        x: '50%',
        y: '80%',
      },
    },
    {
      name: 'Satellite 4',
      info: 'Information for Satellite 4.',
      position: {
        x: '20%',
        y: '37%',
      },
    },
    {
      name: 'Satellite 5',
      info: 'Information for Satellite 5.',
      position: {
        x: '10%',
        y: '60%',
      },
    },
    {
      name: 'Satellite 6',
      info: 'Information for Satellite 6.',
      position: {
        x: '90%',
        y: '20%',
      },
    }
  ];

  const handleSiteClick = (index) => {
    setSelectedSite(satellites[index]);
  };

  return (
    <div
      className="p-4 w-full -z-30"
      style={{
        // backgroundImage: `url(${home_bg2})`,
        // backgroundImage: `linear-gradient(rgba(25, 79, 114, 0.42), rgb(224, 224, 224)),url(${home_bg2})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // transition: 'background-color 1s', // Background color transition,
      }}
    >
      {/* Planet */}
      <div
        className="md:h-screen rounded flex flex-col w-full h-full text-white items-center justify-center z-10"
      >
        <div
          className="absolute top-[45vh] md:relative md:top-0 w-[80vw] h-[80vw] lg:w-[100vh] lg:h-full border rounded-full items-center justify-center flex z-20"
          style={{
            transform: `rotate(${rotationDegree}deg)`,
            transformOrigin: 'center center',
            transition: 'transform 0.05s ease-in-out', // Smooth transition
          }}
        >
          {satellites.map((site, index) => (
            <div
              key={index}
              className="w-12 h-8 md:w-16 md:h-16 absolute z-10"
              style={{
                top: site.position.y,
                left: site.position.x,
                cursor: 'pointer',
                transform: `rotate(${-rotationDegree}deg)`,
                transformOrigin: 'center center',
                transition: 'transform 0.05s ease-in-out', // Smooth transition
              }}
              onClick={() => handleSiteClick(index)}
            >
              <img src={satellite} alt="satellite" className="w-16 h-16" />
            </div>
          ))}
        </div>
      </div>

      <div className="h-0">
        <div className="absolute top-[-66vh] md:top-[110vh]  bottom-[90vh] md:left-[30vw] md:w-[80vh] md:h-[80vh] w-[80vw] md:border rounded-full items-center justify-center flex z-0 ">
          <div className="w-[50vw] md:w-[60vh] md:h-[60vh] md:border rounded-full items-center justify-center flex">
            <div className="w-[50vh] h-[50vh] rounded-full items-center justify-center flex">
              <div
                className="relative md:top-0 w-1/2 h-1/2 md:w-full md:h-full"
                style={{
                  backgroundImage: `url(${PurplePlanet})`,
              
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satellite;

import React, { useEffect, useState } from "react";
import airplane1 from "../../assets/airplane1.png";
import airplane2 from "../../assets/airplane2.png";
import ballon from "../../assets/ballon.png";
import techno from "../../assets/tech.svg";
import tech1 from "../../assets/tech1.png";
import tech2 from "../../assets/tech2.png";
import tech3 from "../../assets/tech_bg1.jpg";
import tech from "../../assets/tech.png";
import earth from "../../assets/earth.png";
import earthSatelliteMesh from "../../assets/Earth_SatelliteMesh.svg";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import satellite from "../../assets/satellite.png";

const Technology = () => {
 
  const copy = "Technology".split("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/15) {
        console.log("window")
        setShowAnimation(true);
      } else {
        setShowAnimation(false);
      }
      if (window.scrollY > window.innerHeight/10) {
        console.log("window")
        setShowFade(true);
      } else {
        setShowFade(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <ParallaxProvider>
      <div
        className="h-[1038vh] w-[100vw] mb-[5vh]"
        style={{
          // linear gradient from black to blue
          backgroundImage: `url(${tech})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: '100% 100%',
          backgroundPosition: "center",
          // backgroundImage: 'linear-gradient(to bottom, #000000, #0000ff)',
        }}
      >
        {/* <img className="invisible" src={tech} alt="" /> */}
        <div className="">
          <div 
            className=" absolute w-[100vw] h-[100vh]  top-[0vh]  text-white"
            style={{
              //   color: 'white',
              backgroundImage: `url(${tech1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexFlow: "column wrap",

              //   textShadow: 'black -5px 5px 0px, white 0px 5px 0px, #001180 8px 5px 0px',
              //   textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            <div 
              id="header" 
              className={`overflow-hidden relative h-full w-full uppercase text-white mb-4`}
              style={
                {
                  // transform: 'skew(-10deg)',
                }
              }
            >
              <h1 className="overflow-hidden relative flex justify-center self-center h-full w-full lg:top-[0vh] xl:top-[-10vh] me-1">
                <div
                  className={`relative flex justify-center self-center text-[2rem] sm-[4rem] md:text-[8rem] lg:text-[10rem] transition ease-in-out duration-50 text-white ${showAnimation ? 'scale-[20]' : 'text-5xl md:text-7xl xl:text-[10rem] opacity-100'}  ${showFade ? 'opacity-0' : 'opacity-100'} `}
                >
                  TECHNOLOGY
                </div>
              </h1>
            </div>
          </div>
          <div
          className="overflow-hidden absolute top-[120vh] left-[0vw] w-[100vw] h-[135vh] z-0 "
          style={{

            backgroundImage: `url(${tech2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column wrap",
          }}
        >
        </div>
        <div className="absolute top-[260vh] left-[0vw] w-[100vw] h-[140vh]"
        style={{

          backgroundImage: `url(${tech3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexFlow: "column wrap",
          }}
        >
            <div
            className="relative w-[40vw] h-[80vh] top:[10vh] left-[19vw] md:w-[50vw] md:h-[80vh] md:left-[0vw] lg:left-[11vw] xl:left-[17vw] md:top-[6vh]"
            style={{
              scale: '1.5'
            }}
          >
            <div
              className={`relative w-[51vw] h-[20vh] top-[9vh] left-[3vw]`}
              style={{}}
            >
              <img 
                className="relative md:left-[20vh]"
                src={earthSatelliteMesh}
              />
            </div>
          </div>
        </div>
        </div>
        
      </div>
      </ParallaxProvider>
  );
};

export default Technology;

import React, { useEffect, useState } from "react";
import LaserBottom from "../../assets/LaserToBottom.svg";
import airplane1 from "../../assets/airplane1.png";
import airplane2 from "../../assets/airplane2.png";
import ballon from "../../assets/ballon.png";
import satellite_1 from "../../assets/satellite.png";
import techno from "../../assets/tech.svg";
import tech1 from "../../assets/tech1.png";
import tech2 from "../../assets/tech2.png";
import tech_3 from "../../assets/tech3.svg";
import tech3 from "../../assets/tech_bg1.jpg";
import tech from "../../assets/tech.svg";
import earth from "../../assets/earth.png";
import earthSatelliteMesh from "../../assets/Earth_SatelliteMesh.svg";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import satellite from "../../assets/satellite.png";

const Technology = () => {
  const copy = "Technology".split("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showFade, setShowFade] = useState(false);

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


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight / 15) {
  //       console.log("window");
  //       setShowAnimation(true);
  //     } else {
  //       setShowAnimation(false);
  //     }
  //     if (window.scrollY > window.innerHeight / 10) {
  //       console.log("window");
  //       setShowFade(true);
  //     } else {
  //       setShowFade(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    var header = document.getElementById("header");

    function zoomFadeOnScroll(element) {
      if (!element) {
        return;
      }

      var distanceToTop =
        window.scrollY + element.getBoundingClientRect().top - 200;
      var elementHeight = element.offsetHeight + 100;
      var scrollTop = document.documentElement.scrollTop;

      var opacity = 1;
      var scale = 0;

      if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        scale = 1.1 + (scrollTop - distanceToTop - 340) / elementHeight;
      }
      if (scale < 20) {
        element.style.scale = scale;
      }
      if (scale >= 5) {
        element.style.opacity = "0";
      }
      if(opacity==1) element.style.opacity = opacity;
      else if(opacity >= 0) element.style.opacity = opacity + 0.3;
    }

    function scrollHandler() {
      zoomFadeOnScroll(header);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
      <div
        className="h-[1038vh] w-[100vw] mb-[5vh]"
        style={{
          // linear gradient from black to blue
          backgroundImage: `url(${tech})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
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
              className={`overflow-hidden relative h-full w-full uppercase text-white mb-4`}
              style={
                {
                  // transform: 'skew(-10deg)',
                }
              }
            >
              <h1 className="overflow-hidden transition linear duration-900 relative flex justify-center self-center h-full w-full lg:top-[0vh] xl:top-[-10vh] me-1">
                <Parallax className="top-[60vh] md:top-[42vh] relative w-full h-full" speed={-20} scale={[0.6,1.5]}>
                <div 
                  className={`relative flex justify-center self-center text-[3rem] sm-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] md:top-[10vh] l:top-[10vh] xl:top-[5vh] text-white 
                     `}
                >
                  TECHNOLOGY
                </div>
                </Parallax>
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
          ></div>
          <div
            className="overflow-visible absolute top-[260vh] left-[0vw] w-[100vw] h-[140vh] z-20"
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
              className=" relative w-[40vw] h-[80vh] top:[10vh] left-[19vw] md:w-[50vw] md:h-[80vh] md:left-[0vw] lg:left-[11vw] xl:left-[17vw] md:top-[6vh] z-10"
              style={{
                scale: "1.5",
              }}
            >
              <div
                className={` relative w-[51vw] h-[20vh] top-[9vh] left-[3vw]`}
                
              >
                <img 
                  className="relative md:left-[20vh]"
                  style={{
                  }}
                  src={earthSatelliteMesh}
                />
              </div>
            </div>

          </div>
          <div className="overflow-hidden absolute top-[400vh] left-[0vw] w-[100vw] h-[633.6vh]"
          style={{
              backgroundImage: `url(${tech_3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexFlow: "column wrap",
            }}
          >
                  <div className="z-50 transition ease-in-out"
                    style={{
                        // backgroundImage: `linear-gradient(rgba(25, 79, 114, 0.42), rgb(224, 224, 224)),url(${tech6})`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        // backgroundBlendMode: 'multiply',
                    }}>
                    <Parallax className="w-[15vw] rotate-12 relative md:top-[-66vh] top-[-99vh] left-[78vw] lg:top-[-34vh] xl:top-[-38vh]"
                      scale={[1.4, 2.1]}
                    >
                        <img src={satellite_1} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[10vw] rotate-3 relative md:top-[-49vh] top-[-73vh] left-[10vw] lg:top-[-24vh] xl:top-[-25vh]"
                      scale={[1.4, 2.1]}
                    >
                        <img src={satellite_1} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[12vw] relative md:top-[-4vh] top-[-25vh] left-[80vw] lg:top-[16vh] xl:top-[13vh]"
                      scale={[1.4, 2.1]}
                    >  
                        <img src={satellite_1} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[12vw] relative md:top-[138vh] top-[132vh] left-[78vw] lg:top-[145vh] xl:top-[143vh]"
                      scale={[1.4, 2.1]}
                    >  
                        <img src={ballon} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[14vw] relative md:top-[212vh] top-[217vh] left-[70vw] lg:top-[204vh] xl:top-[207vh]"
                      scale={[1.4, 2.1]}
                    >  
                        <img src={ballon} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[15vw] relative md:top-[135vh] top-[153vh] left-[12vw] lg:top-[115vh] xl:top-[113vh]"
                      scale={[1.4, 2.1]}
                    >  
                        <img src={ballon} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[20vw] relative md:top-[292vh] top-[312vh] left-[70vw] lg:top-[268vh] xl:top-[272vh]"
                      scale={[1.4, 2.1]}
                    >  
                        <img src={airplane1} className='' alt="" />
                        </Parallax>
                        <Parallax className="w-[24vw] relative md:top-[234vh] top-[265vh] left-[5.5vw] lg:top-[200vh] xl:top-[206vh]"
                      scale={[1.4, 2.1]}
                    >   
                        <img src={airplane2} className='' alt="" />
                        </Parallax>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                </div>
              {/* <img src={tech_3} alt="" className="relative h-full w-full" /> */}
          </div>
        </div>
      </div>
  );
};

export default Technology;

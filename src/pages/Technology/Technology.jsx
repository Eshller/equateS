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
import { useLocomotiveScroll } from "react-locomotive-scroll";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import satellite from "../../assets/satellite.png";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Technology = () => {
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
  const controls = useAnimation();
  useEffect(() => {
    const jumpAnimation = async () => {
      while (true) {
        await controls.start({
          y: -10,
          transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
        });
        await new Promise((resolve) => setTimeout(resolve, 50));
        await controls.start({
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
        });
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    jumpAnimation();
  }, [controls]);

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
      <MouseParallaxContainer className=' absolute h-[115vh] w-[100vw]' globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild className='absolute h-full w-full opacity-40' factorX={0.5} factorY={0.5}>
        <img className="absolute h-full w-full" src={tech1} alt="" />
      </MouseParallaxChild>
      <motion.div
          style={{
            // backgroundImage: `url(${tech1})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
          className="absolute h-full w-full "
          // initial={{ x: '0%' }}
          // animate={{ x: '100%' }}
          // transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <ParallaxBanner
            className="absolute h-full w-full aspect-[2/1]"
            layers={[
              {
                speed: 30,
                scaleY: [1, 2.4],
                scaleX: [1, 2.7],
                children: (
                  <div className="relative h-full w-full ">
                    <div className="h-full w-full relative flex items-center justify-center">
                      <h1 className="text-[4vh] sm:text-[6vh] md:text-[10vh] lg:text-[12vh] xl:text-[14vh] text-white font-bold">
                        TECHNOLOGY
                      </h1>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </motion.div>
        <div className="absolute h-[115vh] w-[100vw] flex items-end justify-center ">
        <motion.div className=" cursor-pointer text-white "
            style={{
              fontSize: "3vh"
            }}
            animate={controls}
          >
            <Parallax speed={-5} className="relative bottom-28">
            Scroll Down
            </Parallax>

          </motion.div>
        </div>
    </MouseParallaxContainer>
        
        <div
          className="overflow-visible absolute top-[260vh] left-[0vw] w-[100vw] h-[140vh] z-20"
          style={{
            // backgroundImage: `url(${tech3})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "98.6% 100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column wrap",
          }}
        >
          <div
            className=" relative w-[40vw] h-[30vh] top:[10vh] left-[19vw] md:w-[50vw] md:h-[80vh] md:left-[0vw] lg:left-[11vw] xl:left-[17vw] md:top-[6vh] z-10"
            style={{
              scale: "1.5",
            }}
          >
            <div className={` relative w-[51vw] h-[20vh] top-[9vh] left-[3vw]`}>
              <img
                className="relative md:left-[20vh]"
                style={{}}
                src={earthSatelliteMesh}
              />
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden absolute top-[381vh] left-[0vw] w-[100vw] h-[653vh]"
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
        
          <div className="z-50 transition ease-in-out">
            <Parallax
              className="w-[15vw] rotate-12 relative md:top-[-72vh] top-[-107vh] left-[78vw] lg:top-[-49vh] xl:top-[-38vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img
                src={satellite_1}
                className="scale-150 md:scale-100"
                alt=""
              />
            </Parallax>
            <Parallax
              className="w-[10vw] rotate-3 relative md:top-[-53vh] top-[-79vh] left-[10vw] lg:top-[-39vh] xl:top-[-25vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img
                src={satellite_1}
                className="scale-150 md:scale-100"
                alt=""
              />
            </Parallax>
            <Parallax
              className="w-[12vw] relative md:top-[-7vh] top-[-29vh] left-[80vw] lg:top-[5vh] xl:top-[13vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img
                src={satellite_1}
                className="scale-150 md:scale-100"
                alt=""
              />
            </Parallax>
            <Parallax
              className="w-[12vw] relative md:top-[138vh] top-[132vh] left-[78vw] lg:top-[145vh] xl:top-[143vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[14vw] relative md:top-[212vh] top-[217vh] left-[70vw] lg:top-[204vh] xl:top-[207vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[15vw] relative md:top-[135vh] top-[153vh] left-[12vw] lg:top-[115vh] xl:top-[113vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[20vw] relative md:top-[292vh] top-[312vh] left-[70vw] lg:top-[268vh] xl:top-[272vh]"
              scaleY={[1.4, 2.2]}
              scaleX={[1.4, 2.4]}
            >
              <img src={airplane1} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[24vw] relative scale-150 md:scale-0 md:top-[234vh] top-[265vh] left-[5.5vw] lg:top-[200vh] xl:top-[206vh]"
              scaleY={[1.4, 2.2]}
              scaleX={[1.4, 2.4]}
            >
              <img src={airplane2} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

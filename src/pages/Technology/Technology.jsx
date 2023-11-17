import React, { useEffect, useState } from "react";
import LaserBottom from "../../assets/LaserToBottom.svg";
import airplane1 from "../../assets/airplane1.png";
import airplane2 from "../../assets/airplane2.png";
import ballon from "../../assets/ballon.png";
import satellite_1 from "../../assets/satellite.png";
import tech1_back from "../../assets/tech1.png";
import tech1 from "../../assets/tech1.svg";
import tech2 from "../../assets/tech2.svg";
import tech_3 from "../../assets/tech3.svg";
import tech3 from "../../assets/tech__3.svg";
import earthSatelliteMesh from "../../assets/Earth_SatelliteMesh.svg";
import {
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { motion, useAnimation } from "framer-motion";

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
      className="h-[1033vh] w-[100vw] mb-[5vh] -z-30"
      style={{
        // linear gradient from black to blue
        background: 'linear-gradient(180deg, rgba(22,22,27, 0.5) 20%, rgba(19,32,48,1) 12.7%, rgba(2,17,45,0.5) 15%, rgba(8,9,11,1) 44%)'

        // backgroundImage: 'linear-gradient(to bottom, #000000, #0000ff)',
      }}
    >
      {/* <img className="invisible" src={tech} alt="" /> */}
      <div className="">
      <div className="absolute h-[120vh] w-[100vw]" style={{
        backgroundImage: `url(${tech1_back})`,
          backgroundRepeat: "no-repeat",
          
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
      }}>
      <MouseParallaxContainer className=' absolute h-[120vh] w-[100vw]' globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild className='absolute h-[130vh] w-[150vw] flex justify-start items-center opacity-70' factorX={0.5} factorY={0.5}>
        <img className="block absolute left-[-5vw] h-full top-[-5vh] w-[110vw]" src={tech1} alt="" />
      </MouseParallaxChild>
      <motion.div
          style={{
            // backgroundImage: `url(${tech1})`,
            // backgroundRepeat: "no-repeat",
            
            // backgroundSize: "100% 100%",
            // backgroundPosition: "center",
          }}
          className="absolute h-full w-full"
          // initial={{ x: '0%' }}
          // animate={{ x: '100%' }}
          // transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
          initial={{ opacity: 0.9 }}
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
                    <div className="h-full w-full relative flex items-center justify-center z-100">
                      <h1 className="text-[4vh] sm:text-[6vh] md:text-[10vh] lg:text-[12vh] xl:text-[14vh] text-white font-bold" style={{
                          fontFamily: 'Myfont, serif',
                      }}>
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
    </div>
        <div className="absolute top-[120vh] left-[0vw] w-[100vw] h-[156vh]"
        style={{
          backgroundImage: `url(${tech2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}>

        </div>
        <div
          className="overflow-visible absolute top-[260vh] left-[0vw] w-[100vw] h-[146vh] z-20"
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
            className=" relative w-[45vw] h-[30vh] top:[10vh] left-[16vw] md:w-[50vw] md:h-[80vh] md:left-[0vw] lg:left-[11vw] xl:left-[17vw] md:top-[-2vh] lg:top-[-3vh] z-10"
            style={{
              scale: "1.5",
            }}
          >
            <div className={` relative w-[55vw] h-[20vh] top-[9vh] left-[3vw]`}>
              <img
                className="relative md:left-[20vh]"
                style={{}}
                src={earthSatelliteMesh}
              />
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden absolute top-[381vh] left-[0vw] w-[100vw] h-[657vh]"
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
              className="w-[15vw] rotate-12 relative md:top-[-222vh] top-[-259vh] left-[78vw] lg:top-[-204vh] xl:top-[-187vh]"
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
              className="w-[10vw] rotate-3 relative md:top-[-205vh] top-[-230vh] left-[10vw] lg:top-[-194vh] xl:top-[-179vh]"
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
              className="w-[12vw] relative md:top-[-159vh] top-[-183vh] left-[80vw] lg:top-[-151vh] xl:top-[-147vh]"
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
              className="w-[12vw] relative md:top-[-18vh] top-[-23vh] left-[78vw] lg:top-[-19vh] xl:top-[-16vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[14vw] relative md:top-[60vh] top-[63vh] left-[70vw] lg:top-[56vh] xl:top-[45vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[15vw] relative md:top-[-25vh] top-[-4vh] left-[12vw] lg:top-[-39vh] xl:top-[-49vh]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[24vw] relative md:top-[106vh] top-[126vh] left-[5vw] lg:top-[87vh] xl:top-[85vh]"
              scaleY={[1.4, 2.2]}
              scaleX={[1.4, 2.4]}
            >
              <img src={airplane2} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[20vw] relative md:top-[133vh] top-[161vh] left-[70vw] lg:top-[122vh] xl:top-[111vh]"
              scaleY={[1.4, 2.2]}
              scaleX={[1.4, 2.4]}
            >
              <img src={airplane1} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

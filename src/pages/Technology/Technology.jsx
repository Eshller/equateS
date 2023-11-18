import React, { useEffect, useState } from "react";
import airplane1 from "../../assets/airplane1.png";
import airplane2 from "../../assets/airplane2.png";
import ballon from "../../assets/ballon.png";
import satellite_1 from "../../assets/satellite.png";
import tech1_back from "../../assets/tech1.jpg";
import tech1 from "../../assets/tech1.jpg";
import tech2 from "../../assets/tech2.jpg";
import tech_3 from "../../assets/tech3.svg";
import tech3 from "../../assets/tech__3.jpg";
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
      <div className="absolute h-[120vh] w-[100vw] oveerflow-visible" style={{
        backgroundImage: `url(${tech1_back})`,
          backgroundRepeat: "no-repeat",
          
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
      <MouseParallaxContainer className=' absolute h-[120vh] w-[100vw]' globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild className='absolute h-[130vh] w-[150vw] flex justify-start items-center opacity-0 md:opacity-0 lg:opacity-70' factorX={0.5} factorY={0.5}>
        <img className="block absolute left-[-5vw] h-full top-[-5vh] w-[110vw]" src={tech1_back} alt="" />
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
          className="absolute top-[260vh] w-[100vw] h-[146vh] z-20 flex justify-center items-center"
          style={{
            backgroundImage: `url(${tech3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column wrap",
          }}
        >
          <div
            className=" relative w-[100vw] h-[100vh] z-10 overflow-hidden"
          >
            <div className={`relative top-[10vh] md:top-[23vh] w-full h-full md:scale-150`} style={{
              backgroundImage: `url(${earthSatelliteMesh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition:'center'
            }}>
              {/* <img
                className="relative h-full w-full top-[23vh]"
                style={{}}
                src={earthSatelliteMesh}
              /> */}
            </div>
          </div>
        </div>

        {/* <svg className=" z-50" width="4000" height="4000"><line x1="100" y1="2500" x2="100" y2="3700" stroke="red"/></svg> */}

        <div
          className="overflow-hidden absolute top-[381vh] left-[0vw] w-[100vw] h-[657vh]"
          style={{
            backgroundImage: `url(${tech_3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
        
          <div className="z-50">
            <Parallax
              className="w-[13vw] rotate-12 absolute top-[37vh] left-[79vw]"
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
              className="w-[10vw] rotate-3 absolute top-[75vh] md:top-[70vh] lg:top-[68v9] xl:top-[65vh] left-[10vw]"
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
              className="w-[12vw] absolute top-[129vh] md:top-[124vh] left-[79vw]"
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
              className="w-[12vw] absolute top-[293vh] md:top-[283vh] lg:top-[276vh] xl:top-[268vh] left-[77vw]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[14vw] absolute top-[332vh] md:top-[322vh] lg:top-[311vh] xl:top-[304vh] left-[12vw]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[15vw] absolute top-[388vh] md:top-[375vh] lg:top-[366vh] xl:top-[357vh] left-[70vw]"
              scaleY={[1.4, 2.1]}
              scaleX={[1.4, 2.3]}
            >
              <img src={ballon} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[24vw] absolute top-[473vh] md:top-[469vh] lg:top-[466vh] left-[2vw]"
              scaleY={[1.4, 2.2]}
              scaleX={[1.4, 2.4]}
            >
              <img src={airplane2} className="scale-150 md:scale-100" alt="" />
            </Parallax>
            <Parallax
              className="w-[20vw]  absolute top-[516vh] md:top-[513vh] left-[71vw]"
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

import React, { useEffect, useState } from 'react';
import tech1 from '../../assets/tech1.png';
import tech2 from '../../assets/tech2.png';
import tech3 from '../../assets/tech3.png';
import tech4 from '../../assets/tech4.png';
import tech5 from '../../assets/tech5.png';
import tech6 from '../../assets/tech6.png';

import { ParallaxProvider } from 'react-scroll-parallax';
import satellite from '../../assets/satellite.png';

const getRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
};

const Technology = () => {
    const satellites = [...Array(6)].map((_, index) => {
        const angle = (index / 6) * 2 * Math.PI; // Equally spaced angles
        const endpointX = 40 * Math.cos(angle); // Calculate x-coordinate
        const endpointY = 47 * Math.sin(angle); // Calculate y-coordinate
        const animationDuration = getRandomValue(8, 12); // Random duration between 8s and 12s

        return (
            <div
                key={index}
                className="w-16 h-16 absolute"
                style={{
                    backgroundImage: `url(${satellite})`,
                    backgroundSize: 'cover',
                    animation: `bounce ${animationDuration} linear infinite, satellitePath${index} ${animationDuration} linear infinite`,
                    transform: `translate(${endpointX}vw, ${endpointY}vh)`,
                    zIndex: 10 + index, // Ensure proper layering
                }}
            ></div>
        );
    });



    return (
        <ParallaxProvider>
            <div className=''
                style={{
                    // linear gradient from black to blue
                    backgroundImage: 'linear-gradient(to bottom, #000000, #0000ff)',
                }}>
                <div className="h-screen"
                    style={{
//                         background-image:
//             linear-gradient(45deg, 
//               rgba(245,70,66, 0.75), 
//               rgba(8,83,156, 0.75)), url(
// 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png');
                        backgroundImage: `linear-gradient(45deg, 
                            rgba(245,70,66, 0.75), 
                            rgba(8,83,156, 0.75)),url(${tech1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                        display:'flex',
                        alignItems:'center',
                        justifyContent: 'center',
                    }}
                >
                    <div className="text-5xl xl:text-6xl mb-4 py-4" style={{
                          color: 'white',
                          textAlign: 'center',
                          textShadow: 'black -5px 5px 0px, white 0px 5px 0px, #001180 8px 5px 0px',
                        //   textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                        
                    }}>Technology</div>
                </div>
                <div className="h-screen"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgb(20 16 16 / 70%), rgb(0 0 0 / 75%)), url(${tech2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                >
                </div>
                <div className="h-screen"
                    style={{
                        backgroundImage: `url(${tech3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}
                >
                    {satellites}
                </div>
                <style>
                {[...Array(6)].map((_, index) => (
                    `
                    @keyframes satellitePath${index} {
                        0% {
                            transform: translate(50*vw, 50*vh);
                        }
                        25% {
                            transform: translate(${(Math.random()) * 100}vw, ${(Math.random()) * 100}vh);
                        }
                        50% {
                            transform: translate(${(Math.random() ) * 100}vw, ${(Math.random() ) * 100}vh);
                        }
                        75% {
                            transform: translate(${(Math.random() ) * 100}vw, ${(Math.random() ) * 100}vh);
                        }
                        100% {
                            transform: translate(50*vw, 50*vh);
                        }
                    }
                    `
                ))}
            </style>
            
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 13%), rgb(90 185 255 / 88%)),url(${tech4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                </div>
                {/* <div
                    style={{
                        backgroundImage: `url(${grade})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                </div> */}
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgb(255 255 255), rgb(0 70 122 / 88%), rgba(56, 110, 172, 0.77)),url(${tech5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(25, 79, 114, 0.42), rgb(224, 224, 224)),url(${tech6})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                    }}>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                    <div className="h-screen">
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default Technology;

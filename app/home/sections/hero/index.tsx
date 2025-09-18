"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";

export const Hero: React.FC = () => {
  const handleScrollDown = (): void => {
    const heroElement = document.getElementById("hero");
    if (heroElement && heroElement.nextElementSibling) {
      heroElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate deterministic "random" values based on row and column
  const getOpacity = (row: number, col: number): number => {
    // Create a deterministic pattern based on row and column
    return 0.3 + ((row * 7 + col * 13) % 70) / 100;
  };

  const getSize = (row: number, col: number): number => {
    // Create a deterministic pattern for icon size
    return 30 + ((row * 11 + col * 17) % 20);
  };

  return (
    <>
      <section
        className="min-h-screen py-12 flex items-center justify-center relative overflow-hidden"
        id="hero"
      >
        {/* Web Tech Herringbone Pattern Background */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className="herringbone-container">
            {/* Programmatically generate herringbone pattern with web tech icons */}
            {Array.from({ length: 15 }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="herringbone-row"
                style={{
                  transform: `translateX(${(rowIndex % 2) * 60}px)`,
                }}
              >
                {Array.from({ length: 8 }).map((_, colIndex) => {
                  const iconType = (rowIndex + colIndex) % 6;
                  let Icon;
                  let color;

                  switch (iconType) {
                    case 0:
                      Icon = FaHtml5;
                      color = "text-orange-500";
                      break;
                    case 1:
                      Icon = FaCss3Alt;
                      color = "text-blue-500";
                      break;
                    case 2:
                      Icon = FaJs;
                      color = "text-yellow-400";
                      break;
                    case 3:
                      Icon = FaReact;
                      color = "text-blue-400";
                      break;
                    case 4:
                      Icon = SiTailwindcss;
                      color = "text-cyan-400";
                      break;
                    default:
                      Icon = SiFigma;
                      color = "text-purple-400";
                  }

                  // Use deterministic values instead of random
                  const opacity = getOpacity(rowIndex, colIndex);
                  const size = getSize(rowIndex, colIndex);

                  return (
                    <div
                      key={colIndex}
                      className={`herringbone-item ${color}`}
                      style={{
                        transform: `rotate(${(rowIndex % 2) * 45}deg)`,
                        opacity: opacity,
                      }}
                    >
                      <Icon size={size} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className="block bg-gradient-to-r text-6xl from-blue-600 via-indigo-500 to-blue-800 bg-clip-text text-transparent"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 1.5 }}
              >
                NEXT GEN
              </motion.span>
            </motion.h1>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.span
                className="block text-9xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 1.6 }}
              >
                WEB
              </motion.span>
            </motion.h1>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.span
                className="block text-6xl bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.2, duration: 1.6 }}
              >
                ACADEMY
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            ></motion.p>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="relative h-24 mt-6">
            {/* Left Side Icons */}
            <motion.div
              className="absolute text-orange-500"
              initial={{ x: -100, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 2.2,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                left: "5%",
                top: "20%",
              }}
            >
              <motion.div
                animate={{ y: [-8, 8], rotateZ: [0, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaHtml5 size={48} />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute text-yellow-400"
              initial={{ x: -80, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 2.6,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                left: "20%",
                bottom: "10%",
              }}
            >
              <motion.div
                animate={{ y: [-7, 7], rotateZ: [5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaJs size={36} />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute text-cyan-400"
              initial={{ x: -70, y: 30, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 3.0,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                left: "35%",
                top: "5%",
              }}
            >
              <motion.div
                animate={{ y: [-9, 9], rotateZ: [-5, 5] }}
                transition={{
                  duration: 3.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <SiTailwindcss size={38} />
              </motion.div>
            </motion.div>

            {/* Right Side Icons */}
            <motion.div
              className="absolute text-blue-500"
              initial={{ x: 100, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 2.4,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                right: "5%",
                top: "10%",
              }}
            >
              <motion.div
                animate={{ y: [-5, 8], rotateZ: [0, -8] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaCss3Alt size={42} />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute text-blue-400"
              initial={{ x: 80, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 2.8,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                right: "20%",
                bottom: "5%",
              }}
            >
              <motion.div
                animate={{
                  y: [-6, 6],
                  rotateZ: [0, 360],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  rotateZ: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <FaReact size={40} />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute text-purple-400"
              initial={{ x: 70, y: 30, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 3.2,
                duration: 1,
                ease: "easeOut",
              }}
              style={{
                right: "35%",
                top: "5%",
              }}
            >
              <motion.div
                animate={{
                  y: [-8, 8],
                  rotateZ: [-10, 10],
                }}
                transition={{
                  y: {
                    duration: 4.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  rotateZ: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <SiFigma size={34} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Animation - Arrow Icon */}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex flex-col items-center cursor-pointer"
            onClick={handleScrollDown}
          >
            <span className="text-blue-600 text-sm font-medium mb-2">
              เลื่อนลงเพื่อดูเพิ่มเติม
            </span>
            {/* Arrow Icon */}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="h-12 sm:h-16 md:h-20 w-full text-white"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.44,221.36,100.07Z"
                fill="currentColor"
              ></path>
            </svg>
          </motion.div>
        </div>

        {/* Global Animation Styles */}
        <style jsx global>{`
          @keyframes float-slow {
            0% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-15px) scale(1.05);
            }
            100% {
              transform: translateY(0) scale(1);
            }
          }

          @keyframes float-horizontal {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(20px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0% {
              opacity: 0.1;
              transform: scale(0.8);
            }
            100% {
              opacity: 0.6;
              transform: scale(1.2);
            }
          }

          /* Herringbone pattern styles */
          .herringbone-container {
            position: absolute;
            width: 150%;
            height: 150%;
            top: -25%;
            left: -25%;
            transform: rotate(-12deg);
          }

          .herringbone-row {
            display: flex;
            margin-bottom: 40px;
            position: relative;
          }

          .herringbone-item {
            margin: 0 30px;
            transform-origin: center;
            transition: all 0.3s ease;
          }

          .herringbone-item:hover {
            transform: scale(1.2) rotate(0deg) !important;
          }

          /* Generate subtle animations for various items */
          .herringbone-row:nth-child(odd) .herringbone-item {
            animation: herringbone-float-1 5s infinite alternate ease-in-out;
          }

          .herringbone-row:nth-child(even) .herringbone-item {
            animation: herringbone-float-2 7s infinite alternate ease-in-out;
          }

          .herringbone-item:nth-child(3n) {
            animation-delay: 0.5s;
          }

          .herringbone-item:nth-child(3n + 1) {
            animation-delay: 1s;
          }

          .herringbone-item:nth-child(3n + 2) {
            animation-delay: 1.5s;
          }

          @keyframes herringbone-float-1 {
            0% {
              transform: translateY(0) rotate(45deg);
            }
            100% {
              transform: translateY(-10px) rotate(45deg);
            }
          }

          @keyframes herringbone-float-2 {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            100% {
              transform: translateY(-8px) rotate(0deg);
            }
          }
        `}</style>
      </section>
    </>
  );
};

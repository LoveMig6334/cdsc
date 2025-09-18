"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const Login = () => {
  // const router = useRouter();
  return (
    <section
      className="min-h-screen flex items-center justify-center sm:py-24 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden"
      id="login"
    >
      {/* Code snippets background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Tech Icon Herringbone Pattern - Top Layer */}
      <div className="absolute inset-0 opacity-20">
        <div className="herringbone-web-container">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div
              key={`top-${rowIndex}`}
              className="herringbone-web-row"
              style={{
                transform: `translateY(${rowIndex * 80}px) translateX(${
                  (rowIndex % 2) * 60
                }px)`,
              }}
            >
              {Array.from({ length: 12 }).map((_, colIndex) => {
                const iconIndex = (rowIndex + colIndex) % 10;
                let Icon;
                let color;
                let rotation = rowIndex % 2 === 0 ? 45 : -45;

                switch (iconIndex) {
                  case 0:
                    Icon = FaHtml5;
                    color = "text-orange-400";
                    break;
                  case 1:
                    Icon = FaCss3Alt;
                    color = "text-blue-400";
                    break;
                  case 2:
                    Icon = FaJs;
                    color = "text-yellow-300";
                    break;
                  case 3:
                    Icon = SiTailwindcss;
                    color = "text-cyan-300";
                    break;
                  case 4:
                    Icon = FaReact;
                    color = "text-blue-300";
                    break;
                  case 5:
                    Icon = SiFigma;
                    color = "text-purple-300";
                    break;
                  case 6:
                    Icon = SiNextdotjs;
                    color = "text-white";
                    break;
                  case 7:
                    Icon = SiTypescript;
                    color = "text-blue-500";
                    break;
                  case 8:
                    Icon = TbBrandVscode;
                    color = "text-blue-400";
                    break;
                  case 9:
                    Icon = FaDatabase;
                    color = "text-green-300";
                    break;
                  default:
                    Icon = FaCode;
                    color = "text-gray-300";
                }

                return (
                  <motion.div
                    key={`top-${rowIndex}-${colIndex}`}
                    className={`herringbone-web-item ${color}`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                    }}
                    animate={{
                      y: [0, rowIndex % 2 ? 10 : -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3 + ((rowIndex + colIndex) % 4),
                      delay: (rowIndex * 0.2 + colIndex * 0.1) % 2,
                    }}
                  >
                    <Icon size={24 + ((rowIndex * 5 + colIndex * 7) % 12)} />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center text-center">
          <motion.h1
            className="text-2xl sm:text-3xl font-extrabold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0, ease: "easeOut" }}
          >
            รับจำนวนจำกัด (20 คน)
          </motion.h1>
          {/* 
          <motion.span 
              className="absolute left-0 h-1 bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.8 }}
            /> */}

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl text-blue-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
          ></motion.p>

          <div className="mt-3 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
            >
              <Link href="/application">
                <button
                  className="px-6 text-2xl font-bold sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                  style={{ cursor: "pointer" }}
                >
                  คลิกเพื่อสมัครเลย
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Added web development code snippets */}
      <div className="absolute left-8 top-1/4 transform -translate-y-1/2 hidden lg:block">
        <motion.div
          className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-left text-xs text-gray-200 font-mono"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="whitespace-pre overflow-x-auto">
            <div className="text-blue-300">
              &lt;<span className="text-red-300">html</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">head</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">title</span>&gt;Web
              Academy&lt;/<span className="text-red-300">title</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">link</span>{" "}
              <span className="text-green-300">rel</span>=
              <span className="text-yellow-300">"stylesheet"</span>{" "}
              <span className="text-green-300">href</span>=
              <span className="text-yellow-300">"styles.css"</span>&gt;
            </div>
            <div>
              {" "}
              &lt;/<span className="text-red-300">head</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">body</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">div</span>{" "}
              <span className="text-green-300">class</span>=
              <span className="text-yellow-300">"container"</span>&gt;
            </div>
            <div>
              {" "}
              &lt;<span className="text-red-300">h1</span>&gt;Next Gen Web
              Academy&lt;/<span className="text-red-300">h1</span>&gt;
            </div>
            <div>
              {" "}
              &lt;/<span className="text-red-300">div</span>&gt;
            </div>
            <div>
              {" "}
              &lt;/<span className="text-red-300">body</span>&gt;
            </div>
            <div className="text-blue-300">
              &lt;/<span className="text-red-300">html</span>&gt;
            </div>
          </pre>
        </motion.div>
      </div>

      <div className="absolute right-8 bottom-1/4 transform translate-y-1/2 hidden lg:block">
        <motion.div
          className="bg-gray-800 bg-opacity-70 rounded-lg p-4 text-left text-xs text-gray-200 font-mono"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="whitespace-pre overflow-x-auto">
            <div className="text-pink-300">
              @<span className="text-pink-500">keyframes</span> float {`{`}
            </div>
            <div>
              {" "}
              0% {`{`} <span className="text-blue-300">transform</span>:{" "}
              <span className="text-yellow-300">translateY(0)</span>; {`}`}
            </div>
            <div>
              {" "}
              50% {`{`} <span className="text-blue-300">transform</span>:{" "}
              <span className="text-yellow-300">translateY(-20px)</span>; {`}`}
            </div>
            <div>
              {" "}
              100% {`{`} <span className="text-blue-300">transform</span>:{" "}
              <span className="text-yellow-300">translateY(0)</span>; {`}`}
            </div>
            <div>{`}`}</div>
            <div></div>
            <div>
              .<span className="text-green-300">hero-icon</span> {`{`}
            </div>
            <div>
              {" "}
              <span className="text-blue-300">animation</span>:{" "}
              <span className="text-yellow-300">
                float 3s infinite ease-in-out
              </span>
              ;
            </div>
            <div>
              {" "}
              <span className="text-blue-300">color</span>:{" "}
              <span className="text-yellow-300">#3B82F6</span>;
            </div>
            <div>{`}`}</div>
          </pre>
        </motion.div>
      </div>

      {/* Style for herringbone pattern */}
      <style jsx>{`
        .herringbone-web-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .herringbone-web-row {
          display: flex;
          position: relative;
          margin-bottom: 40px;
        }

        .herringbone-web-item {
          margin: 0 40px;
          transform-origin: center;
          transition: all 0.5s ease;
        }

        .herringbone-web-item:hover {
          transform: scale(1.5) rotate(0deg) !important;
          filter: drop-shadow(0 0 8px currentColor);
        }
      `}</style>
    </section>
  );
};

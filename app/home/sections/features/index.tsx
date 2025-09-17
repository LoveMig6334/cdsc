"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTrophy, FaMusic, FaUserGraduate } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { PiFigmaLogo } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.7,
    },
  },
};

// Floating animation for icons
const iconVariants = {
  hover: {
    y: [-5, 5],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  },
};

// Shine effect animation
const shineVariants = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: "100%",
    opacity: 0.7,
    transition: {
      repeat: Infinity,
      repeatDelay: 3,
      duration: 1.5,
    },
  },
};

export const Features = () => {
  const features = [
    {
      id: 1,
      title: "Design Thinking",
      description: "สอนการคิดเชิงออกแบบ เพื่อนำไปใช้ในการพัฒนาโปรเจคของตัวเอง",
      icon: <LuBrain className="text-yellow-500 text-5xl mb-2" />,
      color: "bg-yellow-50 border-yellow-200",
      brightColor: "from-yellow-300 to-yellow-100",
      link: "/topics/design-thinking",
    },
    {
      id: 2,
      title: "Figma เบื้องต้น",
      description: "สอนการใช้เครื่องมือ Figma เบื้องต้นในการออกแบบเว็บไซต์",
      icon: <PiFigmaLogo className="text-blue-500 text-5xl mb-2" />,
      color: "bg-blue-50 border-blue-200",
      brightColor: "from-blue-300 to-blue-100",
      link: "/topics/figma",
    },
    {
      id: 3,
      title: "HTML & CSS",
      description: "สอนการเขียน HTML และ CSS เบื้องต้นเพื่อใช้ในการสร้างโปรเจค",
      icon: <FaLaptopCode className="text-yellow-500 text-5xl mb-2" />,
      color: "bg-yellow-50 border-yellow-200",
      brightColor: "from-yellow-300 to-yellow-100",
      link: "/topics/html-css",
    },
    {
      id: 4,
      title: "Javascripts",
      description: "สอนการเขียน Javascript เบื้องต้นและการสร้าง DOM",
      icon: <RiJavascriptFill className="text-blue-500 text-5xl mb-2" />,
      color: "bg-blue-50 border-blue-200",
      brightColor: "from-blue-300 to-blue-100",
      link: "/topics/javascript",
    },
  ];

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 bg-white"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Symmetrical decorative blobs arranged in perfect balance */}
          <div className="absolute top-20 left-20 w-36 h-36 bg-yellow-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-20 right-20 w-36 h-36 bg-blue-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-blue-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-yellow-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-50 rounded-full opacity-20 blur-xl" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-50 rounded-full opacity-20 blur-lg" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-50 rounded-full opacity-20 blur-lg" />
          
          <motion.div
            className="text-center mb-12 sm:mb-16 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
              ค่ายเราสอนอะไรบ้าง?
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              ความรู้อัดแน่นตลอด 4 วัน
            </p>
          </motion.div>

          {/* Symmetrical diamond layout */}
          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Top row - 2 cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-8 md:mb-12">
              {/* Design Thinking card */}
              <div className="w-full md:w-2/5 max-w-sm">
                <Link href={features[0].link} className="block no-underline">
                  <motion.div
                    className={`${features[0].color} border-2 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-full`}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      scale: 1.03,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" variants={shineVariants} initial="initial" animate="animate" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[0].brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <motion.div variants={iconVariants} whileHover="hover">{features[0].icon}</motion.div>
                    <h3 className="text-xl font-bold text-gray-900 my-3">{features[0].title}</h3>
                    <p className="text-gray-600 mb-3">{features[0].description}</p>
                    <div className="mt-auto inline-flex items-center font-medium text-sm text-gray-700 group-hover:text-gray-900">
                      <span>ดูรายละเอียด</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Figma card */}
              <div className="w-full md:w-2/5 max-w-sm">
                <Link href={features[1].link} className="block no-underline">
                  <motion.div
                    className={`${features[1].color} border-2 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-full`}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      scale: 1.03,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" variants={shineVariants} initial="initial" animate="animate" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[1].brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <motion.div variants={iconVariants} whileHover="hover">{features[1].icon}</motion.div>
                    <h3 className="text-xl font-bold text-gray-900 my-3">{features[1].title}</h3>
                    <p className="text-gray-600 mb-3">{features[1].description}</p>
                    <div className="mt-auto inline-flex items-center font-medium text-sm text-gray-700 group-hover:text-gray-900">
                      <span>ดูรายละเอียด</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Center diamond node with perfect symmetry */}
            <div className="flex justify-center items-center py-6 mb-6 relative">
              <div className="w-1/3 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
              <div className="w-14 h-14 bg-white rounded-md rotate-45 border border-gray-100 shadow-md transform -translate-y-1/2 absolute"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-blue-50 rounded-md rotate-45 transform -translate-y-1/2 absolute">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-200 to-blue-200 rounded-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="w-1/3 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            {/* Bottom row - 2 cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
              {/* HTML & CSS card */}
              <div className="w-full md:w-2/5 max-w-sm">
                <Link href={features[2].link} className="block no-underline">
                  <motion.div
                    className={`${features[2].color} border-2 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-full`}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      scale: 1.03,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" variants={shineVariants} initial="initial" animate="animate" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[2].brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <motion.div variants={iconVariants} whileHover="hover">{features[2].icon}</motion.div>
                    <h3 className="text-xl font-bold text-gray-900 my-3">{features[2].title}</h3>
                    <p className="text-gray-600 mb-3">{features[2].description}</p>
                    <div className="mt-auto inline-flex items-center font-medium text-sm text-gray-700 group-hover:text-gray-900">
                      <span>ดูรายละเอียด</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* JavaScript card */}
              <div className="w-full md:w-2/5 max-w-sm">
                <Link href={features[3].link} className="block no-underline">
                  <motion.div
                    className={`${features[3].color} border-2 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-full`}
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      scale: 1.03,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30" variants={shineVariants} initial="initial" animate="animate" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[3].brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <motion.div variants={iconVariants} whileHover="hover">{features[3].icon}</motion.div>
                    <h3 className="text-xl font-bold text-gray-900 my-3">{features[3].title}</h3>
                    <p className="text-gray-600 mb-3">{features[3].description}</p>
                    <div className="mt-auto inline-flex items-center font-medium text-sm text-gray-700 group-hover:text-gray-900">
                      <span>ดูรายละเอียด</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Symmetrical connecting decorative lines */}
            <div className="hidden md:block">
              {/* Top connections */}
              <svg className="absolute top-[22%] left-1/2 transform -translate-x-1/2 w-32 opacity-30" height="30" viewBox="0 0 100 30">
                <path d="M0,15 H100" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
              
              {/* Vertical connections */}
              <svg className="absolute top-[22%] left-1/4 transform -translate-x-1/2 h-56 opacity-30" width="10" viewBox="0 0 10 100">
                <path d="M5,0 V100" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
              <svg className="absolute top-[22%] left-3/4 transform -translate-x-1/2 h-56 opacity-30" width="10" viewBox="0 0 10 100">
                <path d="M5,0 V100" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
              
              {/* Bottom connections */}
              <svg className="absolute bottom-[22%] left-1/2 transform -translate-x-1/2 w-32 opacity-30" height="30" viewBox="0 0 100 30">
                <path d="M0,15 H100" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaMusic, FaUserGraduate } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa6";
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
    },
    {
      id: 2,
      title: "Figma เบื้องต้น",
      description: "สอนการใช้เครื่องมือ Figma เบื้องต้นในการออกแบบเว็บไซต์",
      icon: <PiFigmaLogoBold className="text-blue-500 text-5xl mb-2" />,
      color: "bg-blue-50 border-blue-200",
      brightColor: "from-blue-300 to-blue-100",
    },
    {
      id: 3,
      title: "HTML & CSS",
      description: "สอนการเขียน HTML และ CSS เบื้องต้นเพื่อใช้ในการสร้างโปรเจค",
      icon: <FaLaptopCode className="text-yellow-500 text-5xl mb-2" />,
      color: "bg-yellow-50 border-yellow-200",
      brightColor: "from-yellow-300 to-yellow-100",
    },
    {
      id: 4,
      title: "Javascripts",
      description: "สอนการเขียน Javascript เบื้องต้นและการสร้าง DOM",
      icon: <RiJavascriptFill className="text-blue-500 text-5xl mb-2" />,
      color: "bg-blue-50 border-blue-200",
      brightColor: "from-blue-300 to-blue-100",
    },
  ];

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 bg-white"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
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

          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`${feature.color} border-2 p-4 sm:p-6 md:p-7 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 1 },
                }}
              >
                {/* Shine effect overlay */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  variants={shineVariants}
                  initial="initial"
                  animate="animate"
                />

                {/* Background color transition on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Icon with floating animation */}
                <motion.div variants={iconVariants} whileHover="hover">
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 my-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

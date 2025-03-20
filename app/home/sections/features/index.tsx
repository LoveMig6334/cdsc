'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaMusic, FaUserGraduate } from 'react-icons/fa';
import { MdMeetingRoom } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
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
      duration: 0.7
    }
  }
};

// Floating animation for icons
const iconVariants = {
  hover: {
    y: [-5, 5],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5
      }
    }
  }
};

// Shine effect animation
const shineVariants = {
  initial: { x: '-100%', opacity: 0 },
  animate: { 
    x: '100%', 
    opacity: 0.7,
    transition: { 
      repeat: Infinity, 
      repeatDelay: 3,
      duration: 1.5 
    }
  }
};

export const Features = () => {
    const features = [
        {
          id: 1,
          title: 'รายงานผลการแข่งขัน',
          description: 'ดูผลการแข่งขันกิจกรรมต่างๆ ภายในโรงเรียนได้อย่างรวดเร็ว',
          icon: <FaTrophy className="text-yellow-500 text-4xl mb-4" />,
          color: 'bg-yellow-50 border-yellow-200',
          brightColor: 'from-yellow-300 to-yellow-100'
        },
        {
          id: 2,
          title: 'จองห้องดนตรี',
          description: 'จองห้องดนตรีผ่านระบบออนไลน์ ลดการจองที่ซับซ้อน',
          icon: <FaMusic className="text-blue-500 text-4xl mb-4" />,
          color: 'bg-blue-50 border-blue-200',
          brightColor: 'from-blue-300 to-blue-100'
        },
        {
          id: 3,
          title: 'จองห้องประชุม',
          description: 'จองห้องประชุมสำหรับกิจกรรมกลุ่มและการประชุมต่างๆ',
          icon: <MdMeetingRoom className="text-yellow-500 text-4xl mb-4" />,
          color: 'bg-yellow-50 border-yellow-200',
          brightColor: 'from-yellow-300 to-yellow-100'
        },
        {
          id: 4,
          title: 'พอร์ตพี่มีให้ดู',
          description: 'แสดง Portfolio ของรุ่นพี่ปีก่อนๆ ให้ดูเป็นแนวทาง',
          icon: <FaUserGraduate className="text-blue-500 text-4xl mb-4" />,
          color: 'bg-blue-50 border-blue-200',
          brightColor: 'from-blue-300 to-blue-100'
        }
    ];

    return (
        <>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 bg-white" id='features'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
                ฟีเจอร์
                <motion.span 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 w-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600">ฟีเจอร์ต่างๆ ของ CD Smart Campus ที่จะช่วยเพิ่มความสะดวกสบายของน้องๆ</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`${feature.color} border-2 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group`}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 } 
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.brightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 my-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* Button that appears on hover */}
                  {/* <motion.button 
                    className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-full border border-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    ดูเพิ่มเติม
                  </motion.button> */}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        </>
    );
};
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
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const Features = () => {

    const features = [
        {
          id: 1,
          title: 'รายงานผลการแข่งขัน',
          description: 'ดูผลการแข่งขันกิจกรรมต่างๆ ภายในโรงเรียนได้อย่างรวดเร็ว',
          icon: <FaTrophy className="text-yellow-500 text-4xl mb-4" />,
          color: 'bg-yellow-50 border-yellow-200'
        },
        {
          id: 2,
          title: 'จองห้องดนตรี',
          description: 'จองห้องดนตรีผ่านระบบออนไลน์ ลดการจองที่ซับซ้อน',
          icon: <FaMusic className="text-blue-500 text-4xl mb-4" />,
          color: 'bg-blue-50 border-blue-200'
        },
        {
          id: 3,
          title: 'จองห้องประชุม',
          description: 'จองห้องประชุมสำหรับกิจกรรมกลุ่มและการประชุมต่างๆ',
          icon: <MdMeetingRoom className="text-yellow-500 text-4xl mb-4" />,
          color: 'bg-yellow-50 border-yellow-200'
        },
        {
          id: 4,
          title: 'พอร์ตพี่มีให้ดู',
          description: 'แสดง Portfolio ของรุ่นพี่ปีก่อนๆ ให้ดูเป็นแนวทาง',
          icon: <FaUserGraduate className="text-blue-500 text-4xl mb-4" />,
          color: 'bg-blue-50 border-blue-200'
        }
      ];

    return (
        <>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden sm:py-16 bg-white" id='features'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">ฟีเจอร์</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">ฟีเจอร์ต่างๆ ของ CD Smart Campus ที่จะช่วยเพิ่มความสะดวกสบายของน้องๆ</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`${feature.color} border p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 1 } }}
              >
                {feature.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        </>
    );
};
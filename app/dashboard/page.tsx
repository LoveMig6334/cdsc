"use client";  
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import { FaMusic } from "react-icons/fa6";
import { MdSportsBasketball, MdMeetingRoom } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

export default function StudentServicesDashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Service colors data
  const serviceColors = [
    { primary: 'from-blue-500 to-indigo-600', secondary: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', hover: 'group-hover:from-blue-600 group-hover:to-indigo-700', shadow: 'shadow-blue-500/20 hover:shadow-blue-500/40' },
    { primary: 'from-pink-500 to-purple-600', secondary: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-600', hover: 'group-hover:from-pink-600 group-hover:to-purple-700', shadow: 'shadow-pink-500/20 hover:shadow-pink-500/40' },
    { primary: 'from-amber-400 to-orange-500', secondary: 'bg-amber-400', light: 'bg-amber-100', text: 'text-amber-600', hover: 'group-hover:from-amber-500 group-hover:to-orange-600', shadow: 'shadow-amber-400/20 hover:shadow-amber-400/40' },
    { primary: 'from-emerald-500 to-teal-600', secondary: 'bg-emerald-500', light: 'bg-emerald-100', text: 'text-emerald-600', hover: 'group-hover:from-emerald-600 group-hover:to-teal-700', shadow: 'shadow-emerald-500/20 hover:shadow-emerald-500/40' }
  ];

  // Service cards data
  const serviceCards = [
    {
      title: "CD Sports",
      description: "เข้าถึงข้อมูลการแข่งขันกีฬาสี ตารางแข่งขัน และผลคะแนนล่าสุด",
      icon: (<MdSportsBasketball className='text-2xl sm:text-3xl' />),
      link: "/sports",
      ctaText: "เข้าสู่ CD Sports"
    },
    {
      title: "จองห้องดนตรี",
      description: "จองห้องซ้อมดนตรี ตรวจสอบตารางการใช้งาน และยกเลิกการจอง",
      icon: (<FaMusic className='text-2xl sm:text-3xl' />),
      link: "/music-room",
      ctaText: "จองห้องดนตรี"
    },
    {
      title: "จองห้องประชุม",
      description: "จองห้องประชุมสำหรับการทำงานกลุ่มหรือจัดกิจกรรมนักเรียน",
      icon: (<MdMeetingRoom className='text-2xl sm:text-3xl' />),
      link: "/meeting-room",
      ctaText: "จองห้องประชุม"
    },
    {
      title: "พอร์ตโฟลิโอนักเรียน",
      description: "ดูความสำเร็จ ผลงาน และกิจกรรมที่เข้าร่วมของนักเรียน",
      icon: (<IoIosPeople className='text-2xl sm:text-3xl' />),
      link: "/portfolio",
      ctaText: "ดูพอร์ตโฟลิโอ"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
  };

  // Function to handle touch for mobile devices
  const handleTouchStart = (index: number) => {
    setHoveredCard(index);
  };

  const handleTouchEnd = () => {
    setHoveredCard(null);
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen w-full relative py-12 md:py-16 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-100">
      {/* Abstract background shapes - responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-3 sm:mb-4 md:mb-6"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl mt-10 md:text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              CD Smart Campus
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ระบบออนไลน์ที่ช่วยให้นักเรียนสามารถจัดการกิจกรรมต่างๆ ภายในโรงเรียนได้อย่างสะดวกและมีประสิทธิภาพ
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
            >
              <Link href={card.link}>
                <div className={`relative h-full overflow-hidden rounded-xl md:rounded-2xl transform transition-all duration-500 ${hoveredCard === index ? 'scale-102' : ''} ${serviceColors[index].shadow}`}>
                  {/* Card glow effect */}
                  <motion.div 
                    className="absolute inset-0 z-0 opacity-75" 
                    animate={{ 
                      boxShadow: hoveredCard === index 
                        ? `0 0 30px 5px ${index === 0 ? 'rgba(59, 130, 246, 0.5)' : index === 1 ? 'rgba(219, 39, 119, 0.5)' : index === 2 ? 'rgba(245, 158, 11, 0.5)' : 'rgba(16, 185, 129, 0.5)'}`
                        : '0 0 0px 0px rgba(0, 0, 0, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Card background */}
                  <div className={`bg-gradient-to-br ${serviceColors[index].primary} ${serviceColors[index].hover} transition-all duration-500 h-full`}>
                    {/* Inner content with glassmorphism effect */}
                    <div className="relative backdrop-blur-sm backdrop-filter bg-white/30 p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col items-center">
                      {/* Icon container with animated glow */}
                      <motion.div 
                        className={`relative w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-full mb-3 sm:mb-4 md:mb-5 lg:mb-6 z-10 ${serviceColors[index].light} text-white transition-colors duration-500 group-hover:text-white`}
                        animate={{ 
                          boxShadow: hoveredCard === index ? 
                            [
                              `0 0 0 0px ${index === 0 ? 'rgba(59, 130, 246, 0.4)' : index === 1 ? 'rgba(219, 39, 119, 0.4)' : index === 2 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`,
                              `0 0 0 8px ${index === 0 ? 'rgba(59, 130, 246, 0.2)' : index === 1 ? 'rgba(219, 39, 119, 0.2)' : index === 2 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                              `0 0 0 0px ${index === 0 ? 'rgba(59, 130, 246, 0.4)' : index === 1 ? 'rgba(219, 39, 119, 0.4)' : index === 2 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`
                            ] : 
                            '0 0 0 0px rgba(0, 0, 0, 0)'
                        }}
                        transition={{ duration: 1.5, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        <div className={`absolute inset-0 rounded-full transform transition-all duration-500 ${hoveredCard === index ? serviceColors[index].secondary : 'opacity-0'}`} />
                        <div className={`relative z-10 transition-colors duration-500 ${hoveredCard === index ? 'text-white' : serviceColors[index].text}`}>
                          {card.icon}
                        </div>
                      </motion.div>
                      
                      {/* Card content */}
                      <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-white mb-1 xs:mb-2 md:mb-3 text-center text-shadow">
                        {card.title}
                      </h3>
                      <p className="text-xs xs:text-sm md:text-base text-white/90 text-center mb-3 xs:mb-4 md:mb-5 lg:mb-6 text-shadow-sm">
                        {card.description}
                      </p>
                      
                      {/* CTA button */}
                      <motion.div 
                        className="mt-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-medium py-1.5 xs:py-2 md:py-2.5 lg:py-3 px-3 xs:px-4 md:px-5 lg:px-6 rounded-full flex items-center transition-all duration-300 border border-white/30 group text-xs xs:text-sm md:text-base">
                          {card.ctaText}
                          <motion.div
                            animate={{ x: hoveredCard === index ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 ml-1.5 xs:ml-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Custom styles */}
      <style jsx global>{`
        /* Extra small screens */
        @media (min-width: 375px) {
          .xs\\:text-base {
            font-size: 1rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
          }
          .xs\\:text-xl {
            font-size: 1.25rem;
          }
          .xs\\:text-3xl {
            font-size: 1.875rem;
          }
          .xs\\:mb-2 {
            margin-bottom: 0.5rem;
          }
          .xs\\:mb-4 {
            margin-bottom: 1rem;
          }
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\\:w-14 {
            width: 3.5rem;
          }
          .xs\\:h-14 {
            height: 3.5rem;
          }
          .xs\\:py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .xs\\:px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .xs\\:ml-2 {
            margin-left: 0.5rem;
          }
        }
        
        .text-shadow {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .text-shadow-sm {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .animate-blob {
          animation: blob-bounce 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob-bounce {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
    </>
  );
}
"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import { FaSignInAlt, FaTrophy, FaMusic, FaUserGraduate, FaBars } from 'react-icons/fa';
import { MdMeetingRoom } from "react-icons/md";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

// Animation variants
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero-bg');
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && 
          mobileMenuButton && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileMenuButton.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    console.log('Logging in with OAuth');
  };

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

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>CD Smart Campus | แพลตฟอร์มระบบบริการนักเรียนออนไลน์</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">CD Smart Campus</span>
                </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <motion.button
                onClick={handleLogin}
                className="flex items-center px-4 py-2 font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSignInAlt className="mr-2" />
                เข้าสู่ระบบ
              </motion.button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden">
              <button
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg mx-4 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <motion.button
                onClick={handleLogin}
                className="w-full flex items-center font-bold justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSignInAlt className="mr-2" />
                เข้าสู่ระบบ
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden" id='hero'>
        <div 
          id="hero-bg" 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/images/pattern.png")', 
            opacity: 0.1 
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.05, 1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-yellow-400 h-full w-full rounded-full opacity-30 blur-lg"></div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3B82F6" />
                    <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CD Smart Campus</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-800">แพลตฟอร์มระบบบริการนักเรียนออนไลน์</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
              ระบบออนไลน์ที่ช่วยให้นักเรียนสามารถจัดการกิจกรรมต่างๆ ภายในโรงเรียนได้อย่างสะดวกและมีประสิทธิภาพ
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <button 
                onClick={handleLogin}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition duration-300 font-medium flex items-center mx-auto"
              >
                <FaSignInAlt className="mr-2" />
                เริ่มต้นใช้งาน
              </button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-8 sm:h-12 w-full text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.44,221.36,100.07Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
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
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {feature.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-24 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden" id='login'>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)" />
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Login เพื่อใช้งาน</h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-blue-100">ลงชื่อเข้าใช้ด้วยบัญชี Gmail @chitraldaschool.ac.th</p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <motion.button
                onClick={() => router.push('/login')}
                className="px-6 font-bold sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                <div className="bg-white p-2 rounded-full mr-2">
                  <FcGoogle className="text-lg" />
                </div>
                เข้าสู่ระบบด้วย Gmail
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} CD Smart Campus. สงวนลิขสิทธิ์</p>
          </div>
      </footer>
    </div>
  );
}
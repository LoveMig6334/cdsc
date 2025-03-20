'use client';
import { motion } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation'

export const Login = () => {
    const router = useRouter();
    return (
        <section className="min-h-screen flex items-center justify-center sm:py-24 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden" id='login'>
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
    );
};

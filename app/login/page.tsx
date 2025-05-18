"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Login() {
 
  return (
    <section
      className="min-h-screen flex items-center justify-center sm:py-24 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden"
      id="login"
    >
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center text-center">
          <motion.h1
            className="text-2xl sm:text-3xl font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            ยังไม่เปิดให้บริการในขณะนี้
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
            transition={{ duration: 1, delay : 0.75, ease: "easeOut"}}>            
            </motion.p>

          {/* <div className="mt-6 sm:mt-8 flex justify-center">
              <motion.button
                onClick={() => router.push('/login')}
                className="px-6 font-bold sm:px-8 py-2 sm:py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay : 1, ease: "easeOut"}}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >

                <div className="bg-white p-2 rounded-full mr-2">
                  <FcGoogle className="text-lg" />
                </div>
                เข้าสู่ระบบด้วย Gmail
              </motion.button>
            </div> */}
        </div>
      </div>
    </section>
  );
}
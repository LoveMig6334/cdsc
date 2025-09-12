"use client";  
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export const Hero: React.FC = () => {
    const handleScrollDown = (): void => {
        const heroElement = document.getElementById('hero');
        if (heroElement && heroElement.nextElementSibling) {
            heroElement.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <>
        <section className="min-h-screen py-12 flex items-center justify-center relative overflow-hidden" id='hero'>
            
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
                    transition={{ delay: 2.4, duration: 1 }}
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
                >
                
                </motion.p>
                
                </motion.div>
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
                        ease: "easeInOut"
                    }}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={handleScrollDown}
                >
                    <span className="text-blue-600 text-sm font-medium mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
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
                            ease: "easeInOut"
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
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 sm:h-16 md:h-20 w-full text-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.44,221.36,100.07Z" fill="currentColor"></path>
                </svg>
                </motion.div>
            </div>
            
            {/* Global Animation Styles */}
            <style jsx global>{`
                @keyframes float-slow {
                0% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-15px) scale(1.05); }
                100% { transform: translateY(0) scale(1); }
                }
                
                @keyframes float-horizontal {
                0% { transform: translateX(0); }
                50% { transform: translateX(20px); }
                100% { transform: translateX(0); }
                }
                
                @keyframes pulse {
                0% { opacity: 0.1; transform: scale(0.8); }
                100% { opacity: 0.6; transform: scale(1.2); }
                }
            `}</style>
            </section>
        </>
    );
};
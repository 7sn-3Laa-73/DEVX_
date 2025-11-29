import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark-bg">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Building the Future with
                        </span>
                        <br />
                        <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                            DevX Software
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Your partner for Mobile Apps, Web Development, and AI Automation.
                        We transform ideas into powerful digital reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-neon-blue text-dark-bg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                            Start Project
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                            Our Services
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 3D Grid Effect (Animated) */}
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "48px 48px"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
            />
        </section>
    );
};

export default Hero;

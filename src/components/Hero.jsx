import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Calculate offset from center
        const x = clientX - innerWidth / 2;
        const y = clientY - innerHeight / 2;

        mouseX.set(x);
        mouseY.set(y);
    };

    // Map mouse position to inverse movement (parallax)
    const gridX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [20, -20]);
    const gridY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [20, -20]);

    return (
        <section
            className="relative h-screen flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark-bg">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
            </div>

            {/* Parallax Grid Effect */}
            <motion.div
                style={{ x: gridX, y: gridY }}
                animate={{
                    backgroundPosition: ["0px 0px", "48px 48px"]
                }}
                transition={{
                    backgroundPosition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear"
                    }
                }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-auto"
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
        </section>
    );
};

export default Hero;

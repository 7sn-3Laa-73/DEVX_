import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are a team of visionaries, engineers, and data scientists dedicated to democratizing artificial intelligence for businesses worldwide.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-neon-blue">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            To build an AI-first future where technology amplifies human potential. We believe that artificial intelligence should be accessible, ethical, and transformative.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Founded in 2024, we've helped over 500 companies integrate AI into their workflows, saving millions of hours and unlocking new revenue streams.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-neon-blue/20 to-purple-600/20 border border-white/10 backdrop-blur-sm flex items-center justify-center"
                    >
                        <div className="text-center">
                            <span className="text-6xl font-bold text-white block mb-2">500+</span>
                            <span className="text-gray-400 uppercase tracking-widest">Clients Worldwide</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About DevX</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are a premier software development house specializing in building next-generation digital products.
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
                            At DevX Software, we bridge the gap between complex technology and business success. Our mission is to deliver high-quality mobile apps, web platforms, and AI solutions that drive growth.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With a team of expert engineers and designers, we turn ambitious ideas into scalable, user-centric software.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-neon-blue/20 to-purple-600/20 border border-white/10 backdrop-blur-sm flex items-center justify-center"
                    >
                        <div className="text-center">
                            <span className="text-6xl font-bold text-white block mb-2">100+</span>
                            <span className="text-gray-400 uppercase tracking-widest">Successful Projects</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

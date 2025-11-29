import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    "TechCorp", "InnovateAI", "FutureSystems", "DataFlow", "NeuralNet", "SmartSoft"
];

const Clients = () => {
    return (
        <section id="clients" className="py-20 bg-dark-bg text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
                    <p className="text-xl text-gray-400">Powering the next generation of AI-driven companies.</p>
                </motion.div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-20 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-colors duration-300"
                        >
                            <span className="text-lg font-bold text-gray-400 hover:text-white transition-colors">{client}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Simple Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-neon-blue/10 to-purple-600/10 p-8 md:p-12 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-sm"
                >
                    <p className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                        "This platform has completely transformed how we integrate AI into our products. The speed and scalability are unmatched."
                    </p>
                    <div>
                        <h4 className="text-white font-bold text-lg">Sarah Johnson</h4>
                        <p className="text-neon-blue">CTO at TechCorp</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;

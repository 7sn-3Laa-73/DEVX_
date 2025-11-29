import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Cpu, Bot, Cloud, Layers } from 'lucide-react';

const features = [
    {
        icon: <Smartphone className="w-8 h-8 text-neon-blue" />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android."
    },
    {
        icon: <Globe className="w-8 h-8 text-neon-blue" />,
        title: "Web Development",
        description: "High-performance, responsive websites and web applications built with the latest technologies."
    },
    {
        icon: <Cpu className="w-8 h-8 text-neon-blue" />,
        title: "AI Solutions",
        description: "Custom artificial intelligence models tailored to solve your specific business challenges."
    },
    {
        icon: <Bot className="w-8 h-8 text-neon-blue" />,
        title: "AI Automation",
        description: "Streamline your workflows and reduce manual tasks with intelligent automation systems."
    },
    {
        icon: <Cloud className="w-8 h-8 text-neon-blue" />,
        title: "Cloud Infrastructure",
        description: "Scalable and secure cloud architecture design and management for your growing needs."
    },
    {
        icon: <Layers className="w-8 h-8 text-neon-blue" />,
        title: "UI/UX Design",
        description: "Intuitive and engaging user interfaces that drive conversion and user retention."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive technology solutions to empower your business in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-colors duration-300 backdrop-blur-sm group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-neon-blue/20 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-neon-blue transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

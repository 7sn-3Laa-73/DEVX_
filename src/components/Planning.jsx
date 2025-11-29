import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Discovery",
        description: "We analyze your requirements and market needs to define the project scope."
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design & Strategy",
        description: "Creating intuitive UI/UX designs and a robust technical architecture."
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Development",
        description: "Agile development with regular updates and quality assurance testing."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Launch & Scale",
        description: "Deployment to production and ongoing support for growth."
    }
];

const Planning = () => {
    return (
        <section id="planning" className="py-20 bg-dark-bg text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
                    <p className="text-xl text-gray-400">From concept to reality in four simple steps.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-dark-bg border-2 border-neon-blue flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                <div className="text-neon-blue">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Planning;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navItems = ['About', 'Services', 'Planning', 'Clients', 'Contact'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Zap className="h-8 w-8 text-neon-blue" />
                        <span className="ml-2 text-xl font-bold text-white tracking-wider">DEVX</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-300 hover:text-neon-blue transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </button>
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item}
                                </button>
                            ))}
                            <button className="bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 px-4 py-2 rounded-full text-sm font-bold">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <button
                            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
                            className="text-left text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </button>
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-left text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item}
                            </button>
                        ))}
                        <button className="w-full text-left bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 px-4 py-2 rounded-full text-sm font-bold mt-4">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

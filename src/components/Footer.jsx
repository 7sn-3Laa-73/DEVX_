import React from 'react';
import { Zap, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Zap className="h-8 w-8 text-neon-blue" />
                            <span className="ml-2 text-xl font-bold text-white tracking-wider">DEVX</span>
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Empowering businesses with cutting-edge software solutions. Mobile, Web, and AI - we build it all.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-neon-blue cursor-pointer transition-colors">Mobile Apps</li>
                            <li className="hover:text-neon-blue cursor-pointer transition-colors">Web Development</li>
                            <li className="hover:text-neon-blue cursor-pointer transition-colors">AI Solutions</li>
                            <li className="hover:text-neon-blue cursor-pointer transition-colors">UI/UX Design</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DevX Software. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

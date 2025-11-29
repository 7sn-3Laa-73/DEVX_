import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Planning from './components/Planning';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Planning />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

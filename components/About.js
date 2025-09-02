'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-between bg-darkbg text-lightgray px-6 py-24 gap-12">
      

      {/* Right Column - Graphic / Placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img 
          src="/about.jpg" 
          alt="SirTimitheDev" 
          className="w-50 h-50 md:w-80 md:h-50 object-cover rounded-full border-4 border-gold"
        />
      </motion.div>

      {/* Left Column - Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold">Who I Am</h2>
        <p className="text-lg md:text-xl mb-4 text-align = justify">
          I help businesses and creators scale with AI-driven automation, sleek web solutions, and productivity systems. I combine design, strategy, and technology to deliver results that matter.
        </p>
        <p className="text-lg md:text-xl text-align = justify">
          Outside of coding, I’m obsessed with building systems that make life easier and more productive.
        </p>
      </motion.div>

      

    </section>
  );
};

export default About;

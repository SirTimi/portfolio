'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import {ArrowRight} from 'lucide-react';

const Hero = () => {
  return (
    <section id = "hero" className="h-screen flex flex-col justify-center items-center bg-darkbg text-lightgray px-4  pt-32 text-center">
      
      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        <span className="text-gold">AI & Web</span> Solutions That Grow Businesses
      </motion.h1>
      
      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-2xl mb-6"
      >
        Automated systems, premium websites, and productivity tools designed to deliver measurable results.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-4 mb-6"
      >
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-gold text-black px-6 py-3 rounded-xl font-semibold hover:bg-darkgray transition hover:text-gold transition"
          >
            Let’s Talk <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center bg-lightgray text-darkbg px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            See My Work
          </a>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex gap-6 text-2xl"
      >
        <a href="#" className="hover:text-gold transition"><FaLinkedin /></a>
        <a href="x.com/@SirTimitheDev" className="hover:text-gold transition"><FaTwitter /></a>
        <a href="#" className="hover:text-gold transition"><FaInstagram /></a>
      </motion.div>

    </section>
  );
};

export default Hero;

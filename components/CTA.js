'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-gold to-yellow-600 text-darkgray py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-darkbg">
          Whether it’s a website, AI automation, or a custom system — let’s bring your ideas to life.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-darkbg text-gold px-6 py-3 rounded-xl font-semibold hover:bg-darkgray transition"
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
    </section>
  );
};

export default CTA;

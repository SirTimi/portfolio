'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaRobot className="text-gold text-4xl mb-4" />,
    title: "AI Automations",
    description: "Streamline operations, save time, and boost efficiency with tailored AI solutions."
  },
  {
    icon: <FaLaptopCode className="text-gold text-4xl mb-4" />,
    title: "Website Development",
    description: "Custom websites and applications designed for performance, aesthetics, and scalability."
  },
  {
    icon: <FaChartLine className="text-gold text-4xl mb-4" />,
    title: "AI-Driven & Non AI-Driven Tools",
    description: "Turn data into actionable insights with intelligent dashboards and analytics tools."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-darkbg text-lightgray px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-12">What I Offer</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-darkgray p-6 rounded-xl text-center hover:shadow-lg hover:shadow-gold transition"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

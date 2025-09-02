'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Adewale",
    role: "CEO, TechCorp",
    feedback: "Timi transformed our outdated workflow into a seamless automated system. We now save hours every week.",
    image: "/client1.jpg" // replace with real photo or placeholder
  },
  {
    name: "Sarah Johnson",
    role: "Founder, EcomBoost",
    feedback: "Our online store has never been faster or more profitable. The redesign exceeded expectations.",
    image: "/client2.jpg"
  },
  {
    name: "Michael Smith",
    role: "Operations Manager, DataX",
    feedback: "The AI dashboard provides instant insights. It’s a complete game-changer for our decision-making.",
    image: "/client3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-darkgray text-lightgray px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-darkbg p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-gold transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 object-cover rounded-full border-2 border-gold mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">“{testimonial.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

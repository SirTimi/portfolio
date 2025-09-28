"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Realtor Website",
    description: "Reduced task completion time by 50% and increased team efficiency.",
    problem: "Outdated website with poor user experience",
    solution:
      "A complete website redesign featuring a modern, responsive layout, intuitive navigation, clear property presentation, and a polished, premium aesthetic.",
    image: "/rk.jpeg",
    link: "https://realtorkingz.com",
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    description: "Local Produce Marketplace",
    problem:
      "Consumers often struggle to find fresh, locally sourced produce due to limited access and high prices.",
    solution: "Full-stack WordPress redesign",
    image: "/farmfresh.jpeg",
    link: "https://ecom.thehustlerzones.com.ng",
  },
  {
    title: "Business eLibrary",
    description:
      "A platform providing curated resources to help entrepreneurs grow their businesses.",
    problem: "Entrepreneurs lack easy access to reliable business resources.",
    solution:
      "Centralized tools, guides, and templates to streamline business growth.",
    image: "/bizbuddy.jpeg",
    link: "https://bizbuddy.com.ng"
   },
];

function CardWrapper({ link, children }) {
  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {children}
      </Link>
    );
  }
  return <div className="group">{children}</div>;
}

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-darkbg text-lightgray px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gold text-center mb-12">
        Portfolio / Case Studies
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CardWrapper link={project.link}>
              <article className="bg-darkgray rounded-xl overflow-hidden border border-gray-800 hover:border-gold hover:shadow-lg hover:shadow-gold/20 transition cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gold group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{project.description}</p>
                  <p className="text-gray-400 text-sm">
                    <strong>Problem:</strong> {project.problem}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <strong>Solution:</strong> {project.solution}
                  </p>
                </div>
              </article>
            </CardWrapper>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

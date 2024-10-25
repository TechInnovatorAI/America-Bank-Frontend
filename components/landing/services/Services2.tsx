"use client";
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Driven Automation",
    description: "AIBuildIQ's platform leverages artificial intelligence to automate the most time-consuming aspects of loan origination, underwriting, and risk assessment.",
    image: "/assets/services2/1.jpg"
  },
  {
    title: "Real-Time Data Integration",
    description: "AIBuildIQ integrates with real-time data sources, including property valuations, market trends, and financial data.",
    image: "/assets/services2/2.jpg"
  },
  {
    title: "Compliance Automation",
    description: "Ensuring compliance with regulatory requirements is one of the most critical aspects of the loan origination process.",
    image: "/assets/services2/3.jpg"
  },

];

const Services = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-800"
      id="services"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#0256c5] text-lg font-semibold mb-2">
          Our innovative services
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          AI Technology and Platform Features
          </h2>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <Card index={index} service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
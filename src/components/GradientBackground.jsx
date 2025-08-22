import React from 'react';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

const GradientBackground = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#00183C]">
      <BubbleBackground />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#00183C]/90 via-[#0052AA]/40 to-[#ACFFF7]/20 animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;

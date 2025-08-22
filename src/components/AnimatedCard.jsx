import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`p-4 sm:p-6 rounded-lg shadow-lg sm:shadow-xl border border-[#0052AA]/30 bg-[#EEF9FF]/5 backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 82, 170, 0.3)' }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

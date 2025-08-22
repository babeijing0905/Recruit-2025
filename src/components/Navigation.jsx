import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { BrainCircuitIcon } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#00183C]/80 backdrop-blur-md border-b border-[#0052AA]/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[#EEF9FF] font-bold text-lg sm:text-xl tracking-tight">
              YOLO工作室
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <motion.button
              onClick={() => navigate('/')}
              className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-[#ACFFF7] bg-[#0052AA]/20' 
                  : 'text-[#C6FFC7] hover:text-[#ACFFF7] hover:bg-[#0052AA]/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              首页
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/questions')}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors flex items-center gap-2 ${
                location.pathname === '/questions' 
                  ? 'text-[#00183C] bg-[#ACFFF7]' 
                  : 'text-[#EEF9FF] bg-[#0052AA] hover:bg-[#0052AA]/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BrainCircuitIcon className="w-4 h-4" />
              招新答题
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

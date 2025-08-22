import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';
import MarkdownRenderer from '../components/MarkdownRenderer';
import GradientBackground from '../components/GradientBackground';
import ColorInverseArea from '../components/ColorInverseArea';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [studioContent, setStudioContent] = useState('');

  useEffect(() => {
    fetch('/src/content/studio-intro.md')
      .then(res => res.text())
      .then(text => setStudioContent(text));
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <GradientBackground>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-[#EEF9FF] drop-shadow-lg tracking-tight"
          >
            YOLO工作室招新
          </motion.h1>
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl lg:text-3xl text-[#C6FFC7] drop-shadow px-4 font-medium"
          >
            探索技术的无限可能
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <ColorInverseArea>
            <AnimatedCard className="bg-[#0052AA]/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 border-[#0052AA]/20">
              <div className="text-[#EEF9FF] text-base sm:text-lg leading-relaxed">
                <MarkdownRenderer content={studioContent} />
              </div>
            </AnimatedCard>
          </ColorInverseArea>

          <ColorInverseArea>
            <AnimatedCard className="flex flex-col justify-center items-center bg-[#0052AA]/10 backdrop-blur-md p-6 sm:p-8 lg:p-10 border-[#0052AA]/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#EEF9FF] drop-shadow-lg text-center tracking-tight">
                加入我们
              </h2>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ACFFF7' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0052AA] text-[#EEF9FF] font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-lg sm:text-xl flex items-center gap-3 shadow-lg transition-colors hover:text-[#00183C] w-full sm:w-auto justify-center border-2 border-[#ACFFF7]/30"
                onClick={() => navigate('/questions')}
              >
                开始招新答题
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </AnimatedCard>
          </ColorInverseArea>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Index;

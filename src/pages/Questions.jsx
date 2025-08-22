import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import MarkdownRenderer from '../components/MarkdownRenderer';
import OwlAnimation from '../components/OwlAnimation';
import GradientBackground from '../components/GradientBackground';
import ColorInverseArea from '../components/ColorInverseArea';

const Questions = () => {
  const [frontendQuestions, setFrontendQuestions] = useState('');
  const [backendQuestions, setBackendQuestions] = useState('');
  const [selectedDirection, setSelectedDirection] = useState(null);

  useEffect(() => {
    fetch('/src/content/frontend-questions.md')
      .then(res => res.text())
      .then(text => setFrontendQuestions(text));

    fetch('/src/content/backend-questions.md')
      .then(res => res.text())
      .then(text => setBackendQuestions(text));
  }, []);

  return (
    <GradientBackground>
      <div className="relative z-10">
        <OwlAnimation />
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        >
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EEF9FF] tracking-tight">
              招新考核题目
            </h1>
          </div>
          
          {!selectedDirection ? (
            <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
              <ColorInverseArea>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedDirection('frontend')}
                >
                  <AnimatedCard className="cursor-pointer bg-[#0052AA]/20 backdrop-blur-md p-6 sm:p-8 border-[#0052AA]/30">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 text-[#EEF9FF] text-center tracking-tight">
                      前端方向
                    </h2>
                    <p className="text-[#C6FFC7] text-base sm:text-lg text-center font-medium">
                      探索用户界面和交互体验的奥秘
                    </p>
                  </AnimatedCard>
                </motion.div>
              </ColorInverseArea>

              <ColorInverseArea>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedDirection('backend')}
                >
                  <AnimatedCard className="cursor-pointer bg-[#0052AA]/20 backdrop-blur-md p-6 sm:p-8 border-[#0052AA]/30">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 text-[#EEF9FF] text-center tracking-tight">
                      后端方向
                    </h2>
                    <p className="text-[#C6FFC7] text-base sm:text-lg text-center font-medium">
                      深入服务器端和系统架构的世界
                    </p>
                  </AnimatedCard>
                </motion.div>
              </ColorInverseArea>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => setSelectedDirection(null)}
                className="mb-4 sm:mb-6 text-[#EEF9FF] hover:text-[#ACFFF7] text-base sm:text-lg font-medium"
              >
                ← 返回选择
              </button>
              <ColorInverseArea>
                <AnimatedCard className="bg-[#0052AA]/20 backdrop-blur-md p-4 sm:p-6 lg:p-8 border-[#0052AA]/30">
                  <div className="text-[#EEF9FF] text-base sm:text-lg leading-relaxed">
                    <MarkdownRenderer 
                      content={selectedDirection === 'frontend' ? frontendQuestions : backendQuestions} 
                    />
                  </div>
                </AnimatedCard>
              </ColorInverseArea>
            </motion.div>
          )}
        </motion.div>
      </div>
    </GradientBackground>
  );
};

export default Questions;

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const ColorInverseArea = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10">
        {children}
      </div>
      {isHovering && (
        <>
          {/* 主跟随区域 - 波浪形状 */}
          <motion.div
            className="absolute pointer-events-none mix-blend-difference"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.6, 0.4],
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            style={{
              width: '120px',
              height: '120px',
              left: -60,
              top: -60,
              filter: 'blur(1px)',
              background: `radial-gradient(circle at center, 
                rgba(172, 255, 247, 0.8) 0%, 
                rgba(198, 255, 199, 0.6) 30%, 
                rgba(172, 255, 247, 0.4) 60%, 
                transparent 100%)`,
              borderRadius: '50%',
              transformOrigin: 'center',
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              mass: 0.3
            }}
          />
          
          {/* 中心五角星 - 相对静止 */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1, 0.9],
              opacity: [0, 0.9, 0.6],
              rotate: [0, 180, 360],
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            style={{
              width: '40px',
              height: '40px',
              left: -20,
              top: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 25,
              mass: 0.1,
              delay: 0.05
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                fill="#ACFFF7"
                stroke="#C6FFC7"
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>
          
          {/* 从五角星中心发出的脉冲1 */}
          <motion.div
            className="absolute pointer-events-none"
            animate={{ 
              scale: [0, 2.5, 0],
              opacity: [0, 0.6, 0],
            }}
            style={{
              width: '80px',
              height: '80px',
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                fill="none"
                stroke="#ACFFF7"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </svg>
          </motion.div>
          
          {/* 从五角星中心发出的脉冲2 */}
          <motion.div
            className="absolute pointer-events-none"
            animate={{ 
              scale: [0, 3.5, 0],
              opacity: [0, 0.4, 0],
            }}
            style={{
              width: '80px',
              height: '80px',
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.6
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                fill="none"
                stroke="#C6FFC7"
                strokeWidth="0.8"
                strokeOpacity="0.6"
              />
            </svg>
          </motion.div>
          
          {/* 从五角星角尖发出的粒子 */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: mousePosition.x + Math.cos((i * 72 - 90) * Math.PI / 180) * 30,
                y: mousePosition.y + Math.sin((i * 72 - 90) * Math.PI / 180) * 30,
              }}
              style={{
                width: '8px',
                height: '8px',
                left: -4,
                top: -4,
                background: i % 2 === 0 ? '#ACFFF7' : '#C6FFC7',
                borderRadius: '50%',
                filter: 'blur(0.5px)',
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 0.1,
                delay: i * 0.1
              }}
            />
          ))}
          
          {/* 十字光标 */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0.8],
              opacity: [0, 0.6, 0.3],
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            style={{
              width: '20px',
              height: '20px',
              left: -10,
              top: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
              mass: 0.05
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#ACFFF7] transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-[#C6FFC7] transform -translate-x-1/2"></div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ColorInverseArea;

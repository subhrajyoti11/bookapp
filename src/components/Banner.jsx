import React from 'react'
import { motion } from 'framer-motion'
import imgBg from '../assets/imgbg.png'

const Banner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 to-blue-900/30 relative overflow-hidden'>
        <div className='container mx-auto px-4 h-full flex items-center py-12 md:py-0 md:h-screen'>
            <div className='flex flex-col md:flex-row items-center gap-8 w-full'>
                {/* TEXT CONTENT - Left side on desktop, top on mobile */}
                <div className='w-full md:w-1/2 flex flex-col gap-6'>
                    {/* Heading and button in one line on desktop */}
                    <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-8'>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Interactive Library
                        </motion.h1>
    
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                            className='bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 md:px-8 md:py-3 
                            rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/30 
                            transition-all whitespace-nowrap'>
                            Start Exploring
                        </motion.button>
                    </div>
    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className='text-lg text-cyan-100/80'>
                        Explore our collection with dynamic previews and immersive interaction
                    </motion.p>
                </div>
    
                {/* IMAGE CONTAINER - Right side on desktop, bottom on mobile */}
                <div className="w-full md:w-1/2">
                    <motion.div 
                        className="relative w-full max-w-md mx-auto"
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="absolute inset-0 rounded-3xl backdrop-blur-xl">
                            <img src={imgBg} alt="Interactive Library" className='w-full object-contain' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    

    )
}

export default Banner
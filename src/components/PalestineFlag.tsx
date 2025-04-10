import { motion } from 'framer-motion';

export default function PalestineFlag() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 z-50 flex flex-col items-center"
    >
      <motion.div
        className="flex flex-col w-12 h-9 overflow-hidden rounded shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-full h-1/3 bg-black"></div>
        <div className="w-full h-1/3 bg-white"></div>
        <div className="w-full h-1/3 bg-[#027c3f]"></div>
        <div className="absolute left-0 h-full w-4 bg-[#ce1126]"></div>
      </motion.div>
      <motion.p 
        className="text-xs mt-2 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        #FreePalestine
      </motion.p>
    </motion.div>
  );
}
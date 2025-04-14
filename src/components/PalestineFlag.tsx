import { motion } from "framer-motion";

export default function PalestineFlag() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-5 left-5 z-50 flex flex-col items-center"
    >
      <motion.div
        className="relative flex flex-col w-16 h-10 overflow-hidden rounded shadow-2xl border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-full h-1/3 bg-black" />
        <div className="w-full h-1/3 bg-white" />
        <div className="w-full h-1/3 bg-[#027c3f]" />

        {/* Left Red Triangle */}
        <div className="absolute left-0 top-0 w-0 h-0 border-t-[40px] border-t-transparent border-b-[40px] border-b-transparent border-l-[40px] border-l-[#ce1126]" />
      </motion.div>

      <motion.p
        className="mt-2 text-[11px] bg-gradient-to-r from-red-500 via-white to-green-500 bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        #FreePalestine
      </motion.p>
    </motion.div>
  );
}

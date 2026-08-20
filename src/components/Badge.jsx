import { motion } from 'framer-motion';

export default function Badge({ children, className = '', onClick }) {
  return (
    <motion.button
      className={`relative inline-flex items-center justify-center px-4 py-2 rounded-full border border-paper-ink/20 bg-paper-ink/5 text-paper-ink text-xs font-medium tracking-wider uppercase cursor-pointer hover:bg-paper-ink/10 transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

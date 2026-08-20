import { motion } from 'framer-motion';

export default function ServiceCard({ number, title, description }) {
  return (
    <motion.div
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-t border-mist/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-mist/10 group-hover:text-ember transition-colors duration-500 leading-none">
        {number}
      </span>
      <div className="flex-1">
        <h3 className="font-h1 text-h1 uppercase text-mist mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        <p className="font-body-lg text-body-lg text-mist/60 max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

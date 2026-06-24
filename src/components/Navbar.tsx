import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-wrap px-6 md:px-10 pt-6 md:pt-8 relative z-50 w-full"
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="text-[#D7E2EA] uppercase tracking-wider font-medium text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </motion.nav>

      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-[999]">
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg glass-card text-[#D7E2EA]"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] bg-[#0C0C0C]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="text-[#D7E2EA] uppercase tracking-wider font-semibold text-2xl hover:opacity-70 transition-opacity"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

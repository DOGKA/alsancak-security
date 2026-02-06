import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className = '', hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`${styles.card} ${hover ? styles.hoverable : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

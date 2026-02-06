import { motion } from 'framer-motion';
import s from './SectionTitle.module.css';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ subtitle, title, description, align = 'center' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${s.wrapper} ${align === 'center' ? s.center : s.left}`}
    >
      {subtitle && (
        <span className={s.subtitle}>{subtitle}</span>
      )}
      <h2 className={s.title}>{title}</h2>
      {description && (
        <p className={s.description}>{description}</p>
      )}
    </motion.div>
  );
}

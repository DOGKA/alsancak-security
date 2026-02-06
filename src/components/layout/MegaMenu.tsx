import { motion, AnimatePresence } from 'framer-motion';
import MegaMenuItem from './MegaMenuItem';
import type { SubMenuItem } from '../../data/menuData';
import s from './MegaMenu.module.css';

interface MegaMenuProps {
  items: SubMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  align?: 'center' | 'right';
}

export default function MegaMenu({ items, isOpen, onClose, align = 'center' }: MegaMenuProps) {
  const gridClass = items.length <= 2 ? s.grid1 : s.grid2;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={align === 'right' ? s.wrapperRight : s.wrapper}
        >
          <div className={s.inner}>
            <div className={s.glow} />
            <div className={s.accent} />
            <div className={`${s.grid} ${gridClass}`}>
              {items.map((item) => (
                <MegaMenuItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  imageAlt={item.imageAlt}
                  imageWidth={item.imageWidth}
                  imageHeight={item.imageHeight}
                  imageSrc={item.imageSrc}
                  link={item.link}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

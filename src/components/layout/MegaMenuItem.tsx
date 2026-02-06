import { Link } from 'react-router-dom';
import { ImageIcon } from 'lucide-react';
import s from './MegaMenuItem.module.css';

interface MegaMenuItemProps {
  title: string;
  description: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc?: string;
  link: string;
  onClick?: () => void;
}

export default function MegaMenuItem({
  title,
  description,
  imageAlt,
  imageWidth: _imageWidth,
  imageHeight: _imageHeight,
  imageSrc,
  link,
  onClick,
}: MegaMenuItemProps) {
  return (
    <Link to={link} onClick={onClick} className={s.item}>
      <div className={s.thumbnail}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className={s.thumbnailImg} />
        ) : (
          <ImageIcon size={18} className={s.thumbnailIcon} />
        )}
      </div>
      <div className={s.content}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.description}>{description}</p>
      </div>
    </Link>
  );
}

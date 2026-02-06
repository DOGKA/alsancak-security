import { ImageIcon } from 'lucide-react';
import s from './ImageMockup.module.css';

interface ImageMockupProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  src?: string;
}

export default function ImageMockup({ width, height, alt, className = '', src }: ImageMockupProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${s.image} ${className}`}
        style={{ maxWidth: width, aspectRatio: `${width}/${height}` }}
      />
    );
  }

  return (
    <div
      className={`${s.placeholder} ${className}`}
      style={{
        maxWidth: width,
        aspectRatio: `${width}/${height}`,
      }}
    >
      <ImageIcon size={32} className={s.icon} />
      <span className={s.altText}>{alt}</span>
      <span className={s.dimensions}>{width} x {height}</span>
    </div>
  );
}

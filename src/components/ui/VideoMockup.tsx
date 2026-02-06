import { PlayCircle } from 'lucide-react';
import s from './VideoMockup.module.css';

interface VideoMockupProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  src?: string;
}

export default function VideoMockup({ width, height, alt, className = '', src }: VideoMockupProps) {
  if (src) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={`${s.video} ${className}`}
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
      <PlayCircle size={48} className={s.playIcon} />
      <span className={s.altText}>{alt}</span>
      <span className={s.dimensions}>Video — {width} x {height}</span>
    </div>
  );
}

'use client';

import { useRef, useState } from 'react';

import st from './Videos.module.scss';

export const Videos = ({ urls }: { urls: string[] }) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(urls.map(() => false));

  const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (!video.paused) {
      return;
    }

    videoRefs.current.forEach((v, i) => {
      if (i !== index && v && !v.paused) v.pause();
    });
    video.play();
  };

  const handlePlay = (index: number) => {
    setIsPlaying((prev) => prev.map((_, i) => i === index));
  };

  const handlePause = (index: number) => {
    setIsPlaying((prev) => prev.map((v, i) => (i === index ? false : v)));
  };

  return (
    <section className="_container">
      <div className={st.layout}>
        {urls.map((url, index) => (
          <video
            key={url}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            className={st.video}
            src={url}
            onClick={() => handlePlayPause(index)}
            onPlay={() => handlePlay(index)}
            onPause={() => handlePause(index)}
            controls={isPlaying[index]}
            playsInline
          />
        ))}
      </div>
    </section>
  );
};

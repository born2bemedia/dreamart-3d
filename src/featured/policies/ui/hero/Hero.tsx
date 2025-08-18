'use client';

import st from './Hero.module.scss';

export const Hero = ({ title, lastUpdate }: { title: string; lastUpdate: string }) => {
  return (
    <header className={st.layout}>
      <div className={st.content}>
        <h1>{title}</h1>
        <p>Last Updated: {lastUpdate}</p>
      </div>
    </header>
  );
};

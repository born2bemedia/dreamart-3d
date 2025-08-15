'use client';

import { Tag } from '@/shared/ui/kit/tag';

import st from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={st.layout}>
      <div className={st.titleLayout}>
        <Tag>From Sketch to Spectacular, Let’s Get Started!</Tag>
        <h1 className={st.title}>Get Your Custom Quote</h1>
      </div>
      <p>
        Your vision deserves the best, and we’re here to make it happen! Fill out the form below,
        and in just 24 hours, we’ll send you a tailored quote and guide you on the next steps. Ready
        to create something amazing? Let’s do this!
      </p>
    </section>
  );
};

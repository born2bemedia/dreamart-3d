'use client';

import { Navigation } from '../Navigation/Navigation';
import { ThreeDModelling } from './3DModelling';
import { AnimationCreation } from './AnimationCreation';
import { Design } from './Design';
import st from './Services.module.scss';
import { VideoProduction } from './VideoProduction';

export const Services = () => {
  return (
    <div className={st.layout}>
      <Navigation />
      <section className={st.servicesLayout}>
        <ThreeDModelling />
        <AnimationCreation />
        <Design />
        <VideoProduction />
      </section>
    </div>
  );
};

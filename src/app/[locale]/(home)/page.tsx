import {
  HomeHero,
  LetsCreate,
  OurSolutions,
  ProjectsOverview,
  SpecialOffers,
  WhatWeDo,
  WhyChoose,
} from './components';

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <OurSolutions />
      <WhyChoose />
      <ProjectsOverview />
      <SpecialOffers />
      <LetsCreate />
    </>
  );
}

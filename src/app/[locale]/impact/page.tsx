import { AboutDreamart, ByTheNumbers, Hero, SectionInfo } from './components';

export default function ImpactPage() {
  return (
    <main>
      <Hero />
      <SectionInfo
        imgUrl="/images/impact/who-we-are.png"
        infoMeta={{
          title: 'Who We Are',
          text: 'We’re a quirky team of 3D artists, animators, designers, and tech enthusiasts who believe that creativity has no limits. We’re not just experts at what we do — we love doing it. Whether it’s bringing a concept to life with a 3D-printed model, designing an intuitive app, or animating characters that make people smile, we’re always pushing boundaries.',
          tag: 'A Team of Dreamers, Doers, and Digital Wizards',
        }}
      />
      <SectionInfo
        imgUrl="/images/impact/what-we-do.png"
        infoMeta={{
          title: 'What We Do',
          text: 'From 3D models for printing to stunning animations and next-level UI/UX designs, we make digital content that’s as bold as your ideas. Need a video that will make everyone stop scrolling? We’ve got you covered. Our work isn’t just about getting the job done — it’s about doing it in a way that wows.',
          tag: 'We Make Stuff Awesome',
        }}
        reverse
      />
      <SectionInfo
        imgUrl="/images/impact/our-phil.png"
        infoMeta={{
          title: 'Our Philosophy',
          text: 'We believe in action. We’re not the type of agency that spends days writing reports about how great we are. Instead, we let our work speak for itself. Every project we take on is an opportunity to learn, innovate, and deliver something amazing. It’s not just about fulfilling a brief — it’s about making your brand shine in ways you didn’t even imagine.',
          tag: 'Less Talk, More Action (and Cool Designs)',
        }}
      />
      <ByTheNumbers />
      <SectionInfo
        imgUrl="/images/impact/why-choose.png"
        infoMeta={{
          title: 'Why Choose Us?',
          text: (
            <>
              Let’s face it, there are plenty of agencies out there. So why choose us? Simple: we
              bring a unique blend of creativity, precision, and a little bit of fun. We don’t just
              follow trends — we set them. We’re obsessed with the details, but we also know when to
              step back and let the big picture take the stage.
              <br />
              <br /> We take pride in our work, and we’re excited to work with clients who share our
              passion for creativity and innovation. Whether you’re an artist, creator, or brand
              ready to stand out, we’re the team to bring your vision to life.
            </>
          ),
          tag: 'We’re More Than Just “Another Agency”',
        }}
        reverse
      />
      <SectionInfo
        imgUrl="/images/impact/what-makes.png"
        infoMeta={{
          title: 'What Makes Us Different',
          text: 'We think differently. We push limits. We’re not afraid to get weird with it (in the best way possible). Our quirky approach to design and animation is what sets us apart from the sea of generic agencies. We see potential in every project and find fun in every challenge.',
          tag: 'We’re a Little Unconventional, and That’s Our Superpower”',
        }}
      />
      <AboutDreamart />
    </main>
  );
}

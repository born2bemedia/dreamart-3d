export const isNumberHeading = (title: string) => /^\d+\.\s*/.test(title.trim());

const ctaModels: Record<string, { title?: string; btn: string; href: string }> = {
  'the-rise-of-3d-printing-whats-next': {
    title: 'Ready to bring your 3D projects to life?',
    btn: 'Explore Our 3D Models in the Shop',
    href: '/shop',
  },
  'uiux-design-trends-making-digital-spaces-more-human': {
    btn: 'Explore Our 3D Models in the Shop',
    href: '/services',
  },
  'animations-in-2025-whats-hot-and-whats-not': {
    title: 'Ready to bring your animation ideas to life?',
    btn: 'Ready to bring your animation ideas to life?',
    href: '/prices',
  },
  'video-content-in-2025-interactive-immersive-and-everywhere': {
    title: 'Ready to create video content that stands out in 2025?',
    btn: 'Explore Our Video Production Packages',
    href: '/services',
  },
};

export const getCtaModel = ({ slug }: { slug: string }) => ctaModels[slug];

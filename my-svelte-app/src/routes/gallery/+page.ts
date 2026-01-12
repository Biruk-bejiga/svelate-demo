import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch('/gallery/gallery.json');
    if (res.ok) {
      const images = await res.json();
      return { images };
    }
  } catch (e) {
    // ignore
  }
  // fallback to bundled SVGs
  return {
    images: [
      { src: '/gallery/img1.svg', alt: 'Elegant hairstyle', caption: 'Hair styling' },
      { src: '/gallery/img2.svg', alt: 'Manicure set', caption: 'Nail care' },
      { src: '/gallery/img3.svg', alt: 'Skincare facial', caption: 'Facial treatment' },
      { src: '/gallery/img4.svg', alt: 'Salon interior', caption: 'Relaxing space' },
      { src: '/gallery/img5.svg', alt: 'Color highlights', caption: 'Color & highlights' },
      { src: '/gallery/img6.svg', alt: 'Spa massage', caption: 'Massage & spa' }
    ]
  };
};

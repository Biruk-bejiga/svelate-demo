import type { PageLoad } from './$types';

type Picture = {
  sources: { type: string; srcset: string }[];
  img: { src: string; w: number; h: number; format: string };
};

const sizes = '(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw';

export const load: PageLoad = async ({ fetch }) => {
  const modules = import.meta.glob<Picture>('$lib/assets/gallery/*.{jpg,jpeg,png,webp}', {
    query: { w: '400;800;1200', format: 'webp;png', as: 'picture' },
    eager: true
  });

  const processed = Object.entries(modules).map(([path, picture]) => {
    const filename = path.split('/').pop() ?? 'photo';
    const base = filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
    const title = base.charAt(0).toUpperCase() + base.slice(1);
    return {
      picture,
      alt: title,
      caption: title
    };
  });

  if (processed.length) {
    return { images: processed, sizes };
  }

  // fallback to static JSON (uses existing SVG placeholders)
  try {
    const res = await fetch('/gallery/gallery.json');
    if (res.ok) {
      const fallback = await res.json();
      return {
        images: fallback.map((img: { src: string; alt: string; caption: string }) => ({
          picture: { sources: [], img: { src: img.src, w: 800, h: 800, format: 'svg' } },
          alt: img.alt,
          caption: img.caption
        })),
        sizes
      };
    }
  } catch (e) {
    // ignore and keep empty
  }

  return { images: [], sizes };
};

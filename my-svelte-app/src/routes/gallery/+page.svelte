<section class="section">
  <h1>Gallery</h1>
  <p>A peek at our work and welcoming space.</p>
  <div class="gallery">
    {#each images as img}
      <figure class="gallery__item">
        <picture>
          <!-- Try WebP first (if you later add webp files) -->
          <source type="image/webp" srcset={img.src.replace(/\.[a-zA-Z0-9]+$/, '.webp')} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
        </picture>
        <figcaption>{img.caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

<script lang="ts">
  export let data: { images: { src: string; alt: string; caption: string }[] };
  const { images } = data;
</script>

<style>
  .section { padding: 32px 24px; max-width: 1000px; margin: 0 auto; }
  .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px; }
  .gallery__item { aspect-ratio: 1/1; border-radius: 12px; border: 1px solid var(--border); background: var(--surface); overflow: hidden; }
  .gallery__item img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .gallery__item figcaption { font-size: 0.875rem; color: var(--text-muted); padding: 6px 8px; }
  @media (max-width: 900px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .gallery { grid-template-columns: 1fr; } }
</style>

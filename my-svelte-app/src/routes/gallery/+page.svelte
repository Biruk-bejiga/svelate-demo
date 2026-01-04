<section class="section">
  <h1>Gallery</h1>
  <p>A peek at our work and welcoming space.</p>
  <div class="gallery">
    {#each Array(9) as _, i}
      <div class="gallery__item" aria-label={`Photo ${i+1}`}></div>
    {/each}
  </div>
</section>

<style>
  .section { padding: 32px 24px; max-width: 1000px; margin: 0 auto; }
  .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px; }
  .gallery__item { aspect-ratio: 1/1; border-radius: 12px; border: 1px solid var(--border); background: linear-gradient(135deg, #f6d2e8, #d4e8ff); }
  @media (max-width: 900px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .gallery { grid-template-columns: 1fr; } }
</style>

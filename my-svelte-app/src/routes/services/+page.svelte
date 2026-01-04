<section class="section">
  <h1>Services</h1>
  <p>Explore our full menu of treatments and packages.</p>

  <div class="grid">
    <article class="card">
      <h3>Haircut & Style</h3>
      <p>Personalized cut and blowout to match your lifestyle.</p>
    </article>
    <article class="card">
      <h3>Color & Highlights</h3>
      <p>Balayage, highlights, or full color with professional care.</p>
    </article>
    <article class="card">
      <h3>Manicure & Pedicure</h3>
      <p>Classic, gel, or spa-level pampering for hands and feet.</p>
    </article>
    <article class="card">
      <h3>Facials</h3>
      <p>Hydrating, purifying, and brightening facials for all skin types.</p>
    </article>
    <article class="card">
      <h3>Massage</h3>
      <p>Deep tissue, Swedish, or hot stone to melt away stress.</p>
    </article>
  </div>
</section>

<style>
  .section { padding: 32px 24px; max-width: 1000px; margin: 0 auto; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 12px; }
  .card { border: 1px solid var(--border); border-radius: 12px; padding: 16px; background: var(--surface); }
  @media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
</style>

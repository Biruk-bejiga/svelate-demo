<script>
	import Hero from "../lib/components/Hero.svelte";
</script>

<Hero />

<section class="section">
	<h2 class="section__title">Our Signature Services</h2>
	<div class="cards">
		<article class="card">
			<h3>Hair Styling & Color</h3>
			<p>From classic cuts to modern balayage, tailored to your look.</p>
		</article>
		<article class="card">
			<h3>Nail Care</h3>
			<p>Manicure, pedicure, and gel finishes for pristine hands and feet.</p>
		</article>
		<article class="card">
			<h3>Skincare & Facials</h3>
			<p>Glow-enhancing treatments using gentle, effective formulations.</p>
		</article>
		<article class="card">
			<h3>Massage & Spa</h3>
			<p>Unwind with soothing massages and relaxing spa experiences.</p>
		</article>
	</div>
</section>

<section class="section">
	<h2 class="section__title">What Clients Say</h2>
	<div class="quotes">
		<blockquote>“Best salon experience I’ve ever had.” — Emma R.</blockquote>
		<blockquote>“My hair color is perfect every time.” — Mia K.</blockquote>
		<blockquote>“Relaxed, pampered, and glowing.” — Ava S.</blockquote>
	</div>
</section>

<section class="cta">
	<h2>Ready to feel your best?</h2>
	<a class="btn btn--primary" href="/contact">Book an appointment</a>
</section>

<style>
	.section { padding: 32px 24px; max-width: 1000px; margin: 0 auto; }
	.section__title { margin: 0 0 16px; font-size: 1.5rem; }
	.cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
	.card { border: 1px solid var(--border); border-radius: 12px; padding: 16px; background: var(--surface); }
	.quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
	blockquote { border-left: 4px solid var(--hover); margin: 0; padding: 8px 12px; color: var(--text); background: var(--surface-2); border-radius: 8px; }
	.cta { text-align: center; padding: 40px 24px; background: var(--surface-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
	.btn { display: inline-block; padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border); color: var(--text-strong); text-decoration: none; background: var(--surface); }
	.btn--primary { background: var(--brand); color: var(--brand-contrast); border-color: var(--brand); }
	@media (max-width: 900px) { .cards { grid-template-columns: repeat(2, 1fr); } .quotes { grid-template-columns: 1fr; } }
</style>

<script lang="ts">
	import type { LayoutData } from './$types';
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import NavBar from "../lib/components/NavBar.svelte";
	import Footer from "../lib/components/Footer.svelte";

	let { data, children } = $props<{ data: LayoutData; children: any }>();
</script>

<div class="site">
	<header class="site__header">
		<NavBar user={data.user} />
	</header>
	<main class="site__main">
		{@render children()}
	</main>
	<footer class="site__footer">
		<Footer />
	</footer>
</div>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Premium beauty salon offering hair, nails, skincare, and spa services." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@500;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>


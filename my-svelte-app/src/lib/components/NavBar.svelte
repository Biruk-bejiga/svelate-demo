<script>
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<nav class="nav">
  <a class="nav__brand" href="/">
    <img class="nav__logo" src="/logo.svg" alt="Beauty Bliss logo" width="28" height="28" />
    <span>Beauty Bliss</span>
  </a>
  <button class="nav__toggle" aria-label="Toggle menu" on:click={() => document.body.classList.toggle('menu-open')}>
    ☰
  </button>
  <ul class="nav__links">
    {#each links as l}
      <li><a href={l.href} class="nav__link">{l.label}</a></li>
    {/each}
  </ul>
</nav>

<style>
  .nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 24px; position: sticky; top: 0; background: var(--surface); border-bottom: 1px solid var(--border); z-index: 50; }
  .nav__brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.125rem; color: var(--text-strong); text-decoration: none; }
  .nav__logo { border-radius: 8px; box-shadow: 0 0 0 1px var(--border); }
  .nav__links { list-style: none; display: flex; gap: 16px; margin: 0; padding: 0; }
  .nav__link { text-decoration: none; color: var(--text); padding: 8px 12px; border-radius: 8px; }
  .nav__link:hover { background: var(--hover); color: var(--text-strong); }
  .nav__toggle { display: none; }
  @media (max-width: 720px) {
    .nav__toggle { display: inline-block; background: transparent; border: 1px solid var(--border); padding: 6px 10px; border-radius: 8px; color: var(--text); }
    .nav__links { display: none; }
    body.menu-open .nav__links { display: flex; flex-direction: column; position: absolute; top: 56px; left: 0; right: 0; background: var(--surface); padding: 12px; border-bottom: 1px solid var(--border); }
  }
</style>

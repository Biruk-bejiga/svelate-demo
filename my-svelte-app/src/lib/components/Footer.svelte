<footer class="footer">
  <div class="footer__grid">
    <div>
      <h3>Beauty Bliss</h3>
      <p>Premium salon for hair, nails, skincare, and spa.</p>
      <p>123 Serenity Lane, Glamour City</p>
    </div>
    <div>
      <h4>Hours</h4>
      <p>Mon–Fri: 9:00–18:00</p>
      <p>Sat: 10:00–16:00 · Sun: Closed</p>
    </div>
    <div>
      <h4>Contact</h4>
      <p>☎ (555) 123‑4567</p>
      <p>✉ hello@beautybliss.example</p>
    </div>
  </div>
  <div class="footer__bottom">© {new Date().getFullYear()} Beauty Bliss · All rights reserved</div>
</footer>

<style>
  .footer { background: var(--surface-2); border-top: 1px solid var(--border); margin-top: 48px; }
  .footer__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 24px; }
  .footer h3, .footer h4 { margin: 0 0 8px; }
  .footer__bottom { border-top: 1px solid var(--border); padding: 12px 24px; text-align: center; color: var(--text-muted); }
  @media (max-width: 720px) { .footer__grid { grid-template-columns: 1fr; } }
</style>

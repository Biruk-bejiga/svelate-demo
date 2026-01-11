<script lang="ts">
  export let form: { success?: boolean; message?: string; errors?: Record<string, string> } = {};
</script>

<section class="section">
  <h1>Contact & Booking</h1>
  <p>Send a request and we’ll confirm your appointment.</p>

  {#if form.success}
    <div class="notice notice--success">{form.message}</div>
  {/if}

  <form method="POST" class="form">
    <div class="form__grid">
      <label>
        Name
        <input name="name" required />
        {#if form.errors?.name}<small class="error">{form.errors.name}</small>{/if}
      </label>
      <label>
        Email
        <input name="email" type="email" required />
        {#if form.errors?.email}<small class="error">{form.errors.email}</small>{/if}
      </label>
      <label>
        Phone
        <input name="phone" />
      </label>
      <label>
        Service
        <select name="service" required>
          <option value="Hair">Hair</option>
          <option value="Nails">Nails</option>
          <option value="Skincare">Skincare</option>
          <option value="Massage">Massage</option>
        </select>
      </label>
      <label class="grid--full">
        Message
        <textarea name="message" rows="4"></textarea>
      </label>
    </div>
    <button class="btn btn--primary" type="submit">Send Request</button>
  </form>
</section>

<style>
  .section { padding: 32px 24px; max-width: 900px; margin: 0 auto; }
  .form__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 12px 0; }
  label { display: flex; flex-direction: column; gap: 6px; }
  input, textarea, select { padding: 10px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); }
  .grid--full { grid-column: 1 / -1; }
  .btn { display: inline-block; padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border); color: var(--text-strong); text-decoration: none; background: var(--surface); }
  .btn--primary { background: var(--brand); color: var(--brand-contrast); border-color: var(--brand); }
  .notice { border: 1px solid var(--border); border-left: 4px solid #2ea043; padding: 8px 12px; border-radius: 8px; background: var(--surface-2); margin-bottom: 12px; }
  .error { color: #b30000; }
  @media (max-width: 640px) { .form__grid { grid-template-columns: 1fr; } }
</style>

<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<section class="auth">
	<h1>Login</h1>
	<p class="auth__hint">Use demo@example.com / password123 to sign in.</p>
	<form method="POST" use:enhance class="auth__form">
		<label>
			<span>Email</span>
			<input
				name="email"
				type="email"
				required
				value={form?.email ?? ''}
			/>
		</label>
		<label>
			<span>Password</span>
			<input name="password" type="password" required />
		</label>

		{#if form?.message}
			<p class="auth__error">{form.message}</p>
		{/if}

		<button type="submit">Login</button>
	</form>
</section>

<style>
	.auth {
		max-width: 400px;
		margin: 40px auto;
		padding: 24px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--surface);
	}
	.auth__hint {
		margin-top: 4px;
		margin-bottom: 16px;
		font-size: 0.9rem;
		color: var(--text-muted, var(--text));
	}
	.auth__form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	label {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 0.9rem;
	}
	input {
		padding: 8px 10px;
		border-radius: 8px;
		border: 1px solid var(--border);
		background: var(--surface-2, #fff);
		color: var(--text);
	}
	button {
		margin-top: 8px;
		padding: 10px 14px;
		border-radius: 10px;
		border: 1px solid var(--brand, var(--border));
		background: var(--brand);
		color: var(--brand-contrast, #fff);
		cursor: pointer;
	}
	button:hover {
		filter: brightness(0.97);
	}
	.auth__error {
		margin: 4px 0 0;
		color: #b00020;
		font-size: 0.9rem;
	}
</style>

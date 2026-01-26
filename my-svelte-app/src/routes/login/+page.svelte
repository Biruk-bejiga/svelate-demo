<section class="auth">
	<h1>Login</h1>
	<p class="auth__hint">
		Youll be redirected to Supabase to sign in with your OAuth provider.
	</p>
	<a class="auth__btn" href="/auth/login?provider=github">Continue with GitHub</a>
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
	.auth__btn {
		display: inline-block;
		margin-top: 12px;
		padding: 10px 14px;
		border-radius: 10px;
		border: 1px solid var(--brand, var(--border));
		background: var(--brand);
		color: var(--brand-contrast, #fff);
		text-decoration: none;
		cursor: pointer;
	}
	.auth__btn:hover {
		filter: brightness(0.97);
	}
</style>

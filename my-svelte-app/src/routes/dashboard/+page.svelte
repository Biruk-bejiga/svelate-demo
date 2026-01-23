<script lang="ts">
	let { data } = $props();
</script>

<section class="dashboard">
	<h1>Dashboard</h1>
	<p>Welcome to your private dashboard.</p>
	{#if data?.user}
		<p class="dashboard__user">Signed in as <strong>{data.user.name}</strong> ({data.user.email}).</p>
	{/if}
</section>

<style>
	.dashboard {
		max-width: 800px;
		margin: 40px auto;
		padding: 24px;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: var(--surface);
	}
	.dashboard h1 {
		margin-top: 0;
		margin-bottom: 12px;
	}
	.dashboard__user {
		margin-top: 12px;
		font-size: 0.95rem;
		color: var(--text-muted, var(--text));
	}
</style>

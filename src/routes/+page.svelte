<!-- SvelteKit Main Route - Dashboard Application -->
<script>
	import '$lib/../app.css';
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
</script>

<!-- Main Application -->
<Dashboard />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>

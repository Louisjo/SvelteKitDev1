<script>
	// Left Panel - Multiple icons in vertical grid (flush with panel)
	import { onlineAgents } from '$lib';
</script>

<div class="panel-icons grid" style="grid-template-columns: 1fr; grid-template-rows: repeat(3, 1fr); gap: 2px;">
	<div class="icon-component icon-small">
		<div class="icon-square">
			🤖
		</div>
		<div class="icon-text">Concept Agent</div>
	</div>
	
	<div class="icon-component icon-small">
		<div class="icon-square">
			🔬
		</div>
		<div class="icon-text">Research Agent</div>
	</div>
	
	<div class="icon-component icon-small">
		<div class="icon-square">
			📝
		</div>
		<div class="icon-text">Quick Actions</div>
	</div>
</div>

<style>
	/* All styling handled by global icon system in app.css */
</style>
<script>
	// Bottom Left Corner Panel - Content pulled towards top-right (center)
</script>

<div class="panel-content content-pull-top-right">
	<div class="panel-info">
		<span class="info-label">System</span>
		<div class="system-stats">
			<div class="stat-chip">v0.1</div>
		</div>
	</div>
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 8px 12px;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	
	/* Center-pull: Bottom-left corner pulls content towards top-right */
	.content-pull-top-right {
		justify-content: flex-start;
		align-items: flex-end;
		text-align: right;
	}
	
	.panel-info {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 4px;
	}
	
	.info-label {
		@apply text-text-secondary text-xs;
	}
	
	.system-stats {
		display: flex;
		gap: 4px;
	}
	
	.stat-chip {
		@apply px-2 py-1 text-xs;
		@apply bg-brand-core-500/20 text-brand-core-300;
		@apply border border-brand-core-500/30;
		clip-path: polygon(4px 0%, 100% 0%, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0% 100%, 0% 4px);
	}
</style>
<script>
	// Top Left Corner Panel - Content pulled towards bottom-right (center)
</script>

<div class="panel-content content-pull-bottom-right">
	<div class="panel-header">
		<span class="panel-title">🔍 Search</span>
	</div>
	<div class="panel-status">
		<span class="status-indicator brand-core"></span>
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
	
	/* Center-pull: Top-left corner pulls content towards bottom-right */
	.content-pull-bottom-right {
		justify-content: flex-end;
		align-items: flex-end;
		text-align: right;
	}
	
	.panel-header {
		@apply text-text-primary font-medium text-sm;
	}
	
	.panel-title {
		@apply text-text-secondary text-xs;
	}
	
	.panel-status {
		margin-top: 4px;
	}
	
	.status-indicator {
		display: inline-block;
		width: 8px;
		height: 8px;
		/* Chamfer cut for status indicator */
		clip-path: polygon(3px 0%, 100% 0%, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0% 100%, 0% 3px);
	}
	
	.status-indicator.brand-core {
		@apply bg-brand-core-500;
	}
</style>
<script>
	// Top Right Corner Panel - Content pulled towards bottom-left (center)
</script>

<div class="panel-content content-pull-bottom-left">
	<div class="panel-header">
		<span class="panel-title">⚙️ Settings</span>
	</div>
	<div class="panel-actions">
		<button class="action-btn-chamfer brand-cool">
			<span class="action-icon">🎨</span>
		</button>
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
	
	/* Center-pull: Top-right corner pulls content towards bottom-left */
	.content-pull-bottom-left {
		justify-content: flex-end;
		align-items: flex-start;
		text-align: left;
	}
	
	.panel-header {
		@apply text-text-primary font-medium text-sm;
	}
	
	.panel-title {
		@apply text-text-secondary text-xs;
	}
	
	.panel-actions {
		margin-top: 4px;
	}
	
	.action-btn-chamfer {
		@apply w-6 h-6 flex items-center justify-center transition-all duration-200;
		@apply border border-surface-border bg-surface-interactive;
		clip-path: polygon(3px 0%, 100% 0%, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0% 100%, 0% 3px);
	}
	
	.action-btn-chamfer.brand-cool {
		@apply border-brand-cool-500/30 bg-brand-cool-500/10;
	}
	
	.action-btn-chamfer:hover {
		@apply bg-brand-cool-500/20;
		transform: scale(1.1);
	}
	
	.action-icon {
		font-size: 10px;
	}
</style>
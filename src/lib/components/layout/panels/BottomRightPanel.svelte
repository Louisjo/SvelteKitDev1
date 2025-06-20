<script>
	// Bottom Right Corner Panel - Content pulled towards top-left (center)
</script>

<div class="panel-content content-pull-top-left">
	<div class="panel-controls">
		<button class="control-btn minimize">−</button>
		<button class="control-btn expand">□</button>
		<span class="session-time">12:34</span>
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
	
	/* Center-pull: Bottom-right corner pulls content towards top-left */
	.content-pull-top-left {
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
	}
	
	.panel-controls {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	
	.control-btn {
		@apply w-6 h-6 flex items-center justify-center;
		@apply bg-surface-interactive border border-surface-border;
		@apply text-text-secondary text-xs font-bold;
		@apply transition-all duration-200;
		clip-path: polygon(3px 0%, 100% 0%, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0% 100%, 0% 3px);
	}
	
	.control-btn:hover {
		@apply bg-brand-core-500/20 border-brand-core-500/50 text-brand-core-300;
		transform: scale(1.1);
	}
	
	.control-btn.minimize:hover {
		@apply bg-brand-warm-500/20 border-brand-warm-500/50 text-brand-warm-300;
	}
	
	.control-btn.expand:hover {
		@apply bg-brand-cool-500/20 border-brand-cool-500/50 text-brand-cool-300;
	}
	
	.session-time {
		@apply text-text-muted text-xs font-mono;
		margin-left: 8px;
	}
</style>
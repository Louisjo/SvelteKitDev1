<script>
	// Right Panel - Content pulled towards left (center)
	import { currentTab } from '$lib';
</script>

<div class="panel-content content-pull-left">
	<div class="panel-section">
		<h3 class="section-title">Context</h3>
		<div class="context-info">
			<div class="context-item">
				<span class="context-label">Mode:</span>
				<span class="context-value">{$currentTab}</span>
			</div>
			<div class="context-item">
				<span class="context-label">Status:</span>
				<div class="status-indicator active"></div>
			</div>
		</div>
	</div>
	
	<div class="panel-section">
		<h3 class="section-title">Tools</h3>
		<div class="tools-list">
			<button class="tool-btn">🔧 Configure</button>
			<button class="tool-btn">📊 Analytics</button>
			<button class="tool-btn">💾 Export</button>
		</div>
	</div>
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 12px 16px 12px 8px;
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 16px;
	}
	
	/* Center-pull: Right panel pulls content towards left */
	.content-pull-left {
		align-items: flex-start;
		text-align: left;
	}
	
	.panel-section {
		width: 100%;
	}
	
	.section-title {
		@apply text-text-primary font-medium text-sm mb-2;
	}
	
	.context-info {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	
	.context-item {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	
	.context-label {
		@apply text-text-muted text-xs;
		min-width: 40px;
	}
	
	.context-value {
		@apply text-text-secondary text-xs font-medium;
	}
	
	.status-indicator {
		width: 6px;
		height: 6px;
		clip-path: polygon(2px 0%, 100% 0%, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0% 100%, 0% 2px);
	}
	
	.status-indicator.active {
		@apply bg-brand-core-500;
	}
	
	.tools-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	
	.tool-btn {
		@apply px-2 py-1 text-xs text-left;
		@apply bg-surface-interactive border border-surface-border;
		@apply transition-all duration-200;
		clip-path: polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
	}
	
	.tool-btn:hover {
		@apply bg-brand-core-500/20 border-brand-core-500/50 text-brand-core-300;
		transform: translateX(-2px);
	}
</style>
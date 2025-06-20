<script>
	// Bottom Bar Panel - Content pulled towards top (center)
	import { onlineAgents, conversations } from '$lib';
</script>

<div class="panel-content content-pull-top">
	<div class="status-bar">
		<div class="status-section">
			<span class="status-item">🤖 {$onlineAgents.length} online</span>
			<span class="status-item">💬 {$conversations.length} active</span>
		</div>
		
		<div class="action-section">
			<button class="status-action-btn">⚡ Quick Command</button>
			<div class="connection-indicator connected"></div>
		</div>
	</div>
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 8px 16px;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	
	/* Center-pull: Bottom bar pulls content towards top */
	.content-pull-top {
		justify-content: flex-start;
		align-items: center;
	}
	
	.status-bar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.status-section {
		display: flex;
		gap: 16px;
		align-items: center;
	}
	
	.status-item {
		@apply text-text-muted text-xs;
	}
	
	.action-section {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	
	.status-action-btn {
		@apply px-3 py-1 text-xs;
		@apply bg-surface-interactive border border-surface-border;
		@apply transition-all duration-200;
		clip-path: polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
	}
	
	.status-action-btn:hover {
		@apply bg-brand-core-500/20 border-brand-core-500/50;
		transform: translateY(-1px);
	}
	
	.connection-indicator {
		width: 8px;
		height: 8px;
		clip-path: polygon(3px 0%, 100% 0%, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0% 100%, 0% 3px);
	}
	
	.connection-indicator.connected {
		@apply bg-brand-core-500;
	}
</style>
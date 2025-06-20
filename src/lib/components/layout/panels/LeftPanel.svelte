<script>
	// Left Panel - Content pulled towards right (center)
	import { onlineAgents } from '$lib';
</script>

<div class="panel-content content-pull-right">
	<div class="panel-section">
		<h3 class="section-title">Active Agents</h3>
		<div class="agent-list">
			{#each $onlineAgents.slice(0, 3) as agent}
				<div class="agent-item">
					<span class="agent-avatar">{agent.avatar}</span>
					<span class="agent-name">{agent.name}</span>
					<div class="agent-status status-{agent.brandColor}"></div>
				</div>
			{/each}
		</div>
	</div>
	
	<div class="panel-section">
		<h3 class="section-title">Quick Actions</h3>
		<div class="action-grid">
			<button class="quick-action-btn">📝</button>
			<button class="quick-action-btn">🔍</button>
			<button class="quick-action-btn">⚡</button>
		</div>
	</div>
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 12px 8px 12px 16px;
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 16px;
	}
	
	/* Center-pull: Left panel pulls content towards right */
	.content-pull-right {
		align-items: flex-end;
		text-align: right;
	}
	
	.panel-section {
		width: 100%;
	}
	
	.section-title {
		@apply text-text-primary font-medium text-sm mb-2;
	}
	
	.agent-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	
	.agent-item {
		display: flex;
		align-items: center;
		gap: 8px;
		justify-content: flex-end;
	}
	
	.agent-avatar {
		font-size: 12px;
	}
	
	.agent-name {
		@apply text-text-secondary text-xs;
		flex: 1;
		text-align: right;
	}
	
	.agent-status {
		width: 6px;
		height: 6px;
		clip-path: polygon(2px 0%, 100% 0%, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0% 100%, 0% 2px);
	}
	
	.status-core { @apply bg-brand-core-500; }
	.status-cool { @apply bg-brand-cool-500; }
	.status-warm { @apply bg-brand-warm-500; }
	
	.action-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 4px;
		justify-content: end;
	}
	
	.quick-action-btn {
		@apply w-8 h-8 flex items-center justify-center;
		@apply bg-surface-interactive border border-surface-border;
		@apply transition-all duration-200;
		clip-path: polygon(4px 0%, 100% 0%, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0% 100%, 0% 4px);
		font-size: 10px;
	}
	
	.quick-action-btn:hover {
		@apply bg-brand-core-500/20 border-brand-core-500/50;
		transform: scale(1.05);
	}
</style>
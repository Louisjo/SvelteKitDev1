<script>
	// Main Content Panel - Center area, balanced content
	import { currentTab, conversations, agents, workflows } from '$lib';
</script>

<div class="panel-content content-center">
	{#if $currentTab === 'chat'}
		<div class="content-section">
			<h2 class="content-title">Chat Interface</h2>
			<div class="content-area">
				<div class="chat-placeholder">
					<div class="placeholder-icon">💬</div>
					<p class="placeholder-text">Chat interface will be implemented here</p>
					<div class="placeholder-stats">
						<span class="stat-item">{$conversations.length} conversations</span>
					</div>
				</div>
			</div>
		</div>
	{:else if $currentTab === 'workflow'}
		<div class="content-section">
			<h2 class="content-title">Workflow Builder</h2>
			<div class="content-area">
				<div class="workflow-placeholder">
					<div class="placeholder-icon">🔄</div>
					<p class="placeholder-text">Workflow canvas will be implemented here</p>
					<div class="placeholder-stats">
						<span class="stat-item">{$workflows.length} workflows</span>
					</div>
				</div>
			</div>
		</div>
	{:else if $currentTab === 'agents'}
		<div class="content-section">
			<h2 class="content-title">Agent Management</h2>
			<div class="content-area">
				<div class="agents-placeholder">
					<div class="placeholder-icon">🤖</div>
					<p class="placeholder-text">Agent management interface will be implemented here</p>
					<div class="placeholder-stats">
						<span class="stat-item">{$agents.length} agents total</span>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 24px;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}
	
	/* Center content - balanced approach */
	.content-center {
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.content-section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.content-title {
		@apply text-text-primary font-semibold text-2xl mb-6;
	}
	
	.content-area {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.chat-placeholder,
	.workflow-placeholder,
	.agents-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 32px;
		@apply bg-surface-interactive border border-surface-border;
		/* Chamfer cut for placeholder areas */
		clip-path: polygon(
			16px 0%, 
			100% 0%, 
			100% calc(100% - 16px), 
			calc(100% - 16px) 100%, 
			0% 100%, 
			0% 16px
		);
	}
	
	.placeholder-icon {
		font-size: 48px;
		opacity: 0.6;
	}
	
	.placeholder-text {
		@apply text-text-secondary text-lg;
		max-width: 300px;
	}
	
	.placeholder-stats {
		display: flex;
		gap: 16px;
		margin-top: 8px;
	}
	
	.stat-item {
		@apply px-3 py-1 text-xs;
		@apply bg-brand-core-500/20 text-brand-core-300;
		@apply border border-brand-core-500/30;
		/* Chamfer cut for stat items */
		clip-path: polygon(
			6px 0%, 
			100% 0%, 
			100% calc(100% - 6px), 
			calc(100% - 6px) 100%, 
			0% 100%, 
			0% 6px
		);
	}
</style>